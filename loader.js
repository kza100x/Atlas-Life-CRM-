// Atlas phone app (installed from the web): open the phone's own database, connect to the
// computer if this is a fresh install, then start the app with the data already in memory.
(function(){
'use strict';
const DB='atlas-phone',ST='kv';
function idb(){return new Promise((res,rej)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(ST);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
let __db=null;
async function db(){return __db||(__db=await idb())}
async function get(k){const d=await db();return new Promise((res,rej)=>{const t=d.transaction(ST,'readonly').objectStore(ST).get(k);t.onsuccess=()=>res(t.result);t.onerror=()=>rej(t.error)})}
async function putMany(obj){const d=await db();return new Promise((res,rej)=>{const tx=d.transaction(ST,'readwrite');const s=tx.objectStore(ST);Object.entries(obj).forEach(([k,v])=>s.put(v,k));tx.oncomplete=()=>res();tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error)})}

const $=html=>{const el=document.getElementById('boot');el.innerHTML=html;el.style.display='flex'};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const card=(title,body,extra='')=>`<div class="boot-card"><img src="icon-192.png" alt="" class="boot-logo"><div class="boot-title">${title}</div><div class="boot-body">${body}</div>${extra}</div>`;
const UA=navigator.userAgent;
const isIOS=/iphone|ipad|ipod/i.test(UA)||(/Macintosh/.test(UA)&&navigator.maxTouchPoints>1);
const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
function deviceName(){if(/iPad/.test(UA)||(/Macintosh/.test(UA)&&navigator.maxTouchPoints>1))return 'iPad';if(/iPhone/.test(UA))return 'iPhone';if(/Android/.test(UA)){const m=UA.match(/Android [\d.]+; ([^;)]+)/);return m&&!/^K$/.test(m[1])?m[1].trim():'Android phone'}return 'Phone'}
// iPhones keep the address it was added from (with the code), so the home-screen app can connect by itself
(function manifest(){const l=document.createElement('link');l.rel='manifest';l.href=isIOS?'manifest-ios.webmanifest':'manifest.webmanifest';document.head.appendChild(l)})();

function codeFrom(s){const m=String(s||'').match(/[#?&]pair=([A-Za-z0-9-]+)/);return m?AtlasLink.cleanCode(m[1]):AtlasLink.cleanCode(s)}
function friendly(e){
  const c=e&&e.code,m=e&&e.message||'';
  if(c==='offline')return 'This phone isn’t connected to the internet. Connect to Wi-Fi or mobile data and try again.';
  if(c==='noanswer')return 'Your computer didn’t answer. Check Atlas is open on it, the Connect a phone window is showing, and it’s online.';
  if(c==='refused')return 'That code isn’t active. On your computer, click Connect a phone and use the new code.';
  return m||'Something went wrong. Try again.';
}

// ---------- scanning the code on the computer's screen ----------
function loadScript(src){return new Promise((res,rej)=>{if(window.jsQR)return res();const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error('Could not load the scanner'));document.head.appendChild(s)})}
async function scan(){
  await loadScript('jsqr.js');
  let stream;
  try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false})}
  catch(e){throw new Error('Atlas needs the camera to scan the code. Allow camera access, or type the code instead.')}
  return new Promise(resolve=>{
    $(`<div class="boot-card"><div class="boot-title">Scan the code on your computer</div><div class="boot-scan"><video playsinline muted autoplay></video><div class="boot-scan-box"></div></div><button class="boot-link" id="scan-x" type="button" style="background:none;border:0;">Type the code instead</button></div>`);
    const v=document.querySelector('#boot video');v.srcObject=stream;v.play().catch(()=>{});
    const cv=document.createElement('canvas');const cx=cv.getContext('2d',{willReadFrequently:true});
    let live=true;
    const stop=val=>{if(!live)return;live=false;stream.getTracks().forEach(t=>t.stop());resolve(val)};
    document.getElementById('scan-x').onclick=()=>stop(null);
    const tick=()=>{
      if(!live)return;
      if(v.readyState>=2&&v.videoWidth){
        const w=Math.min(720,v.videoWidth),h=Math.round(w*v.videoHeight/v.videoWidth);cv.width=w;cv.height=h;cx.drawImage(v,0,0,w,h);
        const r=window.jsQR(cx.getImageData(0,0,w,h).data,w,h,{inversionAttempts:'dontInvert'});
        if(r&&r.data){const c=codeFrom(r.data);if(c.length>=16)return stop(c)}
      }
      setTimeout(tick,200);
    };
    tick();
  });
}
function welcome(msg){
  return new Promise(resolve=>{
    $(card('Connect to your computer',`${msg?`<div class="boot-err">${esc(msg)}</div>`:''}On your computer, open <b>Atlas → Settings → Atlas on your phone</b> and click <b>Connect a phone</b>.`,
      `<button class="boot-btn" id="b-scan" type="button" style="margin-top:20px;">Scan the code</button>
       <form id="boot-form" autocomplete="off" style="margin-top:6px;"><input id="boot-code" class="boot-code boot-code-long" autocapitalize="characters" autocorrect="off" spellcheck="false" maxlength="19" placeholder="XXXX-XXXX-XXXX-XXXX"><button class="boot-btn boot-btn-2" type="submit">Connect with code</button></form>
       <div class="boot-small">Both devices need an internet connection. Atlas must be open on the computer.</div>`));
    const f=document.getElementById('boot-form'),i=document.getElementById('boot-code');
    i.addEventListener('input',()=>{const d=AtlasLink.cleanCode(i.value).slice(0,16);i.value=d.match(/.{1,4}/g)?.join('-')||''});
    f.addEventListener('submit',e=>{e.preventDefault();const c=AtlasLink.cleanCode(i.value);if(c.length===16)resolve(c);else i.focus()});
    document.getElementById('b-scan').onclick=async()=>{try{const c=await scan();if(c)resolve(c);else resolve(welcome(''))}catch(e){resolve(welcome(e.message))}};
  });
}
async function pair(code,state){
  $(card('Connecting to your computer…','Keep Atlas open on the computer.','<div class="boot-spin"></div>'));
  const sig=AtlasLink.signal();
  const chan=await AtlasLink.dial(sig,code,{pair:true},{timeout:25000});
  const deviceId=AtlasLink.randomCode(20),key=AtlasLink.randomCode(32);
  const r=await chan.call('pair',{deviceId,key,name:deviceName()},30000);
  state.rtc={deviceId,key};state.mac=r.mac||'your computer';state.macId=r.macId||null;state.sinceRev=0;state.dirty={};state.shadow={};
  await putMany({state});
  $(card('Copying your data…',`From ${esc(state.mac)}. This only takes a moment.`,'<div class="boot-spin"></div>'));
  let data={};
  try{
    const j=await chan.call('sync',{sinceRev:0,changes:[]},120000);
    j.changes.forEach(c=>{if(!c.deleted){data[c.key]=c.value;state.shadow[c.key]=JSON.parse(JSON.stringify(c.value))}});
    state.sinceRev=j.rev;state.epoch=j.epoch;state.lastSync=Date.now();
    await putMany({data,state});
  }catch(e){/* paired; the first sync will retry from inside the app */}
  window.__ATLAS_LINK_CHAN=chan;
  return data;
}
async function connect(code,state){
  let msg='';
  for(;;){
    if(!code)code=await welcome(msg);
    try{const data=await pair(code,state);history.replaceState(null,'',location.pathname);return data}
    catch(e){msg=friendly(e);code=null;if(state.rtc)return await get('data')||{}}
  }
}
function startApp(data,state){
  window.__ATLAS_PHONE={
    data,state,
    save:d=>putMany({data:d,state}),
    saveState:()=>putMany({state}),
    reset:async()=>{await putMany({data:{},state:{dirty:{},shadow:{}}})}
  };
  document.getElementById('boot').style.display='none';
  const s=document.createElement('script');s.src='atlas.js';document.body.appendChild(s);
}

async function boot(){
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(e=>console.warn('sw',e))}
  let data,state;
  try{data=await get('data');state=await get('state')}catch(e){$(card('Storage is unavailable',`Your browser blocked Atlas from storing data (${esc(e.message)}). Private browsing can cause this.`));return}
  data=data||{};state=state||{dirty:{},shadow:{}};state.dirty=state.dirty||{};state.shadow=state.shadow||{};
  const code=codeFrom(location.hash)||codeFrom(location.search);
  if(!state.rtc){
    if(code&&isIOS&&!standalone&&!/[?&]here=1/.test(location.search)){
      // the home-screen app opens this exact address, so it can pair without scanning again
      history.replaceState(null,'',location.pathname+'?pair='+code);
      $(card('Add Atlas to your Home Screen',
        `Tap <b>Share</b> <span class="boot-share">⎋</span>, then <b>Add to Home Screen</b>.<br><br>Then open Atlas from your home screen. It connects to your computer by itself. If it asks, scan the code on your computer again.`,
        `<a class="boot-link" href="?pair=${encodeURIComponent(code)}&here=1">Use it in the browser instead</a>`));
      return;
    }
    data=await connect(code&&code.length===16?code:null,state);
  }else if(code){history.replaceState(null,'',location.pathname)}
  startApp(data,state);
}
boot();
})();
