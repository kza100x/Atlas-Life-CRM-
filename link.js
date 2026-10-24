
// ============================================================
// ATLAS LINK — phone ↔ computer, straight to each other.
// The two devices find each other through public message relays (MQTT), but
// everything they say there is encrypted with a key only they share, and the
// relay only carries the handshake. The data itself flows over a direct,
// encrypted WebRTC connection between the phone and the computer.
// ============================================================
(function(){
if(window.AtlasLink)return;
const enc=new TextEncoder(),dec=new TextDecoder();
const DEFAULT_BROKERS=['wss://broker.emqx.io:8084/mqtt','wss://broker.hivemq.com:8884/mqtt','wss://test.mosquitto.org:8081/mqtt'];
const ICE=[{urls:['stun:stun.l.google.com:19302','stun:stun.cloudflare.com:3478']}];
const ALPHA='23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
const randomCode=(n=16)=>[...crypto.getRandomValues(new Uint8Array(n))].map(x=>ALPHA[x&31]).join('');
const cleanCode=s=>String(s||'').toUpperCase().split('').filter(c=>ALPHA.includes(c)).join('');
const fmtCode=c=>String(c).match(/.{1,4}/g).join('-');

// ---------- encryption ----------
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
const sha=s=>crypto.subtle.digest('SHA-256',enc.encode(s));
const __keys=new Map();
async function derive(secret){
  if(__keys.has(secret))return __keys.get(secret);
  const topic='atlaslink/v1/'+hex(await sha('topic|'+secret)).slice(0,40);
  const key=await crypto.subtle.importKey('raw',await sha('key|'+secret),'AES-GCM',false,['encrypt','decrypt']);
  const out={topic,key};__keys.set(secret,out);return out;
}
function b64(u8){let s='';for(let i=0;i<u8.length;i+=0x8000)s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000));return btoa(s)}
function unb64(s){const b=atob(s);const u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
async function seal(key,obj){
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,enc.encode(JSON.stringify(obj))));
  const out=new Uint8Array(12+ct.length);out.set(iv);out.set(ct,12);return b64(out);
}
async function unseal(key,s){
  try{const u=unb64(s);return JSON.parse(dec.decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:u.subarray(0,12)},key,u.subarray(12))))}catch(e){return null}
}

// ---------- a tiny MQTT 3.1.1 client over WebSocket (publish/subscribe, QoS 0) ----------
const mstr=s=>{const b=enc.encode(s);return [b.length>>8,b.length&255,...b]};
const vlen=n=>{const o=[];do{let d=n%128;n=Math.floor(n/128);if(n>0)d|=128;o.push(d)}while(n>0);return o};
const pkt=(h,body)=>{const head=[h,...vlen(body.length)];const u=new Uint8Array(head.length+body.length);u.set(head);u.set(body,head.length);return u};
class Broker{
  constructor(url,onMsg){this.url=url;this.onMsg=onMsg;this.subs=new Set();this.pid=1;this.buf=new Uint8Array(0);this.open=false;this.retry=0;this.closed=false;this.connect()}
  connect(){
    if(this.closed)return;
    let ws;try{ws=new WebSocket(this.url,['mqtt'])}catch(e){return this.later()}
    this.ws=ws;ws.binaryType='arraybuffer';this.buf=new Uint8Array(0);
    ws.onopen=()=>this.raw(pkt(0x10,[...mstr('MQTT'),4,0x02,0,60,...mstr('atlas-'+randomCode(12))]));
    ws.onmessage=e=>{if(this.ws===ws)this.feed(new Uint8Array(e.data))};
    ws.onclose=ws.onerror=()=>{if(this.ws!==ws)return;this.ws=null;this.open=false;clearInterval(this.ping);this.later()};
  }
  later(){if(this.closed)return;clearTimeout(this.rt);this.rt=setTimeout(()=>this.connect(),Math.min(30000,1000*2**this.retry++))}
  feed(chunk){
    const b=new Uint8Array(this.buf.length+chunk.length);b.set(this.buf);b.set(chunk,this.buf.length);this.buf=b;
    for(;;){
      const u=this.buf;if(u.length<2)return;
      let len=0,mul=1,i=1,d;
      do{if(i>=u.length)return;d=u[i++];len+=(d&127)*mul;mul*=128}while(d&128);
      if(u.length<i+len)return;
      const type=u[0]>>4,flags=u[0]&15,body=u.subarray(i,i+len);this.buf=u.slice(i+len);
      if(type===2){
        if(body[1]!==0){try{this.ws.close()}catch(e){}return}
        this.open=true;this.retry=0;this.subs.forEach(t=>this.raw(this.subPkt(t)));
        clearInterval(this.ping);this.ping=setInterval(()=>this.raw(new Uint8Array([0xC0,0])),30000);
      }else if(type===3){
        const tl=body[0]<<8|body[1];const topic=dec.decode(body.subarray(2,2+tl));let p=2+tl;if((flags>>1)&3)p+=2;
        try{this.onMsg(topic,dec.decode(body.subarray(p)))}catch(e){}
      }
    }
  }
  nextId(){this.pid=this.pid%65535+1;return this.pid}
  subPkt(t){const id=this.nextId();return pkt(0x82,[id>>8,id&255,...mstr(t),0])}
  sub(t){this.subs.add(t);if(this.open)this.raw(this.subPkt(t))}
  unsub(t){this.subs.delete(t);if(this.open){const id=this.nextId();this.raw(pkt(0xA2,[id>>8,id&255,...mstr(t)]))}}
  pub(t,s){if(this.open)this.raw(pkt(0x30,[...mstr(t),...enc.encode(s)]))}
  raw(b){try{if(this.ws&&this.ws.readyState===1)this.ws.send(b)}catch(e){}}
  close(){this.closed=true;clearInterval(this.ping);clearTimeout(this.rt);try{this.ws&&this.ws.close()}catch(e){}}
}
class Signal{
  constructor(urls){this.handlers=new Map();this.seen=new Map();this.brokers=(urls&&urls.length?urls:DEFAULT_BROKERS).map(u=>new Broker(u,(t,m)=>this.got(t,m)))}
  got(t,m){
    if(this.seen.has(m))return; // the same message arrives once per relay
    this.seen.set(m,1);if(this.seen.size>400)this.seen.delete(this.seen.keys().next().value);
    const h=this.handlers.get(t);if(h)[...h].forEach(f=>f(m));
  }
  on(t,f){let s=this.handlers.get(t);if(!s){s=new Set();this.handlers.set(t,s);this.brokers.forEach(b=>b.sub(t))}s.add(f);
    return ()=>{s.delete(f);if(!s.size&&this.handlers.get(t)===s){this.handlers.delete(t);this.brokers.forEach(b=>b.unsub(t))}}}
  send(t,m){this.brokers.forEach(b=>b.pub(t,m))}
  connected(){return this.brokers.filter(b=>b.open).length}
  ready(ms){return new Promise(res=>{const t0=Date.now();const k=()=>{if(this.connected()||Date.now()-t0>ms)res(this.connected());else setTimeout(k,100)};k()})}
  close(){this.brokers.forEach(b=>b.close());this.handlers.clear()}
}

// ---------- request/response over a data channel, in chunks small enough for every phone ----------
const CHUNK=16000;
class Chan{
  constructor(dc,pc){
    this.dc=dc;this.pc=pc;this.n=0;this.wait=new Map();this.parts=new Map();this.handler=null;this.closed=false;
    dc.bufferedAmountLowThreshold=256*1024;
    dc.onmessage=e=>this.frame(e.data);
    const fin=()=>{if(this.closed)return;this.closed=true;this.wait.forEach(w=>w.rej(new Error('Connection closed')));this.wait.clear();try{pc.close()}catch(e){}this.onclose&&this.onclose()};
    this.fin=fin;dc.onclose=fin;
    pc.addEventListener('connectionstatechange',()=>{if(['failed','closed','disconnected'].includes(pc.connectionState))fin()});
  }
  async send(obj){
    const s=JSON.stringify(obj);const id=obj.id;const n=Math.max(1,Math.ceil(s.length/CHUNK));
    for(let i=0;i<n;i++){
      if(this.closed)throw new Error('Connection closed');
      if(this.dc.bufferedAmount>1024*1024)await new Promise(r=>{const f=()=>{this.dc.removeEventListener('bufferedamountlow',f);r()};this.dc.addEventListener('bufferedamountlow',f);setTimeout(f,5000)});
      this.dc.send(`${id}|${i}|${n}|`+s.slice(i*CHUNK,(i+1)*CHUNK));
    }
  }
  frame(str){
    if(typeof str!=='string')return;
    const a=str.indexOf('|'),b=str.indexOf('|',a+1),c=str.indexOf('|',b+1);if(c<0)return;
    const id=str.slice(0,a),i=+str.slice(a+1,b),n=+str.slice(b+1,c);
    let p=this.parts.get(id);if(!p){p={got:0,arr:new Array(n)};this.parts.set(id,p)}
    if(p.arr[i]===undefined){p.arr[i]=str.slice(c+1);p.got++}
    if(p.got<n)return;
    this.parts.delete(id);
    let msg;try{msg=JSON.parse(p.arr.join(''))}catch(e){return}
    if(msg.k==='r'){const w=this.wait.get(msg.re);if(!w)return;this.wait.delete(msg.re);clearTimeout(w.t);msg.ok?w.res(msg.body):w.rej(Object.assign(new Error(msg.err||'Failed'),{remote:true}))}
    else if(msg.k==='q'){
      Promise.resolve().then(()=>{if(!this.handler)throw new Error('Not ready');return this.handler(msg.op,msg.body)})
        .then(body=>this.send({k:'r',id:'r'+msg.id,re:msg.id,ok:true,body}),e=>this.send({k:'r',id:'r'+msg.id,re:msg.id,ok:false,err:e&&e.message||'Failed'})).catch(()=>{});
    }
  }
  call(op,body,ms=90000){
    if(this.closed||this.dc.readyState!=='open'){this.fin();return Promise.reject(new Error('Connection closed'))}
    const id='q'+(++this.n);
    return new Promise((res,rej)=>{
      const t=setTimeout(()=>{this.wait.delete(id);rej(new Error('timed out'))},ms);
      this.wait.set(id,{res,rej,t});
      this.send({k:'q',id,op,body}).catch(e=>{this.wait.delete(id);clearTimeout(t);rej(e)});
    });
  }
  close(){try{this.dc.close()}catch(e){}this.fin()}
}
function iceDone(pc,ms){
  return new Promise(res=>{
    if(pc.iceGatheringState==='complete')return res();
    const t=setTimeout(done,ms);
    function done(){clearTimeout(t);pc.removeEventListener('icegatheringstatechange',chk);res()}
    function chk(){if(pc.iceGatheringState==='complete')done()}
    pc.addEventListener('icegatheringstatechange',chk);
  });
}

// phone side: knock on the computer's door and open a channel
async function dial(sig,secret,hello,opts={}){
  const {topic,key}=await derive(secret);
  if(!await sig.ready(opts.readyWait||6000))throw Object.assign(new Error('No internet connection'),{code:'offline'});
  const pc=new RTCPeerConnection({iceServers:opts.ice||ICE});
  const dc=pc.createDataChannel('atlas',{ordered:true});
  const sid=randomCode(10);
  return new Promise((res,rej)=>{
    let done=false,off=()=>{},resend=null;
    const finish=(err,val)=>{if(done)return;done=true;off();clearTimeout(tm);clearInterval(resend);if(err){try{pc.close()}catch(e){}rej(err)}else res(val)};
    const tm=setTimeout(()=>finish(Object.assign(new Error('Your computer didn’t answer'),{code:'noanswer'})),opts.timeout||15000);
    off=sig.on(topic,async m=>{
      const o=await unseal(key,m);if(!o||o.sid!==sid||o.from!=='m')return;
      if(o.t==='reject')return finish(Object.assign(new Error(o.why||'refused'),{code:o.why||'refused'}));
      if(o.t==='answer'&&!pc.currentRemoteDescription){clearInterval(resend);try{await pc.setRemoteDescription({type:'answer',sdp:o.sdp})}catch(e){finish(e)}}
    });
    dc.onopen=()=>finish(null,new Chan(dc,pc));
    (async()=>{
      await pc.setLocalDescription(await pc.createOffer());
      await iceDone(pc,opts.iceWait||2500);
      const msg=await seal(key,{t:'offer',from:'p',sid,sdp:pc.localDescription.sdp,hello:hello||{}});
      if(done)return;
      sig.send(topic,msg);resend=setInterval(()=>sig.send(topic,msg),3000); // in case a relay missed it
    })().catch(e=>finish(e));
  });
}
// computer side: answer phones that know this secret. decide(hello) → {serve(op,body), onopen?} or {reject}
async function listen(sig,secret,decide,opts={}){
  const {topic,key}=await derive(secret);
  const sessions=new Map();
  return sig.on(topic,async m=>{
    const o=await unseal(key,m);if(!o||o.from!=='p'||o.t!=='offer'||!o.sid)return;
    const prev=sessions.get(o.sid);if(prev){if(prev.answer)sig.send(topic,prev.answer);return}
    const rec={};sessions.set(o.sid,rec);setTimeout(()=>sessions.delete(o.sid),120000);
    let d;try{d=await decide(o.hello||{})}catch(e){d={reject:e.message}}
    if(!d||d.reject){rec.answer=await seal(key,{t:'reject',from:'m',sid:o.sid,why:(d&&d.reject)||'refused'});sig.send(topic,rec.answer);return}
    const pc=new RTCPeerConnection({iceServers:opts.ice||ICE});
    pc.ondatachannel=e=>{const ch=new Chan(e.channel,pc);ch.handler=d.serve;const go=()=>d.onopen&&d.onopen(ch);if(e.channel.readyState==='open')go();else e.channel.addEventListener('open',go)};
    try{
      await pc.setRemoteDescription({type:'offer',sdp:o.sdp});
      await pc.setLocalDescription(await pc.createAnswer());
      await iceDone(pc,opts.iceWait||2500);
      rec.answer=await seal(key,{t:'answer',from:'m',sid:o.sid,sdp:pc.localDescription.sdp});
      sig.send(topic,rec.answer);
    }catch(e){try{pc.close()}catch(x){}return}
    setTimeout(()=>{if(pc.connectionState!=='connected')try{pc.close()}catch(e){}},40000);
  });
}
let __sig=null;
window.AtlasLink={
  DEFAULT_BROKERS,randomCode,cleanCode,fmtCode,derive,seal,unseal,dial,listen,Signal,
  // one shared set of relay connections per app (tests can point at a local relay)
  signal:urls=>__sig||(__sig=new Signal(urls||(()=>{try{const t=localStorage.getItem('atlas-test-brokers');return t?t.split(','):null}catch(e){return null}})())),
  newSignal:urls=>new Signal(urls)
};
})();
