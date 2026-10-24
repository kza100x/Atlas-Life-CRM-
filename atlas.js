// ============ ICON LIBRARY ============
const ICONS={
dashboard:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
chart:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
chevron:'<polyline points="9 18 15 12 9 6"/>',
trendUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
trendDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
dumbbell:'<path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>',
check:'<circle cx="12" cy="12" r="10"/><polyline points="9 11 12 14 22 4"/>',
circle:'<circle cx="12" cy="12" r="10"/>',
building:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="22" x2="9" y2="18"/><line x1="15" y1="22" x2="15" y2="18"/><circle cx="12" cy="10" r="2"/>',
zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
sparkles:'<path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>',
menu:'<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
run:'<circle cx="13" cy="4" r="2"/><path d="M4 22l5-7 4 3 6-9"/><path d="M9 13l3-5 4 2"/>',
receipt:'<path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2Z"/><path d="M16 8h-6"/><path d="M16 12h-6"/><path d="M16 16h-6"/>',
clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
mapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><ellipse cx="12" cy="12" rx="3" ry="9"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
wallet:'<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
package:'<path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
home:'<path d="M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V10"/>',
heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
circle:'<circle cx="12" cy="12" r="10"/>'
};
function icon(name,size=14,color='currentColor'){return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`}

// ============ STORAGE ============
// Desktop: everything lives in an in-memory map that is written to a real JSON file on disk
// (atlas-data.json in your Atlas data folder) a moment after every change, plus dated backups.
// Browser fallback: localStorage (kept so the file still opens in a browser if ever needed).
const DESKTOP=window.atlasDesktop||null;
// Phone (installed from the Mac over Wi-Fi): data is preloaded from IndexedDB by loader.js
const PHONE=(!DESKTOP&&window.__ATLAS_PHONE)||null;
const PREFIX='atlas:';
const IS_MAC=DESKTOP?DESKTOP.platform==='darwin':/Mac/.test(navigator.platform);
const MACHINE=window.__ATLAS_PHONE&&!DESKTOP?'phone':IS_MAC?'Mac':'computer';
document.documentElement.classList.add(DESKTOP?('os-'+DESKTOP.platform):PHONE?'os-phone':'os-web');
let __mem={},__loadInfo={source:'browser'},__dataPath='',__dataDir='';
if(DESKTOP){
  try{const r=DESKTOP.loadSync();__mem=r.data||{};__loadInfo=r.info||{};__dataPath=r.dataPath;__dataDir=r.dataDir}
  catch(e){console.error('Load failed',e);__loadInfo={source:'error',error:e.message}}
}
if(PHONE){__mem=PHONE.data||{};__loadInfo={source:'phone'}}
const MEMSTORE=!!(DESKTOP||PHONE);
if(DESKTOP&&!__mem.__sync)__mem.__sync={keys:{},epoch:Math.random().toString(36).slice(2,10)};
const __startedEmpty=Object.keys(__mem).filter(k=>k!=='__sync').length===0;
// ---- change tracking for sync ----
// Mac: every key carries {r: revision, t: time changed}; phones ask "what changed since r?"
// Phone: keys changed locally are "dirty" until the Mac has them.
let __lastRev=0;
function __nextRev(){const s=__mem.__sync||(__mem.__sync={keys:{}});__lastRev=Math.max(Date.now(),(s.last||0)+1,__lastRev+1);s.last=__lastRev;return __lastRev}
function __noteChange(key,deleted,t){
  if(key==='__sync'||(typeof SYNC_LOCAL_KEYS!=='undefined'&&SYNC_LOCAL_KEYS.includes(key)))return;
  if(DESKTOP){const r=__nextRev();__mem.__sync.keys[key]={r,t:t||Date.now(),...(deleted?{d:1}:{})}}
  else if(PHONE){PHONE.state.dirty[key]=Date.now()}
}
function __applyRemote(key,value){ // write without marking as a local change (used by sync)
  if(value===undefined||value===null)delete __mem[key];else __mem[key]=__clone(value);
  scheduleSave();
}
let __saveTimer=null,__dirty=false,__lastSaved=null;
function __clone(v){return v===undefined?undefined:JSON.parse(JSON.stringify(v))}
function scheduleSave(){
  __dirty=true;setSavePill('saving');
  clearTimeout(__saveTimer);
  __saveTimer=setTimeout(flushSave,300);
}
async function flushSave(){
  if(PHONE&&__dirty){__dirty=false;try{await PHONE.save(__mem);__lastSaved=new Date()}catch(e){__dirty=true;console.error(e)}return}
  if(!DESKTOP||!__dirty)return;
  __dirty=false;
  try{
    const r=await DESKTOP.save(__mem);
    if(r&&r.ok){__lastSaved=new Date();setSavePill('saved')}
    else{__dirty=true;setSavePill('error',r&&r.error)}
  }catch(e){__dirty=true;setSavePill('error',e.message)}
}
function flushSaveSync(){
  if(PHONE&&__dirty){clearTimeout(__saveTimer);flushSave();return}
  if(!DESKTOP||!__dirty)return;
  clearTimeout(__saveTimer);__dirty=false;
  try{DESKTOP.saveSync(__mem)}catch(e){console.error(e)}
}
window.addEventListener('beforeunload',flushSaveSync);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushSaveSync()});
if(DESKTOP){DESKTOP.onFlush(flushSaveSync)}

const store={
  get(key,fallback=null){
    if(MEMSTORE){const v=__mem[key];return v===undefined||v===null?fallback:__clone(v)}
    try{const v=localStorage.getItem(PREFIX+key);return v?JSON.parse(v):fallback}catch{return fallback}
  },
  set(key,value){
    if(MEMSTORE){
      if(value===undefined)delete __mem[key];else __mem[key]=__clone(value);
      __noteChange(key,value===undefined);scheduleSave();return true;
    }
    try{localStorage.setItem(PREFIX+key,JSON.stringify(value));return true}catch(e){console.error(e);alert('Storage limit reached. Export a backup.');return false}
  },
  del(key){
    if(MEMSTORE){const had=key in __mem;delete __mem[key];if(had)__noteChange(key,true);scheduleSave();return true}
    try{localStorage.removeItem(PREFIX+key);return true}catch{return false}
  },
  keys(){
    if(MEMSTORE)return Object.keys(__mem).filter(k=>k!=='__sync');
    const out=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(PREFIX))out.push(k.slice(PREFIX.length))}return out;
  }
};

function setSavePill(state,err){
  let pill=document.getElementById('save-pill');
  if(!pill){
    if(!DESKTOP)return;
    pill=document.createElement('div');pill.id='save-pill';
    pill.title='Your data folder — click to open';
    pill.addEventListener('click',()=>DESKTOP.openFolder());
    document.body.appendChild(pill);
  }
  pill.className=state==='saving'?'saving':state==='error'?'error':'';
  const t=__lastSaved?__lastSaved.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}):'';
  const label=state==='saving'?'Saving…':state==='error'?('Not saved — '+(err||'disk error')):(t?`Saved to disk · ${t}`:'Saved to disk');
  pill.innerHTML=`<span class="dot"></span><span>${escapeHtml(label)}</span>`;
}


// ============ HELPERS ============
const uid=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escAttr=s=>String(s??'').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const fmtMoney=(n,cur='£')=>`${cur}${(n||0).toLocaleString('en-GB',{maximumFractionDigits:0})}`;
const fmtMoney2=(n,cur='£')=>`${cur}${(n||0).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const fmtDate=d=>d?new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):'—';
const fmtShortDate=d=>d?new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'—';
const daysAgo=d=>{if(!d)return'—';const diff=Math.floor((Date.now()-new Date(d))/86400000);if(diff===0)return'today';if(diff===1)return'yesterday';if(diff<7)return`${diff}d ago`;if(diff<30)return`${Math.floor(diff/7)}w ago`;return`${Math.floor(diff/30)}mo ago`};

// ============ TOAST + UNDO SYSTEM ============
function ensureToastStack(){
  let s=document.getElementById('toast-stack');
  if(!s){s=document.createElement('div');s.id='toast-stack';document.body.appendChild(s)}
  return s;
}
function showToast(message,actionLabel,actionFn,duration=5000){
  const stack=ensureToastStack();
  const toast=document.createElement('div');
  toast.className='toast';
  toast.innerHTML=`<span class="toast-text">${escapeHtml(message)}</span>${actionLabel?`<button class="toast-action" data-act>${escapeHtml(actionLabel)}</button>`:''}<button class="toast-close" data-close>${icon('x',13)}</button>`;
  stack.appendChild(toast);
  let dismissed=false;
  const dismiss=()=>{
    if(dismissed)return;
    dismissed=true;
    toast.classList.add('toast-out');
    setTimeout(()=>toast.remove(),200);
  };
  toast.querySelector('[data-close]').addEventListener('click',dismiss);
  if(actionLabel){
    toast.querySelector('[data-act]').addEventListener('click',()=>{
      try{actionFn&&actionFn()}catch(e){console.error(e)}
      dismiss();
    });
  }
  setTimeout(dismiss,duration);
  return dismiss;
}

// Generic delete-with-undo helper.
// key = storage key, item = the deleted item, label = friendly name
// onRestore(items) optional callback after restoring
function deleteWithUndo(key,item,label,onRestore){
  const items=store.get(key,[]);
  const idx=items.findIndex(x=>x.id===item.id);
  if(idx<0)return false;
  items.splice(idx,1);
  store.set(key,items);
  showToast(`Deleted ${label||'item'}`,'Undo',()=>{
    const cur=store.get(key,[]);
    cur.splice(idx,0,item);
    store.set(key,cur);
    if(onRestore)onRestore(cur);
    render();
    showToast(`Restored ${label||'item'}`,null,null,2500);
  },30000);
  return true;
}
// For deletes that touch multiple keys (e.g. profile delete)
function deleteWithUndoMulti(snapshots,label,onRestore){
  // snapshots: [{key, prevValue}]
  showToast(`Deleted ${label||'item'}`,'Undo',()=>{
    snapshots.forEach(s=>store.set(s.key,s.prevValue));
    if(onRestore)onRestore();
    render();
    showToast(`Restored ${label||'item'}`,null,null,2500);
  },30000);
}



// pace: minutes (decimal) -> "M:SS / km"
const fmtPace=(m)=>{if(!m||!isFinite(m))return'—';const mins=Math.floor(m);const secs=Math.round((m-mins)*60);return `${mins}:${String(secs).padStart(2,'0')}`};
// duration minutes -> "MM:SS" or "H:MM:SS"
const fmtDuration=(m)=>{if(!m)return'—';const totalSec=Math.round(m*60);const h=Math.floor(totalSec/3600);const mm=Math.floor((totalSec%3600)/60);const ss=totalSec%60;if(h>0)return `${h}:${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;return `${mm}:${String(ss).padStart(2,'0')}`};

const STAGES=['New','Attempted','Connected','Contacted','Qualified','Won','Lost','Closed - unreachable','Closed - Not interested'];
const STAGE_COLORS={
  New:'#7d86b0',
  Attempted:'#7aa2ff',
  Connected:'#ffe066',
  Contacted:'#ffb547',
  Qualified:'#3df5a8',
  Won:'#4fe3f0',
  Lost:'#ff5c7a',
  'Closed - unreachable':'#555d82',
  'Closed - Not interested':'#c2405a'
};

const BILL_TYPES=['Rent','Vehicle','Subscription','Food','Travel','Accommodation','Utility','Other'];
const BILL_COLORS={Rent:'#4fe3f0',Vehicle:'#7aa2ff',Subscription:'#b57cff',Food:'#3df5a8',Travel:'#ffb547',Accommodation:'#ffe066',Utility:'#5ef2e0',Other:'#7d86b0'};

// Ledger taxonomy
const REVENUE_CATEGORIES=['Sales','Refunds','Interest','Other'];
const COST_CATEGORIES=['Startup','Marketing','Operations','Salaries','Professional','Tax','Inventory','Other'];
const CATEGORY_COLORS={
  Sales:'#3df5a8',Refunds:'#ff5c7a',Interest:'#5ef2e0',
  Startup:'#b57cff',Marketing:'#4fe3f0',Operations:'#7aa2ff',Salaries:'#ffb547',
  Professional:'#ffe066',Tax:'#ff5c7a',Inventory:'#c9a46a',Other:'#7d86b0'
};

// Balance sheet taxonomy
const ASSET_CATEGORIES=['Cash','Bank','Receivables','Investments','Equipment','Inventory','Property','Other'];
const LIABILITY_CATEGORIES=['Payables','Credit Card','Loan','Tax Owed','Other'];
const ASSET_COLORS={Cash:'#3df5a8',Bank:'#7aa2ff',Receivables:'#ffb547',Investments:'#b57cff',Equipment:'#c9a46a',Inventory:'#5ef2e0',Property:'#4fe3f0',Other:'#7d86b0'};
const LIABILITY_COLORS={Payables:'#ffb547',['Credit Card']:'#ff5c7a',Loan:'#4fe3f0','Tax Owed':'#b57cff',Other:'#7d86b0'};

// Profile types — built-in defaults
const BUILTIN_TYPES=['Lead Gen','Service','Consulting','E-commerce','Wholesale','Author/Creator','SaaS','Trading','Investment','Content','Other'];

// Module defaults per type. Universal (always on): dashboard, ledger, balance.
// Toggleable modules: contacts, analytics, inventory
const MODULE_DEFAULTS={
  'Lead Gen':['contacts','analytics'],
  'Service':['contacts'],
  'Consulting':['contacts'],
  'E-commerce':['inventory','analytics'],
  'Wholesale':['inventory','contacts'],
  'Author/Creator':['inventory','analytics'],
  'SaaS':['contacts','analytics'],
  'Trading':['analytics'],
  'Investment':[],
  'Content':['analytics'],
  'Other':['contacts']
};
const ALL_MODULES=['contacts','analytics','inventory'];
const MODULE_LABELS={contacts:'Contacts',analytics:'Analytics',inventory:'Inventory'};
const MODULE_ICONS={contacts:'users',analytics:'chart',inventory:'package'};

// Get all available types: built-in + user custom
function getAllTypes(){
  const custom=store.get('profile-types:custom',[]);
  return [...BUILTIN_TYPES,...custom.filter(t=>!BUILTIN_TYPES.includes(t))];
}
function addCustomType(t){
  if(!t||BUILTIN_TYPES.includes(t))return;
  const custom=store.get('profile-types:custom',[]);
  if(custom.includes(t))return;
  custom.push(t);
  store.set('profile-types:custom',custom);
}
// Get a profile's enabled modules. Falls back to type defaults if not set (legacy profiles).
function getProfileModules(meta){
  if(meta.modules&&Array.isArray(meta.modules))return meta.modules;
  return MODULE_DEFAULTS[meta.type]||MODULE_DEFAULTS['Other'];
}

// Currency / FX
const CURRENCIES=[
  {symbol:'£',code:'GBP',label:'£ GBP'},
  {symbol:'$',code:'USD',label:'$ USD'},
  {symbol:'€',code:'EUR',label:'€ EUR'},
  {symbol:'฿',code:'THB',label:'฿ THB'}
];
function getFx(){
  return store.get('settings:fx',{reporting:'£',rates:{'£':1,'$':1.27,'€':1.17,'฿':44}});
}
function saveFx(fx){store.set('settings:fx',fx)}
// Convert amount in `fromCur` to reporting currency.
// rates are stored as: 1 GBP = N foreign units. So GBP→THB multiplies, THB→GBP divides.
function toReporting(amount,fromCur){
  if(!amount)return 0;
  const fx=getFx();
  if(fromCur===fx.reporting)return amount;
  const rateFrom=fx.rates[fromCur]||1;        // foreign per 1 GBP
  const rateTo=fx.rates[fx.reporting]||1;     // reporting per 1 GBP
  // Convert via GBP as pivot: amount_GBP = amount / rateFrom; amount_reporting = amount_GBP * rateTo
  return (amount/rateFrom)*rateTo;
}
function fmtReporting(amount){
  const fx=getFx();
  const r=Math.round(amount);
  return `${r<0?'−':''}${fx.reporting}${Math.abs(r).toLocaleString('en-GB')}`;
}
// Group an array of {amount,currency} into {currency:total,...}
function groupByCurrency(items){
  const out={};
  items.forEach(it=>{const c=it.currency||'£';out[c]=(out[c]||0)+(it.amount||0)});
  return out;
}
function fmtMultiCur(obj){
  const e=Object.entries(obj).filter(([_,v])=>v>0);
  if(e.length===0)return '—';
  return e.map(([c,v])=>`${c}${Math.round(v).toLocaleString('en-GB')}`).join(' · ');
}

// ============ FISCAL YEAR ============
// Stored as {month: 4, day: 6} = UK tax year. Or {month:1,day:1} = calendar.
function getFiscalConfig(){
  return store.get('settings:fiscal',{month:4,day:6,label:'UK tax year (Apr 6 → Apr 5)'});
}
function saveFiscalConfig(cfg){store.set('settings:fiscal',cfg)}
// Returns {start:Date, end:Date, label:string} for the fiscal year that contains `forDate` (default: today)
function getFiscalYear(forDate){
  const cfg=getFiscalConfig();
  const ref=forDate?new Date(forDate):new Date();
  const y=ref.getFullYear();
  // Start of fiscal year for this calendar year
  const startThis=new Date(y,cfg.month-1,cfg.day);
  let start,end;
  if(ref>=startThis){
    start=startThis;
    end=new Date(y+1,cfg.month-1,cfg.day-1);
  }else{
    start=new Date(y-1,cfg.month-1,cfg.day);
    end=new Date(y,cfg.month-1,cfg.day-1);
  }
  // Build a label like "FY 2025/26" or "2026" depending on whether year crosses
  const label=start.getFullYear()===end.getFullYear()
    ?`FY ${start.getFullYear()}`
    :`FY ${String(start.getFullYear()).slice(-2)}/${String(end.getFullYear()).slice(-2)}`;
  return {start,end,label};
}
function getPreviousFiscalYear(){
  const fy=getFiscalYear();
  const oneDayBefore=new Date(fy.start);
  oneDayBefore.setDate(oneDayBefore.getDate()-1);
  return getFiscalYear(oneDayBefore);
}
function inFiscalYear(dateStr,fy){
  const d=new Date(dateStr);
  return d>=fy.start&&d<=fy.end;
}


// ============ STATE ============
const state={view:'today',profileId:null,sidebarOpen:false};

// ============ ROUTING ============
function navigate(view,profileId=null){
  state.view=view;
  if(profileId)state.profileId=profileId;
  if(['command','profiles','daily','running','routine','bills','personalBalance','settings'].includes(view))state.profileId=null;
  // Guard: if we're navigating to a per-profile module-gated view but the module is disabled, fall back to dashboard
  if(state.profileId&&['contacts','analytics','inventory'].includes(view)){
    const meta=store.get(`profile:${state.profileId}:meta`);
    if(meta){
      const modules=getProfileModules(meta);
      if(!modules.includes(view))state.view='dashboard';
    }
  }
  state.sidebarOpen=false;
  render();
  window.scrollTo(0,0);
}
let __lastView=null;
function render(){
  const __vk=state.view+'|'+state.profileId;document.body.classList.toggle('no-anim',__lastView===__vk);__lastView=__vk;
  document.getElementById('app').innerHTML=`
    <button class="menu-toggle" onclick="toggleSidebar()">${icon('menu',18)}</button>
    <div class="sidebar-backdrop ${state.sidebarOpen?'show':''}" onclick="toggleSidebar()"></div>
    <div class="layout">
      <aside class="sidebar ${state.sidebarOpen?'open':''}">${renderSidebar()}</aside>
      <main class="main">${renderView()}</main>
    </div>`;
  // Wire up drag-and-drop on Command Centre
  if(state.view==='command'){
    attachReorder('#cmd-sections',(order)=>{saveCmdOrder(order);render()});
  }
  // Update bulk bar after render in case selections persist
  if(state.view==='contacts')updateBulkBar();
  if(state.view==='settings')loadBackupList();
}
function toggleSidebar(){
  state.sidebarOpen=!state.sidebarOpen;
  document.querySelector('.sidebar')?.classList.toggle('open');
  document.querySelector('.sidebar-backdrop')?.classList.toggle('show');
}

// ============ SIDEBAR ============
function renderSidebar(){
  const profiles=store.get('profiles:list',[]);
  const activeProfile=state.profileId?store.get(`profile:${state.profileId}:meta`):null;
  const inProfile=!!activeProfile&&!['command','profiles','daily','running','bills','personalBalance','settings'].includes(state.view);

  const navBtn=(view,label,iconName)=>{
    const a=state.view===view;
    return `<div class="nav-item ${a?'active':''}" onclick="navigate('${view}')">${icon(iconName,15)}<span>${label}</span><span class="indicator" ${a?'style="background:var(--ember)"':''}></span></div>`;
  };
  const profBtn=(view,label,iconName)=>{
    const a=state.view===view;
    return `<div class="nav-item ${a?'active':''}" onclick="navigate('${view}','${state.profileId}')">${icon(iconName,15)}<span>${label}</span><span class="indicator" ${a?'style="background:var(--ember)"':''}></span></div>`;
  };

  return `
    <div style="padding:0 8px 14px 8px;display:flex;align-items:center;gap:10px;">
      <div style="width:30px;height:30px;border-radius:7px;background:var(--ink);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;">${icon('globe',17,'var(--ember)')}</div>
      <div>
        <div class="serif" style="font-size:17px;font-weight:600;line-height:1;letter-spacing:-0.01em;">Atlas</div>
        <div class="mono" style="font-size:9.5px;color:var(--bone-mute);margin-top:2px;letter-spacing:0.08em;">CRM · v1</div>
      </div>
    </div>

    <button class="nav-item" onclick="openGlobalSearch()" style="margin:0 0 14px 0;background:var(--ink-3);border:1px solid var(--line);width:calc(100% - 0px);justify-content:flex-start;color:var(--bone-mute);">
      ${icon('search',14)}
      <span style="flex:1;text-align:left;">Search…</span>
      <kbd style="background:var(--ink-2);border:1px solid var(--line);border-radius:3px;padding:1px 5px;font-family:'JetBrains Mono',monospace;font-size:9.5px;color:var(--bone-mute);">⌘K</kbd>
    </button>

    <div class="label" style="padding:0 8px;margin-bottom:8px;">Overview</div>
    ${navBtn('command','Command Centre','dashboard')}

    <div class="label" style="padding:0 8px;margin:20px 0 8px;">Workspace</div>
    ${navBtn('profiles','Profiles','building')}

    <div class="label" style="padding:0 8px;margin:20px 0 8px;">Personal</div>
    ${navBtn('routine','Daily Routine','calendar')}
    ${navBtn('daily','Gym Log','dumbbell')}
    ${navBtn('running','Running','run')}
    ${navBtn('bills','Bills','receipt')}
    ${navBtn('personalBalance','Net Worth','wallet')}

    <div class="label" style="padding:0 8px;margin:20px 0 8px;">System</div>
    ${navBtn('settings','Settings','settings')}

    ${inProfile?(()=>{
      const modules=getProfileModules(activeProfile);
      return `<div class="label" style="padding:0 8px;margin:20px 0 8px;">${escapeHtml(activeProfile.name)}</div>
      ${profBtn('dashboard','Dashboard','dashboard')}
      ${modules.includes('contacts')?profBtn('contacts','Contacts','users'):''}
      ${modules.includes('inventory')?profBtn('inventory','Inventory','package'):''}
      ${modules.includes('analytics')?profBtn('analytics','Analytics','chart'):''}
      ${profBtn('transactions','Ledger','dollar')}
      ${profBtn('balance','Balance Sheet','wallet')}`;
    })():''}

    ${profiles.length>0&&!inProfile?`
      <div class="label" style="padding:0 8px;margin:20px 0 8px;">Quick Switch</div>
      ${profiles.slice(0,8).map(p=>`<div class="nav-item" onclick="navigate('dashboard','${p.id}')"><span style="width:8px;height:8px;border-radius:2px;background:${p.color};flex-shrink:0;"></span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</span></div>`).join('')}
    `:''}

    <div style="margin-top:auto;padding:16px 8px 0;font-size:11px;color:var(--bone-mute);display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <div class="mono" style="letter-spacing:0.04em;">${new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})}</div>
      <button class="btn btn-ghost btn-sm" onclick="toggleTheme()" title="Toggle theme" style="padding:5px 8px;">${getTheme()==='light'?'🌙':'☀️'}</button>
    </div>`;
}

// ============ VIEW ROUTER ============
function renderView(){
  switch(state.view){
    case'command':return renderCommandCentre();
    case'profiles':return renderProfiles();
    case'dashboard':return renderDashboard();
    case'contacts':return renderContacts();
    case'analytics':return renderAnalytics();
    case'transactions':return renderTransactions();
    case'balance':return renderBalanceSheet();
    case'inventory':return renderInventory();
    case'daily':return renderDaily();
    case'running':return renderRunning();
    case'routine':return renderRoutine();
    case'bills':return renderBills();
    case'personalBalance':return renderPersonalBalance();
    case'settings':return renderSettings();
    default:return'';
  }
}

// ============ MODAL HELPERS ============
function showModal(title,bodyHtml,onSave,saveLabel='Save'){
  // Remove any existing modal first
  closeModal();
  const overlay=document.createElement('div');
  overlay.className='modal-backdrop';
  overlay.innerHTML=`<div class="modal" style="padding:28px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;">
      <h2 class="serif" style="font-size:24px;margin:0;font-weight:500;">${title}</h2>
      <button class="btn btn-ghost" data-modal-close>${icon('x',16)}</button>
    </div>
    <div id="modal-body">${bodyHtml}</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:24px;">
      <button class="btn" data-modal-close>Cancel</button>
      <button class="btn btn-primary" id="modal-save" data-modal-save>${saveLabel}</button>
    </div></div>`;
  document.body.appendChild(overlay);

  // Attach handlers via addEventListener (more reliable than .onclick across browsers)
  const closeBtns=overlay.querySelectorAll('[data-modal-close]');
  closeBtns.forEach(b=>b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();closeModal()}));

  const saveBtn=overlay.querySelector('[data-modal-save]');
  const doSave=e=>{
    if(e){e.preventDefault();e.stopPropagation()}
    try{
      const r=onSave();
      if(r!==false){closeModal();render()}
    }catch(err){
      console.error('Save error:',err);
      alert('Could not save: '+err.message);
    }
  };
  saveBtn.addEventListener('click',doSave);

  // Backdrop click to close
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeModal()});

  // Enter key submits (except in textareas)
  overlay.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&e.target.tagName!=='TEXTAREA'){doSave(e)}
    if(e.key==='Escape')closeModal();
  });

  // Focus first input
  setTimeout(()=>{
    const first=overlay.querySelector('input:not([type=hidden]),select,textarea');
    if(first)try{first.focus()}catch{}
  },80);
}
function closeModal(){document.querySelectorAll('.modal-backdrop').forEach(m=>m.remove())}

// Generic modal that just renders custom content with no built-in save/cancel footer.
// Used for detail views, multi-step wizards, etc.
function showCustomModal(bodyHtml,title){
  closeModal();
  const overlay=document.createElement('div');
  overlay.className='modal-backdrop';
  overlay.innerHTML=`<div class="modal" style="padding:28px;">
    ${title?`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <div></div>
      <button class="btn btn-ghost" data-modal-close>${icon('x',16)}</button>
    </div>`:`<div style="display:flex;justify-content:flex-end;margin-bottom:6px;">
      <button class="btn btn-ghost" data-modal-close>${icon('x',16)}</button>
    </div>`}
    <div id="modal-body">${bodyHtml}</div></div>`;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('[data-modal-close]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();closeModal()}));
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeModal()});
  overlay.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
}


// ============ COMMAND CENTRE ============
function renderCommandCentre(){
  const profiles=store.get('profiles:list',[]);
  const fx=getFx();

  // Profile-include filter (stored in window for session persistence)
  if(!window._cmdInclude)window._cmdInclude={personal:true};
  profiles.forEach(p=>{if(!(p.id in window._cmdInclude))window._cmdInclude[p.id]=!p.archived});
  const include=window._cmdInclude;

  // Aggregate across included scopes
  let bizRevenue=0,bizCosts=0,bizAssets=0,bizLiab=0;
  let personalAssets=0,personalLiab=0,personalBills=0;
  const recentActivity=[];
  const profileSummaries=[];

  // Date filter for Command Centre
  const cmdFilter=window._cmdFilter||'thisMonth';
  const fy=getFiscalYear();
  const prevFy=getPreviousFiscalYear();
  const now=new Date();
  const lastMonthRef=new Date(now.getFullYear(),now.getMonth()-1,1);
  const matchesFilter=(dateStr)=>{
    if(!dateStr)return cmdFilter==='all';
    if(cmdFilter==='all')return true;
    const d=new Date(dateStr);
    if(cmdFilter==='thisMonth')return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();
    if(cmdFilter==='lastMonth')return d.getMonth()===lastMonthRef.getMonth()&&d.getFullYear()===lastMonthRef.getFullYear();
    if(cmdFilter==='thisFy')return inFiscalYear(dateStr,fy);
    if(cmdFilter==='lastFy')return inFiscalYear(dateStr,prevFy);
    return true;
  };

  // Personal
  if(include.personal){
    const bills=store.get('bills:log',[]);
    bills.forEach(b=>{
      // KPI: filtered by selected period
      if(matchesFilter(b.date)){
        personalBills+=toReporting(b.amount||0,b.currency||'£');
      }
      recentActivity.push({date:b.date,type:'bill',label:b.description||b.type,amount:b.amount,currency:b.currency,scope:'Personal'});
    });
    const balance=store.get('personal:balance',[]);
    balance.forEach(i=>{
      const amt=toReporting(i.amount||0,i.currency||'£');
      if(i.kind==='asset')personalAssets+=amt;else personalLiab+=amt;
    });
  }

  // Each business profile
  profiles.forEach(p=>{
    if(!include[p.id])return;
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    const meta=store.get(`profile:${p.id}:meta`)||{};
    const balance=store.get(`profile:${p.id}:balance`,[]);
    let pRev=0,pCost=0,pAssets=0,pLiab=0;
    txs.forEach(t=>{
      const amt=toReporting(t.amount||0,t.currency||meta.currency||'£');
      if(matchesFilter(t.date)){
        if(t.type==='revenue'){bizRevenue+=amt;pRev+=amt}
        else{bizCosts+=amt;pCost+=amt}
      }
      recentActivity.push({date:t.date,type:t.type,label:t.description,amount:t.amount,currency:t.currency||meta.currency||'£',scope:p.name,category:t.category});
    });
    balance.forEach(i=>{
      const amt=toReporting(i.amount||0,i.currency||'£');
      if(i.kind==='asset'){bizAssets+=amt;pAssets+=amt}else{bizLiab+=amt;pLiab+=amt}
    });
    profileSummaries.push({...p,revenue:pRev,costs:pCost,profit:pRev-pCost,assets:pAssets,liabilities:pLiab,netWorth:pAssets-pLiab});
  });

  recentActivity.sort((a,b)=>new Date(b.date)-new Date(a.date));

  const totalAssets=bizAssets+personalAssets;
  const totalLiab=bizLiab+personalLiab;
  const totalNet=totalAssets-totalLiab;
  const bizProfit=bizRevenue-bizCosts;
  const monthlyBurn=personalBills; // could refine to monthly

  // KPI tiles
  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
    ${sub?`<div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">${sub}</div>`:''}
  </div>`;

  return `<div class="page" style="max-width:1400px;">
    ${cmdHeaderHtml(fx)}

    <div id="cmd-sections" class="stagger">
      ${getCmdOrder().map(key=>renderCmdSection(key,{profiles,include,profileSummaries,bizRevenue,bizCosts,bizProfit,personalBills,totalAssets,totalLiab,totalNet,monthlyBurn,recentActivity,fx,fy,prevFy,cmdFilter})).join('')}
    </div>
  </div>`;
}

// Build a single Command Centre section by key
function renderCmdSection(key,ctx){
  if(key==='hud')return renderOrbitHero(ctx);
  if(key==='you')return renderCmdYou(ctx);
  if(key==='goals')return renderCmdGoals(ctx);
  const wrap=(id,inner)=>`<div class="draggable-section card" data-section-id="${id}" style="padding:22px;margin-bottom:16px;position:relative;">
    <div class="drag-handle" title="Drag to reorder">⋮⋮</div>
    ${inner}
  </div>`;
  if(key==='include'){
    return wrap('include',`
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div class="label">Include</div>
        <div style="font-size:11px;color:var(--bone-mute);">click to toggle</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-sm" style="${ctx.include.personal?'background:var(--ember);border-color:var(--ember);color:var(--ink);':''}" onclick="toggleCmdInclude('personal')">Personal</button>
        ${ctx.profiles.map(p=>`<button class="btn btn-sm" style="${ctx.include[p.id]?'background:'+p.color+';border-color:'+p.color+';color:var(--ink);':''}" onclick="toggleCmdInclude('${p.id}')">${escapeHtml(p.name)}</button>`).join('')}
      </div>`);
  }
  if(key==='period'){
    return wrap('period',`
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div class="label">Period</div>
        <select class="field" style="width:auto;min-width:200px;" onchange="window._cmdFilter=this.value;render()">
          <option value="thisMonth" ${ctx.cmdFilter==='thisMonth'?'selected':''}>This month</option>
          <option value="lastMonth" ${ctx.cmdFilter==='lastMonth'?'selected':''}>Last month</option>
          <option value="thisFy" ${ctx.cmdFilter==='thisFy'?'selected':''}>This ${ctx.fy.label}</option>
          <option value="lastFy" ${ctx.cmdFilter==='lastFy'?'selected':''}>Last ${ctx.prevFy.label}</option>
          <option value="all" ${ctx.cmdFilter==='all'?'selected':''}>All time</option>
        </select>
      </div>`);
  }
  if(key==='kpis'){
    const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
      <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
      ${sub?`<div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">${sub}</div>`:''}
    </div>`;
    return `<div class="draggable-section" data-section-id="kpis" style="position:relative;margin-bottom:16px;">
      <div class="drag-handle" title="Drag to reorder" style="top:0;right:0;">⋮⋮</div>
      <div class="grid-3">
        ${kpi('Business Revenue',fmtReporting(ctx.bizRevenue),`${ctx.profileSummaries.length} ${ctx.profileSummaries.length===1?'profile':'profiles'} included`,'trendUp','var(--jade)')}
        ${kpi('Business Costs',fmtReporting(ctx.bizCosts),null,'trendDown','var(--rust)')}
        ${kpi('Business Net',fmtReporting(ctx.bizProfit),`margin ${ctx.bizRevenue>0?((ctx.bizProfit/ctx.bizRevenue)*100).toFixed(0):0}%`,ctx.bizProfit>=0?'trendUp':'trendDown',ctx.bizProfit>=0?'var(--ember)':'var(--rust)')}
        ${kpi('Personal Bills',fmtReporting(ctx.personalBills),ctx.cmdFilter==='thisMonth'?'this month':ctx.cmdFilter==='lastMonth'?'last month':ctx.cmdFilter==='thisFy'?'this '+ctx.fy.label:ctx.cmdFilter==='lastFy'?'last '+ctx.prevFy.label:'all time','receipt','var(--gold)')}
        ${kpi('Total Assets',fmtReporting(ctx.totalAssets),'snapshot — across everything','wallet','var(--jade)')}
        ${kpi('Net Worth',fmtReporting(ctx.totalNet),`assets ${fmtReporting(ctx.totalAssets)} − liab ${fmtReporting(ctx.totalLiab)}`,ctx.totalNet>=0?'trendUp':'trendDown',ctx.totalNet>=0?'var(--ember)':'var(--rust)')}
      </div>
    </div>`;
  }
  if(key==='breakdown'){
    if(ctx.profileSummaries.length===0)return'';
    return wrap('breakdown',`
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Per-profile breakdown</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">All figures in ${ctx.fx.reporting}</div>
      <table class="table" style="margin:0;">
        <thead><tr><th>Profile</th><th style="text-align:right;">Revenue</th><th style="text-align:right;" class="table-hide-mobile">Costs</th><th style="text-align:right;">Net</th><th style="text-align:right;" class="table-hide-mobile">Net Worth</th></tr></thead>
        <tbody>
          ${ctx.profileSummaries.sort((a,b)=>b.profit-a.profit).map(p=>`<tr style="cursor:pointer;" onclick="navigate('dashboard','${p.id}')">
            <td><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${p.color};margin-right:8px;vertical-align:middle;"></span>${escapeHtml(p.name)}</td>
            <td class="mono" style="text-align:right;color:var(--jade);">${fmtReporting(p.revenue)}</td>
            <td class="mono table-hide-mobile" style="text-align:right;color:var(--rust);">${fmtReporting(p.costs)}</td>
            <td class="mono" style="text-align:right;color:${p.profit>=0?'var(--ember)':'var(--rust)'};font-weight:500;">${fmtReporting(p.profit)}</td>
            <td class="mono table-hide-mobile" style="text-align:right;color:${p.netWorth>=0?'var(--bone)':'var(--rust)'};">${fmtReporting(p.netWorth)}</td>
          </tr>`).join('')}
        </tbody>
      </table>`);
  }
  if(key==='calendar'){
    const ccal=window._cmdCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:new Date().toISOString().slice(0,10)};
    if(!ccal.mode)ccal.mode='month';
    if(!ccal.day)ccal.day=new Date().toISOString().slice(0,10);
    window._cmdCal=ccal;
    const events=buildCommandEventsForMonth(ccal.year,ccal.month);
    // For week/day views we may need adjacent months
    const weekEvents=ccal.mode==='week'?buildEventsForRange(ccal):events;
    const eventCount=Object.values(events).reduce((a,b)=>a+b.length,0);
    const headerLabel=ccal.mode==='month'?new Date(ccal.year,ccal.month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'})
      :ccal.mode==='week'?weekRangeLabel(ccal)
      :new Date(ccal.day).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    return wrap('calendar',`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
        <div>
          <div class="serif" style="font-size:18px;font-weight:500;">Calendar · ${headerLabel}</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${ccal.mode==='month'?eventCount+' event'+(eventCount===1?'':'s')+' this month':'recurring bills, contact follow-ups, due dates, custom notes'}</div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
          ${calViewToggleButtons('cmd',ccal.mode)}
          <button class="btn btn-ghost btn-sm" onclick="cmdCalNav(-1)" style="transform:rotate(180deg);" aria-label="Previous">${icon('chevron',13)}</button>
          <button class="btn btn-ghost btn-sm" onclick="cmdCalToday()">Today</button>
          <button class="btn btn-ghost btn-sm" onclick="cmdCalNav(1)" aria-label="Next">${icon('chevron',13)}</button>
        </div>
      </div>
      <div style="display:flex;gap:14px;font-size:11px;color:var(--bone-mute);margin-bottom:12px;flex-wrap:wrap;">
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#ffb547;"></span>Bill</span>
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#ff5c7a;"></span>Liability due</span>
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#3df5a8;"></span>Revenue due</span>
        <span style="display:flex;align-items:center;gap:6px;"><span style="width:8px;height:8px;border-radius:50%;background:#4fe3f0;"></span>Note / Lead action</span>
      </div>
      ${ccal.mode==='month'?renderCalendarGrid({year:ccal.year,month:ccal.month,eventsByDate:events,onClickFn:'openCalendarDayModal',monthLabel:false})
        :ccal.mode==='week'?renderWeekView(ccal,weekEvents,'openCalendarDayModal')
        :renderDayView(ccal,events,'openCalendarDayModal')}`);
  }
  if(key==='activity'){
    return wrap('activity',`
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Recent activity</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Last 12 entries across included scopes</div>
      ${ctx.recentActivity.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;text-align:center;">No activity yet.</div>`:`
        ${ctx.recentActivity.slice(0,12).map(a=>{
          const colour=a.type==='revenue'?'var(--jade)':a.type==='cost'?'var(--rust)':'var(--gold)';
          const sign=a.type==='revenue'?'+':'−';
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;">
            <div style="min-width:0;flex:1;">
              <div style="font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(a.label||'—')}</div>
              <div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(a.scope)}${a.category?' · '+escapeHtml(a.category):''} · ${fmtShortDate(a.date)}</div>
            </div>
            <span class="mono" style="color:${colour};font-weight:500;margin-left:12px;flex-shrink:0;">${sign}${a.currency||'£'}${(a.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}</span>
          </div>`;
        }).join('')}
      `}`);
  }
  return '';
}

// ============ CALENDAR VIEW HELPERS ============
function calViewToggleButtons(scope,mode){
  // scope: 'cmd' | 'routine' | 'bills'
  const setMode=m=>`window._${scope==='cmd'?'cmdCal':scope==='routine'?'routineCal':'billsCal'}=Object.assign(window._${scope==='cmd'?'cmdCal':scope==='routine'?'routineCal':'billsCal'}||{},{mode:'${m}'});render()`;
  return `<div style="display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;">
    ${['month','week','day'].map(m=>`<button class="btn btn-sm ${mode===m?'btn-primary':''}" style="border:0;border-radius:0;padding:5px 10px;font-size:11.5px;text-transform:capitalize;" onclick="${setMode(m)}">${m}</button>`).join('')}
  </div>`;
}

function weekRangeLabel(cal){
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7; // Mon=0
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const end=new Date(start);end.setDate(start.getDate()+6);
  const sameMonth=start.getMonth()===end.getMonth();
  return `${start.toLocaleDateString('en-GB',{day:'numeric',month:sameMonth?undefined:'short'})} – ${end.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}`;
}

function buildEventsForRange(cal){
  // Build events spanning the visible week (which may straddle month boundaries)
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7;
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const end=new Date(start);end.setDate(start.getDate()+6);
  // Merge events from up to 2 months
  const out={};
  const months=new Set();
  months.add(`${start.getFullYear()}-${start.getMonth()}`);
  months.add(`${end.getFullYear()}-${end.getMonth()}`);
  months.forEach(k=>{
    const [y,m]=k.split('-').map(Number);
    const ev=buildCommandEventsForMonth(y,m);
    Object.entries(ev).forEach(([d,arr])=>{out[d]=(out[d]||[]).concat(arr)});
  });
  return out;
}

function renderWeekView(cal,eventsByDate,onClickFn){
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7;
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const todayStr=today();
  const dayHeaders=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  let html=`<div class="cal-week-grid" style="margin-bottom:6px;font-size:10px;color:var(--bone-mute);text-align:center;letter-spacing:0.06em;text-transform:uppercase;">`;
  for(let i=0;i<7;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    html+=`<div>${dayHeaders[i]} <span style="color:var(--bone);font-weight:500;">${d.getDate()}</span></div>`;
  }
  html+=`</div><div class="cal-week-grid">`;
  for(let i=0;i<7;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const ds=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const events=eventsByDate[ds]||[];
    const isToday=ds===todayStr;
    const click=onClickFn?`onclick="${onClickFn}('${ds}')"`:'';
    html+=`<div class="cal-week-cell ${isToday?'today':''}" ${click}>
      ${events.slice(0,5).map(e=>`<div class="cal-event" style="background:${e.color}20;color:${e.color};border-left:2px solid ${e.color};">${escapeHtml(e.label||'')}</div>`).join('')}
      ${events.length>5?`<div style="font-size:10px;color:var(--bone-mute);">+${events.length-5} more</div>`:''}
    </div>`;
  }
  html+=`</div>`;
  return html;
}

function renderDayView(cal,eventsByDate,onClickFn){
  const ds=cal.day||today();
  const events=eventsByDate[ds]||[];
  if(events.length===0){
    return `<div class="cal-day-list" ${onClickFn?`onclick="${onClickFn}('${ds}')" style="cursor:pointer;text-align:center;color:var(--bone-mute);"`:''}>
      <div style="padding:30px 0;">No events for this day. ${onClickFn?'<br><span style="font-size:12px;">'+(PHONE?'Tap':'Click')+' to add a note.</span>':''}</div>
    </div>`;
  }
  return `<div class="cal-day-list">
    ${events.map(e=>`<div class="cal-event-large" style="background:${e.color}15;border-left-color:${e.color};color:${e.color};" ${onClickFn?`onclick="${onClickFn}('${ds}')" style="cursor:pointer;background:${e.color}15;border-left:3px solid ${e.color};"`:''}>
      <span style="color:var(--bone);">${escapeHtml(e.label||'')}</span>
      <span class="mono" style="font-size:11px;color:${e.color};text-transform:uppercase;letter-spacing:0.06em;">${e.type||''}</span>
    </div>`).join('')}
  </div>`;
}

function toggleCmdInclude(scope){
  if(!window._cmdInclude)window._cmdInclude={};
  window._cmdInclude[scope]=!window._cmdInclude[scope];
  render();
}

function cmdCalNav(delta){
  const cal=window._cmdCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  if(cal.mode==='month'){
    cal.month+=delta;
    if(cal.month<0){cal.month=11;cal.year--}
    if(cal.month>11){cal.month=0;cal.year++}
    // Sync day to first of new month for downstream day-mode use
    cal.day=`${cal.year}-${String(cal.month+1).padStart(2,'0')}-01`;
  }else if(cal.mode==='week'){
    const d=new Date(cal.day);d.setDate(d.getDate()+delta*7);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }else{ // day
    const d=new Date(cal.day);d.setDate(d.getDate()+delta);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }
  window._cmdCal=cal;
  render();
}
function cmdCalToday(){
  const t=new Date();
  window._cmdCal={year:t.getFullYear(),month:t.getMonth(),mode:(window._cmdCal&&window._cmdCal.mode)||'month',day:today()};
  render();
}


// ============ PROFILES VIEW ============
function renderProfiles(){
  const profiles=store.get('profiles:list',[]);
  const cards=profiles.map(p=>{
    const contacts=store.get(`profile:${p.id}:contacts`,[]);
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    const meta=store.get(`profile:${p.id}:meta`)||{};
    const inventory=store.get(`profile:${p.id}:inventory`,[]);
    const defCur=meta.currency||'£';
    const revenue=txs.filter(t=>t.type==='revenue').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||defCur),0);
    const won=contacts.filter(c=>c.stage==='Won').length;
    const modules=getProfileModules(meta);
    const hasInventory=modules.includes('inventory');
    const hasContacts=modules.includes('contacts');
    // Build the three-stat block based on enabled modules
    let stat1,stat2;
    if(hasInventory){
      const stockUnits=inventory.reduce((a,b)=>a+(b.qtyOnHand||0),0);
      const sold=inventory.reduce((a,b)=>a+(b.qtySold||0),0);
      stat1={label:'Stock',value:stockUnits};
      stat2={label:'Sold',value:sold};
    }else if(hasContacts){
      stat1={label:'Contacts',value:contacts.length};
      stat2={label:'Won',value:won};
    }else{
      const txCount=txs.length;
      stat1={label:'Entries',value:txCount};
      stat2={label:'Costs',value:fmtReporting(txs.filter(t=>t.type==='cost').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||defCur),0))};
    }
    return `<div class="card" style="padding:22px;cursor:pointer;transition:all 160ms;position:relative;" onclick="navigate('dashboard','${p.id}')" onmouseenter="this.style.borderColor='var(--line-2)';this.querySelector('.edit-btn').style.opacity='1'" onmouseleave="this.style.borderColor='var(--line)';this.querySelector('.edit-btn').style.opacity='0'">
      <button class="btn btn-ghost btn-sm edit-btn" style="position:absolute;top:14px;right:14px;opacity:0;transition:opacity 120ms;z-index:2;" onclick="event.stopPropagation();openEditProfile('${p.id}')">${icon('edit',13)}</button>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;">
        <div style="width:38px;height:38px;border-radius:8px;background:${p.color}20;border:1px solid ${p.color}40;display:flex;align-items:center;justify-content:center;color:${p.color};">${icon('building',18)}</div>
        <span class="chip" style="background:var(--ink-3);color:var(--bone-dim);border:1px solid var(--line);">${escapeHtml(p.type)}</span>
      </div>
      <div class="serif" style="font-size:22px;font-weight:500;margin-bottom:4px;letter-spacing:-0.01em;">${escapeHtml(p.name)}</div>
      <div style="color:var(--bone-mute);font-size:12px;margin-bottom:18px;">Created ${fmtDate(p.createdAt)}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding-top:16px;border-top:1px solid var(--line);">
        <div><div class="label">${stat1.label}</div><div class="mono" style="font-size:14px;margin-top:4px;font-weight:500;">${stat1.value}</div></div>
        <div><div class="label">${stat2.label}</div><div class="mono" style="font-size:14px;margin-top:4px;font-weight:500;">${stat2.value}</div></div>
        <div><div class="label">Revenue</div><div class="mono" style="font-size:14px;margin-top:4px;font-weight:500;">${fmtReporting(revenue)}</div></div>
      </div>
    </div>`;
  }).join('');

  return `<div class="page" style="max-width:1200px;">
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Your portfolio</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Profiles</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${profiles.length===0?'No profiles yet — create one to get started.':`${profiles.length} ${profiles.length===1?'profile':'profiles'} tracked`}</div>
      </div>
      <button class="btn btn-primary" onclick="openNewProfile()">${icon('plus',15)} New Profile</button>
    </div>
    ${profiles.length===0?`<div class="card" style="padding:60px;text-align:center;">
      <div style="margin-bottom:16px;display:flex;justify-content:center;">${icon('building',32,'var(--bone-mute)')}</div>
      <div class="serif" style="font-size:20px;margin-bottom:6px;">Start a new profile</div>
      <div style="color:var(--bone-dim);font-size:14px;margin-bottom:20px;">Each profile is a self-contained CRM for one business or venture.</div>
      <button class="btn btn-primary" onclick="openNewProfile()">${icon('plus',15)} Create your first profile</button>
    </div>`:`<div class="stagger" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">${cards}</div>`}
  </div>`;
}

function openNewProfile(editingId){
  const colors=['#4fe3f0','#3df5a8','#ffb547','#7aa2ff','#b57cff','#ff5c7a','#ffe066'];
  const allTypes=getAllTypes();
  const existing=editingId?store.get(`profile:${editingId}:meta`):null;
  const isEdit=!!existing;
  const initialModules=existing?getProfileModules(existing):MODULE_DEFAULTS['Lead Gen'];
  const initialType=existing?.type||'Lead Gen';
  const initialColor=existing?.color||colors[0];
  const initialCurrency=existing?.currency||'£';
  const initialName=existing?.name||'';

  showModal(isEdit?'Edit profile':'New profile',`<div style="display:flex;flex-direction:column;gap:16px;">
    <div><div class="label" style="margin-bottom:6px;">Business name</div><input class="field" id="np-name" placeholder="e.g. Acme Trading" value="${escAttr(initialName)}"></div>

    <div>
      <div class="label" style="margin-bottom:6px;">Type</div>
      <select class="field" id="np-type" onchange="onTypeChange()">
        ${allTypes.map(t=>`<option value="${escAttr(t)}" ${t===initialType?'selected':''}>${escapeHtml(t)}</option>`).join('')}
        <option value="__custom__">+ Add custom type…</option>
      </select>
      <div id="np-custom-row" style="display:none;margin-top:8px;">
        <input class="field" id="np-custom" placeholder="e.g. Restaurant / Real estate / Agency">
      </div>
    </div>

    <div>
      <div class="label" style="margin-bottom:8px;">Modules</div>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:10px;">Dashboard, Ledger and Balance Sheet are always on. Toggle the rest based on what this business needs.</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${ALL_MODULES.map(m=>`<label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
          <input type="checkbox" id="np-mod-${m}" ${initialModules.includes(m)?'checked':''} style="accent-color:var(--ember);">
          <span>${MODULE_LABELS[m]}</span>
          <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">
            ${m==='contacts'?'Leads, deals, pipeline stages':m==='analytics'?'Charts, conversion, sales trends':m==='inventory'?'Stock, units, sales channels':''}
          </span>
        </label>`).join('')}
      </div>
    </div>

    <div><div class="label" style="margin-bottom:6px;">Default currency</div><select class="field" id="np-currency">
      ${CURRENCIES.map(c=>`<option value="${c.symbol}" ${c.symbol===initialCurrency?'selected':''}>${c.label}</option>`).join('')}
    </select></div>

    <div><div class="label" style="margin-bottom:8px;">Accent colour</div>
      <div id="np-colors" style="display:flex;gap:8px;">${colors.map(c=>`<button onclick="document.querySelectorAll('#np-colors button').forEach(b=>b.style.border='2px solid transparent');this.style.border='2px solid var(--bone)';" data-color="${c}" style="width:28px;height:28px;border-radius:6px;background:${c};border:${c===initialColor?'2px solid var(--bone)':'2px solid transparent'};cursor:pointer;"></button>`).join('')}</div>
    </div>
  </div>`,()=>{
    const name=document.getElementById('np-name').value.trim();
    if(!name){alert('Please enter a business name.');return false}

    let type=document.getElementById('np-type').value;
    if(type==='__custom__'){
      const custom=document.getElementById('np-custom').value.trim();
      if(!custom){alert('Please enter a custom type or pick one from the list.');return false}
      type=custom;
      addCustomType(custom);
    }

    const modules=ALL_MODULES.filter(m=>document.getElementById('np-mod-'+m).checked);
    const colorBtn=document.querySelector('#np-colors button[style*="2px solid var(--bone)"]')||document.querySelector('#np-colors button');
    const currency=document.getElementById('np-currency').value;
    const color=colorBtn.dataset.color;

    if(isEdit){
      const updated={...existing,name,type,color,currency,modules};
      store.set(`profile:${editingId}:meta`,updated);
      const list=store.get('profiles:list',[]);
      const idx=list.findIndex(p=>p.id===editingId);
      if(idx>=0){list[idx]={...list[idx],name,type,color};store.set('profiles:list',list)}
    }else{
      const id=uid();
      const meta={id,name,type,color,currency,modules,createdAt:new Date().toISOString()};
      store.set(`profile:${id}:meta`,meta);
      store.set(`profile:${id}:contacts`,[]);
      store.set(`profile:${id}:transactions`,[]);
      const list=store.get('profiles:list',[]);
      list.unshift({id,name,type,color,createdAt:meta.createdAt});
      store.set('profiles:list',list);
    }
    return true;
  });
}

// Show/hide custom-type input + auto-suggest modules when type changes
function onTypeChange(){
  const sel=document.getElementById('np-type');
  const customRow=document.getElementById('np-custom-row');
  const val=sel.value;
  if(val==='__custom__'){
    customRow.style.display='block';
    setTimeout(()=>document.getElementById('np-custom')?.focus(),50);
    return;
  }
  customRow.style.display='none';
  // Auto-suggest modules based on type — only if user hasn't manually toggled
  const defaults=MODULE_DEFAULTS[val];
  if(!defaults)return; // custom type, leave checkboxes alone
  ALL_MODULES.forEach(m=>{
    const cb=document.getElementById('np-mod-'+m);
    if(cb)cb.checked=defaults.includes(m);
  });
}

function openEditProfile(id){openNewProfile(id)}

// ============ DASHBOARD VIEW ============
function renderDashboard(){
  const meta=store.get(`profile:${state.profileId}:meta`);
  if(!meta)return'<div class="page">Profile not found.</div>';
  const cur=meta.currency||'£';
  const modules=getProfileModules(meta);
  const hasContacts=modules.includes('contacts');
  const hasInventory=modules.includes('inventory');

  const contacts=hasContacts?store.get(`profile:${state.profileId}:contacts`,[]):[];
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const inventory=hasInventory?store.get(`profile:${state.profileId}:inventory`,[]):[];

  const total=contacts.length;
  const won=contacts.filter(c=>c.stage==='Won').length;
  const lost=contacts.filter(c=>c.stage==='Lost').length;
  const active=total-won-lost;
  const conversion=total>0?((won/total)*100).toFixed(1):0;
  const revenue=txs.filter(t=>t.type==='revenue').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||cur),0);
  const costs=txs.filter(t=>t.type==='cost').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||cur),0);
  const fx=getFx();
  const dispCur=fx.reporting;
  const profit=revenue-costs;
  const cpl=total>0?(costs/total).toFixed(2):0;
  const recent=hasContacts?[...contacts].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5):[];

  // Inventory metrics
  const stockValue=hasInventory?inventory.reduce((a,b)=>a+toReporting((b.qtyOnHand||0)*(b.costPrice||0),b.currency||cur),0):0;
  const totalSold=hasInventory?inventory.reduce((a,b)=>a+(b.qtySold||0),0):0;
  const totalUnits=hasInventory?inventory.reduce((a,b)=>a+(b.qtyOnHand||0),0):0;

  const trend=[];
  for(let i=29;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().slice(0,10);
    const dayRev=txs.filter(t=>t.type==='revenue'&&t.date===ds).reduce((a,b)=>a+toReporting(b.amount||0,b.currency||cur),0);
    trend.push({date:ds,label:d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}),contacts:hasContacts?contacts.filter(c=>c.createdAt?.slice(0,10)===ds).length:0,revenue:dayRev});
  }

  const stagePie=hasContacts?STAGES.map(s=>({name:s,value:contacts.filter(c=>c.stage===s).length,color:STAGE_COLORS[s]})).filter(d=>d.value>0):[];

  const kpi=(label,value,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div>
    </div>
    <div class="serif mono" style="font-size:26px;font-weight:500;color:${accent};letter-spacing:-0.01em;">${value}</div>
  </div>`;

  // Build KPI tiles based on enabled modules
  const tiles=[];
  if(hasContacts){
    tiles.push(kpi('Total Contacts',total,'users'));
    tiles.push(kpi('Active Pipeline',active,'target','var(--gold)'));
    tiles.push(kpi('Won',won,'check','var(--ember)'));
    tiles.push(kpi('Conversion',conversion+'%','trendUp','var(--jade)'));
  }
  if(hasInventory){
    tiles.push(kpi('Stock Value',fmtReporting(stockValue),'package','var(--ember)'));
    tiles.push(kpi('Units in Stock',totalUnits,'package','var(--gold)'));
    tiles.push(kpi('Units Sold',totalSold,'trendUp','var(--jade)'));
  }
  tiles.push(kpi('Revenue',fmtReporting(revenue),'dollar'));
  tiles.push(kpi('Net Profit',fmtReporting(profit),profit>=0?'trendUp':'trendDown',profit>=0?'var(--jade)':'var(--rust)'));
  {const __B=profileBalance(state.profileId,cur);tiles.push(kpi('Net Position',fmtReporting(__B.net),'wallet',__B.net>=0?'var(--ember)':'var(--rust)'));}

  // Build the second row based on what's enabled
  const activityChartTitle=hasContacts?'New contacts per day':'Daily revenue';
  const activityData=hasContacts?trend.map(t=>({label:t.label,value:t.contacts})):trend.map(t=>({label:t.label,value:t.revenue}));

  const subtitle=hasContacts?'A complete view of activity, pipeline and finances':hasInventory?'A complete view of stock, sales and finances':'A complete view of finances and activity';

  return `<div class="page">
    ${profileHeaderHtml('Dashboard',subtitle,`<button class="btn" onclick="openTxModal()">${icon('plus',14)} Log money in/out</button><button class="btn btn-primary" onclick="openMoveModal(null,{from:state.profileId,to:'personal'})">${icon('transfer',14)} Move money</button>`)}
    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${tiles.join('')}
    </div>

    ${renderDashInsights(state.profileId)}
    <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
      <div class="card" style="padding:22px;">
        <div style="margin-bottom:18px;">
          <div class="serif" style="font-size:18px;font-weight:500;">Activity · 30 days</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${activityChartTitle}</div>
        </div>
        ${renderAreaChart(activityData,'#4fe3f0')}
      </div>
      <div class="card" style="padding:22px;">
        ${hasContacts?`
          <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Pipeline</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">By stage</div>
          ${stagePie.length===0?`<div style="color:var(--bone-mute);font-size:13px;text-align:center;padding:40px 0;">No contacts yet</div>`:renderPieChart(stagePie)}
        `:hasInventory?`
          <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Top items</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">By units sold</div>
          ${inventory.length===0?`<div style="color:var(--bone-mute);font-size:13px;text-align:center;padding:40px 0;">No items yet</div>`:[...inventory].sort((a,b)=>(b.qtySold||0)-(a.qtySold||0)).slice(0,5).map(i=>{
            const max=Math.max(...inventory.map(x=>x.qtySold||0),1);
            const pct=((i.qtySold||0)/max)*100;
            return `<div style="margin-bottom:10px;">
              <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
                <span style="color:var(--bone-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:60%;">${escapeHtml(i.name)}</span>
                <span class="mono">${i.qtySold||0} sold</span>
              </div>
              <div style="height:5px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:var(--ember);"></div></div>
            </div>`;
          }).join('')}
        `:`
          <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Quick actions</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">This profile is ledger-only</div>
          <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="navigate('transactions','${state.profileId}')">${icon('plus',14)} Log a transaction</button>
        `}
      </div>
    </div>

    <div class="stagger grid-2 grid-mobile-1">
      ${hasContacts?`<div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div class="serif" style="font-size:18px;font-weight:500;">Recent contacts</div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('contacts','${state.profileId}')">View all ${icon('chevron',13)}</button>
        </div>
        ${recent.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;">No contacts yet.</div>`:recent.map(c=>`<div style="padding:10px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:13.5px;font-weight:500;">${escapeHtml(c.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(c.email||c.phone||'—')} · ${daysAgo(c.createdAt)}</div></div>
          <span class="chip" style="background:${STAGE_COLORS[c.stage]}20;color:${STAGE_COLORS[c.stage]};border:1px solid ${STAGE_COLORS[c.stage]}30;">${c.stage}</span>
        </div>`).join('')}
      </div>`:hasInventory?`<div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div class="serif" style="font-size:18px;font-weight:500;">Low stock</div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('inventory','${state.profileId}')">View all ${icon('chevron',13)}</button>
        </div>
        ${(()=>{const low=inventory.filter(i=>(i.qtyOnHand||0)<=3);return low.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;">All items healthy.</div>`:low.slice(0,5).map(i=>`<div style="padding:10px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:13.5px;font-weight:500;">${escapeHtml(i.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${i.qtySold||0} sold all-time</div></div>
          <span class="chip" style="background:rgba(255,92,122,0.15);color:var(--rust);border:1px solid rgba(255,92,122,0.3);">${i.qtyOnHand||0} left</span>
        </div>`).join('')})()}
      </div>`:`<div class="card" style="padding:22px;">
        <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:16px;">Recent transactions</div>
        ${(()=>{const recentTx=[...txs].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,5);return recentTx.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;">No transactions yet.</div>`:recentTx.map(t=>`<div style="padding:10px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;">
          <div><div style="font-size:13.5px;font-weight:500;">${escapeHtml(t.description)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(t.category||'')} · ${fmtShortDate(t.date)}</div></div>
          <span class="mono" style="color:${t.type==='revenue'?'var(--jade)':'var(--rust)'};font-weight:500;">${t.type==='revenue'?'+':'−'}${t.currency||cur}${(t.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}</span>
        </div>`).join('')})()}
      </div>`}

      ${renderFinancialPosition({pid:state.profileId,cur,revenue,costs,profit,hasContacts,hasInventory,totalSold,cpl,dispCur,stockValue,txs})}
    </div>
  </div>`;
}

function profileHeaderHtml(title,subtitle,actions=''){
  const meta=store.get(`profile:${state.profileId}:meta`);
  if(!meta)return'';
  return `<div class="header-row header-mobile">
    <div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="width:8px;height:8px;border-radius:2px;background:${meta.color};"></span>
        <div class="label">${escapeHtml(meta.name)} · ${escapeHtml(meta.type)}</div>
      </div>
      <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">${title}</h1>
      ${subtitle?`<div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${subtitle}</div>`:''}
    </div>
    ${actions?`<div style="display:flex;gap:8px;flex-wrap:wrap;">${actions}</div>`:''}
  </div>`;
}

// ============ CHARTS ============
function renderAreaChart(data,color='#4fe3f0'){
  if(!data||data.length===0||data.every(d=>d.value===0))return `<div style="height:240px;display:flex;align-items:center;justify-content:center;color:var(--bone-mute);font-size:13px;">No data yet</div>`;
  const W=600,H=180,P=20;
  const max=Math.max(...data.map(d=>d.value),1);
  const step=(W-P*2)/(data.length-1);
  const pts=data.map((d,i)=>[P+i*step,H-P-(d.value/max)*(H-P*2)]);
  const path=pts.map((p,i)=>(i===0?'M':'L')+p[0]+','+p[1]).join('');
  const area=path+`L${pts[pts.length-1][0]},${H-P}L${P},${H-P}Z`;
  const labels=data.filter((_,i)=>i%5===0||i===data.length-1);
  return `<svg viewBox="0 0 ${W} ${H+20}" style="width:100%;height:240px;" preserveAspectRatio="none">
    <defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.4"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient></defs>
    ${[0.25,0.5,0.75].map(f=>`<line x1="${P}" x2="${W-P}" y1="${P+f*(H-P*2)}" y2="${P+f*(H-P*2)}" stroke="#26262d" stroke-dasharray="2 4"/>`).join('')}
    <path d="${area}" fill="url(#ga)"/>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5"/>
    ${labels.map((d,i)=>{const idx=data.indexOf(d);const x=P+idx*step;return `<text x="${x}" y="${H+15}" fill="#7d86b0" font-size="9" text-anchor="middle" font-family="JetBrains Mono">${escapeHtml(d.label)}</text>`}).join('')}
  </svg>`;
}

function renderPieChart(data){
  const total=data.reduce((a,b)=>a+b.value,0);
  if(total===0)return'';
  const cx=80,cy=80,r=60,ir=38;
  let angle=-Math.PI/2;
  const arcs=data.map(d=>{
    const slice=(d.value/total)*Math.PI*2;
    const x1=cx+Math.cos(angle)*r,y1=cy+Math.sin(angle)*r;
    const x2=cx+Math.cos(angle+slice)*r,y2=cy+Math.sin(angle+slice)*r;
    const x3=cx+Math.cos(angle+slice)*ir,y3=cy+Math.sin(angle+slice)*ir;
    const x4=cx+Math.cos(angle)*ir,y4=cy+Math.sin(angle)*ir;
    const large=slice>Math.PI?1:0;
    angle+=slice;
    return `<path d="M${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${x3},${y3} A${ir},${ir} 0 ${large} 0 ${x4},${y4} Z" fill="${d.color}"/>`;
  }).join('');
  return `<div style="display:flex;justify-content:center;margin-bottom:12px;"><svg viewBox="0 0 160 160" style="width:160px;height:160px;">${arcs}</svg></div>
    ${data.map(s=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;font-size:12px;">
      <div style="display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:2px;background:${s.color};"></span><span style="color:var(--bone-dim);">${s.name}</span></div>
      <span class="mono" style="color:var(--bone);">${s.value}</span>
    </div>`).join('')}`;
}

function renderBarChart(data,colors=['#3df5a8','#ff5c7a']){
  if(!data||data.length===0)return `<div style="height:240px;display:flex;align-items:center;justify-content:center;color:var(--bone-mute);font-size:13px;">No data yet</div>`;
  const W=600,H=200,P=24;
  const keys=Object.keys(data[0]).filter(k=>k!=='label');
  const max=Math.max(...data.flatMap(d=>keys.map(k=>d[k])),1);
  const slot=(W-P*2)/data.length;
  const barW=Math.max(2,slot/(keys.length+0.5));
  return `<svg viewBox="0 0 ${W} ${H+20}" style="width:100%;height:240px;" preserveAspectRatio="none">
    ${[0.25,0.5,0.75].map(f=>`<line x1="${P}" x2="${W-P}" y1="${P+f*(H-P*2)}" y2="${P+f*(H-P*2)}" stroke="#26262d" stroke-dasharray="2 4"/>`).join('')}
    ${data.map((d,i)=>keys.map((k,j)=>{
      const x=P+i*slot+j*barW+(slot-barW*keys.length)/2;
      const h=(d[k]/max)*(H-P*2);
      return `<rect x="${x}" y="${H-P-h}" width="${barW-1}" height="${h}" fill="${colors[j%colors.length]}"/>`;
    }).join('')).join('')}
    ${data.filter((_,i)=>i%Math.max(1,Math.floor(data.length/8))===0).map(d=>{const i=data.indexOf(d);return `<text x="${P+i*slot+slot/2}" y="${H+15}" fill="#7d86b0" font-size="9" text-anchor="middle" font-family="JetBrains Mono">${escapeHtml(d.label)}</text>`}).join('')}
  </svg>`;
}

// ============ CONTACTS VIEW ============
function renderContacts(){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const search=window._contactSearch||'';
  const stageFilter=window._stageFilter||'All';

  const filtered=contacts.filter(c=>{
    if(stageFilter!=='All'&&c.stage!==stageFilter)return false;
    if(!search)return true;
    const s=search.toLowerCase();
    const hay=`${c.name||''} ${c.email||''} ${c.phone||''} ${c.company||''} ${c.title||''} ${c.city||''} ${c.country||''} ${c.linkedinUrl||''} ${c.notes||''}`.toLowerCase();
    return hay.includes(s);
  });

  // Build "stage counts" for the export-by-stage dropdown
  const stageCounts={};
  contacts.forEach(c=>{stageCounts[c.stage||'—']=(stageCounts[c.stage||'—']||0)+1});

  const actions=`
    <button class="btn" onclick="openImportContactsModal()">${icon('upload',14)} Import CSV</button>
    <div style="position:relative;display:inline-block;">
      <button class="btn" onclick="toggleExportMenu(event)">${icon('download',14)} Export ${icon('chevron',12)}</button>
      <div id="export-menu" style="display:none;position:absolute;top:calc(100% + 4px);right:0;background:var(--ink-2);border:1px solid var(--line);border-radius:6px;box-shadow:0 8px 24px rgba(0,0,0,0.4);min-width:230px;z-index:30;padding:6px;">
        <div class="label" style="padding:8px 10px 4px;">All contacts</div>
        <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:flex-start;text-align:left;" onclick="exportContactsCSV();closeExportMenu()">${icon('download',12)} CSV (${contacts.length})</button>
        <button class="btn btn-ghost btn-sm" style="width:100%;justify-content:flex-start;text-align:left;" onclick="exportContactsPDF('all');closeExportMenu()">${icon('file',12)} PDF (${contacts.length})</button>
        ${Object.keys(stageCounts).length>0?`<div style="height:1px;background:var(--line);margin:6px 0;"></div><div class="label" style="padding:4px 10px;">By stage</div>${STAGES.filter(s=>stageCounts[s]).map(s=>`
          <div style="display:flex;gap:2px;padding:2px 0;">
            <button class="btn btn-ghost btn-sm" style="flex:1;justify-content:flex-start;text-align:left;font-size:11.5px;" onclick="exportContactsByStageCSV('${escAttr(s)}');closeExportMenu()">${escapeHtml(s)} <span style="color:var(--bone-mute);margin-left:auto;">${stageCounts[s]} · CSV</span></button>
            <button class="btn btn-ghost btn-sm" style="padding:4px 8px;" title="Export ${escapeHtml(s)} as PDF" onclick="exportContactsPDF('${escAttr(s)}');closeExportMenu()">${icon('file',12)}</button>
          </div>
        `).join('')}`:''}
      </div>
    </div>
    <button class="btn btn-primary" onclick="openContactModal()">${icon('plus',14)} New</button>
  `;

  return `<div class="page" onclick="closeExportMenu(event)">
    ${profileHeaderHtml('Contacts',`${contacts.length} total · ${filtered.length} shown`,actions)}

    <div id="bulk-bar" class="bulk-bar" style="display:none;">
      <span class="count">0 selected</span>
      <span style="color:var(--bone-mute);font-size:12px;">·</span>
      <button class="btn btn-sm" onclick="exportSelectedContactsCSV()">${icon('download',12)} CSV</button>
      <button class="btn btn-sm" onclick="exportContactsPDF('selected')">${icon('file',12)} PDF</button>
      <button class="btn btn-sm" onclick="bulkChangeStage()">${icon('refresh',12)} Change stage</button>
      <button class="btn btn-sm btn-danger" onclick="bulkDeleteContacts()">${icon('trash',12)} Delete</button>
      <button class="btn btn-sm btn-ghost" style="margin-left:auto;" onclick="clearSelectedContacts();rerenderContactsTable()">Clear</button>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
      <div style="position:relative;flex:1;min-width:200px;">
        <span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--bone-mute);pointer-events:none;display:flex;">${icon('search',14,'var(--bone-mute)')}</span>
        <input class="field" id="contact-search" style="padding-left:34px;" placeholder="Search name, email, company, title, location, notes…" value="${escAttr(search)}" oninput="window._contactSearch=this.value;rerenderContactsTable()">
      </div>
      <select class="field" style="width:200px;" onchange="window._stageFilter=this.value;rerenderContactsTable()">
        <option value="All" ${stageFilter==='All'?'selected':''}>All stages</option>
        ${STAGES.map(s=>`<option value="${escAttr(s)}" ${stageFilter===s?'selected':''}>${s}${stageCounts[s]?' ('+stageCounts[s]+')':''}</option>`).join('')}
      </select>
      <select class="field" style="width:200px;" onchange="handleSelectMenuChange(this)">
        <option value="">— Select / categories —</option>
        <option value="all">Select all (filtered)</option>
        <option value="none">Deselect all</option>
        ${STAGES.filter(s=>stageCounts[s]).map(s=>`<option value="stage:${escAttr(s)}">+ Add "${s}" (${stageCounts[s]})</option>`).join('')}
      </select>
    </div>
    <div id="contacts-table-wrapper" class="card" style="overflow:auto;">
      ${renderContactsTable(filtered,contacts,meta)}
    </div>
  </div>`;
}

function toggleExportMenu(e){
  e&&e.stopPropagation();
  const menu=document.getElementById('export-menu');
  if(!menu)return;
  menu.style.display=menu.style.display==='none'?'block':'none';
}
function closeExportMenu(e){
  if(e&&e.target&&(e.target.closest('#export-menu')||e.target.closest('button')?.getAttribute('onclick')?.includes('toggleExportMenu')))return;
  const menu=document.getElementById('export-menu');
  if(menu)menu.style.display='none';
}
function handleSelectMenuChange(sel){
  const v=sel.value;
  if(!v){return}
  if(v==='all')selectAllContacts(true);
  else if(v==='none'){clearSelectedContacts();rerenderContactsTable()}
  else if(v.startsWith('stage:'))selectByStage(v.slice(6));
  sel.value='';
}

function renderContactsTable(filtered,contacts,meta){
  if(filtered.length===0)return `<div class="empty-state">${contacts.length===0?'No contacts yet. Add one or import a CSV.':'No matches.'}</div>`;
  const sel=getSelectedContacts();
  const allFilteredSelected=filtered.length>0&&filtered.every(c=>sel.has(c.id));
  return `<table class="table"><thead><tr>
    <th style="width:36px;padding-right:0;"><input type="checkbox" ${allFilteredSelected?'checked':''} onclick="selectAllContacts(this.checked)" title="Select all visible" style="accent-color:var(--ember);width:15px;height:15px;cursor:pointer;"></th>
    <th>Name</th><th class="table-hide-mobile">Title / Company</th><th>Stage</th><th class="table-hide-mobile">Location</th><th class="table-hide-mobile">Last contact</th><th class="table-hide-mobile">Attempts</th><th></th>
    </tr></thead><tbody>
    ${filtered.map(c=>{
      const stageColor=STAGE_COLORS[c.stage]||'#7d86b0';
      const checked=sel.has(c.id);
      return `<tr style="cursor:pointer;${checked?'background:rgba(79,227,240,0.06);':''}" onclick="openContactDetailModal('${c.id}')">
        <td onclick="event.stopPropagation()" class="cell-checkbox" style="padding-right:0;">
          <input type="checkbox" ${checked?'checked':''} onclick="toggleContactSelection('${c.id}',this.checked);if(!this.checked||event.shiftKey===false){const r=this.closest('tr');r.style.background=this.checked?'rgba(79,227,240,0.06)':''}">
        </td>
        <td>
          <div style="font-weight:500;">${escapeHtml(c.name)}</div>
          ${c.email?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px;">${escapeHtml(c.email)}</div>`:c.phone?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;" class="mono">${escapeHtml(c.phone)}</div>`:''}
        </td>
        <td class="table-hide-mobile" style="font-size:12.5px;color:var(--bone-dim);max-width:240px;">
          ${c.title?`<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(c.title)}</div>`:''}
          ${c.company?`<div style="font-size:11.5px;color:var(--bone-mute);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(c.company)}</div>`:''}
        </td>
        <td><span class="chip" style="background:${stageColor}20;color:${stageColor};border:1px solid ${stageColor}30;">${escapeHtml(c.stage)}</span></td>
        <td class="table-hide-mobile" style="font-size:12px;color:var(--bone-dim);">${c.city||c.country?`${escapeHtml(c.city||'')}${c.city&&c.country?', ':''}${escapeHtml(c.country||'')}`:'—'}</td>
        <td class="table-hide-mobile mono" style="font-size:11.5px;color:var(--bone-mute);">${c.lastContacted?fmtShortDate(c.lastContacted):'—'}</td>
        <td class="table-hide-mobile mono" style="font-size:12px;color:var(--bone-dim);text-align:center;">${c.contactAttempts||0}</td>
        <td onclick="event.stopPropagation()"><div style="display:flex;gap:4px;">
          <button class="btn btn-ghost btn-sm" onclick="exportSingleContactPDF('${c.id}')" title="Download as PDF">${icon('download',13)}</button>
          <button class="btn btn-ghost btn-sm" onclick="openContactModal('${c.id}')" title="Edit">${icon('edit',13)}</button>
          <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteContact('${c.id}')" title="Delete">${icon('trash',13)}</button>
        </div></td>
      </tr>`;
    }).join('')}
    </tbody></table>`;
}

function rerenderContactsTable(){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const search=window._contactSearch||'';
  const stageFilter=window._stageFilter||'All';
  const filtered=contacts.filter(c=>{
    if(stageFilter!=='All'&&c.stage!==stageFilter)return false;
    if(!search)return true;
    const s=search.toLowerCase();
    const hay=`${c.name||''} ${c.email||''} ${c.phone||''} ${c.company||''} ${c.title||''} ${c.city||''} ${c.country||''} ${c.linkedinUrl||''} ${c.notes||''}`.toLowerCase();
    return hay.includes(s);
  });
  const wrap=document.getElementById('contacts-table-wrapper');
  if(wrap)wrap.innerHTML=renderContactsTable(filtered,contacts,meta);
}
function rerenderContacts(){rerenderContactsTable()}

// Read-mode detail card. Click row → opens this. "Edit" inside switches to form modal.
function openContactDetailModal(id){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const c=contacts.find(x=>x.id===id);
  if(!c)return;
  const stageColor=STAGE_COLORS[c.stage]||'#7d86b0';
  const initials=(c.name||'').split(' ').filter(Boolean).slice(0,2).map(s=>s[0]).join('').toUpperCase()||'?';

  const fields=[
    {label:'Email',value:c.email,link:c.email?`mailto:${c.email}`:null,icon:'mail'},
    {label:'Phone',value:c.phone,link:c.phone?`tel:${c.phone}`:null,icon:'phone',mono:true},
    {label:'LinkedIn',value:c.linkedinUrl?'View profile':null,link:c.linkedinUrl,icon:'linkedin'},
    {label:'Company website',value:c.companyWebsite?(c.companyWebsite.replace(/^https?:\/\//,'').replace(/\/$/,'')):null,link:c.companyWebsite,icon:'globe'}
  ].filter(f=>f.value);

  const meta=[
    {label:'Title',value:c.title},
    {label:'Company',value:c.company},
    {label:'Location',value:[c.city,c.country].filter(Boolean).join(', ')},
    {label:'Source',value:c.source}
  ].filter(f=>f.value);

  const activity=[
    {label:'Contact attempts',value:c.contactAttempts||0},
    {label:'Last contacted',value:c.lastContacted?fmtDate(c.lastContacted):null},
    {label:'Next action',value:c.nextAction},
    {label:'Next action date',value:c.nextActionDate?fmtDate(c.nextActionDate):null},
    {label:'Outcome',value:c.outcome},
    {label:'Added',value:fmtDate(c.createdAt)}
  ].filter(f=>f.value!==null&&f.value!==undefined&&f.value!=='');

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:18px;">
    <div style="display:flex;align-items:center;gap:14px;">
      <div style="width:54px;height:54px;border-radius:50%;background:${stageColor}25;color:${stageColor};display:flex;align-items:center;justify-content:center;font-weight:600;font-size:18px;border:1px solid ${stageColor}40;flex-shrink:0;" class="serif">${initials}</div>
      <div style="min-width:0;flex:1;">
        <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;line-height:1.2;">${escapeHtml(c.name)}</div>
        <div style="display:flex;gap:8px;align-items:center;margin-top:6px;flex-wrap:wrap;">
          <span class="chip" style="background:${stageColor}20;color:${stageColor};border:1px solid ${stageColor}30;">${escapeHtml(c.stage)}</span>
          ${c.title?`<span style="font-size:12px;color:var(--bone-dim);">${escapeHtml(c.title)}</span>`:''}
          ${c.company?`<span style="font-size:12px;color:var(--bone-mute);">${c.title?'· ':''}${escapeHtml(c.company)}</span>`:''}
        </div>
      </div>
    </div>

    ${fields.length>0?`<div style="display:flex;flex-direction:column;gap:8px;">
      ${fields.map(f=>`<a href="${escAttr(f.link)}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--ink-3);border:1px solid var(--line);border-radius:6px;text-decoration:none;color:var(--bone);font-size:13px;${f.mono?'font-family:JetBrains Mono,monospace;':''}transition:border 120ms;" onmouseover="this.style.borderColor='var(--ember)'" onmouseout="this.style.borderColor='var(--line)'">
        <span style="color:var(--bone-mute);display:flex;">${icon(f.icon,14)}</span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(f.value)}</span>
      </a>`).join('')}
    </div>`:''}

    ${meta.length>0?`<div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px 16px;">
      ${meta.map((f,i)=>`<div style="display:flex;justify-content:space-between;padding:6px 0;font-size:13px;${i<meta.length-1?'border-bottom:1px solid var(--line);':''}">
        <span style="color:var(--bone-mute);">${f.label}</span>
        <span style="color:var(--bone);text-align:right;max-width:60%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(f.value)}</span>
      </div>`).join('')}
    </div>`:''}

    ${activity.length>0?`<div>
      <div class="label" style="margin-bottom:8px;">Activity</div>
      <div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px 16px;">
        ${activity.map((f,i)=>`<div style="display:flex;justify-content:space-between;padding:6px 0;font-size:13px;${i<activity.length-1?'border-bottom:1px solid var(--line);':''}">
          <span style="color:var(--bone-mute);">${f.label}</span>
          <span style="color:var(--bone);">${escapeHtml(String(f.value))}</span>
        </div>`).join('')}
      </div>
    </div>`:''}

    ${c.notes?`<div>
      <div class="label" style="margin-bottom:8px;">Notes</div>
      <div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px 16px;font-size:13px;line-height:1.6;color:var(--bone-dim);white-space:pre-wrap;">${escapeHtml(c.notes)}</div>
    </div>`:''}

    <div style="display:flex;gap:8px;padding-top:4px;justify-content:flex-end;">
      <button class="btn btn-ghost btn-danger" onclick="closeModal();deleteContact('${c.id}')">${icon('trash',13)} Delete</button>
      <button class="btn" onclick="closeModal();openContactModal('${c.id}')">${icon('edit',13)} Edit</button>
      <button class="btn btn-primary" onclick="closeModal()">Close</button>
    </div>
  </div>`,c.name);
}

function openContactModal(id){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const c=id?contacts.find(x=>x.id===id):{name:'',firstName:'',lastName:'',email:'',phone:'',title:'',company:'',city:'',country:'',linkedinUrl:'',companyWebsite:'',stage:'New',score:0,source:'',value:0,contactAttempts:0,lastContacted:'',nextAction:'',nextActionDate:'',outcome:'',notes:''};
  if(!c)return;
  showModal(id?'Edit contact':'New contact',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Full name *</div><input class="field" id="c-name" placeholder="e.g. Jane Smith" value="${escAttr(c.name)}"></div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Email</div><input class="field" id="c-email" type="email" value="${escAttr(c.email||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Phone</div><input class="field" id="c-phone" value="${escAttr(c.phone||'')}"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Job title</div><input class="field" id="c-title" placeholder="e.g. Programme Manager" value="${escAttr(c.title||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Company</div><input class="field" id="c-company" placeholder="e.g. Acme Ltd" value="${escAttr(c.company||'')}"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">City</div><input class="field" id="c-city" placeholder="e.g. London" value="${escAttr(c.city||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Country</div><input class="field" id="c-country" placeholder="e.g. United Kingdom" value="${escAttr(c.country||'')}"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">LinkedIn URL</div><input class="field" id="c-linkedin" placeholder="https://linkedin.com/in/…" value="${escAttr(c.linkedinUrl||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Company website</div><input class="field" id="c-website" placeholder="https://…" value="${escAttr(c.companyWebsite||'')}"></div>
    </div>

    <div style="height:1px;background:var(--line);margin:2px 0;"></div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Stage</div><select class="field" id="c-stage">${STAGES.map(s=>`<option value="${escAttr(s)}" ${c.stage===s?'selected':''}>${escapeHtml(s)}</option>`).join('')}</select></div>
      <div><div class="label" style="margin-bottom:6px;">Source</div><input class="field" id="c-source" placeholder="Meta Ads / Dripify / Referral" value="${escAttr(c.source||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Deal value</div><input class="field" id="c-value" type="number" value="${c.value||0}"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Contact attempts</div><input class="field" id="c-attempts" type="number" min="0" value="${c.contactAttempts||0}"></div>
      <div><div class="label" style="margin-bottom:6px;">Last contacted</div><input class="field" id="c-last" type="date" value="${c.lastContacted||''}"></div>
    </div>

    <div style="display:grid;grid-template-columns:2fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Next action</div><input class="field" id="c-nextaction" placeholder="e.g. Send pricing PDF" value="${escAttr(c.nextAction||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Next action date</div><input class="field" id="c-nextdate" type="date" value="${c.nextActionDate||''}"></div>
    </div>

    <div><div class="label" style="margin-bottom:6px;">Outcome</div><input class="field" id="c-outcome" placeholder="e.g. Booked discovery call / Declined" value="${escAttr(c.outcome||'')}"></div>

    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="c-notes" rows="3" placeholder="Any relevant context, conversation history, etc.">${escapeHtml(c.notes||'')}</textarea></div>
  </div>`,()=>{
    const name=document.getElementById('c-name').value.trim();
    if(!name){alert('Name is required.');return false}
    const parts=name.split(/\s+/);
    const upd={
      id:c.id||uid(),
      name,
      firstName:c.firstName||parts[0]||'',
      lastName:c.lastName||parts.slice(1).join(' ')||'',
      email:document.getElementById('c-email').value.trim(),
      phone:document.getElementById('c-phone').value.trim(),
      title:document.getElementById('c-title').value.trim(),
      company:document.getElementById('c-company').value.trim(),
      city:document.getElementById('c-city').value.trim(),
      country:document.getElementById('c-country').value.trim(),
      linkedinUrl:document.getElementById('c-linkedin').value.trim(),
      companyWebsite:document.getElementById('c-website').value.trim(),
      stage:document.getElementById('c-stage').value,
      source:document.getElementById('c-source').value.trim(),
      value:parseFloat(document.getElementById('c-value').value)||0,
      contactAttempts:parseInt(document.getElementById('c-attempts').value)||0,
      lastContacted:document.getElementById('c-last').value,
      nextAction:document.getElementById('c-nextaction').value.trim(),
      nextActionDate:document.getElementById('c-nextdate').value,
      outcome:document.getElementById('c-outcome').value.trim(),
      notes:document.getElementById('c-notes').value,
      score:c.score||0,
      createdAt:c.createdAt||new Date().toISOString(),
      updatedAt:new Date().toISOString()
    };
    const next=id?contacts.map(x=>x.id===id?upd:x):[upd,...contacts];
    store.set(`profile:${state.profileId}:contacts`,next);
    return true;
  });
}

function deleteContact(id){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const item=contacts.find(c=>c.id===id);
  if(!item)return;
  if(deleteWithUndo(`profile:${state.profileId}:contacts`,item,`contact "${item.name}"`))render();
}

function exportContactsCSV(){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const headers=['Date Added','Full Name','First Name','Last Name','Phone','Email','Title','Company','City','Country','LinkedIn URL','Company Website','Source','Status','Contact Attempts','Last Contacted','Next Action','Next Action Date','Outcome','Notes','Value'];
  const rows=contacts.map(c=>[
    c.createdAt?c.createdAt.slice(0,10):'',
    c.name||'',
    c.firstName||(c.name||'').split(' ')[0]||'',
    c.lastName||(c.name||'').split(' ').slice(1).join(' ')||'',
    c.phone||'',c.email||'',c.title||'',c.company||'',c.city||'',c.country||'',
    c.linkedinUrl||'',c.companyWebsite||'',c.source||'',c.stage||'',c.contactAttempts||0,
    c.lastContacted||'',c.nextAction||'',c.nextActionDate||'',c.outcome||'',c.notes||'',c.value||0
  ]);
  const csv=[headers,...rows].map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile(csv,`contacts-${meta?.name||state.profileId}-${today()}.csv`,'text/csv');
}

// Robust CSV row parser — handles quoted values with embedded commas/quotes
function parseCsvRow(line){
  const out=[];
  let cur='';
  let q=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'&&line[i+1]==='"'){cur+='"';i++}
    else if(ch==='"'){q=!q}
    else if(ch===','&&!q){out.push(cur);cur=''}
    else cur+=ch;
  }
  out.push(cur);
  return out;
}

// Parse a multiline CSV (handles \n inside quoted fields)
function parseCsv(text){
  // Normalise line endings
  text=text.replace(/\r\n/g,'\n').replace(/\r/g,'\n');
  const rows=[];
  let cur='';
  let q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(ch==='"'&&text[i+1]==='"'){cur+='""';i++}
    else if(ch==='"'){q=!q;cur+='"'}
    else if(ch==='\n'&&!q){if(cur.trim())rows.push(parseCsvRow(cur));cur=''}
    else cur+=ch;
  }
  if(cur.trim())rows.push(parseCsvRow(cur));
  return rows;
}

// Map a CSV header to a known contact field. Returns the field name or null.
function mapCsvHeader(h){
  const k=h.toLowerCase().trim();
  if(/(^|\W)(full\s*)?name(\W|$)/.test(k)&&!/first|last|company/.test(k))return'name';
  if(/first\s*name/.test(k))return'firstName';
  if(/last\s*name|surname/.test(k))return'lastName';
  if(/email/.test(k))return'email';
  if(/phone|tel|mobile|cell/.test(k))return'phone';
  if(/title|role|position/.test(k)&&!/job\s*description/.test(k))return'title';
  if(/company|organi[sz]ation|employer/.test(k)&&!/website|url/.test(k))return'company';
  if(/city|town/.test(k))return'city';
  if(/country/.test(k))return'country';
  if(/linkedin/.test(k))return'linkedinUrl';
  if(/website|url/.test(k)&&/company|business/.test(k))return'companyWebsite';
  if(/website|url/.test(k))return'companyWebsite';
  if(/source/.test(k))return'source';
  if(/(^|\W)(status|stage)(\W|$)/.test(k))return'stage';
  if(/contact\s*attempts|attempts/.test(k))return'contactAttempts';
  if(/last\s*contact/.test(k))return'lastContacted';
  if(/next\s*action\s*date/.test(k))return'nextActionDate';
  if(/next\s*action/.test(k))return'nextAction';
  if(/outcome|result/.test(k))return'outcome';
  if(/note/.test(k))return'notes';
  if(/value|amount|deal/.test(k))return'value';
  if(/score|tier/.test(k))return'score';
  if(/date\s*added|created|added/.test(k))return'createdAt';
  return null;
}

// ============ CSV IMPORT MODAL ============
function openImportContactsModal(file){
  const profiles=store.get('profiles:list',[]);
  if(profiles.length===0){alert('Create a profile first.');return}

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div>
      <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;margin-bottom:6px;">Import contacts from CSV</div>
      <div style="font-size:13px;color:var(--bone-dim);">Atlas auto-detects columns by header name. Review the mapping preview below before confirming.</div>
    </div>

    <div>
      <div class="label" style="margin-bottom:6px;">CSV file *</div>
      <input class="field" id="ci-file" type="file" accept=".csv" onchange="onImportFileChange()">
    </div>

    <div>
      <div class="label" style="margin-bottom:6px;">Import into profile *</div>
      <select class="field" id="ci-profile">
        ${profiles.map(p=>`<option value="${p.id}" ${p.id===state.profileId?'selected':''}>${escapeHtml(p.name)}</option>`).join('')}
      </select>
    </div>

    <div>
      <div class="label" style="margin-bottom:6px;">If a contact has the same email as an existing one</div>
      <select class="field" id="ci-dedupe">
        <option value="skip">Skip — keep existing</option>
        <option value="update" selected>Update existing record</option>
        <option value="create">Always add as new</option>
      </select>
    </div>

    <div id="ci-preview-wrap" style="display:none;">
      <div class="label" style="margin-bottom:6px;">Preview</div>
      <div id="ci-preview" style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px;font-size:12px;max-height:280px;overflow:auto;"></div>
    </div>

    <div style="display:flex;gap:8px;justify-content:flex-end;padding-top:4px;">
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" id="ci-confirm" onclick="confirmImportContacts()" disabled>Import</button>
    </div>
  </div>`);
}

function onImportFileChange(){
  const fileInput=document.getElementById('ci-file');
  const file=fileInput.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const text=e.target.result;
    const rows=parseCsv(text);
    if(rows.length<2){
      document.getElementById('ci-preview').innerHTML='<div style="color:var(--rust);">CSV appears empty or has no data rows.</div>';
      document.getElementById('ci-preview-wrap').style.display='block';
      return;
    }
    const headers=rows[0];
    const mappings=headers.map(h=>({raw:h,field:mapCsvHeader(h)}));
    const dataRows=rows.slice(1);
    const previewRows=dataRows.slice(0,3);

    // Show a mapping summary
    const recognised=mappings.filter(m=>m.field);
    const unrecognised=mappings.filter(m=>!m.field);

    let html=`<div style="margin-bottom:10px;color:var(--bone-dim);">Found <span class="mono" style="color:var(--bone);">${dataRows.length}</span> rows · <span class="mono" style="color:var(--jade);">${recognised.length}</span> column${recognised.length===1?'':'s'} mapped${unrecognised.length?` · <span class="mono" style="color:var(--bone-mute);">${unrecognised.length}</span> ignored`:''}</div>`;

    html+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px;">`;
    mappings.forEach(m=>{
      const ok=!!m.field;
      html+=`<div style="display:flex;justify-content:space-between;padding:6px 10px;background:${ok?'rgba(61,245,168,0.1)':'rgba(125,134,176,0.1)'};border:1px solid ${ok?'rgba(61,245,168,0.3)':'var(--line)'};border-radius:4px;">
        <span style="color:var(--bone-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(m.raw)}</span>
        <span style="color:${ok?'var(--jade)':'var(--bone-mute)'};font-family:'JetBrains Mono',monospace;font-size:11px;">${ok?'→ '+m.field:'ignored'}</span>
      </div>`;
    });
    html+=`</div>`;

    if(previewRows.length){
      html+=`<div class="label" style="margin-bottom:6px;">First ${previewRows.length} row${previewRows.length===1?'':'s'}:</div>`;
      previewRows.forEach((row,i)=>{
        const obj={};
        headers.forEach((h,j)=>{const m=mappings[j];if(m.field)obj[m.field]=row[j]});
        html+=`<div style="margin-bottom:6px;padding:8px 10px;background:var(--ink-2);border:1px solid var(--line);border-radius:4px;">
          <div style="font-weight:500;color:var(--bone);">${escapeHtml(obj.name||obj.firstName||'(no name)')}${obj.company?` · <span style="font-weight:400;color:var(--bone-mute);">${escapeHtml(obj.company)}</span>`:''}</div>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(obj.email||'')} ${obj.phone?'· '+escapeHtml(obj.phone):''} ${obj.stage?'· '+escapeHtml(obj.stage):''}</div>
        </div>`;
      });
    }

    document.getElementById('ci-preview').innerHTML=html;
    document.getElementById('ci-preview-wrap').style.display='block';
    document.getElementById('ci-confirm').disabled=false;
    // Stash for confirm step
    window._ciData={rows:dataRows,mappings,headers};
  };
  reader.readAsText(file);
}

function confirmImportContacts(){
  const data=window._ciData;
  if(!data){alert('Load a CSV file first.');return}
  const profileId=document.getElementById('ci-profile').value;
  const dedupe=document.getElementById('ci-dedupe').value;

  const existing=store.get(`profile:${profileId}:contacts`,[]);
  const byEmail={};
  existing.forEach(c=>{if(c.email)byEmail[c.email.toLowerCase()]=c});

  let added=0,updated=0,skipped=0;
  const next=[...existing];

  data.rows.forEach(row=>{
    const obj={};
    data.mappings.forEach((m,j)=>{
      if(!m.field)return;
      const v=(row[j]||'').trim();
      if(!v)return;
      if(m.field==='value'||m.field==='score'||m.field==='contactAttempts'){
        obj[m.field]=parseFloat(v)||0;
      }else{
        obj[m.field]=v;
      }
    });

    // Build full name from parts if missing
    if(!obj.name&&(obj.firstName||obj.lastName)){
      obj.name=[obj.firstName,obj.lastName].filter(Boolean).join(' ');
    }
    if(!obj.name)return; // skip nameless rows

    // Map stage values — if not in our STAGES list, default to 'New' but preserve original in notes
    if(obj.stage&&!STAGES.includes(obj.stage)){
      // Try a fuzzy match
      const found=STAGES.find(s=>s.toLowerCase()===obj.stage.toLowerCase());
      if(found)obj.stage=found;
      else obj.stage='New';
    }
    if(!obj.stage)obj.stage='New';

    // Handle createdAt — if it's just a date, keep as ISO date; else use now
    if(obj.createdAt&&/^\d{4}-\d{2}-\d{2}$/.test(obj.createdAt)){
      obj.createdAt=obj.createdAt+'T00:00:00.000Z';
    }else if(!obj.createdAt){
      obj.createdAt=new Date().toISOString();
    }

    // Dedupe by email
    const emailKey=(obj.email||'').toLowerCase();
    if(emailKey&&byEmail[emailKey]){
      if(dedupe==='skip'){skipped++;return}
      if(dedupe==='update'){
        const existingC=byEmail[emailKey];
        Object.assign(existingC,obj,{id:existingC.id,createdAt:existingC.createdAt,updatedAt:new Date().toISOString()});
        // mutate in place inside `next`
        const idx=next.findIndex(x=>x.id===existingC.id);
        if(idx>=0)next[idx]=existingC;
        updated++;
        return;
      }
      // 'create' falls through and adds as new
    }

    obj.id=uid();
    obj.updatedAt=new Date().toISOString();
    next.unshift(obj);
    if(emailKey)byEmail[emailKey]=obj;
    added++;
  });

  store.set(`profile:${profileId}:contacts`,next);
  closeModal();
  delete window._ciData;
  showToast(`Imported: ${added} added · ${updated} updated · ${skipped} skipped.`,null,null,5000);
  // Navigate into the target profile if it differs
  if(profileId!==state.profileId){
    navigate('contacts',profileId);
  }else{
    render();
  }
}

function downloadFile(content,filename,type){
  const blob=new Blob([content],{type});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),100);
}

// ============ ANALYTICS VIEW ============
function renderAnalytics(){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const range=window._anaRange||30;
  const cur=meta?.currency||'£';

  const byDay=[];
  for(let i=range-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().slice(0,10);
    byDay.push({label:d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}),revenue:txs.filter(t=>t.type==='revenue'&&t.date===ds).reduce((a,b)=>a+(b.amount||0),0),cost:txs.filter(t=>t.type==='cost'&&t.date===ds).reduce((a,b)=>a+(b.amount||0),0)});
  }

  const sourceMap={};
  contacts.forEach(c=>{const s=c.source||'Unknown';if(!sourceMap[s])sourceMap[s]={source:s,total:0,won:0};sourceMap[s].total++;if(c.stage==='Won')sourceMap[s].won++});
  const sources=Object.values(sourceMap).sort((a,b)=>b.total-a.total).slice(0,8);

  const funnel=STAGES.map(s=>({stage:s,count:contacts.filter(c=>c.stage===s).length,color:STAGE_COLORS[s]}));

  return `<div class="page">
    ${profileHeaderHtml('Analytics','Performance and conversion deep-dive',`<select class="field" style="width:140px;" onchange="window._anaRange=parseInt(this.value);render()">
      <option value="7" ${range===7?'selected':''}>Last 7 days</option>
      <option value="30" ${range===30?'selected':''}>Last 30 days</option>
      <option value="90" ${range===90?'selected':''}>Last 90 days</option>
      <option value="365" ${range===365?'selected':''}>Last year</option>
    </select>`)}

    <div class="stagger" style="display:grid;gap:16px;">
      <div class="card" style="padding:22px;">
        <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Revenue vs cost</div>
        <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Daily P&amp;L over the period</div>
        ${renderBarChart(byDay)}
        <div style="display:flex;gap:16px;margin-top:8px;font-size:11.5px;color:var(--bone-mute);">
          <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#3df5a8;margin-right:6px;vertical-align:middle;"></span>Revenue</span>
          <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#ff5c7a;margin-right:6px;vertical-align:middle;"></span>Cost</span>
        </div>
      </div>

      <div class="grid-2 grid-mobile-1">
        <div class="card" style="padding:22px;">
          <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Funnel</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Contacts at each stage</div>
          ${funnel.map(f=>{const max=Math.max(...funnel.map(x=>x.count),1);const pct=(f.count/max)*100;return `<div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span style="color:var(--bone-dim);">${f.stage}</span><span class="mono">${f.count}</span></div>
            <div style="height:8px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${f.color};transition:width 400ms;"></div></div>
          </div>`}).join('')}
        </div>
        <div class="card" style="padding:22px;">
          <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Sources</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Where contacts come from</div>
          ${sources.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;">No source data yet.</div>`:sources.map(s=>{const conv=s.total>0?((s.won/s.total)*100).toFixed(0):0;return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;">
            <span style="color:var(--bone-dim);">${escapeHtml(s.source)}</span>
            <div style="display:flex;gap:16px;align-items:center;"><span class="mono" style="font-size:11.5px;color:var(--bone-mute);">${conv}% conv</span><span class="mono" style="min-width:30px;text-align:right;">${s.total}</span></div>
          </div>`}).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ============ TRANSACTIONS VIEW ============
function renderTransactions(){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const sorted=[...txs].sort((a,b)=>new Date(b.date)-new Date(a.date));

  // Filters
  const catFilter=window._txCat||'All';
  const typeFilter=window._txType||'All';
  const monthFilter=window._txMonth||'all';
  const search=window._txSearch||'';
  const fy=getFiscalYear();
  const prevFy=getPreviousFiscalYear();
  const filtered=sorted.filter(t=>{
    if(typeFilter!=='All'&&t.type!==typeFilter)return false;
    if(catFilter!=='All'&&t.category!==catFilter)return false;
    if(monthFilter==='thisMonth'){const d=new Date(t.date),n=new Date();if(!(d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear()))return false}
    else if(monthFilter==='lastMonth'){const d=new Date(t.date),n=new Date(),r=new Date(n.getFullYear(),n.getMonth()-1,1);if(!(d.getMonth()===r.getMonth()&&d.getFullYear()===r.getFullYear()))return false}
    else if(monthFilter==='thisFy'){if(!inFiscalYear(t.date,fy))return false}
    else if(monthFilter==='lastFy'){if(!inFiscalYear(t.date,prevFy))return false}
    if(search){
      const s=search.toLowerCase();
      const hay=`${t.description||''} ${t.category||''} ${t.notes||''}`.toLowerCase();
      if(!hay.includes(s))return false;
    }
    return true;
  });

  // Per-currency totals (raw, no conversion)
  const revByCur={},costByCur={};
  txs.forEach(t=>{
    const c=t.currency||meta?.currency||'£';
    if(t.type==='revenue')revByCur[c]=(revByCur[c]||0)+(t.amount||0);
    else costByCur[c]=(costByCur[c]||0)+(t.amount||0);
  });

  // Reporting-currency totals (converted)
  const revRep=txs.filter(t=>t.type==='revenue').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||meta?.currency||'£'),0);
  const costRep=txs.filter(t=>t.type==='cost').reduce((a,b)=>a+toReporting(b.amount||0,b.currency||meta?.currency||'£'),0);
  const netRep=revRep-costRep;

  // Unpaid revenue (outstanding receivables)
  const unpaidTxs=txs.filter(t=>t.type==='revenue'&&t.paid===false);
  const unpaidRep=unpaidTxs.reduce((a,b)=>a+toReporting(b.amount||0,b.currency||meta?.currency||'£'),0);
  const todayKey=today();
  const overdueCount=unpaidTxs.filter(t=>t.dueDate&&t.dueDate<todayKey).length;

  // Cost breakdown by category (in reporting currency)
  const costByCat={};
  txs.filter(t=>t.type==='cost').forEach(t=>{
    const cat=t.category||'Other';
    costByCat[cat]=(costByCat[cat]||0)+toReporting(t.amount||0,t.currency||meta?.currency||'£');
  });
  const costCatList=Object.entries(costByCat).map(([cat,v])=>({cat,v,color:categoryColor(cat)})).sort((a,b)=>b.v-a.v);
  const totalCostRep=costRep||1;

  // Available categories for filter
  const usedCats=[...new Set(txs.map(t=>t.category).filter(Boolean))];

  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
    ${sub?`<div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">${sub}</div>`:''}
  </div>`;

  return `<div class="page" style="max-width:1300px;">
    ${profileHeaderHtml('Ledger','Money in, money out, and profit by category',`<button class="btn" onclick="openMoveModal(null,{from:state.profileId,to:'personal'})">${icon('transfer',14)} Move money</button><button class="btn" onclick="openCategoryManager()">${icon('sparkles',14)} Categories</button><button class="btn btn-primary" onclick="openTxModal()">${icon('plus',14)} New entry</button>`)}

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('Revenue',fmtReporting(revRep),Object.keys(revByCur).length>1?`raw: ${fmtMultiCur(revByCur)}`:null,'trendUp','var(--jade)')}
      ${kpi('Costs',fmtReporting(costRep),Object.keys(costByCur).length>1?`raw: ${fmtMultiCur(costByCur)}`:null,'trendDown','var(--rust)')}
      ${kpi('Net Profit',fmtReporting(netRep),`margin ${revRep>0?((netRep/revRep)*100).toFixed(0):0}%`,netRep>=0?'trendUp':'trendDown',netRep>=0?'var(--ember)':'var(--rust)')}
      ${unpaidTxs.length>0?kpi('Unpaid revenue',fmtReporting(unpaidRep),`${unpaidTxs.length} entr${unpaidTxs.length===1?'y':'ies'}${overdueCount?` · ${overdueCount} overdue`:''}`,'clock',overdueCount>0?'var(--rust)':'var(--gold)'):''}
    </div>

    ${costCatList.length>0?`<div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Cost breakdown</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">By category, in ${getFx().reporting}</div>
      ${costCatList.map(c=>{const pct=(c.v/totalCostRep)*100;return `<div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
          <span style="color:var(--bone-dim);"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${c.color};margin-right:8px;vertical-align:middle;"></span>${c.cat}</span>
          <span class="mono">${fmtReporting(c.v)} · ${pct.toFixed(0)}%</span>
        </div>
        <div style="height:6px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${c.color};"></div></div>
      </div>`}).join('')}
    </div>`:''}

    ${renderLedgerMoves(state.profileId)}
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
      <div style="position:relative;flex:1;min-width:200px;">
        <span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--bone-mute);pointer-events:none;display:flex;">${icon('search',14,'var(--bone-mute)')}</span>
        <input class="field" id="tx-search" style="padding-left:34px;" placeholder="Search description, category, notes…" value="${escAttr(search)}" oninput="window._txSearch=this.value;rerenderTxTable()">
      </div>
      <select class="field" style="width:auto;flex:1;min-width:130px;" onchange="window._txMonth=this.value;render()">
        <option value="all" ${monthFilter==='all'?'selected':''}>All time</option>
        <option value="thisMonth" ${monthFilter==='thisMonth'?'selected':''}>This month</option>
        <option value="lastMonth" ${monthFilter==='lastMonth'?'selected':''}>Last month</option>
        <option value="thisFy" ${monthFilter==='thisFy'?'selected':''}>This ${fy.label}</option>
        <option value="lastFy" ${monthFilter==='lastFy'?'selected':''}>Last ${prevFy.label}</option>
      </select>
      <select class="field" style="width:auto;flex:1;min-width:120px;" onchange="window._txType=this.value;window._txCat='All';render()">
        <option value="All" ${typeFilter==='All'?'selected':''}>All types</option>
        <option value="revenue" ${typeFilter==='revenue'?'selected':''}>Revenue</option>
        <option value="cost" ${typeFilter==='cost'?'selected':''}>Cost</option>
      </select>
      <select class="field" style="width:auto;flex:1;min-width:140px;" onchange="window._txCat=this.value;render()">
        <option value="All" ${catFilter==='All'?'selected':''}>All categories</option>
        ${usedCats.map(c=>`<option value="${escAttr(c)}" ${catFilter===c?'selected':''}>${escapeHtml(c)}</option>`).join('')}
      </select>
    </div>

    <div id="tx-table-wrapper" class="card" style="overflow:auto;">
      ${renderTxTable(filtered,txs,meta)}
    </div>
  </div>`;
}

function renderTxTable(filtered,allTxs,meta){
  if(filtered.length===0){
    return `<div class="empty-state">${allTxs.length===0?'No transactions yet. Add revenue or costs to build your P&amp;L.':'No entries match the current filters.'}</div>`;
  }
  const todayKey=today();
  return `<table class="table"><thead><tr>
    <th>Date</th><th>Type</th><th>Description</th><th class="table-hide-mobile">Category</th><th>Status</th><th style="text-align:right;">Amount</th><th></th>
  </tr></thead><tbody>
  ${filtered.map(t=>{
    const cat=t.category||'Other';
    const catColor=categoryColor(cat);
    const cur=t.currency||meta?.currency||'£';
    const isRevenue=t.type==='revenue';
    const isUnpaid=isRevenue&&t.paid===false;
    const overdue=isUnpaid&&t.dueDate&&t.dueDate<todayKey;
    let statusBadge='';
    if(isRevenue){
      if(isUnpaid){
        const due=t.dueDate?` · due ${fmtShortDate(t.dueDate)}`:'';
        const color=overdue?'var(--rust)':'var(--gold)';
        statusBadge=`<span class="chip" style="background:${overdue?'rgba(255,92,122,0.15)':'rgba(255,181,71,0.15)'};color:${color};border:1px solid ${overdue?'rgba(255,92,122,0.3)':'rgba(255,181,71,0.3)'};">${overdue?'overdue':'unpaid'}${due}</span>`;
      }else{
        statusBadge=`<span class="chip" style="background:rgba(61,245,168,0.12);color:var(--jade);border:1px solid rgba(61,245,168,0.25);">paid</span>`;
      }
    }else{
      statusBadge=`<span style="color:var(--bone-mute);font-size:11.5px;">—</span>`;
    }
    return `<tr>
      <td class="mono" style="font-size:12px;">${fmtShortDate(t.date)}</td>
      <td><span class="chip" style="background:${t.type==='revenue'?'rgba(61,245,168,0.15)':'rgba(255,92,122,0.15)'};color:${t.type==='revenue'?'var(--jade)':'var(--rust)'};border:1px solid ${t.type==='revenue'?'rgba(61,245,168,0.3)':'rgba(255,92,122,0.3)'};">${t.type}</span></td>
      <td>${escapeHtml(t.description)}${t.notes?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(t.notes)}</div>`:''}${t.recurring?'<span class="chip" style="background:rgba(122,162,255,0.15);color:var(--blue);border:1px solid rgba(122,162,255,0.3);margin-left:6px;">↻ '+t.recurring+'</span>':''}</td>
      <td class="table-hide-mobile"><span class="chip" style="background:${catColor}20;color:${catColor};border:1px solid ${catColor}30;">${escapeHtml(cat)}</span></td>
      <td>${statusBadge}${isUnpaid?`<button class="btn btn-ghost btn-sm" style="padding:2px 6px;font-size:10.5px;margin-left:6px;" onclick="markTxPaid('${t.id}')" title="Mark as paid">✓ paid</button>`:''}</td>
      <td class="mono" style="text-align:right;color:${t.type==='revenue'?(isUnpaid?'var(--gold)':'var(--jade)'):'var(--rust)'};font-weight:500;${isUnpaid?'opacity:0.85;':''}">${t.type==='revenue'?'+':'−'}${cur}${(t.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}</td>
      <td><div style="display:flex;gap:4px;">
        <button class="btn btn-ghost btn-sm" onclick="openTxModal('${t.id}')">${icon('edit',13)}</button>
        <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteTx('${t.id}')">${icon('trash',13)}</button>
      </div></td>
    </tr>`;
  }).join('')}
  </tbody></table>`;
}

function markTxPaid(id){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const tx=txs.find(x=>x.id===id);
  if(!tx)return;
  tx.paid=true;tx.dueDate=null;
  store.set(`profile:${state.profileId}:transactions`,txs);
  showToast(`Marked "${tx.description}" as paid`,'Undo',()=>{
    const cur=store.get(`profile:${state.profileId}:transactions`,[]);
    const t=cur.find(x=>x.id===id);
    if(t){t.paid=false;store.set(`profile:${state.profileId}:transactions`,cur);render()}
  },4000);
  render();
}

function rerenderTxTable(){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const sorted=[...txs].sort((a,b)=>new Date(b.date)-new Date(a.date));
  const catFilter=window._txCat||'All';
  const typeFilter=window._txType||'All';
  const monthFilter=window._txMonth||'all';
  const search=window._txSearch||'';
  const fy=getFiscalYear();
  const prevFy=getPreviousFiscalYear();
  const filtered=sorted.filter(t=>{
    if(typeFilter!=='All'&&t.type!==typeFilter)return false;
    if(catFilter!=='All'&&t.category!==catFilter)return false;
    if(monthFilter==='thisMonth'){const d=new Date(t.date),n=new Date();if(!(d.getMonth()===n.getMonth()&&d.getFullYear()===n.getFullYear()))return false}
    else if(monthFilter==='lastMonth'){const d=new Date(t.date),n=new Date(),r=new Date(n.getFullYear(),n.getMonth()-1,1);if(!(d.getMonth()===r.getMonth()&&d.getFullYear()===r.getFullYear()))return false}
    else if(monthFilter==='thisFy'){if(!inFiscalYear(t.date,fy))return false}
    else if(monthFilter==='lastFy'){if(!inFiscalYear(t.date,prevFy))return false}
    if(search){
      const s=search.toLowerCase();
      const hay=`${t.description||''} ${t.category||''} ${t.notes||''}`.toLowerCase();
      if(!hay.includes(s))return false;
    }
    return true;
  });
  const wrap=document.getElementById('tx-table-wrapper');
  if(wrap)wrap.innerHTML=renderTxTable(filtered,txs,meta);
}

function openTxModal(id){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const defaultCur=meta?.currency||'£';
  const t=id?txs.find(x=>x.id===id):{date:today(),type:'revenue',description:'',category:'Sales',amount:'',currency:defaultCur,notes:''};
  if(!t)return;
  // Migration: legacy entries had no category/currency
  if(!t.category)t.category=t.type==='revenue'?'Sales':'Other';
  if(!t.currency)t.currency=defaultCur;

  const buildCategoryOptions=(type,selected)=>{
    const list=type==='revenue'?REVENUE_CATEGORIES:COST_CATEGORIES;
    return list.map(c=>`<option value="${c}" ${c===selected?'selected':''}>${c}</option>`).join('');
  };

  showModal(id?'Edit entry':'New entry',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="t-date" type="date" value="${t.date}"></div>
      <div><div class="label" style="margin-bottom:6px;">Type</div>
        <select class="field" id="t-type" onchange="onTxTypeChange()">
          <option value="revenue" ${t.type==='revenue'?'selected':''}>Revenue</option>
          <option value="cost" ${t.type==='cost'?'selected':''}>Cost</option>
        </select>
      </div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Description *</div><input class="field" id="t-desc" placeholder="e.g. Meta ads — April / Client invoice #104" value="${escAttr(t.description)}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div>
        <div class="label" style="margin-bottom:6px;">Category</div>
        <select class="field" id="t-cat">${buildCategoryOptions(t.type,t.category)}</select>
      </div>
      <div>
        <div class="label" style="margin-bottom:6px;">Currency</div>
        <select class="field" id="t-cur">
          ${CURRENCIES.map(c=>`<option value="${c.symbol}" ${c.symbol===t.currency?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;">Amount *</div>
      <input class="field" id="t-amount" type="number" step="0.01" placeholder="0.00" value="${t.amount||''}">
    </div>
    <div id="t-revenue-row" style="display:${t.type==='revenue'?'block':'none'};border:1px solid var(--line);border-radius:6px;padding:12px 14px;background:var(--ink-3);">
      <div class="label" style="margin-bottom:8px;">Revenue status</div>
      <div style="display:flex;gap:8px;margin-bottom:10px;">
        <button type="button" id="t-paid-yes" class="btn btn-sm ${t.paid!==false?'btn-primary':''}" style="flex:1;" onclick="document.getElementById('t-paid-yes').classList.add('btn-primary');document.getElementById('t-paid-no').classList.remove('btn-primary');document.getElementById('t-paid').value='1';document.getElementById('t-due-row').style.display='none';">${icon('check',12)} Paid</button>
        <button type="button" id="t-paid-no" class="btn btn-sm ${t.paid===false?'btn-primary':''}" style="flex:1;" onclick="document.getElementById('t-paid-no').classList.add('btn-primary');document.getElementById('t-paid-yes').classList.remove('btn-primary');document.getElementById('t-paid').value='0';document.getElementById('t-due-row').style.display='block';">${icon('clock',12)} Unpaid / pending</button>
      </div>
      <input type="hidden" id="t-paid" value="${t.paid===false?'0':'1'}">
      <div id="t-due-row" style="display:${t.paid===false?'block':'none'};">
        <div class="label" style="margin-bottom:6px;">Due date</div>
        <input class="field" id="t-due" type="date" value="${t.dueDate||''}">
        <div style="font-size:11px;color:var(--bone-mute);margin-top:4px;">Shows on the Command Centre calendar as a green dot until you mark it paid.</div>
      </div>
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;">Notes</div>
      <textarea class="field" id="t-notes" rows="2" placeholder="Optional context">${escapeHtml(t.notes||'')}</textarea>
    </div>
    <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="t-recurring" ${t.recurring?'checked':''} style="accent-color:var(--ember);">
      <span>Repeat monthly</span>
      <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">Auto-creates a new entry each month on the same day</span>
    </label>
    <label id="t-deduct-row" style="display:${t.type==='cost'?'flex':'none'};align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="t-deduct" ${t.deductFromCash!==false?'checked':''} style="accent-color:var(--jade);">
      <span>Deduct from this profile's Cash in Balance Sheet</span>
      <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">Costs only</span>
    </label>
  </div>`,()=>{
    const desc=document.getElementById('t-desc').value.trim();
    const amount=parseFloat(document.getElementById('t-amount').value);
    if(!desc){alert('Description required.');return false}
    if(!amount||amount<=0){alert('Amount must be greater than zero.');return false}
    const txType=document.getElementById('t-type').value;
    const paidVal=document.getElementById('t-paid')?.value;
    const isPaid=txType==='revenue'?(paidVal!=='0'):true; // costs always 'paid'
    const dueDate=txType==='revenue'&&!isPaid?(document.getElementById('t-due')?.value||null):null;
    const upd={
      id:t.id||uid(),
      date:document.getElementById('t-date').value,
      type:txType,
      description:desc,
      category:document.getElementById('t-cat').value,
      currency:document.getElementById('t-cur').value,
      amount,
      notes:document.getElementById('t-notes').value,
      recurring:document.getElementById('t-recurring').checked?'monthly':null,
      paid:txType==='revenue'?isPaid:true,
      dueDate,
      deductFromCash:txType==='cost'&&document.getElementById('t-deduct').checked,
      cashAssetId:t.cashAssetId||null,
      deductedAmount:t.deductedAmount||null,
      createdAt:t.createdAt||new Date().toISOString()
    };

    // Apply or update cash deduction (only for costs)
    const result=processTxCashDeduction(state.profileId,upd,id?t:null);
    if(upd.deductFromCash&&!result&&!id&&upd.type==='cost'){
      const proceed=confirm(`No matching ${upd.currency} Cash asset found in this profile's Balance Sheet. The entry will be saved but no deduction will happen.\n\nSave anyway?`);
      if(!proceed)return false;
    }

    const next=id?txs.map(x=>x.id===id?upd:x):[upd,...txs];
    store.set(`profile:${state.profileId}:transactions`,next);
    if(result){
      showToast(`−${upd.currency}${upd.amount.toLocaleString('en-GB',{maximumFractionDigits:0})} from "${result.assetName}"`,null,null,3000);
    }
    return true;
  });
}
// Re-populate the category dropdown when type changes
function onTxTypeChange(){
  const type=document.getElementById('t-type').value;
  const cat=document.getElementById('t-cat');
  const list=type==='revenue'?REVENUE_CATEGORIES:COST_CATEGORIES;
  cat.innerHTML=list.map(c=>`<option value="${c}">${c}</option>`).join('');
  const deductRow=document.getElementById('t-deduct-row');
  if(deductRow)deductRow.style.display=type==='cost'?'flex':'none';
  const revRow=document.getElementById('t-revenue-row');
  if(revRow)revRow.style.display=type==='revenue'?'block':'none';
}
function deleteTx(id){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const item=txs.find(t=>t.id===id);
  if(!item)return;
  // Revert any cash deduction tied to this entry
  if(item.cashAssetId&&item.deductedAmount){
    revertCashDeduction(state.profileId,item.cashAssetId,item.deductedAmount);
  }
  const profileId=state.profileId;
  const idx=txs.findIndex(t=>t.id===id);
  txs.splice(idx,1);
  store.set(`profile:${profileId}:transactions`,txs);
  showToast(`Deleted ledger entry`,'Undo',()=>{
    const cur=store.get(`profile:${profileId}:transactions`,[]);
    cur.splice(idx,0,item);
    store.set(`profile:${profileId}:transactions`,cur);
    if(item.cashAssetId&&item.deductedAmount){
      const balance=store.get(balanceKey(profileId),[]);
      const target=balance.find(b=>b.id===item.cashAssetId);
      if(target){target.amount=(target.amount||0)-item.deductedAmount;store.set(balanceKey(profileId),balance)}
    }
    render();
    showToast(`Restored entry`,null,null,2500);
  },30000);
  render();
}


// ============ BALANCE SHEET (per profile) ============
function balanceKey(scope){
  // scope = profile id, or 'personal'
  return scope==='personal'?'personal:balance':`profile:${scope}:balance`;
}
function renderBalanceSheet(){
  return renderBalanceCore(state.profileId,false);
}
function renderPersonalBalance(){
  return renderBalanceCore('personal',true);
}
function renderBalanceCore(scope,isPersonal){
  const items=store.get(balanceKey(scope),[]);
  const meta=isPersonal?null:store.get(`profile:${scope}:meta`);
  const fx=getFx();

  const assets=items.filter(i=>i.kind==='asset');
  const liabilities=items.filter(i=>i.kind==='liability');

  // Convert to reporting currency
  const assetsRep=assets.reduce((a,b)=>a+toReporting(b.amount||0,b.currency||'£'),0);
  const liabRep=liabilities.reduce((a,b)=>a+toReporting(b.amount||0,b.currency||'£'),0);
  const netWorth=assetsRep-liabRep;

  // Per-currency totals
  const assetsByCur=groupByCurrency(assets);
  const liabByCur=groupByCurrency(liabilities);

  // Asset breakdown by category
  const assetByCat={};
  assets.forEach(a=>{const k=a.category||'Other';assetByCat[k]=(assetByCat[k]||0)+toReporting(a.amount||0,a.currency||'£')});
  const assetCatList=Object.entries(assetByCat).map(([cat,v])=>({cat,v,color:ASSET_COLORS[cat]||'#7d86b0'})).sort((a,b)=>b.v-a.v);

  const liabByCat={};
  liabilities.forEach(a=>{const k=a.category||'Other';liabByCat[k]=(liabByCat[k]||0)+toReporting(a.amount||0,a.currency||'£')});
  const liabCatList=Object.entries(liabByCat).map(([cat,v])=>({cat,v,color:LIABILITY_COLORS[cat]||'#7d86b0'})).sort((a,b)=>b.v-a.v);

  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
    ${sub?`<div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">${sub}</div>`:''}
  </div>`;

  const fnNew=`openBalanceModal('${scope}','asset')`;
  const fnNewLiab=`openBalanceModal('${scope}','liability')`;

  const header=isPersonal?`
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Personal finances</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Net Worth</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">Track assets, liabilities, and net worth over time.</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="openMoveModal(null,{to:'personal'})">${icon('transfer',14)} Move money</button>
        <button class="btn" onclick="manualSnapshot('${scope}')" title="Save a snapshot of net worth right now">${icon('camera',14)} Snapshot</button>
        <button class="btn" onclick="${fnNewLiab}">${icon('plus',14)} Liability</button>
        <button class="btn btn-primary" onclick="${fnNew}">${icon('plus',14)} Asset</button>
      </div>
    </div>
  `:profileHeaderHtml('Balance Sheet','Assets, liabilities, and net position',`
    <button class="btn" onclick="manualSnapshot('${scope}')" title="Save a snapshot of net worth right now">${icon('camera',14)} Snapshot</button>
    <button class="btn" onclick="${fnNewLiab}">${icon('plus',14)} Liability</button>
    <button class="btn btn-primary" onclick="${fnNew}">${icon('plus',14)} Asset</button>
  `);

  // Snapshot history for chart
  const snaps=store.get(snapshotKey(scope),[]);
  const snapPoints=snaps.map(s=>{
    let assetsTotal=0,liabTotal=0;
    s.items.forEach(i=>{
      const v=toReporting(i.amount||0,i.currency||'£');
      if(i.kind==='asset')assetsTotal+=v;else liabTotal+=v;
    });
    return {date:s.date,net:assetsTotal-liabTotal,assets:assetsTotal,liabilities:liabTotal};
  });
  // Add today as a virtual final point
  if(items.length>0){
    snapPoints.push({date:today(),net:netWorth,assets:assetsRep,liabilities:liabRep});
  }

  return `<div class="page" style="max-width:1300px;">
    ${header}

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('Total Assets',fmtReporting(assetsRep),Object.keys(assetsByCur).length>1?`raw: ${fmtMultiCur(assetsByCur)}`:`${assets.length} ${assets.length===1?'item':'items'}`,'trendUp','var(--jade)')}
      ${kpi('Total Liabilities',fmtReporting(liabRep),Object.keys(liabByCur).length>1?`raw: ${fmtMultiCur(liabByCur)}`:`${liabilities.length} ${liabilities.length===1?'item':'items'}`,'trendDown','var(--rust)')}
      ${kpi('Net Worth',fmtReporting(netWorth),`assets − liabilities · in ${fx.reporting}`,netWorth>=0?'wallet':'trendDown',netWorth>=0?'var(--ember)':'var(--rust)')}
    </div>

    <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
      <div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <div class="serif" style="font-size:18px;font-weight:500;">Assets</div>
            <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${assets.length} ${assets.length===1?'item':'items'}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="${fnNew}">${icon('plus',13)} Add</button>
        </div>
        ${assets.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;text-align:center;">No assets recorded yet.</div>`:`
          ${assetCatList.map(c=>{const pct=assetsRep>0?(c.v/assetsRep)*100:0;return `<div style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
              <span style="color:var(--bone-dim);"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${c.color};margin-right:8px;vertical-align:middle;"></span>${c.cat}</span>
              <span class="mono">${fmtReporting(c.v)} · ${pct.toFixed(0)}%</span>
            </div>
            <div style="height:4px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${c.color};"></div></div>
          </div>`}).join('')}
          <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line);">
            ${assets.sort((a,b)=>(b.amount||0)-(a.amount||0)).slice(0,8).map(a=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:13px;">
              <div>
                <div style="font-weight:500;">${escapeHtml(a.name)}</div>
                <div style="font-size:11px;color:var(--bone-mute);margin-top:1px;">${escapeHtml(a.category||'Other')}</div>
              </div>
              <div style="display:flex;gap:6px;align-items:center;">
                <span class="mono" style="color:var(--jade);">${a.currency||'£'}${(a.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}</span>
                <button class="btn btn-ghost btn-sm" onclick="openBalanceModal('${scope}','asset','${a.id}')">${icon('edit',12)}</button>
                <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteBalanceItem('${scope}','${a.id}')">${icon('trash',12)}</button>
              </div>
            </div>`).join('')}
          </div>
        `}
      </div>

      <div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
          <div>
            <div class="serif" style="font-size:18px;font-weight:500;">Liabilities</div>
            <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${liabilities.length} ${liabilities.length===1?'item':'items'}</div>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="${fnNewLiab}">${icon('plus',13)} Add</button>
        </div>
        ${liabilities.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:20px 0;text-align:center;">No liabilities recorded yet.</div>`:`
          ${liabCatList.map(c=>{const pct=liabRep>0?(c.v/liabRep)*100:0;return `<div style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
              <span style="color:var(--bone-dim);"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${c.color};margin-right:8px;vertical-align:middle;"></span>${c.cat}</span>
              <span class="mono">${fmtReporting(c.v)} · ${pct.toFixed(0)}%</span>
            </div>
            <div style="height:4px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${c.color};"></div></div>
          </div>`}).join('')}
          <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line);">
            ${liabilities.sort((a,b)=>(b.amount||0)-(a.amount||0)).slice(0,8).map(a=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:13px;">
              <div>
                <div style="font-weight:500;">${escapeHtml(a.name)}</div>
                <div style="font-size:11px;color:var(--bone-mute);margin-top:1px;">${escapeHtml(a.category||'Other')}${a.dueDate?` · due ${fmtShortDate(a.dueDate)}`:''}</div>
              </div>
              <div style="display:flex;gap:6px;align-items:center;">
                <span class="mono" style="color:var(--rust);">${a.currency||'£'}${(a.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}</span>
                <button class="btn btn-ghost btn-sm" onclick="openBalanceModal('${scope}','liability','${a.id}')">${icon('edit',12)}</button>
                <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteBalanceItem('${scope}','${a.id}')">${icon('trash',12)}</button>
              </div>
            </div>`).join('')}
          </div>
        `}
      </div>
    </div>

    ${snapPoints.length>=2?`<div class="stagger card" style="padding:22px;margin-top:16px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
        <div>
          <div class="serif" style="font-size:18px;font-weight:500;">Net worth over time</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${snapPoints.length} ${snapPoints.length===1?'snapshot':'snapshots'} · in ${fx.reporting}</div>
        </div>
        <div style="text-align:right;">
          <div class="label">Change</div>
          ${(()=>{const first=snapPoints[0].net;const last=snapPoints[snapPoints.length-1].net;const delta=last-first;return `<div class="mono" style="font-size:15px;font-weight:500;color:${delta>=0?'var(--jade)':'var(--rust)'};">${delta>=0?'+':''}${fmtReporting(delta)}</div>`})()}
        </div>
      </div>
      ${renderNetWorthChart(snapPoints)}
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--line);max-height:160px;overflow-y:auto;">
        ${[...snapPoints].reverse().slice(0,8).map((s,i,arr)=>{
          const prev=arr[i+1];
          const delta=prev?s.net-prev.net:null;
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:12.5px;${i<arr.length-1?'border-bottom:1px solid var(--line);':''}">
            <span style="color:var(--bone-dim);">${fmtDate(s.date)}</span>
            <span style="display:flex;gap:14px;align-items:center;">
              <span class="mono" style="color:var(--bone);">${fmtReporting(s.net)}</span>
              ${delta!==null?`<span class="mono" style="color:${delta>=0?'var(--jade)':'var(--rust)'};font-size:11.5px;min-width:60px;text-align:right;">${delta>=0?'+':''}${fmtReporting(delta)}</span>`:'<span style="min-width:60px;"></span>'}
            </span>
          </div>`;
        }).join('')}
      </div>
    </div>`:items.length>0?`<div class="stagger card" style="padding:22px;margin-top:16px;text-align:center;color:var(--bone-mute);font-size:13px;">
      Take a snapshot now to start tracking net worth over time. Atlas auto-snapshots once a month.
    </div>`:''}
  </div>`;
}

function renderNetWorthChart(points){
  if(points.length<2)return'';
  const w=720,h=180,pad=20;
  const xs=points.map((_,i)=>i);
  const minNet=Math.min(...points.map(p=>p.net));
  const maxNet=Math.max(...points.map(p=>p.net));
  const range=maxNet-minNet||1;
  const x=i=>pad+(i/(points.length-1))*(w-pad*2);
  const y=v=>h-pad-((v-minNet)/range)*(h-pad*2);
  const path=points.map((p,i)=>`${i===0?'M':'L'}${x(i).toFixed(1)},${y(p.net).toFixed(1)}`).join(' ');
  const fillPath=`${path} L${x(points.length-1).toFixed(1)},${h-pad} L${x(0).toFixed(1)},${h-pad} Z`;
  const lastNet=points[points.length-1].net;
  const firstNet=points[0].net;
  const trendUp=lastNet>=firstNet;
  const stroke=trendUp?'#3df5a8':'#ff5c7a';
  const fill=trendUp?'rgba(61,245,168,0.12)':'rgba(255,92,122,0.12)';
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="width:100%;height:160px;display:block;" class="icon">
    <path d="${fillPath}" fill="${fill}"/>
    <path d="${path}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${points.map((p,i)=>`<circle cx="${x(i).toFixed(1)}" cy="${y(p.net).toFixed(1)}" r="3" fill="${stroke}"/>`).join('')}
  </svg>
  <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--bone-mute);margin-top:4px;font-family:'JetBrains Mono',monospace;">
    <span>${fmtShortDate(points[0].date)}</span><span>${fmtShortDate(points[points.length-1].date)}</span>
  </div>`;
}

function manualSnapshot(scope){
  if(takeSnapshot(scope)){
    showToast('Snapshot saved.',null,null,2500);
    render();
  }else{
    showToast('Add some assets or liabilities first.',null,null,3000);
  }
}

function openBalanceModal(scope,kind,id){
  const items=store.get(balanceKey(scope),[]);
  const fx=getFx();
  const item=id?items.find(x=>x.id===id):{kind,name:'',category:kind==='asset'?'Cash':'Payables',amount:'',currency:fx.reporting||'£',notes:'',dueDate:''};
  if(!item)return;
  const cats=kind==='asset'?ASSET_CATEGORIES:LIABILITY_CATEGORIES;
  const isLiab=kind==='liability';

  showModal(id?`Edit ${kind}`:`New ${kind}`,`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Name *</div><input class="field" id="bal-name" placeholder="${kind==='asset'?'e.g. HSBC Current / Toyota Vios / Stocks':'e.g. Credit card / Personal loan / Tax owed'}" value="${escAttr(item.name)}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Category</div><select class="field" id="bal-cat">${cats.map(c=>`<option value="${c}" ${c===item.category?'selected':''}>${c}</option>`).join('')}</select></div>
      <div><div class="label" style="margin-bottom:6px;">Currency</div><select class="field" id="bal-cur">${CURRENCIES.map(c=>`<option value="${c.symbol}" ${c.symbol===item.currency?'selected':''}>${c.label}</option>`).join('')}</select></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Amount *</div><input class="field" id="bal-amount" type="number" step="0.01" placeholder="0.00" value="${item.amount||''}"></div>
    ${isLiab?`<div><div class="label" style="margin-bottom:6px;">Due date (optional)</div><input class="field" id="bal-due" type="date" value="${item.dueDate||''}"></div>`:''}
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="bal-notes" rows="2" placeholder="Optional context">${escapeHtml(item.notes||'')}</textarea></div>
  </div>`,()=>{
    const name=document.getElementById('bal-name').value.trim();
    const amount=parseFloat(document.getElementById('bal-amount').value);
    if(!name){alert('Name required.');return false}
    if(!amount||amount<=0){alert('Amount must be greater than zero.');return false}
    const upd={
      id:item.id||uid(),
      kind,
      name,
      category:document.getElementById('bal-cat').value,
      currency:document.getElementById('bal-cur').value,
      amount,
      notes:document.getElementById('bal-notes').value,
      dueDate:isLiab?document.getElementById('bal-due').value:'',
      updatedAt:new Date().toISOString(),
      createdAt:item.createdAt||new Date().toISOString()
    };
    const next=id?items.map(x=>x.id===id?upd:x):[upd,...items];
    store.set(balanceKey(scope),next);
    return true;
  });
}

function deleteBalanceItem(scope,id){
  const key=balanceKey(scope);
  const items=store.get(key,[]);
  const item=items.find(i=>i.id===id);
  if(!item)return;
  if(deleteWithUndo(key,item,`${item.kind} "${item.name}"`))render();
}


// ============ INVENTORY MODULE ============
function renderInventory(){
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  if(!meta)return'<div class="page">Profile not found.</div>';
  const defCur=meta.currency||'£';
  const isCreator=meta.type==='Author/Creator';

  // KPIs (in reporting currency)
  const stockValue=items.reduce((a,b)=>a+toReporting((b.qtyOnHand||0)*(b.costPrice||0),b.currency||defCur),0);
  const retailValue=items.reduce((a,b)=>a+toReporting((b.qtyOnHand||0)*(b.salePrice||0),b.currency||defCur),0);
  const totalSold=items.reduce((a,b)=>a+(b.qtySold||0),0);
  const totalRevenue=items.reduce((a,b)=>a+toReporting((b.qtySold||0)*(b.salePrice||0),b.currency||defCur),0);
  const totalCogs=items.reduce((a,b)=>a+toReporting((b.qtySold||0)*(b.costPrice||0),b.currency||defCur),0);
  const grossMargin=totalRevenue>0?((totalRevenue-totalCogs)/totalRevenue)*100:0;

  // Sort: most sold first
  const sorted=[...items].sort((a,b)=>(b.qtySold||0)-(a.qtySold||0));

  // Channel breakdown (only for Author/Creator type)
  let channelStats=[];
  if(isCreator){
    const m={};
    items.forEach(i=>{
      const ch=i.channel||'Direct';
      if(!m[ch])m[ch]={channel:ch,units:0,revenue:0};
      m[ch].units+=(i.qtySold||0);
      m[ch].revenue+=toReporting((i.qtySold||0)*(i.salePrice||0),i.currency||defCur);
    });
    channelStats=Object.values(m).sort((a,b)=>b.revenue-a.revenue);
  }

  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
    ${sub?`<div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">${sub}</div>`:''}
  </div>`;

  return `<div class="page" style="max-width:1400px;">
    ${profileHeaderHtml('Inventory',isCreator?'Stock, sales channels and unit economics':'Stock levels, sales and unit economics',`<button class="btn" onclick="confirmBackfill()" title="Create missing Revenue and COGS entries in the Ledger for past sales">${icon('refresh',14)} Sync Ledger</button><button class="btn btn-primary" onclick="openInventoryModal()">${icon('plus',14)} New item</button>`)}

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('Stock value',fmtReporting(stockValue),`${items.reduce((a,b)=>a+(b.qtyOnHand||0),0)} units on hand`,'package','var(--ember)')}
      ${kpi('Retail value',fmtReporting(retailValue),'if all current stock sold','dollar','var(--gold)')}
      ${kpi('Units sold',totalSold,`across ${items.length} ${items.length===1?'item':'items'}`,'trendUp','var(--jade)')}
      ${kpi('Revenue from sales',fmtReporting(totalRevenue),'auto-logged to Ledger','dollar','var(--bone)')}
      ${kpi('Cost of goods',fmtReporting(totalCogs),null,'trendDown','var(--rust)')}
      ${kpi('Gross margin',`${grossMargin.toFixed(0)}%`,`${fmtReporting(totalRevenue-totalCogs)} gross profit`,grossMargin>=30?'trendUp':'trendDown',grossMargin>=30?'var(--jade)':'var(--gold)')}
    </div>

    ${isCreator&&channelStats.length>0?`<div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">By channel</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Performance per sales channel</div>
      ${channelStats.map(c=>{const max=Math.max(...channelStats.map(x=>x.revenue),1);const pct=(c.revenue/max)*100;return `<div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
          <span style="color:var(--bone-dim);">${escapeHtml(c.channel)}</span>
          <span class="mono">${c.units} units · ${fmtReporting(c.revenue)}</span>
        </div>
        <div style="height:6px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:var(--ember);"></div></div>
      </div>`}).join('')}
    </div>`:''}

    <div class="card" style="overflow:auto;">
      ${sorted.length===0?`<div class="empty-state">No items yet. Add one to start tracking stock and sales.</div>`:`
        <table class="table"><thead><tr>
          <th>Item</th>
          ${isCreator?'<th class="table-hide-mobile">Channel</th>':'<th class="table-hide-mobile">SKU</th>'}
          <th style="text-align:right;">Cost</th>
          <th style="text-align:right;">Price</th>
          <th style="text-align:right;">Stock</th>
          <th style="text-align:right;" class="table-hide-mobile">Sold</th>
          <th style="text-align:right;">Quick</th>
          <th></th>
        </tr></thead><tbody>
        ${sorted.map(i=>{
          const cur=i.currency||defCur;
          const margin=i.salePrice>0?((i.salePrice-i.costPrice)/i.salePrice)*100:0;
          const lowStock=(i.qtyOnHand||0)<=3;
          return `<tr>
            <td>
              <div style="font-weight:500;">${escapeHtml(i.name)}</div>
              <div style="font-size:11px;color:var(--bone-mute);margin-top:2px;">${margin.toFixed(0)}% margin${i.acquiredDate?' · since '+fmtShortDate(i.acquiredDate):''}${i.notes?' · '+escapeHtml(i.notes).slice(0,30):''}</div>
            </td>
            <td class="table-hide-mobile" style="font-size:12px;color:var(--bone-dim);">${escapeHtml((isCreator?i.channel:i.sku)||'—')}</td>
            <td class="mono" style="text-align:right;color:var(--bone-mute);">${cur}${(i.costPrice||0).toLocaleString('en-GB',{maximumFractionDigits:2})}</td>
            <td class="mono" style="text-align:right;font-weight:500;">${cur}${(i.salePrice||0).toLocaleString('en-GB',{maximumFractionDigits:2})}</td>
            <td class="mono" style="text-align:right;color:${lowStock?'var(--rust)':'var(--bone)'};font-weight:${lowStock?'600':'500'};">${i.qtyOnHand||0}${lowStock&&(i.qtyOnHand||0)>0?' ⚠':''}</td>
            <td class="mono table-hide-mobile" style="text-align:right;color:var(--jade);">${i.qtySold||0}</td>
            <td style="text-align:right;">
              <div style="display:flex;gap:4px;justify-content:flex-end;">
                <button class="btn btn-ghost btn-sm" title="Sell 1" onclick="quickSell('${i.id}')" style="color:var(--jade);">−1</button>
                <button class="btn btn-ghost btn-sm" title="Restock" onclick="quickRestock('${i.id}')" style="color:var(--ember);">+1</button>
              </div>
            </td>
            <td>
              <div style="display:flex;gap:4px;">
                <button class="btn btn-ghost btn-sm" onclick="openInventoryModal('${i.id}')">${icon('edit',13)}</button>
                <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteInventoryItem('${i.id}')">${icon('trash',13)}</button>
              </div>
            </td>
          </tr>`;
        }).join('')}
        </tbody></table>
      `}
    </div>
  </div>`;
}

function openInventoryModal(id){
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const meta=store.get(`profile:${state.profileId}:meta`);
  const defCur=meta?.currency||'£';
  const isCreator=meta?.type==='Author/Creator';
  const item=id?items.find(x=>x.id===id):{name:'',sku:'',channel:'',costPrice:'',salePrice:'',currency:defCur,qtyOnHand:'',qtySold:0,acquiredDate:today(),notes:''};
  if(!item)return;

  showModal(id?'Edit item':'New item',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Name *</div><input class="field" id="inv-name" placeholder="${isCreator?'e.g. The Anatomy of Excellence — paperback':'e.g. T-shirt — Black L'}" value="${escAttr(item.name)}"></div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div>
        <div class="label" style="margin-bottom:6px;">${isCreator?'Channel':'SKU'}</div>
        <input class="field" id="inv-sku" placeholder="${isCreator?'Amazon KDP / IngramSpark / Direct':'Optional code'}" value="${escAttr((isCreator?item.channel:item.sku)||'')}">
      </div>
      <div>
        <div class="label" style="margin-bottom:6px;">Acquired date</div>
        <input class="field" id="inv-date" type="date" value="${item.acquiredDate||(item.createdAt?item.createdAt.slice(0,10):today())}">
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Cost per unit</div><input class="field" id="inv-cost" type="number" step="0.01" placeholder="0.00" value="${item.costPrice||''}"></div>
      <div><div class="label" style="margin-bottom:6px;">Sale price per unit</div><input class="field" id="inv-price" type="number" step="0.01" placeholder="0.00" value="${item.salePrice||''}"></div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Stock on hand</div><input class="field" id="inv-qty" type="number" min="0" placeholder="0" value="${item.qtyOnHand??''}"></div>
      <div><div class="label" style="margin-bottom:6px;">Total sold to date</div><input class="field" id="inv-sold" type="number" min="0" placeholder="0" value="${item.qtySold??0}"></div>
      <div><div class="label" style="margin-bottom:6px;">Currency</div>
        <select class="field" id="inv-cur">
          ${CURRENCIES.map(c=>`<option value="${c.symbol}" ${c.symbol===item.currency?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
    </div>

    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="inv-notes" rows="2" placeholder="Optional details">${escapeHtml(item.notes||'')}</textarea></div>
  </div>`,()=>{
    const name=document.getElementById('inv-name').value.trim();
    if(!name){alert('Name required.');return false}
    const upd={
      id:item.id||uid(),
      name,
      [isCreator?'channel':'sku']:document.getElementById('inv-sku').value.trim(),
      currency:document.getElementById('inv-cur').value,
      costPrice:parseFloat(document.getElementById('inv-cost').value)||0,
      salePrice:parseFloat(document.getElementById('inv-price').value)||0,
      qtyOnHand:parseInt(document.getElementById('inv-qty').value)||0,
      qtySold:parseInt(document.getElementById('inv-sold').value)||0,
      acquiredDate:document.getElementById('inv-date').value||today(),
      notes:document.getElementById('inv-notes').value,
      createdAt:item.createdAt||new Date().toISOString(),
      updatedAt:new Date().toISOString()
    };
    // Preserve the other field too (so SKU and channel coexist on the object even though only one is shown)
    if(isCreator&&item.sku!==undefined)upd.sku=item.sku;
    if(!isCreator&&item.channel!==undefined)upd.channel=item.channel;

    const next=id?items.map(x=>x.id===id?upd:x):[upd,...items];
    store.set(`profile:${state.profileId}:inventory`,next);
    return true;
  });
}

// Sell 1 unit: decrement stock, increment sold count, add a Revenue ledger entry
function quickSell(itemId){
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const item=items.find(i=>i.id===itemId);
  if(!item)return;
  if((item.qtyOnHand||0)<=0){
    if(!confirm(`No stock on hand for ${item.name}. Sell anyway (creates a backorder)?`))return;
  }
  item.qtyOnHand=(item.qtyOnHand||0)-1;
  item.qtySold=(item.qtySold||0)+1;
  store.set(`profile:${state.profileId}:inventory`,items);

  // Auto-log: TWO entries — Revenue (sale price) + Cost (cost price as COGS)
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const cur=item.currency||'£';
  const dateStr=today();
  // Revenue entry
  if(item.salePrice>0){
    txs.unshift({
      id:uid(),
      date:dateStr,
      type:'revenue',
      description:`Sold 1 × ${item.name}`,
      category:'Sales',
      currency:cur,
      amount:item.salePrice||0,
      notes:'Auto-logged from Inventory',
      createdAt:new Date().toISOString(),
      sourceItemId:item.id
    });
  }
  // COGS entry
  if(item.costPrice>0){
    txs.unshift({
      id:uid(),
      date:dateStr,
      type:'cost',
      description:`COGS — 1 × ${item.name}`,
      category:'Inventory',
      currency:cur,
      amount:item.costPrice||0,
      notes:'Auto-logged from Inventory (cost of goods sold)',
      createdAt:new Date().toISOString(),
      sourceItemId:item.id
    });
  }
  store.set(`profile:${state.profileId}:transactions`,txs);
  render();
}

function quickRestock(itemId){
  const qty=prompt('How many units to add to stock?','1');
  if(!qty)return;
  const n=parseInt(qty);
  if(!n||n<=0)return;
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const item=items.find(i=>i.id===itemId);
  if(!item)return;
  item.qtyOnHand=(item.qtyOnHand||0)+n;
  store.set(`profile:${state.profileId}:inventory`,items);

  // Optionally log a Startup/Inventory cost entry
  if(item.costPrice>0&&confirm(`Restocked ${n} × ${item.name}. Log £${(n*item.costPrice).toLocaleString('en-GB')} as a Cost entry in the Ledger?`)){
    const txs=store.get(`profile:${state.profileId}:transactions`,[]);
    txs.unshift({
      id:uid(),
      date:today(),
      type:'cost',
      description:`Restocked ${n} × ${item.name}`,
      category:'Inventory',
      currency:item.currency||'£',
      amount:n*(item.costPrice||0),
      notes:'Auto-logged from Inventory restock',
      createdAt:new Date().toISOString(),
      sourceItemId:item.id
    });
    store.set(`profile:${state.profileId}:transactions`,txs);
  }
  render();
}

// One-time fix: backfill missing COGS entries for sales that already happened.
// For each item, count existing auto-logged Revenue entries (qty sold per ledger),
// and for the equivalent qty, ensure matching COGS entries exist.
// ============ INVENTORY LEDGER SYNC (smart, per-row review) ============
// Builds a diff between Inventory and Ledger, surfacing potential manual duplicates.
// Result rows have: type, item, kind ('revenue'/'cost'), amount, currency, date, status, suspect (optional)
function buildInventorySyncDiff(){
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const rows=[];

  items.forEach(item=>{
    if(!item.id||!(item.qtySold>0))return;
    const cur=item.currency||'£';
    const itemNameLower=(item.name||'').toLowerCase();

    // Existing auto-logged entries (linked via sourceItemId)
    const linkedRev=txs.filter(t=>t.sourceItemId===item.id&&t.type==='revenue');
    const linkedCost=txs.filter(t=>t.sourceItemId===item.id&&t.type==='cost'&&(t.category==='Inventory'||(t.description||'').startsWith('COGS')));

    // Unlinked candidate entries that LOOK like they could be sales/costs of this item
    // Match: contains item name, amount within 5%, type matches
    const tolerance=0.05;
    const acquiredTime=item.acquiredDate?new Date(item.acquiredDate).getTime():null;
    const matchesUnlinked=(t,kind,refPrice)=>{
      if(t.sourceItemId)return false; // already linked
      if(t.type!==kind)return false;
      if(!itemNameLower)return false;
      const desc=(t.description||'').toLowerCase();
      if(!desc.includes(itemNameLower))return false;
      // Amount within tolerance of either single-unit price OR a bulk multiple
      if(!refPrice||refPrice<=0)return false;
      const ratio=(t.amount||0)/refPrice;
      const nearestInt=Math.round(ratio);
      if(nearestInt<1)return false;
      if(Math.abs(ratio-nearestInt)>tolerance)return false;
      // Optional date proximity: within 365 days of acquired (very loose; we just want to flag, not exclude)
      return true;
    };

    const suspectRev=txs.filter(t=>matchesUnlinked(t,'revenue',item.salePrice));
    const suspectCost=txs.filter(t=>matchesUnlinked(t,'cost',item.costPrice));

    // For revenue: bulk-aware unit count.
    // Count linked entries as 1 unit each, plus suspected unlinked entries by their amount/unitPrice ratio
    const countLinkedUnits=arr=>arr.length; // each linked auto entry = 1 unit
    const countSuspectUnits=(arr,unit)=>arr.reduce((sum,t)=>sum+Math.round((t.amount||0)/unit),0);

    const linkedRevUnits=countLinkedUnits(linkedRev);
    const suspectRevUnits=item.salePrice>0?countSuspectUnits(suspectRev,item.salePrice):0;
    const linkedCostUnits=countLinkedUnits(linkedCost);
    const suspectCostUnits=item.costPrice>0?countSuspectUnits(suspectCost,item.costPrice):0;

    const sold=item.qtySold||0;
    const missingRev=Math.max(0,sold-linkedRevUnits-suspectRevUnits);
    const missingCost=Math.max(0,sold-linkedCostUnits-suspectCostUnits);

    // Each missing unit becomes a candidate row "to add"
    for(let i=0;i<missingRev&&item.salePrice>0;i++){
      rows.push({
        id:`add-rev-${item.id}-${i}`,
        action:'add',
        kind:'revenue',
        itemId:item.id,
        itemName:item.name,
        amount:item.salePrice,
        currency:cur,
        date:item.acquiredDate||item.createdAt?.slice(0,10)||today(),
        category:'Sales',
        description:`Sold 1 × ${item.name}`,
        defaultChecked:true
      });
    }
    for(let i=0;i<missingCost&&item.costPrice>0;i++){
      rows.push({
        id:`add-cost-${item.id}-${i}`,
        action:'add',
        kind:'cost',
        itemId:item.id,
        itemName:item.name,
        amount:item.costPrice,
        currency:cur,
        date:item.acquiredDate||item.createdAt?.slice(0,10)||today(),
        category:'Inventory',
        description:`COGS — 1 × ${item.name}`,
        defaultChecked:true
      });
    }

    // Suspected manual duplicates — already in ledger, surfaced for transparency
    suspectRev.forEach(t=>rows.push({
      id:`susp-${t.id}`,
      action:'suspect',
      kind:'revenue',
      itemId:item.id,
      itemName:item.name,
      txId:t.id,
      amount:t.amount,
      currency:t.currency||cur,
      date:t.date,
      description:t.description,
      txRef:t,
      defaultChecked:false
    }));
    suspectCost.forEach(t=>rows.push({
      id:`susp-${t.id}`,
      action:'suspect',
      kind:'cost',
      itemId:item.id,
      itemName:item.name,
      txId:t.id,
      amount:t.amount,
      currency:t.currency||cur,
      date:t.date,
      description:t.description,
      txRef:t,
      defaultChecked:false
    }));
  });

  return rows;
}

function confirmBackfill(){
  const rows=buildInventorySyncDiff();
  const toAdd=rows.filter(r=>r.action==='add');
  const suspects=rows.filter(r=>r.action==='suspect');

  if(toAdd.length===0&&suspects.length===0){
    showToast('Ledger already matches Inventory — nothing to sync.',null,null,3500);
    return;
  }

  // Stash for the confirm step
  window._syncRows=rows;

  const renderRow=(r,checked)=>{
    const colour=r.kind==='revenue'?'#3df5a8':'#ff5c7a';
    const sign=r.kind==='revenue'?'+':'−';
    return `<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--ink-3);border:1px solid var(--line);border-radius:4px;cursor:pointer;font-size:12.5px;">
      <input type="checkbox" data-row="${r.id}" ${checked?'checked':''} style="accent-color:${colour};">
      <span style="width:6px;height:6px;border-radius:50%;background:${colour};flex-shrink:0;"></span>
      <div style="min-width:0;flex:1;display:flex;justify-content:space-between;align-items:center;gap:10px;">
        <div style="min-width:0;">
          <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(r.description)}</div>
          <div style="font-size:10.5px;color:var(--bone-mute);margin-top:1px;">${r.action==='suspect'?'existing manual entry':'new auto-entry'} · ${escapeHtml(r.itemName)} · ${fmtShortDate(r.date)}</div>
        </div>
        <span class="mono" style="color:${colour};font-weight:500;flex-shrink:0;">${sign}${r.currency}${r.amount.toLocaleString('en-GB',{maximumFractionDigits:2})}</span>
      </div>
    </label>`;
  };

  const addBlock=toAdd.length>0?`<div style="margin-bottom:14px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div class="label">Will be added · <span style="color:var(--jade);">${toAdd.length}</span></div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-ghost btn-sm" onclick="syncToggleAll('add',true)">All</button>
        <button class="btn btn-ghost btn-sm" onclick="syncToggleAll('add',false)">None</button>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;max-height:240px;overflow:auto;padding:4px;background:rgba(61,245,168,0.05);border:1px solid rgba(61,245,168,0.2);border-radius:6px;">
      ${toAdd.map(r=>renderRow(r,r.defaultChecked)).join('')}
    </div>
  </div>`:'';

  const suspBlock=suspects.length>0?`<div style="margin-bottom:14px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div class="label" style="color:var(--gold);">Likely already logged manually · <span style="color:var(--bone);">${suspects.length}</span></div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-ghost btn-sm" onclick="syncToggleAll('suspect',true)">Force-add all</button>
        <button class="btn btn-ghost btn-sm" onclick="syncToggleAll('suspect',false)">Skip all</button>
      </div>
    </div>
    <div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:8px;">These existing entries match an inventory item by name and amount. They're already in your ledger — Atlas will skip creating a duplicate. <strong style="color:var(--bone-dim);">Tick to force-add anyway</strong> only if you're sure they shouldn't count.</div>
    <div style="display:flex;flex-direction:column;gap:4px;max-height:240px;overflow:auto;padding:4px;background:rgba(255,224,102,0.05);border:1px solid rgba(255,224,102,0.2);border-radius:6px;">
      ${suspects.map(r=>renderRow(r,r.defaultChecked)).join('')}
    </div>
  </div>`:'';

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:14px;">
    <div>
      <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;">Sync Ledger from Inventory</div>
      <div style="font-size:12.5px;color:var(--bone-dim);margin-top:6px;">Atlas compares your Inventory's <span class="mono">qtySold</span> to existing Ledger entries. Anything that looks like a manual entry already there is flagged for review, not auto-added.</div>
    </div>

    ${addBlock}
    ${suspBlock}

    <div style="display:flex;gap:8px;justify-content:flex-end;padding-top:6px;">
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="executeSyncFromUI()">Apply selected</button>
    </div>
  </div>`);
}

function syncToggleAll(action,checked){
  document.querySelectorAll('.modal-backdrop input[data-row]').forEach(input=>{
    const id=input.dataset.row;
    const isAction=(action==='add'&&id.startsWith('add-'))||(action==='suspect'&&id.startsWith('susp-'));
    if(isAction)input.checked=checked;
  });
}

function executeSyncFromUI(){
  const rows=window._syncRows||[];
  const checks={};
  document.querySelectorAll('.modal-backdrop input[data-row]').forEach(input=>{checks[input.dataset.row]=input.checked});

  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const syncTag=`[sync:${today()}]`;
  let revAdded=0,costAdded=0;

  rows.forEach(r=>{
    if(!checks[r.id])return;
    if(r.action==='add'){
      txs.push({
        id:uid(),
        date:r.date,
        type:r.kind,
        description:r.description,
        category:r.category,
        currency:r.currency,
        amount:r.amount,
        notes:`Synced from Inventory ${syncTag}`,
        createdAt:new Date().toISOString(),
        sourceItemId:r.itemId,
        syncTag:syncTag
      });
      if(r.kind==='revenue')revAdded++;else costAdded++;
    }else if(r.action==='suspect'&&r.txRef){
      // Force-add: link the existing tx to the inventory item so future sync recognises it
      const existing=txs.find(t=>t.id===r.txId);
      if(existing){
        existing.sourceItemId=r.itemId;
        existing.notes=(existing.notes||'')+` ${syncTag} (linked to inventory)`;
      }
    }
  });

  store.set(`profile:${state.profileId}:transactions`,txs);
  store.set(`profile:${state.profileId}:lastSyncTag`,syncTag);
  delete window._syncRows;
  closeModal();

  const total=revAdded+costAdded;
  if(total===0){
    showToast('Sync complete — nothing changed.',null,null,3000);
  }else{
    showToast(`Added ${revAdded} Revenue + ${costAdded} COGS entries.`,'Undo last sync',()=>{undoLastSync(syncTag)},10000);
  }
  render();
}

function undoLastSync(tag){
  const txs=store.get(`profile:${state.profileId}:transactions`,[]);
  const before=txs.length;
  // Remove entries created by this sync run
  const filtered=txs.filter(t=>t.syncTag!==tag);
  // Unlink any forced-link suspects from this run (revert sourceItemId set + tag)
  filtered.forEach(t=>{
    if(t.notes&&t.notes.includes(tag)&&!t.syncTag){
      // Was a suspect that got linked; remove the link + tag mention
      t.sourceItemId=null;
      t.notes=t.notes.replace(new RegExp(`\\s*${tag.replace(/[\[\]:]/g,'\\$&')}\\s*\\(linked to inventory\\)`,'g'),'').trim();
    }
  });
  const removed=before-filtered.length;
  store.set(`profile:${state.profileId}:transactions`,filtered);
  showToast(`Reverted ${removed} entries from sync.`,null,null,3500);
  render();
}

// Kept for backward compat — not called from UI anymore but other code might reference
function backfillInventoryLedger(){
  confirmBackfill();
}

function deleteInventoryItem(id){
  const key=`profile:${state.profileId}:inventory`;
  const items=store.get(key,[]);
  const item=items.find(i=>i.id===id);
  if(!item)return;
  if(deleteWithUndo(key,item,`item "${item.name}"`))render();
}


// ============ DAILY (GYM) VIEW ============
function renderDaily(){
  const logs=store.get('daily:log',[]);
  const sorted=[...logs].sort((a,b)=>new Date(b.date)-new Date(a.date));

  const cutoff=new Date();cutoff.setDate(cutoff.getDate()-30);
  const recent=logs.filter(l=>new Date(l.date)>=cutoff);
  const gymDays=recent.filter(l=>l.gym).length;

  // Streak: count consecutive days back from today where the user trained.
  // - If there's no entry for today yet, start counting from yesterday (so the streak doesn't "die" before you log).
  // - A logged rest day breaks the streak.
  // - A missing day (gap) breaks the streak.
  const gymDates=new Set(logs.filter(l=>l.gym).map(l=>l.date));
  const restDates=new Set(logs.filter(l=>!l.gym).map(l=>l.date));
  const toDateStr=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  let streak=0;
  const cur=new Date();cur.setHours(0,0,0,0);
  const todayKey=toDateStr(cur);
  // If today has no log at all yet, don't penalise — start from yesterday.
  if(!gymDates.has(todayKey)&&!restDates.has(todayKey)){
    cur.setDate(cur.getDate()-1);
  }
  // Now walk backwards. Count gym days, stop on rest day or missing day.
  while(true){
    const key=toDateStr(cur);
    if(gymDates.has(key)){streak++;cur.setDate(cur.getDate()-1)}
    else break; // rest day OR missing day breaks the streak
  }

  // Longest streak: scan all gym dates in chronological order, find longest run of consecutive days.
  const gymDateList=[...gymDates].sort();
  let longestStreak=0,running=0,prevDate=null;
  for(const ds of gymDateList){
    const d=new Date(ds);d.setHours(0,0,0,0);
    if(prevDate){
      const diff=Math.round((d-prevDate)/86400000);
      if(diff===1)running++; else running=1;
    }else running=1;
    if(running>longestStreak)longestStreak=running;
    prevDate=d;
  }

  // Calendar nav state
  const cal=window._gymCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  window._gymCal=cal;

  // Build events for calendar — gym days = ember dot, split label
  const eventsByDate={};
  logs.forEach(l=>{
    if(!l.gym)return;
    eventsByDate[l.date]=[{color:'#4fe3f0',label:l.split||'Trained',type:'gym',ref:l.id}];
  });

  // Weight log + KPI
  const weights=store.get('weight:log',[]);
  const weightUnit=store.get('weight:unit','kg');
  const sortedWeights=[...weights].sort((a,b)=>new Date(b.date)-new Date(a.date));
  const latestWeight=sortedWeights[0];
  // Weight calendar dots — small bone dot, subtle so it doesn't overpower the gym ember
  weights.forEach(w=>{
    if(!w.date)return;
    if(!eventsByDate[w.date])eventsByDate[w.date]=[];
    eventsByDate[w.date].push({color:'#7aa2ff',label:`${formatWeight(w.kg,weightUnit)}`,type:'weight',ref:w.id});
  });

  const monthName=new Date(cal.year,cal.month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'});

  // Year-view rendering: 12 mini calendars
  const yearView=()=>{
    const cells=[];
    for(let m=0;m<12;m++){
      const monthEvents={};
      Object.entries(eventsByDate).forEach(([d,evs])=>{
        const dt=new Date(d);
        if(dt.getFullYear()===cal.year&&dt.getMonth()===m)monthEvents[d]=evs;
      });
      const monthShortName=new Date(cal.year,m,1).toLocaleDateString('en-GB',{month:'short'});
      const monthGymCount=Object.keys(monthEvents).length;
      cells.push(`<div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:12px;cursor:pointer;" onclick="window._gymCal={year:${cal.year},month:${m},mode:'month'};render()">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
          <div class="serif" style="font-size:13px;font-weight:500;">${monthShortName}</div>
          <div class="mono" style="font-size:11px;color:var(--ember);">${monthGymCount}d</div>
        </div>
        ${renderCalendarGrid({year:cal.year,month:m,eventsByDate:monthEvents,monthLabel:false,mini:true})}
      </div>`);
    }
    return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">${cells.join('')}</div>`;
  };

  const kpi=(label,value,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:26px;font-weight:500;color:${accent};letter-spacing:-0.01em;">${value}</div>
  </div>`;

  return `<div class="page" style="max-width:1300px;">
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Routine tracker</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Gym Log</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">Track gym attendance and splits — keep the streak alive.</div>
      </div>
      <button class="btn btn-primary" onclick="openDailyModal()">${icon('plus',14)} Log today</button>
    </div>

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('Current streak',`${streak}d`,'zap','var(--ember)')}
      ${kpi('Longest streak',`${longestStreak}d`,'trendUp','var(--gold)')}
      ${kpi('Gym · 30d',`${gymDays}/30`,'dumbbell','var(--jade)')}
      ${kpi('Attendance',`${((gymDays/30)*100).toFixed(0)}%`,'activity','var(--gold)')}
      ${latestWeight?kpi('Weight',formatWeight(latestWeight.kg,weightUnit),'activity','var(--blue)'):kpi('Weight','—','activity','var(--bone-mute)')}
      ${kpi('Total entries',logs.length,'file')}
    </div>

    <div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
        <div>
          <div class="serif" style="font-size:18px;font-weight:500;">${cal.mode==='year'?cal.year:cal.mode==='week'?weekRangeLabel(cal):cal.mode==='day'?new Date(cal.day||today()).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):monthName}</div>
          <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">Click any day to log or edit</div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
          <div style="display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;">
            ${['day','week','month','year'].map(m=>`<button class="btn btn-sm ${cal.mode===m?'btn-primary':''}" style="border:0;border-radius:0;padding:5px 10px;font-size:11.5px;text-transform:capitalize;" onclick="setGymCalMode('${m}')">${m}</button>`).join('')}
          </div>
          <button class="btn btn-ghost btn-sm" onclick="gymCalNav(-1)" style="transform:rotate(180deg);" aria-label="Previous">${icon('chevron',13)}</button>
          <button class="btn btn-ghost btn-sm" onclick="gymCalToday()">Today</button>
          <button class="btn btn-ghost btn-sm" onclick="gymCalNav(1)" aria-label="Next">${icon('chevron',13)}</button>
        </div>
      </div>
      ${cal.mode==='year'?yearView()
        :cal.mode==='week'?renderWeekView(cal,buildGymEventsForRange(cal),'openGymDayModal')
        :cal.mode==='day'?renderDayView(cal,eventsByDate,'openGymDayModal')
        :renderCalendarGrid({year:cal.year,month:cal.month,eventsByDate,onClickFn:'openGymDayModal',monthLabel:false})}
    </div>

    ${renderWeightSection()}

    <div class="card" style="overflow:auto;">
      ${sorted.length===0?`<div class="empty-state">No entries yet — log today to get started.</div>`:(()=>{
        const limit=window._gymLimit||50;
        const shown=sorted.slice(0,limit);
        const hasMore=sorted.length>limit;
        return `<table class="table"><thead><tr><th>Date</th><th>Gym</th><th>Split</th><th>Notes</th><th></th></tr></thead><tbody>
        ${shown.map(l=>`<tr>
          <td class="mono" style="font-size:12px;">${fmtShortDate(l.date)}</td>
          <td>${l.gym?`<span class="chip" style="background:rgba(79,227,240,0.15);color:var(--ember);border:1px solid rgba(79,227,240,0.3);">✓ Trained</span>`:`<span class="chip" style="background:var(--ink-3);color:var(--bone-mute);border:1px solid var(--line);">Rest</span>`}</td>
          <td style="font-size:13px;">${escapeHtml(l.split||'—')}</td>
          <td style="font-size:12.5px;color:var(--bone-dim);max-width:400px;">${escapeHtml(l.notes||'—')}</td>
          <td><div style="display:flex;gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="openDailyModal('${l.id}')">${icon('edit',13)}</button>
            <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteDaily('${l.id}')">${icon('trash',13)}</button>
          </div></td>
        </tr>`).join('')}
        </tbody></table>
        ${hasMore?`<div style="padding:14px;text-align:center;border-top:1px solid var(--line);">
          <button class="btn btn-sm" onclick="window._gymLimit=(window._gymLimit||50)+50;render()">Show older entries</button>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">Showing ${shown.length} of ${sorted.length}</div>
        </div>`:sorted.length>50?`<div style="padding:10px;text-align:center;font-size:11px;color:var(--bone-mute);border-top:1px solid var(--line);">All ${sorted.length} entries shown</div>`:''}`;
      })()}
    </div>
  </div>`;
}

function gymCalNav(delta){
  const cal=window._gymCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  if(cal.mode==='year'){cal.year+=delta}
  else if(cal.mode==='month'){
    cal.month+=delta;
    if(cal.month<0){cal.month=11;cal.year--}
    if(cal.month>11){cal.month=0;cal.year++}
    cal.day=`${cal.year}-${String(cal.month+1).padStart(2,'0')}-01`;
  }else if(cal.mode==='week'){
    const d=new Date(cal.day);d.setDate(d.getDate()+delta*7);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }else{ // day
    const d=new Date(cal.day);d.setDate(d.getDate()+delta);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }
  window._gymCal=cal;
  render();
}
function gymCalToday(){
  const t=new Date();
  window._gymCal={year:t.getFullYear(),month:t.getMonth(),mode:(window._gymCal&&window._gymCal.mode)||'month',day:today()};
  render();
}
function setGymCalMode(mode){
  const cal=window._gymCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  cal.mode=mode;
  if(!cal.day)cal.day=today();
  window._gymCal=cal;
  render();
}
function buildGymEventsForRange(cal){
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7;
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const end=new Date(start);end.setDate(start.getDate()+6);
  const logs=store.get('daily:log',[]);
  const out={};
  logs.forEach(l=>{
    if(!l.gym||!l.date)return;
    const d=new Date(l.date);
    if(d>=start&&d<=end){
      out[l.date]=[{color:'#4fe3f0',label:l.split||'Trained',type:'gym',ref:l.id}];
    }
  });
  return out;
}
function openGymDayModal(date){
  const logs=store.get('daily:log',[]);
  const existing=logs.find(l=>l.date===date);
  openDailyModal(existing?existing.id:null,date);
}

function openDailyModal(id,defaultDate){
  const logs=store.get('daily:log',[]);
  const l=id?logs.find(x=>x.id===id):{date:defaultDate||today(),gym:true,split:'Push',notes:''};
  if(!l)return;
  const splits=['Push','Pull','Legs','Upper','Lower','Full Body','Kettlebells','Cardio','Other'];
  showModal(id?'Edit log':'New log',`<div style="display:flex;flex-direction:column;gap:16px;">
    <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="d-date" type="date" value="${l.date}"></div>
    <div><div class="label" style="margin-bottom:8px;">Did you train?</div>
      <div style="display:flex;gap:8px;">
        <button id="d-yes" class="btn ${l.gym?'btn-primary':''}" style="flex:1;" onclick="document.getElementById('d-yes').classList.add('btn-primary');document.getElementById('d-no').classList.remove('btn-primary');document.getElementById('d-split-row').style.display='block';">${icon('check',14)} Yes, trained</button>
        <button id="d-no" class="btn ${!l.gym?'btn-primary':''}" style="flex:1;" onclick="document.getElementById('d-no').classList.add('btn-primary');document.getElementById('d-yes').classList.remove('btn-primary');document.getElementById('d-split-row').style.display='none';">${icon('circle',14)} Rest day</button>
      </div>
    </div>
    <div id="d-split-row" style="display:${l.gym?'block':'none'};">
      <div class="label" style="margin-bottom:6px;">Split</div>
      <select class="field" id="d-split">${splits.map(s=>`<option ${l.split===s?'selected':''}>${s}</option>`).join('')}</select>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="d-notes" rows="4" placeholder="How did it go? Lifts, energy, anything to remember…">${escapeHtml(l.notes||'')}</textarea></div>
  </div>`,()=>{
    const gym=document.getElementById('d-yes').classList.contains('btn-primary');
    const upd={id:l.id||uid(),date:document.getElementById('d-date').value,gym,split:gym?document.getElementById('d-split').value:'',notes:document.getElementById('d-notes').value};
    const existing=logs.find(x=>x.date===upd.date&&x.id!==upd.id);
    let next;
    if(id){next=logs.map(x=>x.id===id?upd:x)}
    else if(existing){if(!confirm(`An entry for ${upd.date} exists. Replace it?`))return false;next=logs.filter(x=>x.date!==upd.date).concat(upd)}
    else{next=[upd,...logs]}
    store.set('daily:log',next);
    return true;
  });
}
function deleteDaily(id){
  const logs=store.get('daily:log',[]);
  const item=logs.find(l=>l.id===id);
  if(!item)return;
  if(deleteWithUndo('daily:log',item,'gym log'))render();
}

// ============ WEIGHT TRACKING ============
// Stored as { id, date (YYYY-MM-DD), kg (number, always stored as kilograms internally), notes, createdAt }
// User can pick display unit kg/lb in the UI; conversions happen at render time.
const KG_TO_LB=2.2046226218;
function weightToDisplay(kg,unit){return unit==='lb'?kg*KG_TO_LB:kg}
function displayToKg(value,unit){return unit==='lb'?value/KG_TO_LB:value}
function formatWeight(kg,unit){
  if(kg==null||isNaN(kg))return '—';
  const v=weightToDisplay(kg,unit);
  return `${v.toLocaleString('en-GB',{minimumFractionDigits:1,maximumFractionDigits:1})} ${unit}`;
}

function renderWeightSection(){
  const weights=store.get('weight:log',[]);
  const unit=store.get('weight:unit','kg');
  const sorted=[...weights].sort((a,b)=>new Date(a.date)-new Date(b.date));
  const latest=sorted[sorted.length-1];
  const previous=sorted[sorted.length-2];

  // Find an entry roughly 30 days ago (closest match within ±5 days)
  let monthAgo=null;
  if(latest){
    const target=new Date(latest.date);target.setDate(target.getDate()-30);
    let best=null,bestDiff=Infinity;
    for(const w of sorted){
      const d=new Date(w.date);
      const diff=Math.abs(d-target);
      if(diff<bestDiff&&diff<=5*86400000&&w.id!==latest.id){best=w;bestDiff=diff}
    }
    monthAgo=best;
  }

  // Trend points: last 90 days, one entry per day (or interpolated as-is — we just plot what's there)
  const trendCutoff=new Date();trendCutoff.setDate(trendCutoff.getDate()-90);
  const trendPoints=sorted.filter(w=>new Date(w.date)>=trendCutoff);

  // Goal (optional)
  const goalKg=store.get('weight:goal',null);

  // Build the headline + delta block
  const fmtDelta=(currentKg,refKg)=>{
    if(refKg==null)return '<span style="color:var(--bone-mute);font-size:11.5px;">—</span>';
    const diffKg=currentKg-refKg;
    const diffDisp=weightToDisplay(Math.abs(diffKg),unit);
    if(Math.abs(diffKg)<0.05){return `<span style="color:var(--bone-mute);font-size:11.5px;">no change</span>`}
    const arrow=diffKg>0?'▲':'▼';
    const color=diffKg>0?'var(--rust)':'var(--jade)';
    return `<span style="color:${color};font-size:11.5px;font-weight:500;" class="mono">${arrow} ${diffDisp.toFixed(1)} ${unit}</span>`;
  };

  let goalBadge='';
  if(goalKg&&latest){
    const remainingKg=latest.kg-goalKg;
    const remainingDisp=weightToDisplay(Math.abs(remainingKg),unit);
    if(Math.abs(remainingKg)<0.1){goalBadge=`<span class="chip" style="background:rgba(61,245,168,0.15);color:var(--jade);border:1px solid rgba(61,245,168,0.3);">🎯 At goal</span>`}
    else{goalBadge=`<span class="chip" style="background:rgba(122,162,255,0.12);color:var(--blue);border:1px solid rgba(122,162,255,0.25);" class="mono">🎯 ${remainingDisp.toFixed(1)} ${unit} ${remainingKg>0?'to lose':'to gain'}</span>`}
  }

  return `<div class="stagger card" style="padding:22px;margin-bottom:16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
      <div>
        <div class="serif" style="font-size:18px;font-weight:500;">Weight</div>
        <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${weights.length} ${weights.length===1?'entry':'entries'}${latest?` · last weighed ${daysAgo(latest.date)}`:''}</div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
        <div style="display:inline-flex;border:1px solid var(--line);border-radius:6px;overflow:hidden;">
          <button class="btn btn-sm ${unit==='kg'?'btn-primary':''}" style="border:0;border-radius:0;padding:5px 12px;font-size:11.5px;" onclick="setWeightUnit('kg')">kg</button>
          <button class="btn btn-sm ${unit==='lb'?'btn-primary':''}" style="border:0;border-radius:0;padding:5px 12px;font-size:11.5px;" onclick="setWeightUnit('lb')">lb</button>
        </div>
        <button class="btn btn-sm" onclick="openWeightGoalModal()" title="Set weight goal">${icon('target',13)}</button>
        <button class="btn btn-primary btn-sm" onclick="openWeightModal()">${icon('plus',13)} Log</button>
      </div>
    </div>

    ${weights.length===0?`
      <div style="text-align:center;padding:30px 10px;color:var(--bone-mute);">
        <div style="font-size:13px;margin-bottom:10px;">No weight entries yet.</div>
        <button class="btn btn-primary btn-sm" onclick="openWeightModal()">${icon('plus',13)} Log first weight</button>
      </div>
    `:`
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:18px;">
        <div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px;">
          <div class="label" style="margin-bottom:6px;">Current</div>
          <div class="serif mono" style="font-size:24px;font-weight:500;letter-spacing:-0.01em;color:var(--blue);">${formatWeight(latest.kg,unit)}</div>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:4px;">${fmtDate(latest.date)}</div>
          ${goalBadge?`<div style="margin-top:8px;">${goalBadge}</div>`:''}
        </div>
        <div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px;">
          <div class="label" style="margin-bottom:6px;">vs previous</div>
          <div style="font-size:14px;font-weight:500;">${fmtDelta(latest.kg,previous?previous.kg:null)}</div>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:4px;">${previous?fmtDate(previous.date):'no prior entry'}</div>
        </div>
        <div style="background:var(--ink-3);border:1px solid var(--line);border-radius:6px;padding:14px;">
          <div class="label" style="margin-bottom:6px;">vs ~30 days</div>
          <div style="font-size:14px;font-weight:500;">${fmtDelta(latest.kg,monthAgo?monthAgo.kg:null)}</div>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:4px;">${monthAgo?fmtDate(monthAgo.date):'need 30+ days of data'}</div>
        </div>
      </div>

      ${trendPoints.length>=2?`<div style="margin-bottom:16px;">
        <div class="label" style="margin-bottom:8px;">Last 90 days</div>
        ${renderWeightChart(trendPoints,unit,goalKg)}
      </div>`:''}

      <div style="overflow:auto;">
        ${(()=>{
          const limit=window._weightLimit||10;
          const desc=[...weights].sort((a,b)=>new Date(b.date)-new Date(a.date));
          const shown=desc.slice(0,limit);
          const hasMore=desc.length>limit;
          return `<table class="table" style="margin:0;"><thead><tr>
            <th>Date</th><th style="text-align:right;">Weight</th><th class="table-hide-mobile" style="text-align:right;">Δ</th><th>Notes</th><th></th>
          </tr></thead><tbody>
          ${shown.map((w,i)=>{
            // Δ vs the next-older entry overall (not just within `shown`)
            const idxAll=desc.findIndex(x=>x.id===w.id);
            const older=desc[idxAll+1];
            const deltaCell=older?fmtDelta(w.kg,older.kg):'<span style="color:var(--bone-mute);font-size:11.5px;">—</span>';
            return `<tr>
              <td class="mono" style="font-size:12px;">${fmtShortDate(w.date)}</td>
              <td class="mono" style="text-align:right;font-weight:500;color:var(--blue);">${formatWeight(w.kg,unit)}</td>
              <td class="table-hide-mobile" style="text-align:right;">${deltaCell}</td>
              <td style="font-size:12.5px;color:var(--bone-dim);max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(w.notes||'—')}</td>
              <td><div style="display:flex;gap:4px;justify-content:flex-end;">
                <button class="btn btn-ghost btn-sm" onclick="openWeightModal('${w.id}')">${icon('edit',13)}</button>
                <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteWeight('${w.id}')">${icon('trash',13)}</button>
              </div></td>
            </tr>`;
          }).join('')}
          </tbody></table>
          ${hasMore?`<div style="padding:12px;text-align:center;border-top:1px solid var(--line);">
            <button class="btn btn-sm" onclick="window._weightLimit=(window._weightLimit||10)+10;render()">Show older entries</button>
            <div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">Showing ${shown.length} of ${desc.length}</div>
          </div>`:desc.length>10?`<div style="padding:10px;text-align:center;font-size:11px;color:var(--bone-mute);border-top:1px solid var(--line);">All ${desc.length} entries shown</div>`:''}`;
        })()}
      </div>
    `}
  </div>`;
}

function renderWeightChart(points,unit,goalKg){
  // points: ascending-by-date array of {date, kg}
  if(points.length<2)return '';
  const W=720,H=180,P=24;
  const values=points.map(p=>weightToDisplay(p.kg,unit));
  const goalDisp=goalKg!=null?weightToDisplay(goalKg,unit):null;
  // Y axis range — pad the data range a little; include goal if it's outside
  let minV=Math.min(...values), maxV=Math.max(...values);
  if(goalDisp!=null){minV=Math.min(minV,goalDisp);maxV=Math.max(maxV,goalDisp)}
  const pad=Math.max(0.5,(maxV-minV)*0.1);
  minV-=pad; maxV+=pad;
  const range=maxV-minV||1;
  // Map dates to x by elapsed time, not index — so gaps look like gaps
  const t0=new Date(points[0].date).getTime();
  const tN=new Date(points[points.length-1].date).getTime();
  const span=tN-t0||1;
  const x=t=>P+((t-t0)/span)*(W-P*2);
  const y=v=>H-P-((v-minV)/range)*(H-P*2);
  const xs=points.map(p=>x(new Date(p.date).getTime()));
  const ys=values.map(y);
  const path=points.map((p,i)=>`${i===0?'M':'L'}${xs[i].toFixed(1)},${ys[i].toFixed(1)}`).join(' ');
  const fillPath=`${path} L${xs[xs.length-1].toFixed(1)},${H-P} L${xs[0].toFixed(1)},${H-P} Z`;
  const trendUp=values[values.length-1]>=values[0];
  const stroke='#7aa2ff';
  const fill='rgba(122,162,255,0.12)';
  const goalLine=goalDisp!=null?`<line x1="${P}" x2="${W-P}" y1="${y(goalDisp).toFixed(1)}" y2="${y(goalDisp).toFixed(1)}" stroke="#3df5a8" stroke-width="1" stroke-dasharray="4 4"/><text x="${W-P-4}" y="${(y(goalDisp)-4).toFixed(1)}" fill="#3df5a8" font-size="9" text-anchor="end" font-family="JetBrains Mono">goal ${goalDisp.toFixed(1)}</text>`:'';
  // Y-axis labels (min, mid, max in display unit)
  const mid=(minV+maxV)/2;
  return `<svg viewBox="0 0 ${W} ${H+10}" preserveAspectRatio="none" style="width:100%;height:200px;display:block;" class="icon">
    ${[0.25,0.5,0.75].map(f=>`<line x1="${P}" x2="${W-P}" y1="${(P+f*(H-P*2)).toFixed(1)}" y2="${(P+f*(H-P*2)).toFixed(1)}" stroke="var(--line)" stroke-dasharray="2 4"/>`).join('')}
    ${goalLine}
    <path d="${fillPath}" fill="${fill}"/>
    <path d="${path}" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${points.map((p,i)=>`<circle cx="${xs[i].toFixed(1)}" cy="${ys[i].toFixed(1)}" r="2.5" fill="${stroke}"/>`).join('')}
    <text x="${P-4}" y="${(y(maxV)+3).toFixed(1)}" fill="var(--bone-mute)" font-size="9" text-anchor="end" font-family="JetBrains Mono">${maxV.toFixed(1)}</text>
    <text x="${P-4}" y="${(y(mid)+3).toFixed(1)}" fill="var(--bone-mute)" font-size="9" text-anchor="end" font-family="JetBrains Mono">${mid.toFixed(1)}</text>
    <text x="${P-4}" y="${(y(minV)+3).toFixed(1)}" fill="var(--bone-mute)" font-size="9" text-anchor="end" font-family="JetBrains Mono">${minV.toFixed(1)}</text>
  </svg>
  <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--bone-mute);margin-top:4px;font-family:'JetBrains Mono',monospace;">
    <span>${fmtShortDate(points[0].date)}</span>
    <span style="color:${trendUp?'var(--rust)':'var(--jade)'};">${trendUp?'▲':'▼'} ${(weightToDisplay(points[points.length-1].kg-points[0].kg,unit)>=0?'+':'')}${weightToDisplay(points[points.length-1].kg-points[0].kg,unit).toFixed(1)} ${unit}</span>
    <span>${fmtShortDate(points[points.length-1].date)}</span>
  </div>`;
}

function setWeightUnit(unit){
  store.set('weight:unit',unit);
  render();
}

function openWeightModal(id){
  const weights=store.get('weight:log',[]);
  const unit=store.get('weight:unit','kg');
  const w=id?weights.find(x=>x.id===id):{date:today(),kg:'',notes:''};
  if(!w)return;
  // For the input field, show in the user's chosen unit
  const displayValue=w.kg!==''&&w.kg!=null?weightToDisplay(w.kg,unit).toFixed(1):'';
  showModal(id?'Edit weight':'Log weight',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="w-date" type="date" value="${w.date}"></div>
    <div>
      <div class="label" style="margin-bottom:6px;">Weight (${unit}) *</div>
      <input class="field mono" id="w-value" type="number" step="0.1" min="0" placeholder="e.g. ${unit==='kg'?'78.5':'173.0'}" value="${displayValue}">
      <div style="font-size:11px;color:var(--bone-mute);margin-top:4px;">Stored internally as kg, displayed in your chosen unit. Switch units anytime via the kg/lb toggle.</div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="w-notes" rows="3" placeholder="Optional — context for this reading (morning, post-workout, holiday, etc.)">${escapeHtml(w.notes||'')}</textarea></div>
  </div>`,()=>{
    const valueRaw=parseFloat(document.getElementById('w-value').value);
    if(!valueRaw||valueRaw<=0){alert('Please enter a valid weight greater than zero.');return false}
    if(valueRaw>1000){alert('That weight looks unrealistic — please check.');return false}
    const date=document.getElementById('w-date').value;
    const kg=displayToKg(valueRaw,unit);
    const upd={
      id:w.id||uid(),
      date,
      kg,
      notes:document.getElementById('w-notes').value,
      createdAt:w.createdAt||new Date().toISOString()
    };
    const existingSameDate=weights.find(x=>x.date===date&&x.id!==upd.id);
    let next;
    if(id){next=weights.map(x=>x.id===id?upd:x)}
    else if(existingSameDate){
      if(!confirm(`A weight entry for ${date} exists (${formatWeight(existingSameDate.kg,unit)}). Replace it?`))return false;
      next=weights.filter(x=>x.date!==date).concat(upd);
    }else{next=[upd,...weights]}
    store.set('weight:log',next);
    return true;
  });
}

function deleteWeight(id){
  const weights=store.get('weight:log',[]);
  const item=weights.find(w=>w.id===id);
  if(!item)return;
  if(deleteWithUndo('weight:log',item,'weight entry'))render();
}

function openWeightGoalModal(){
  const unit=store.get('weight:unit','kg');
  const goalKg=store.get('weight:goal',null);
  const displayValue=goalKg!=null?weightToDisplay(goalKg,unit).toFixed(1):'';
  showModal('Weight goal',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="font-size:13px;color:var(--bone-dim);line-height:1.5;">Set a target weight to see remaining distance on the current-weight tile, plus a dashed goal line on the trend chart. Leave blank and save to clear.</div>
    <div>
      <div class="label" style="margin-bottom:6px;">Goal weight (${unit})</div>
      <input class="field mono" id="wg-value" type="number" step="0.1" min="0" placeholder="e.g. ${unit==='kg'?'75':'165'}" value="${displayValue}">
    </div>
  </div>`,()=>{
    const raw=document.getElementById('wg-value').value.trim();
    if(raw===''){
      store.del('weight:goal');
      showToast('Goal cleared',null,null,1500);
      return true;
    }
    const v=parseFloat(raw);
    if(!v||v<=0){alert('Please enter a valid goal weight, or leave blank to clear.');return false}
    const kg=displayToKg(v,unit);
    store.set('weight:goal',kg);
    showToast(`Goal set to ${formatWeight(kg,unit)}`,null,null,2000);
    return true;
  });
}

// ============ RUNNING VIEW ============
function renderRunning(){
  const runs=store.get('running:log',[]);
  const sorted=[...runs].sort((a,b)=>new Date(b.date)-new Date(a.date));

  // Stats
  const total=runs.length;
  const totalKm=runs.reduce((a,b)=>a+(b.distance||0),0);
  const totalMin=runs.reduce((a,b)=>a+(b.duration||0),0);
  const avgPace=totalKm>0?totalMin/totalKm:0;
  const fastest=runs.filter(r=>r.distance>0&&r.duration>0).reduce((best,r)=>{const p=r.duration/r.distance;return(!best||p<best.pace)?{pace:p,run:r}:best},null);

  // Last 7 days
  const week=runs.filter(r=>{const d=new Date(r.date);return d>=new Date(Date.now()-7*86400000)});
  const weekKm=week.reduce((a,b)=>a+(b.distance||0),0);
  const weekMin=week.reduce((a,b)=>a+(b.duration||0),0);
  const weekPace=weekKm>0?weekMin/weekKm:0;

  // Last 30 days for chart
  const days=[];
  for(let i=29;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().slice(0,10);
    const dayKm=runs.filter(r=>r.date===ds).reduce((a,b)=>a+(b.distance||0),0);
    days.push({label:d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}),value:dayKm});
  }

  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:26px;font-weight:500;color:${accent};letter-spacing:-0.01em;">${value}</div>
    ${sub?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">${sub}</div>`:''}
  </div>`;

  return `<div class="page" style="max-width:1200px;">
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Cardio tracker</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Running</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">Distance, duration, pace — every run logged.</div>
      </div>
      <button class="btn btn-primary" onclick="openRunModal()">${icon('plus',14)} Log run</button>
    </div>

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('Total distance',`${totalKm.toFixed(1)} km`,`across ${total} run${total===1?'':'s'}`,'run','var(--ember)')}
      ${kpi('Average pace',avgPace>0?fmtPace(avgPace):'—',avgPace>0?'min/km · all-time':null,'clock','var(--jade)')}
      ${kpi('This week',`${weekKm.toFixed(1)} km`,week.length>0?`${weekPace>0?fmtPace(weekPace):'—'} min/km`:'no runs yet','activity','var(--gold)')}
      ${kpi('Fastest pace',fastest?fmtPace(fastest.pace):'—',fastest?`${fastest.run.distance.toFixed(1)}km · ${fmtShortDate(fastest.run.date)}`:'log a run to start','zap','var(--blue)')}
    </div>

    <div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Distance · 30 days</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Kilometres run per day</div>
      ${renderAreaChart(days,'#7aa2ff')}
    </div>

    <div class="card" style="overflow:auto;">
      ${sorted.length===0?`<div class="empty-state">No runs logged yet. Tap "Log run" to add your first.</div>`:(()=>{
        const limit=window._runLimit||50;
        const shown=sorted.slice(0,limit);
        const hasMore=sorted.length>limit;
        return `<table class="table"><thead><tr>
          <th>Date</th><th class="table-hide-mobile">Time</th><th>Distance</th><th>Duration</th><th>Pace</th><th class="table-hide-mobile">Notes</th><th></th>
        </tr></thead><tbody>
        ${shown.map(r=>{const pace=r.distance>0?r.duration/r.distance:0;return `<tr>
          <td class="mono" style="font-size:12px;">${fmtShortDate(r.date)}</td>
          <td class="table-hide-mobile mono" style="font-size:12px;color:var(--bone-dim);">${escapeHtml(r.time||'—')}</td>
          <td class="mono">${r.distance?r.distance.toFixed(2)+' km':'—'}</td>
          <td class="mono">${r.duration?fmtDuration(r.duration):'—'}</td>
          <td class="mono" style="color:var(--ember);font-weight:500;">${pace?fmtPace(pace):'—'}</td>
          <td class="table-hide-mobile" style="font-size:12.5px;color:var(--bone-dim);max-width:300px;">${escapeHtml(r.notes||'—')}</td>
          <td><div style="display:flex;gap:4px;">
            <button class="btn btn-ghost btn-sm" onclick="openRunModal('${r.id}')">${icon('edit',13)}</button>
            <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteRun('${r.id}')">${icon('trash',13)}</button>
          </div></td>
        </tr>`}).join('')}
        </tbody></table>
        ${hasMore?`<div style="padding:14px;text-align:center;border-top:1px solid var(--line);">
          <button class="btn btn-sm" onclick="window._runLimit=(window._runLimit||50)+50;render()">Show older entries</button>
          <div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">Showing ${shown.length} of ${sorted.length}</div>
        </div>`:sorted.length>50?`<div style="padding:10px;text-align:center;font-size:11px;color:var(--bone-mute);border-top:1px solid var(--line);">All ${sorted.length} entries shown</div>`:''}`;
      })()}
    </div>
  </div>`;
}

function openRunModal(id){
  const runs=store.get('running:log',[]);
  const r=id?runs.find(x=>x.id===id):{date:today(),time:'',distance:'',durationMin:'',durationSec:'',notes:''};
  if(!r)return;
  // For editing: split duration back into mm/ss
  let dMin='',dSec='';
  if(r.duration){const totalSec=Math.round(r.duration*60);dMin=Math.floor(totalSec/60);dSec=totalSec%60}
  showModal(id?'Edit run':'Log run',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="r-date" type="date" value="${r.date||today()}"></div>
      <div><div class="label" style="margin-bottom:6px;">Time of run</div><input class="field" id="r-time" type="time" value="${r.time||''}"></div>
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;">Distance (km)</div>
      <input class="field" id="r-distance" type="number" step="0.01" placeholder="5.00" value="${r.distance||''}">
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;">Duration</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <input class="field" id="r-dmin" type="number" min="0" placeholder="Minutes" value="${dMin}">
        <input class="field" id="r-dsec" type="number" min="0" max="59" placeholder="Seconds" value="${dSec}">
      </div>
      <div style="font-size:11px;color:var(--bone-mute);margin-top:6px;">Pace will be calculated automatically.</div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="r-notes" rows="3" placeholder="Route, conditions, how it felt…">${escapeHtml(r.notes||'')}</textarea></div>
  </div>`,()=>{
    const distance=parseFloat(document.getElementById('r-distance').value)||0;
    const dmin=parseInt(document.getElementById('r-dmin').value)||0;
    const dsec=parseInt(document.getElementById('r-dsec').value)||0;
    const duration=dmin+(dsec/60);
    if(distance<=0){alert('Please enter distance.');return false}
    if(duration<=0){alert('Please enter duration.');return false}
    const upd={id:r.id||uid(),date:document.getElementById('r-date').value,time:document.getElementById('r-time').value,distance,duration,notes:document.getElementById('r-notes').value,createdAt:r.createdAt||new Date().toISOString()};
    const next=id?runs.map(x=>x.id===id?upd:x):[upd,...runs];
    store.set('running:log',next);
    return true;
  });
}
function deleteRun(id){
  const runs=store.get('running:log',[]);
  const item=runs.find(r=>r.id===id);
  if(!item)return;
  if(deleteWithUndo('running:log',item,'run'))render();
}

// ============ BILLS VIEW ============
function renderBills(){
  const bills=store.get('bills:log',[]);
  const sorted=[...bills].sort((a,b)=>new Date(b.date)-new Date(a.date));

  // Filters
  const typeFilter=window._billType||'All';
  const locFilter=window._billLoc||'All';
  const monthFilter=window._billMonth||'all';
  const search=window._billSearch||'';
  const fy=getFiscalYear();
  const prevFy=getPreviousFiscalYear();

  const filtered=sorted.filter(b=>{
    if(typeFilter!=='All'&&b.type!==typeFilter)return false;
    if(locFilter!=='All'&&b.location!==locFilter)return false;
    if(monthFilter==='thisMonth'){const d=new Date(b.date);const now=new Date();if(!(d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()))return false}
    else if(monthFilter==='lastMonth'){const d=new Date(b.date);const now=new Date();const ref=new Date(now.getFullYear(),now.getMonth()-1,1);if(!(d.getMonth()===ref.getMonth()&&d.getFullYear()===ref.getFullYear()))return false}
    else if(monthFilter==='thisFy'){if(!inFiscalYear(b.date,fy))return false}
    else if(monthFilter==='lastFy'){if(!inFiscalYear(b.date,prevFy))return false}
    if(search){
      const s=search.toLowerCase();
      const hay=`${b.description||''} ${b.type||''} ${b.location||''} ${b.notes||''}`.toLowerCase();
      if(!hay.includes(s))return false;
    }
    return true;
  });

  // KPIs: group by currency so we don't sum baht and pounds together
  const currencies=[...new Set(bills.map(b=>b.currency||'£'))];

  // Group filtered totals by currency
  const filteredByCurrency={};
  filtered.forEach(b=>{
    const c=b.currency||'£';
    filteredByCurrency[c]=(filteredByCurrency[c]||0)+(b.amount||0);
  });

  // This month / last month / all-time, all keyed by currency
  const now=new Date();
  const thisMonthByCur={};
  const lastMonthByCur={};
  const allTimeByCur={};
  const lastMonthRef=new Date(now.getFullYear(),now.getMonth()-1,1);
  bills.forEach(b=>{
    const c=b.currency||'£';
    const d=new Date(b.date);
    allTimeByCur[c]=(allTimeByCur[c]||0)+(b.amount||0);
    if(d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()){
      thisMonthByCur[c]=(thisMonthByCur[c]||0)+(b.amount||0);
    }
    if(d.getMonth()===lastMonthRef.getMonth()&&d.getFullYear()===lastMonthRef.getFullYear()){
      lastMonthByCur[c]=(lastMonthByCur[c]||0)+(b.amount||0);
    }
  });

  // Format a currency-grouped object as a stacked display: "฿25,000\n£46"
  const fmtMulti=(obj)=>{
    const entries=Object.entries(obj).filter(([_,v])=>v>0);
    if(entries.length===0)return `<span style="color:var(--bone-mute);">—</span>`;
    return entries.map(([cur,val])=>`${cur}${val.toLocaleString('en-GB',{maximumFractionDigits:0})}`).join('<br>');
  };

  // Breakdown by type — keep per-currency
  const byType=BILL_TYPES.map(t=>{
    const matching=filtered.filter(b=>b.type===t);
    const totalsByCur={};
    matching.forEach(b=>{const c=b.currency||'£';totalsByCur[c]=(totalsByCur[c]||0)+(b.amount||0)});
    return{type:t,totalsByCur,count:matching.length,color:BILL_COLORS[t]};
  }).filter(t=>t.count>0).sort((a,b)=>b.count-a.count);

  // Existing locations for filter dropdown
  const locations=[...new Set(bills.map(b=>b.location).filter(Boolean))].sort();

  // Compute month-over-month deltas per currency (only show if same currency exists in both)
  const deltas={};
  Object.keys(thisMonthByCur).forEach(cur=>{
    if(lastMonthByCur[cur]>0){
      deltas[cur]=((thisMonthByCur[cur]-lastMonthByCur[cur])/lastMonthByCur[cur])*100;
    }
  });
  const deltaText=Object.entries(deltas).map(([cur,d])=>`${cur} ${d>=0?'+':''}${d.toFixed(0)}%`).join(' · ')||'no comparison';

  const kpi=(label,value,sub,iconName,accent='var(--bone)')=>`<div class="card" style="padding:18px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="label">${label}</div><div style="color:${accent};">${icon(iconName,14)}</div></div>
    <div class="serif mono" style="font-size:${Object.keys(thisMonthByCur).length>1||Object.keys(allTimeByCur).length>1?'18px':'26px'};font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.2;">${value}</div>
    ${sub?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">${sub}</div>`:''}
  </div>`;

  return `<div class="page" style="max-width:1200px;">
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Personal expenses</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Bills</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${bills.length} ${bills.length===1?'entry':'entries'} logged · ${filtered.length} shown</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="exportBillsCSV()">${icon('download',14)} Export</button>
        <button class="btn btn-primary" onclick="openBillModal()">${icon('plus',14)} New bill</button>
      </div>
    </div>

    <div class="stagger grid-3" style="margin-bottom:24px;">
      ${kpi('This month',fmtMulti(thisMonthByCur),`vs last month · ${deltaText}`,'receipt','var(--ember)')}
      ${kpi('Last month',fmtMulti(lastMonthByCur),null,'clock','var(--gold)')}
      ${kpi('All-time',fmtMulti(allTimeByCur),`${bills.length} entries`,'dollar','var(--jade)')}
      ${kpi('Filtered total',fmtMulti(filteredByCurrency),`${filtered.length} matching`,'target','var(--blue)')}
    </div>

    ${byType.length>0?`<div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Breakdown by type</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">${monthFilter==='all'?'All-time':monthFilter==='thisMonth'?'This month':'Last month'}${typeFilter!=='All'?` · filtered to ${typeFilter}`:''}</div>
      ${byType.map(t=>{
        const totalCount=filtered.length;
        const pct=totalCount>0?(t.count/totalCount)*100:0;
        const totalsStr=Object.entries(t.totalsByCur).map(([cur,v])=>`${cur}${v.toLocaleString('en-GB',{maximumFractionDigits:0})}`).join(' + ');
        return `<div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;gap:12px;">
            <span style="color:var(--bone-dim);"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${t.color};margin-right:8px;vertical-align:middle;"></span>${t.type}<span style="color:var(--bone-mute);margin-left:8px;">${t.count} ${t.count===1?'entry':'entries'}</span></span>
            <span class="mono" style="text-align:right;">${totalsStr}</span>
          </div>
          <div style="height:6px;background:var(--ink-3);border-radius:2px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${t.color};"></div></div>
        </div>`;
      }).join('')}
    </div>`:''}

    ${(()=>{
      const bcal=window._billsCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
      if(!bcal.mode)bcal.mode='month';
      if(!bcal.day)bcal.day=today();
      window._billsCal=bcal;
      const events=buildBillEventsForMonth(bcal.year,bcal.month);
      const weekEvents=bcal.mode==='week'?buildBillEventsForRange(bcal):events;
      const eventCount=Object.values(events).reduce((a,b)=>a+b.length,0);
      const headerLabel=bcal.mode==='month'?new Date(bcal.year,bcal.month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'})
        :bcal.mode==='week'?weekRangeLabel(bcal)
        :new Date(bcal.day).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
      return `<div class="stagger card" style="padding:22px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
          <div>
            <div class="serif" style="font-size:18px;font-weight:500;">Calendar · ${headerLabel}</div>
            <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${bcal.mode==='month'?eventCount+' bill'+(eventCount===1?'':'s')+' this month — past entries + upcoming recurring':'past entries + upcoming recurring'}</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
            ${calViewToggleButtons('bills',bcal.mode)}
            <button class="btn btn-ghost btn-sm" onclick="billsCalNav(-1)" style="transform:rotate(180deg);" aria-label="Previous">${icon('chevron',13)}</button>
            <button class="btn btn-ghost btn-sm" onclick="billsCalToday()">Today</button>
            <button class="btn btn-ghost btn-sm" onclick="billsCalNav(1)" aria-label="Next">${icon('chevron',13)}</button>
          </div>
        </div>
        ${bcal.mode==='month'?renderCalendarGrid({year:bcal.year,month:bcal.month,eventsByDate:events,onClickFn:'openBillsCalDayModal',monthLabel:false})
          :bcal.mode==='week'?renderWeekView(bcal,weekEvents,'openBillsCalDayModal')
          :renderDayView(bcal,events,'openBillsCalDayModal')}
      </div>`;
    })()}

    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
      <div style="position:relative;flex:1;min-width:200px;">
        <span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--bone-mute);pointer-events:none;display:flex;">${icon('search',14,'var(--bone-mute)')}</span>
        <input class="field" id="bill-search" style="padding-left:34px;" placeholder="Search description, location, notes…" value="${escAttr(search)}" oninput="window._billSearch=this.value;rerenderBillTable()">
      </div>
      <select class="field" style="width:auto;flex:1;min-width:130px;" onchange="window._billMonth=this.value;render()">
        <option value="all" ${monthFilter==='all'?'selected':''}>All time</option>
        <option value="thisMonth" ${monthFilter==='thisMonth'?'selected':''}>This month</option>
        <option value="lastMonth" ${monthFilter==='lastMonth'?'selected':''}>Last month</option>
        <option value="thisFy" ${monthFilter==='thisFy'?'selected':''}>This ${fy.label}</option>
        <option value="lastFy" ${monthFilter==='lastFy'?'selected':''}>Last ${prevFy.label}</option>
      </select>
      <select class="field" style="width:auto;flex:1;min-width:120px;" onchange="window._billType=this.value;render()">
        <option value="All" ${typeFilter==='All'?'selected':''}>All types</option>
        ${BILL_TYPES.map(t=>`<option value="${t}" ${typeFilter===t?'selected':''}>${t}</option>`).join('')}
      </select>
      <select class="field" style="width:auto;flex:1;min-width:120px;" onchange="window._billLoc=this.value;render()">
        <option value="All" ${locFilter==='All'?'selected':''}>All locations</option>
        ${locations.map(l=>`<option value="${escAttr(l)}" ${locFilter===l?'selected':''}>${escapeHtml(l)}</option>`).join('')}
      </select>
    </div>

    <div id="bill-table-wrapper" class="card" style="overflow:auto;">
      ${renderBillTable(filtered,bills)}
    </div>
  </div>`;
}

function renderBillTable(filtered,allBills){
  if(filtered.length===0){
    return `<div class="empty-state">${allBills.length===0?'No bills yet — log your first one to get started.':'No bills match the current filters.'}</div>`;
  }
  return `<table class="table"><thead><tr>
    <th>Date</th><th>Description</th><th>Type</th><th class="table-hide-mobile">Location</th><th style="text-align:right;">Amount</th><th></th>
  </tr></thead><tbody>
  ${filtered.map(b=>`<tr>
    <td class="mono" style="font-size:12px;">${fmtShortDate(b.date)}</td>
    <td>${escapeHtml(b.description||'—')}${b.notes?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(b.notes)}</div>`:''}${b.recurring?'<span class="chip" style="background:rgba(122,162,255,0.15);color:#7aa2ff;border:1px solid rgba(122,162,255,0.3);margin-left:6px;">↻ '+b.recurring+'</span>':''}</td>
    <td><span class="chip" style="background:${BILL_COLORS[b.type]}20;color:${BILL_COLORS[b.type]};border:1px solid ${BILL_COLORS[b.type]}30;">${b.type}</span></td>
    <td class="table-hide-mobile" style="font-size:12.5px;color:var(--bone-dim);">${b.location?`<span style="display:inline-flex;align-items:center;gap:4px;">${icon('mapPin',11,'var(--bone-mute)')}${escapeHtml(b.location)}</span>`:'—'}</td>
    <td class="mono" style="text-align:right;font-weight:500;">${b.currency||'£'}${(b.amount||0).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
    <td><div style="display:flex;gap:4px;">
      <button class="btn btn-ghost btn-sm" onclick="openBillModal('${b.id}')">${icon('edit',13)}</button>
      <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteBill('${b.id}')">${icon('trash',13)}</button>
    </div></td>
  </tr>`).join('')}
  </tbody></table>`;
}

function rerenderBillTable(){
  const bills=store.get('bills:log',[]);
  const sorted=[...bills].sort((a,b)=>new Date(b.date)-new Date(a.date));
  const typeFilter=window._billType||'All';
  const locFilter=window._billLoc||'All';
  const monthFilter=window._billMonth||'all';
  const search=window._billSearch||'';
  const fy=getFiscalYear();
  const prevFy=getPreviousFiscalYear();
  const filtered=sorted.filter(b=>{
    if(typeFilter!=='All'&&b.type!==typeFilter)return false;
    if(locFilter!=='All'&&b.location!==locFilter)return false;
    if(monthFilter==='thisMonth'){const d=new Date(b.date);const now=new Date();if(!(d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()))return false}
    else if(monthFilter==='lastMonth'){const d=new Date(b.date);const now=new Date();const ref=new Date(now.getFullYear(),now.getMonth()-1,1);if(!(d.getMonth()===ref.getMonth()&&d.getFullYear()===ref.getFullYear()))return false}
    else if(monthFilter==='thisFy'){if(!inFiscalYear(b.date,fy))return false}
    else if(monthFilter==='lastFy'){if(!inFiscalYear(b.date,prevFy))return false}
    if(search){const s=search.toLowerCase();const hay=`${b.description||''} ${b.type||''} ${b.location||''} ${b.notes||''}`.toLowerCase();if(!hay.includes(s))return false}
    return true;
  });
  const wrap=document.getElementById('bill-table-wrapper');
  if(wrap)wrap.innerHTML=renderBillTable(filtered,bills);
}

function openBillModal(id){
  const bills=store.get('bills:log',[]);
  const defaultDate=window._billDefaultDate||today();
  const b=id?bills.find(x=>x.id===id):{date:defaultDate,description:'',type:'Other',location:'',amount:'',currency:'£',notes:'',deductFromCash:true};
  if(!b)return;
  // Backwards-compat: existing bills before this feature default to NOT deducting
  if(b.deductFromCash===undefined)b.deductFromCash=!id; // new bills default true; existing default false to avoid surprise
  // Suggest existing locations
  const locations=[...new Set(bills.map(x=>x.location).filter(Boolean))].sort();
  showModal(id?'Edit bill':'New bill',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="b-date" type="date" value="${b.date}"></div>
      <div><div class="label" style="margin-bottom:6px;">Bill type</div><select class="field" id="b-type">${BILL_TYPES.map(t=>`<option ${b.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Description *</div><input class="field" id="b-desc" placeholder="e.g. Monthly rent / Petrol / Spotify" value="${escAttr(b.description||'')}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div>
        <div class="label" style="margin-bottom:6px;">Currency</div>
        <select class="field" id="b-currency">
          <option value="£" ${b.currency==='£'?'selected':''}>£ GBP</option>
          <option value="฿" ${b.currency==='฿'?'selected':''}>฿ THB</option>
          <option value="$" ${b.currency==='$'?'selected':''}>$ USD</option>
          <option value="€" ${b.currency==='€'?'selected':''}>€ EUR</option>
        </select>
      </div>
      <div><div class="label" style="margin-bottom:6px;">Amount *</div><input class="field" id="b-amount" type="number" step="0.01" placeholder="0.00" value="${b.amount||''}"></div>
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;">Location</div>
      <input class="field" id="b-location" list="b-loc-list" placeholder="e.g. London / Home / Online" value="${escAttr(b.location||'')}">
      ${locations.length?`<datalist id="b-loc-list">${locations.map(l=>`<option value="${escAttr(l)}">`).join('')}</datalist>`:''}
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="b-notes" rows="2" placeholder="Optional details">${escapeHtml(b.notes||'')}</textarea></div>
    <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="b-recurring" ${b.recurring?'checked':''} style="accent-color:var(--ember);">
      <span>Repeat monthly</span>
      <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">For rent, subscriptions, etc.</span>
    </label>
    <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="b-deduct" ${b.deductFromCash?'checked':''} style="accent-color:var(--jade);">
      <span>Take it out of my cash or bank balance</span>
      <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">Uses your largest cash or bank account in that currency</span>
    </label>
  </div>`,()=>{
    const desc=document.getElementById('b-desc').value.trim();
    const amount=parseFloat(document.getElementById('b-amount').value);
    if(!desc){alert('Description required.');return false}
    if(!amount||amount<=0){alert('Please enter a valid amount.');return false}
    const upd={
      id:b.id||uid(),
      date:document.getElementById('b-date').value,
      description:desc,
      type:document.getElementById('b-type').value,
      location:document.getElementById('b-location').value.trim(),
      currency:document.getElementById('b-currency').value,
      amount,
      notes:document.getElementById('b-notes').value,
      recurring:document.getElementById('b-recurring').checked?'monthly':null,
      deductFromCash:document.getElementById('b-deduct').checked,
      cashAssetId:b.cashAssetId||null,
      deductedAmount:b.deductedAmount||null,
      createdAt:b.createdAt||new Date().toISOString()
    };

    // Apply or update cash deduction
    const result=processBillCashDeduction(upd,id?b:null);
    if(upd.deductFromCash&&!result&&!id){
      // Couldn't deduct (no cash asset), warn but allow save
      const proceed=confirm(`No matching ${upd.currency} Cash asset found in Net Worth. The bill will be saved but no deduction will happen.\n\nAdd a Cash asset to your Net Worth first if you want this to work, then edit the bill.\n\nSave anyway?`);
      if(!proceed)return false;
    }

    const next=id?bills.map(x=>x.id===id?upd:x):[upd,...bills];
    store.set('bills:log',next);
    if(result){
      showToast(`−${upd.currency}${upd.amount.toLocaleString('en-GB',{maximumFractionDigits:0})} from "${result.assetName}"`,null,null,3000);
    }
    return true;
  });
}
function deleteBill(id){
  const bills=store.get('bills:log',[]);
  const item=bills.find(b=>b.id===id);
  if(!item)return;
  // Revert any cash deduction
  if(item.cashAssetId&&item.deductedAmount){
    revertCashDeduction('personal',item.cashAssetId,item.deductedAmount);
  }
  // Custom undo: also re-applies the deduction on restore
  const idx=bills.findIndex(b=>b.id===id);
  bills.splice(idx,1);
  store.set('bills:log',bills);
  showToast(`Deleted bill`,'Undo',()=>{
    const cur=store.get('bills:log',[]);
    cur.splice(idx,0,item);
    store.set('bills:log',cur);
    // Re-apply cash deduction
    if(item.cashAssetId&&item.deductedAmount){
      const balance=store.get(balanceKey('personal'),[]);
      const target=balance.find(b=>b.id===item.cashAssetId);
      if(target){target.amount=(target.amount||0)-item.deductedAmount;store.set(balanceKey('personal'),balance)}
    }
    render();
    showToast(`Restored bill`,null,null,2500);
  },30000);
  render();
}

// ============ BILLS CALENDAR ============
function buildBillEventsForMonth(year,month){
  const eventsByDate={};
  const add=(date,evt)=>{if(!eventsByDate[date])eventsByDate[date]=[];eventsByDate[date].push(evt)};
  const bills=store.get('bills:log',[]);
  const todayKey=today();

  // Past + present logged bills
  bills.forEach(b=>{
    if(!b.date)return;
    const d=new Date(b.date);
    if(d.getFullYear()===year&&d.getMonth()===month){
      const color=BILL_COLORS[b.type]||'#7d86b0';
      add(b.date,{color,label:`${b.description||b.type} ${b.currency||'£'}${b.amount}`,type:'bill',ref:b.id});
    }
  });

  // Forecast: recurring monthly bills, projected forward
  const recurring=bills.filter(b=>b.recurring==='monthly');
  recurring.forEach(b=>{
    const start=new Date(b.date);
    let next=new Date(start);
    next.setMonth(next.getMonth()+1);
    let safety=0;
    while(safety<24&&(next.getFullYear()<year||(next.getFullYear()===year&&next.getMonth()<=month))){
      if(next.getFullYear()===year&&next.getMonth()===month){
        const ds=next.toISOString().slice(0,10);
        // Don't double-add if there's already a logged bill on that date
        const already=(eventsByDate[ds]||[]).some(e=>e.ref===b.id);
        if(!already){
          const isFuture=ds>todayKey;
          add(ds,{color:BILL_COLORS[b.type]||'#7d86b0',label:`↻ ${b.description||b.type} ${b.currency||'£'}${b.amount}${isFuture?' (forecast)':''}`,type:'bill-forecast',ref:b.id});
        }
      }
      next.setMonth(next.getMonth()+1);
      safety++;
    }
  });
  return eventsByDate;
}

function buildBillEventsForRange(cal){
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7;
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const end=new Date(start);end.setDate(start.getDate()+6);
  const out={};
  const months=new Set();
  months.add(`${start.getFullYear()}-${start.getMonth()}`);
  months.add(`${end.getFullYear()}-${end.getMonth()}`);
  months.forEach(k=>{
    const [y,m]=k.split('-').map(Number);
    const ev=buildBillEventsForMonth(y,m);
    Object.entries(ev).forEach(([d,arr])=>{out[d]=(out[d]||[]).concat(arr)});
  });
  return out;
}

function billsCalNav(delta){
  const cal=window._billsCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  if(cal.mode==='month'){
    cal.month+=delta;
    if(cal.month<0){cal.month=11;cal.year--}
    if(cal.month>11){cal.month=0;cal.year++}
    cal.day=`${cal.year}-${String(cal.month+1).padStart(2,'0')}-01`;
  }else if(cal.mode==='week'){
    const d=new Date(cal.day);d.setDate(d.getDate()+delta*7);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }else{
    const d=new Date(cal.day);d.setDate(d.getDate()+delta);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }
  window._billsCal=cal;
  render();
}
function billsCalToday(){
  const t=new Date();
  window._billsCal={year:t.getFullYear(),month:t.getMonth(),mode:(window._billsCal&&window._billsCal.mode)||'month',day:today()};
  render();
}

function openBillsCalDayModal(date){
  const bills=store.get('bills:log',[]);
  // Match logged bills on this exact date
  const matching=bills.filter(b=>b.date===date);
  // Also surface forecast (recurring) hits on this date
  const events=buildBillEventsForMonth(new Date(date).getFullYear(),new Date(date).getMonth())[date]||[];
  const forecasts=events.filter(e=>e.type==='bill-forecast');

  let html=`<div style="display:flex;flex-direction:column;gap:14px;">`;
  html+=`<div style="display:flex;justify-content:space-between;align-items:center;">
    <div class="serif" style="font-size:18px;font-weight:500;">${new Date(date).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
    <button class="btn btn-sm btn-primary" onclick="closeModal();openBillModalForDate('${date}')">${icon('plus',12)} Add bill</button>
  </div>`;

  if(matching.length===0&&forecasts.length===0){
    html+=`<div style="text-align:center;color:var(--bone-mute);padding:30px 0;font-size:13px;">No bills logged for this day.</div>`;
  }else{
    if(matching.length>0){
      html+=`<div><div class="label" style="margin-bottom:8px;">Logged bills</div>`;
      matching.forEach(b=>{
        const color=BILL_COLORS[b.type]||'#7d86b0';
        html+=`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;background:var(--ink-3);border:1px solid var(--line);border-left:3px solid ${color};border-radius:6px;margin-bottom:6px;">
          <div style="min-width:0;flex:1;">
            <div style="font-weight:500;font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(b.description||b.type)}</div>
            <div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(b.type)}${b.location?' · '+escapeHtml(b.location):''}${b.recurring?' · ↻':''}</div>
          </div>
          <div class="mono" style="font-weight:500;flex-shrink:0;">${b.currency||'£'}${(b.amount||0).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
          <button class="btn btn-ghost btn-sm" onclick="closeModal();openBillModal('${b.id}')">${icon('edit',12)}</button>
        </div>`;
      });
      html+=`</div>`;
    }
    if(forecasts.length>0){
      html+=`<div><div class="label" style="margin-bottom:8px;">Recurring forecast</div>
        <div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:8px;">These are projected from past recurring bills. Atlas will auto-create them on their date.</div>`;
      forecasts.forEach(f=>{
        html+=`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 12px;background:var(--ink-3);border:1px dashed var(--line);border-radius:6px;margin-bottom:6px;font-size:12.5px;">
          <span>${escapeHtml(f.label)}</span>
        </div>`;
      });
      html+=`</div>`;
    }
  }
  html+=`<div style="display:flex;gap:8px;justify-content:flex-end;padding-top:4px;">
    <button class="btn btn-primary" onclick="closeModal()">Close</button>
  </div></div>`;

  showCustomModal(html,fmtDate(date));
}

function openBillModalForDate(date){
  // Open the bill modal with the date pre-filled
  const bills=store.get('bills:log',[]);
  // Patch the date by setting today() helper... easier: stash a one-shot default
  window._billDefaultDate=date;
  openBillModal();
  delete window._billDefaultDate;
}

function exportBillsCSV(){
  const bills=store.get('bills:log',[]);
  const headers=['Date','Description','Type','Location','Currency','Amount','Notes','Created'];
  const rows=bills.map(b=>[b.date,b.description,b.type,b.location,b.currency,b.amount,b.notes,b.createdAt]);
  const csv=[headers,...rows].map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile(csv,`bills-${today()}.csv`,'text/csv');
}

// ============ SETTINGS VIEW ============
function renderSettings(){
  const profiles=store.get('profiles:list',[]);
  const fx=getFx();
  const privacy=store.get('settings:privacy',{blurOnBlur:false});
  return `<div class="page" style="max-width:900px;">
    <div style="margin-bottom:32px;">
      <div class="label" style="margin-bottom:6px;">System</div>
      <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Settings &amp; data</h1>
    </div>

    ${renderDataCard()}
    ${renderSettingsExtras()}

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Appearance</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Switch between dark and light mode. The setting persists across sessions.</div>
      <div style="display:flex;gap:8px;">
        <button class="btn ${getTheme()==='dark'?'btn-primary':''}" onclick="store.set('settings:theme','dark');applyTheme();render()" style="flex:1;">🌙 Dark</button>
        <button class="btn ${getTheme()==='light'?'btn-primary':''}" onclick="store.set('settings:theme','light');applyTheme();render()" style="flex:1;">☀️ Light</button>
      </div>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Dashboard layout</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">${PHONE?'Reorder Command Centre sections on your Mac. The order syncs to this phone.':'Drag the handle that appears on each Command Centre section to reorder. Order is saved automatically.'}</div>
      <button class="btn btn-sm" onclick="resetCmdOrder()">${icon('refresh',13)} Reset to default order</button>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Privacy</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">
        Atlas has no login of its own — your ${MACHINE}'s login is the lock. ${PHONE?'Your phone’s own lock screen protects it, and you can add an Atlas passcode below.':`Press ${IS_MAC?'⌃⌘Q':'Windows key + L'} to lock the screen when you step away.`} The option below just hides Atlas from passing glances when you switch to another app.
      </div>
      <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;cursor:pointer;background:var(--ink-3);">
        <input type="checkbox" id="privacy-blur" ${privacy.blurOnBlur?'checked':''} onchange="savePrivacy()" style="accent-color:var(--ember);">
        <span>Blur Atlas when window loses focus</span>
        <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">Click anywhere on the page to unblur</span>
      </label>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Reporting currency &amp; FX rates</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Atlas converts every amount to your chosen reporting currency for the Command Centre and Balance Sheet totals. Rates are entered as units per £1 — e.g. 44 for Thai baht means £1 = ฿44. Update them every few months as rates drift.</div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
        <div>
          <div class="label" style="margin-bottom:6px;">Reporting currency</div>
          <select class="field" id="fx-reporting" onchange="saveFxFromUI()">
            ${CURRENCIES.map(c=>`<option value="${c.symbol}" ${c.symbol===fx.reporting?'selected':''}>${c.label}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="label" style="margin-bottom:8px;">Exchange rates · 1 GBP equals</div>
      ${renderFxRateInputs(fx)}

      <div style="margin-top:16px;font-size:11.5px;color:var(--bone-mute);">
        Starting rates are approximate. Look up <a href="https://www.xe.com" style="color:var(--ember);">xe.com</a> when you want fresh figures.
      </div>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Fiscal year</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Used by the "This FY" and "Last FY" filters across the Ledger, Bills, and Command Centre. UK self-employed and limited companies typically use 6 April. Sole traders and US users may prefer 1 January.</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
        <div>
          <div class="label" style="margin-bottom:6px;">Starts on</div>
          <select class="field" id="fy-preset" onchange="setFiscalPreset()">
            ${(()=>{const f=getFiscalConfig();const isUk=f.month===4&&f.day===6;const isCal=f.month===1&&f.day===1;return `
              <option value="uk" ${isUk?'selected':''}>UK tax year — Apr 6</option>
              <option value="cal" ${isCal?'selected':''}>Calendar year — Jan 1</option>
              <option value="custom" ${!isUk&&!isCal?'selected':''}>Custom</option>
            `})()}
          </select>
        </div>
        <div id="fy-custom-row" style="display:${(()=>{const f=getFiscalConfig();return (f.month===4&&f.day===6)||(f.month===1&&f.day===1)?'none':'block'})()};">
          <div class="label" style="margin-bottom:6px;">Custom date</div>
          <div style="display:flex;gap:6px;">
            <input class="field mono" id="fy-month" type="number" min="1" max="12" value="${getFiscalConfig().month}" onchange="saveFyCustom()" style="width:60px;">
            <input class="field mono" id="fy-day" type="number" min="1" max="31" value="${getFiscalConfig().day}" onchange="saveFyCustom()" style="width:60px;">
          </div>
          <div style="font-size:10px;color:var(--bone-mute);margin-top:4px;">month / day</div>
        </div>
      </div>
      <div style="margin-top:12px;font-size:11.5px;color:var(--bone-mute);">
        Currently: <span class="mono" style="color:var(--bone);">${getFiscalYear().label}</span> runs from ${fmtDate(getFiscalYear().start)} to ${fmtDate(getFiscalYear().end)}.
      </div>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Backup &amp; restore</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Export everything — profiles, contacts, ledger, balance sheets, snapshots, daily logs, runs, bills, FX, and fiscal settings — as a single JSON file. Import to restore on another device.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="exportAll()">${icon('download',14)} Export everything</button>
        <input type="file" id="import-file" accept=".json" style="display:none" onchange="importAll(this.files[0])">
        <button class="btn" onclick="document.getElementById('import-file').click()">${icon('upload',14)} Import backup</button>
      </div>
    </div>

    <div class="card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Profiles</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Deleting a profile removes its contacts, ledger, and balance sheet permanently.</div>
      ${profiles.length===0?`<div style="color:var(--bone-mute);font-size:13px;">No profiles yet.</div>`:profiles.map(p=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="width:10px;height:10px;border-radius:2px;background:${p.color};"></span>
          <div><div style="font-size:13.5px;font-weight:500;">${escapeHtml(p.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${escapeHtml(p.type)} · created ${fmtDate(p.createdAt)}</div></div>
        </div>
        <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteProfile('${p.id}')">${icon('trash',13)} Delete</button>
      </div>`).join('')}
    </div>

    <div class="card" style="padding:22px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Storage</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">All data is stored in a file on this ${MACHINE} (see “Your data” above). Exporting a JSON copy now and then — to email or a USB stick — is still good insurance.</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:10px;" class="mono">Atlas keys in storage: ${store.keys().length}</div>
      <details style="font-size:12.5px;color:var(--bone-dim);">
        <summary style="cursor:pointer;color:var(--bone);font-weight:500;margin-bottom:8px;">Where do snapshots save?</summary>
        <div style="padding:10px 14px;background:var(--ink-3);border:1px solid var(--line);border-radius:6px;line-height:1.6;">
          Net-worth snapshots are saved in the same data file as everything else, so they're included in every automatic backup and every JSON export. Atlas takes one automatically on the first launch each month, and you can take one any time from the Balance sheet or Net worth pages.
        </div>
      </details>
    </div>

    <div style="margin-top:24px;color:var(--bone-mute);font-size:11.5px;text-align:center;" class="mono">Atlas Desktop · ${profiles.length} profile${profiles.length!==1?'s':''}</div>
  </div>`;
}

function saveFxFromUI(){
  const fx=getFx();
  fx.reporting=document.getElementById('fx-reporting').value;
  CURRENCIES.filter(c=>c.symbol!=='£').forEach(c=>{
    const el=document.getElementById('fx-rate-'+c.symbol);
    if(el){const v=parseFloat(el.value);if(v>0)fx.rates[c.symbol]=v}
  });
  fx.rates['£']=1;
  saveFx(fx);
}

function setFiscalPreset(){
  const v=document.getElementById('fy-preset').value;
  const customRow=document.getElementById('fy-custom-row');
  if(v==='uk'){saveFiscalConfig({month:4,day:6,label:'UK tax year (Apr 6 → Apr 5)'});customRow.style.display='none';render()}
  else if(v==='cal'){saveFiscalConfig({month:1,day:1,label:'Calendar year'});customRow.style.display='none';render()}
  else{customRow.style.display='block'}
}

function saveFyCustom(){
  const m=parseInt(document.getElementById('fy-month').value)||1;
  const d=parseInt(document.getElementById('fy-day').value)||1;
  saveFiscalConfig({month:Math.max(1,Math.min(12,m)),day:Math.max(1,Math.min(31,d)),label:`Custom (${m}/${d})`});
  render();
}

function exportAll(){
  const data={
    exportedAt:new Date().toISOString(),
    version:6,
    profiles:[],
    daily:store.get('daily:log',[]),
    running:store.get('running:log',[]),
    bills:store.get('bills:log',[]),
    personalBalance:store.get('personal:balance',[]),
    personalBalanceSnapshots:store.get('personal:balance:snapshots',[]),
    routine:store.get('routine:log',[]),
    routineCustomCategories:store.get('routine:categories:custom',[]),
    calendarNotes:store.get('calendar:notes',[]),
    customTypes:store.get('profile-types:custom',[]),
    weight:store.get('weight:log',[]),
    weightUnit:store.get('weight:unit','kg'),
    weightGoal:store.get('weight:goal',null),
    theme:store.get('settings:theme','dark'),
    dashboardOrder:store.get('dashboard:cmd:order',null),
    fx:getFx(),
    fiscal:getFiscalConfig(),
    privacy:store.get('settings:privacy',{blurOnBlur:false}),
    kv:Object.fromEntries(['transfers:log','settings:user','settings:sections','settings:setupDone','life:tasks','life:goals','life:renewals','life:people','life:checkins','life:budgets','settings:notify','routine:hidden'].map(k=>[k,store.get(k,null)]))
  };
  const profiles=store.get('profiles:list',[]);
  for(const p of profiles){
    data.profiles.push({
      meta:store.get(`profile:${p.id}:meta`),
      contacts:store.get(`profile:${p.id}:contacts`,[]),
      transactions:store.get(`profile:${p.id}:transactions`,[]),
      balance:store.get(`profile:${p.id}:balance`,[]),
      balanceSnapshots:store.get(`profile:${p.id}:balance:snapshots`,[]),
      inventory:store.get(`profile:${p.id}:inventory`,[])
    });
  }
  downloadFile(JSON.stringify(data,null,2),`atlas-backup-${today()}.json`,'application/json');
}

function importAll(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(!confirm('This will merge imported data with your existing data. Continue?'))return;
      const list=store.get('profiles:list',[]);
      for(const p of(data.profiles||[])){
        if(!p.meta)continue;
        store.set(`profile:${p.meta.id}:meta`,p.meta);
        store.set(`profile:${p.meta.id}:contacts`,p.contacts||[]);
        store.set(`profile:${p.meta.id}:transactions`,p.transactions||[]);
        if(p.balance)store.set(`profile:${p.meta.id}:balance`,p.balance);
        if(p.balanceSnapshots)store.set(`profile:${p.meta.id}:balance:snapshots`,p.balanceSnapshots);
        if(p.inventory)store.set(`profile:${p.meta.id}:inventory`,p.inventory);
        if(!list.find(x=>x.id===p.meta.id))list.push({id:p.meta.id,name:p.meta.name,type:p.meta.type,color:p.meta.color,createdAt:p.meta.createdAt});
      }
      store.set('profiles:list',list);
      const mergeArr=(key,incoming)=>{const existing=store.get(key,[]);const merged=[...existing];for(const x of(incoming||[])){if(!merged.find(y=>y.id===x.id))merged.push(x)}store.set(key,merged)};
      mergeArr('daily:log',data.daily);
      mergeArr('running:log',data.running);
      mergeArr('bills:log',data.bills);
      mergeArr('personal:balance',data.personalBalance);
      mergeArr('routine:log',data.routine);
      mergeArr('calendar:notes',data.calendarNotes);
      mergeArr('weight:log',data.weight);
      if(data.personalBalanceSnapshots)store.set('personal:balance:snapshots',data.personalBalanceSnapshots);
      if(data.routineCustomCategories)store.set('routine:categories:custom',data.routineCustomCategories);
      if(data.privacy)store.set('settings:privacy',data.privacy);
      if(data.weightUnit)store.set('weight:unit',data.weightUnit);
      if(data.weightGoal!=null)store.set('weight:goal',data.weightGoal);
      if(data.theme)store.set('settings:theme',data.theme);
      if(data.dashboardOrder)store.set('dashboard:cmd:order',data.dashboardOrder);
      // Merge custom types (deduplicate)
      if(data.customTypes&&Array.isArray(data.customTypes)){
        const existing=store.get('profile-types:custom',[]);
        const merged=[...new Set([...existing,...data.customTypes])];
        store.set('profile-types:custom',merged);
      }
      if(data.fx)saveFx(data.fx);
      if(data.fiscal)saveFiscalConfig(data.fiscal);
      if(data.kv){mergeArr('transfers:log',data.kv['transfers:log']);['life:tasks','life:goals','life:renewals','life:people','life:checkins'].forEach(k=>mergeArr(k,data.kv[k]));['settings:user','settings:sections','life:budgets','settings:notify','routine:hidden'].forEach(k=>{if(data.kv[k]!=null)store.set(k,data.kv[k])});store.set('settings:setupDone',true)}
      applyTheme(); // pick up imported theme immediately
      alert('Import complete.');
      render();
    }catch(err){alert('Failed to import: '+err.message)}
  };
  reader.readAsText(file);
}

function deleteProfile(id){
  const list=store.get('profiles:list',[]);
  const p=list.find(x=>x.id===id);
  if(!p)return;
  if(!confirm(`Delete "${p.name}" and all its data?\n\nYou'll have 30 seconds to undo.`))return;
  // Snapshot everything before deletion
  const snapshots=[
    {key:`profile:${id}:meta`,prevValue:store.get(`profile:${id}:meta`)},
    {key:`profile:${id}:contacts`,prevValue:store.get(`profile:${id}:contacts`,[])},
    {key:`profile:${id}:transactions`,prevValue:store.get(`profile:${id}:transactions`,[])},
    {key:`profile:${id}:balance`,prevValue:store.get(`profile:${id}:balance`,[])},
    {key:`profile:${id}:balance:snapshots`,prevValue:store.get(`profile:${id}:balance:snapshots`,[])},
    {key:`profile:${id}:inventory`,prevValue:store.get(`profile:${id}:inventory`,[])},
    {key:'profiles:list',prevValue:list}
  ];
  store.del(`profile:${id}:meta`);
  store.del(`profile:${id}:contacts`);
  store.del(`profile:${id}:transactions`);
  store.del(`profile:${id}:balance`);
  store.del(`profile:${id}:balance:snapshots`);
  store.del(`profile:${id}:inventory`);
  store.set('profiles:list',list.filter(x=>x.id!==id));
  render();
  deleteWithUndoMulti(snapshots,`profile "${p.name}"`);
}

// ============ REUSABLE CALENDAR ============
// renderCalendarGrid({year, month, eventsByDate, onClickFn, todayHighlight})
// eventsByDate: { 'YYYY-MM-DD': [{color, label, type}] }
// onClickFn: a string like 'onCalendarDayClick' that takes a date arg
function renderCalendarGrid({year, month, eventsByDate={}, onClickFn=null, monthLabel=true, mini=false, dayHeight}){
  const firstDay=new Date(year,month,1);
  const lastDay=new Date(year,month+1,0);
  const startWeekday=(firstDay.getDay()+6)%7; // 0 = Monday
  const daysInMonth=lastDay.getDate();
  const todayStr=today();

  // Previous month tail (greyed)
  const prevLastDay=new Date(year,month,0).getDate();
  const cells=[];
  for(let i=0;i<startWeekday;i++){
    const d=prevLastDay-startWeekday+i+1;
    cells.push({d,otherMonth:true,date:null});
  }
  for(let d=1;d<=daysInMonth;d++){
    const dateStr=`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    cells.push({d,otherMonth:false,date:dateStr,events:eventsByDate[dateStr]||[]});
  }
  // Trailing days to fill the grid
  while(cells.length%7!==0){cells.push({d:cells.length-startWeekday-daysInMonth+1,otherMonth:true,date:null})}
  // Limit to 6 rows max
  while(cells.length>42){cells.pop()}

  const monthName=new Date(year,month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'});
  const dayHeaders=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const cellH=dayHeight||(mini?32:64);

  return `
    ${monthLabel?`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div class="serif" style="font-size:${mini?14:17}px;font-weight:500;letter-spacing:-0.01em;">${monthName}</div>
    </div>`:''}
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:${mini?2:4}px;font-size:10px;color:var(--bone-mute);margin-bottom:6px;text-align:center;letter-spacing:0.06em;text-transform:uppercase;">
      ${dayHeaders.map(d=>`<div>${d}</div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:${mini?2:4}px;">
      ${cells.map(c=>{
        if(c.otherMonth){
          return `<div style="height:${cellH}px;background:var(--ink-3);border-radius:4px;opacity:0.3;"></div>`;
        }
        const isToday=c.date===todayStr;
        const events=c.events||[];
        const clickHandler=onClickFn?`onclick="${onClickFn}('${c.date}')"`:'';
        const hasEvents=events.length>0;
        const eventDots=mini?'':events.slice(0,3).map(e=>`<span style="width:6px;height:6px;border-radius:50%;background:${e.color};display:inline-block;"></span>`).join('');
        const moreCount=events.length>3?`<span style="font-size:9px;color:var(--bone-mute);font-weight:500;">+${events.length-3}</span>`:'';
        const eventLabels=mini?'':events.slice(0,2).map(e=>`<div style="font-size:10px;color:${e.color};line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:1px 3px;background:${e.color}15;border-radius:2px;">${escapeHtml(e.label||'')}</div>`).join('');
        return `<div style="height:${cellH}px;background:${isToday?'var(--ink-2)':'var(--ink-3)'};border:1px solid ${isToday?'var(--ember)':'var(--line)'};border-radius:4px;padding:${mini?2:5}px;cursor:${onClickFn?'pointer':'default'};display:flex;flex-direction:column;gap:2px;overflow:hidden;${onClickFn?'transition:border 100ms;':''}" ${clickHandler} ${onClickFn?`onmouseover="this.style.borderColor='var(--bone-mute)'" onmouseout="this.style.borderColor='${isToday?'var(--ember)':'var(--line)'}'"`:''}>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:${mini?10:11}px;font-weight:${isToday?600:400};color:${isToday?'var(--ember)':'var(--bone-dim)'};">${c.d}</span>
            ${mini&&hasEvents?`<span style="width:4px;height:4px;border-radius:50%;background:${events[0].color};"></span>`:''}
          </div>
          ${!mini&&hasEvents&&PHONE?`<div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:auto;">${eventDots}${moreCount}</div>`:''}${!mini&&hasEvents&&!PHONE?`<div style="display:flex;flex-direction:column;gap:1px;flex:1;overflow:hidden;">${eventLabels}${moreCount?`<div style="font-size:9px;color:var(--bone-mute);">${moreCount}</div>`:''}</div>`:''}
        </div>`;
      }).join('')}
    </div>
  `;
}


// ============ BILLS → CASH DEDUCTION ============
// When a bill or cost is logged, we deduct from the user's largest matching-currency Cash asset.
// State stored on the bill/tx itself: deductFromCash (bool), cashAssetId (which one), deductedAmount (£N)
// This makes edits and deletes reversible.

// Apply (or re-apply) cash deduction. Returns {assetName, amount, currency} or null.
function applyCashDeduction(scope, item, amount, currency){
  // scope: 'personal' or profile id
  if(!amount||amount<=0)return null;
  const balance=store.get(balanceKey(scope),[]);
  // Find Cash assets matching the currency, sort by amount desc
  const cashAssets=balance.filter(b=>b.kind==='asset'&&b.category==='Cash'&&(b.currency||'£')===currency).sort((a,b)=>(b.amount||0)-(a.amount||0));
  if(cashAssets.length===0)return null;
  const target=cashAssets[0];
  target.amount=(target.amount||0)-amount;
  store.set(balanceKey(scope),balance);
  return {assetId:target.id,assetName:target.name,amount,currency};
}

// Reverse a previous deduction (e.g. on edit or delete).
function revertCashDeduction(scope, cashAssetId, amount){
  if(!cashAssetId||!amount)return;
  const balance=store.get(balanceKey(scope),[]);
  const target=balance.find(b=>b.id===cashAssetId);
  if(!target)return;
  target.amount=(target.amount||0)+amount;
  store.set(balanceKey(scope),balance);
}

// Process a bill save: apply or update deduction
function processBillCashDeduction(bill, prevBill){
  // Revert previous deduction if any
  if(prevBill&&prevBill.cashAssetId&&prevBill.deductedAmount){
    revertCashDeduction('personal',prevBill.cashAssetId,prevBill.deductedAmount);
  }
  // Apply new if requested
  if(bill.deductFromCash!==false&&bill.amount>0){
    const result=applyCashDeduction('personal',bill,bill.amount,bill.currency||'£');
    if(result){
      bill.cashAssetId=result.assetId;
      bill.deductedAmount=bill.amount;
      return result;
    }
  }
  // Clear if not deducted
  bill.cashAssetId=null;
  bill.deductedAmount=null;
  return null;
}

// Same for ledger cost entries (per-profile, deducts from that profile's cash)
function processTxCashDeduction(profileId, tx, prevTx){
  if(prevTx&&prevTx.cashAssetId&&prevTx.deductedAmount){
    revertCashDeduction(profileId,prevTx.cashAssetId,prevTx.deductedAmount);
  }
  if(tx.type==='cost'&&tx.deductFromCash!==false&&tx.amount>0){
    const result=applyCashDeduction(profileId,tx,tx.amount,tx.currency||'£');
    if(result){
      tx.cashAssetId=result.assetId;
      tx.deductedAmount=tx.amount;
      return result;
    }
  }
  tx.cashAssetId=null;
  tx.deductedAmount=null;
  return null;
}


// ============ DAILY ROUTINE ============
const DEFAULT_ROUTINE_CATEGORIES=[
  {id:'chores',label:'House chores',color:'#7aa2ff',icon:'home'},
  {id:'laundry',label:'Laundry',color:'#b57cff',icon:'package'},
  {id:'massage',label:'Massage',color:'#3df5a8',icon:'heart'},
  {id:'selfcare',label:'Self-care',color:'#ffe066',icon:'heart'},
  {id:'mosque',label:'Mosque',color:'#4fe3f0',icon:'building'},
  {id:'other',label:'Other',color:'#7d86b0',icon:'circle'}
];
function getRoutineCategories(){
  const custom=store.get('routine:categories:custom',[]);
  return [...DEFAULT_ROUTINE_CATEGORIES,...custom];
}

function renderRoutine(){
  const logs=store.get('routine:log',[]);
  const cats=getRoutineCategories();
  const todayStr=today();

  // What was done today
  const todayLogs=logs.filter(l=>l.date===todayStr);
  const todayDoneCats=new Set(todayLogs.filter(l=>l.done).map(l=>l.category));

  // Calendar nav state
  const cal=window._routineCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  window._routineCal=cal;

  // Build eventsByDate for calendar — each cat done that day = a coloured dot
  const eventsByDate={};
  logs.forEach(l=>{
    if(!l.done)return;
    if(!eventsByDate[l.date])eventsByDate[l.date]=[];
    const cat=cats.find(c=>c.id===l.category);
    if(cat)eventsByDate[l.date].push({color:cat.color,label:cat.label,type:'routine'});
  });

  // Recent activity list
  const recentDates=[...new Set(logs.map(l=>l.date))].sort((a,b)=>new Date(b)-new Date(a)).slice(0,7);

  // Stats: how many done in current calendar month
  const monthCounts={};
  cats.forEach(c=>{monthCounts[c.id]=0});
  logs.forEach(l=>{
    if(!l.done)return;
    const d=new Date(l.date);
    if(d.getMonth()===cal.month&&d.getFullYear()===cal.year){
      if(monthCounts[l.category]!==undefined)monthCounts[l.category]++;
    }
  });

  const monthName=new Date(cal.year,cal.month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'});

  return `<div class="page" style="max-width:1200px;">
    <div class="header-row header-mobile">
      <div>
        <div class="label" style="margin-bottom:6px;">Personal</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Daily Routine</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">Track chores, self-care, attendance, and habits.</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="openRoutineCategoryManager()">${icon('settings',14)} Categories</button>
        <button class="btn btn-primary" onclick="openRoutineLogModal('${todayStr}')">${icon('plus',14)} Log entry</button>
      </div>
    </div>

    <div class="stagger card" style="padding:22px;margin-bottom:16px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Today</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${cats.map(c=>{
          const done=todayDoneCats.has(c.id);
          return `<button class="btn btn-sm" style="${done?'background:'+c.color+';border-color:'+c.color+';color:var(--ink);':''}" onclick="toggleRoutineToday('${c.id}')">${done?'✓ ':''}${escapeHtml(c.label)}</button>`;
        }).join('')}
      </div>
    </div>

    <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
      <div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
          <div class="serif" style="font-size:18px;font-weight:500;">${cal.mode==='week'?weekRangeLabel(cal):cal.mode==='day'?new Date(cal.day||today()).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):monthName}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
            ${calViewToggleButtons('routine',cal.mode||'month')}
            <button class="btn btn-ghost btn-sm" onclick="routineCalNav(-1)" style="transform:rotate(180deg);" aria-label="Previous">${icon('chevron',13)}</button>
            <button class="btn btn-ghost btn-sm" onclick="routineCalToday()">Today</button>
            <button class="btn btn-ghost btn-sm" onclick="routineCalNav(1)" aria-label="Next">${icon('chevron',13)}</button>
          </div>
        </div>
        ${cal.mode==='week'?renderWeekView(cal,buildRoutineEventsForRange(cal,cats),'openRoutineLogModal')
          :cal.mode==='day'?renderDayView(cal,eventsByDate,'openRoutineLogModal')
          :renderCalendarGrid({year:cal.year,month:cal.month,eventsByDate,onClickFn:'openRoutineLogModal',monthLabel:false})}
      </div>
      <div class="card" style="padding:22px;">
        <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Month stats</div>
        <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Times done in ${monthName}</div>
        ${cats.map(c=>{
          const count=monthCounts[c.id]||0;
          return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px;">
            <span style="display:flex;align-items:center;gap:8px;color:var(--bone-dim);"><span style="width:8px;height:8px;border-radius:2px;background:${c.color};"></span>${escapeHtml(c.label)}</span>
            <span class="mono" style="color:${count>0?'var(--bone)':'var(--bone-mute)'};font-weight:${count>0?500:400};">${count}</span>
          </div>`;
        }).join('')}
      </div>
    </div>

    ${recentDates.length>0?`<div class="stagger card" style="padding:22px;">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:14px;">Recent days</div>
      ${recentDates.map(d=>{
        const dayLogs=logs.filter(l=>l.date===d&&l.done);
        return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;cursor:pointer;" onclick="openRoutineLogModal('${d}')">
          <div>
            <div style="font-weight:500;">${fmtDate(d)}</div>
            <div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${daysAgo(d)}</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;">
            ${dayLogs.map(l=>{const c=cats.find(x=>x.id===l.category);return c?`<span class="chip" style="background:${c.color}20;color:${c.color};border:1px solid ${c.color}30;">${escapeHtml(c.label)}</span>`:''}).join('')||'<span style="color:var(--bone-mute);font-size:11.5px;">No entries</span>'}
          </div>
        </div>`;
      }).join('')}
    </div>`:''}
  </div>`;
}

function routineCalNav(delta){
  const cal=window._routineCal||{year:new Date().getFullYear(),month:new Date().getMonth(),mode:'month',day:today()};
  if(!cal.mode)cal.mode='month';
  if(!cal.day)cal.day=today();
  if(cal.mode==='month'){
    cal.month+=delta;
    if(cal.month<0){cal.month=11;cal.year--}
    if(cal.month>11){cal.month=0;cal.year++}
    cal.day=`${cal.year}-${String(cal.month+1).padStart(2,'0')}-01`;
  }else if(cal.mode==='week'){
    const d=new Date(cal.day);d.setDate(d.getDate()+delta*7);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }else{
    const d=new Date(cal.day);d.setDate(d.getDate()+delta);
    cal.day=d.toISOString().slice(0,10);cal.year=d.getFullYear();cal.month=d.getMonth();
  }
  window._routineCal=cal;
  render();
}
function routineCalToday(){
  const t=new Date();
  window._routineCal={year:t.getFullYear(),month:t.getMonth(),mode:(window._routineCal&&window._routineCal.mode)||'month',day:today()};
  render();
}
function buildRoutineEventsForRange(cal,cats){
  const day=cal.day?new Date(cal.day):new Date();
  const dow=(day.getDay()+6)%7;
  const start=new Date(day);start.setDate(day.getDate()-dow);
  const end=new Date(start);end.setDate(start.getDate()+6);
  const logs=store.get('routine:log',[]);
  const out={};
  logs.forEach(l=>{
    if(!l.done||!l.date)return;
    const d=new Date(l.date);
    if(d>=start&&d<=end){
      const c=cats.find(x=>x.id===l.category);
      if(!c)return;
      if(!out[l.date])out[l.date]=[];
      out[l.date].push({color:c.color,label:c.label,type:'routine',ref:l.id});
    }
  });
  return out;
}

function toggleRoutineToday(catId){
  const todayStr=today();
  const logs=store.get('routine:log',[]);
  const existing=logs.find(l=>l.date===todayStr&&l.category===catId);
  if(existing){existing.done=!existing.done}
  else{logs.push({id:uid(),date:todayStr,category:catId,done:true,notes:'',createdAt:new Date().toISOString()})}
  store.set('routine:log',logs);
  render();
}

function openRoutineLogModal(date){
  const logs=store.get('routine:log',[]);
  const cats=getRoutineCategories();
  const dayLogs=logs.filter(l=>l.date===date);

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div>
      <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;">${fmtDate(date)}</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-top:4px;">${daysAgo(date)} · tap categories to toggle</div>
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      ${cats.map(c=>{
        const log=dayLogs.find(l=>l.category===c.id);
        const done=log&&log.done;
        return `<label style="display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid ${done?c.color:'var(--line)'};background:${done?c.color+'15':'var(--ink-3)'};border-radius:6px;cursor:pointer;">
          <input type="checkbox" ${done?'checked':''} onchange="toggleRoutineDay('${date}','${c.id}',this.checked);openRoutineLogModal('${date}')" style="accent-color:${c.color};width:18px;height:18px;">
          <span style="width:8px;height:8px;border-radius:2px;background:${c.color};"></span>
          <span style="flex:1;color:${done?'var(--bone)':'var(--bone-dim)'};font-weight:${done?500:400};">${escapeHtml(c.label)}</span>
          ${log&&log.notes?`<span style="font-size:11px;color:var(--bone-mute);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px;">${escapeHtml(log.notes)}</span>`:''}
        </label>`;
      }).join('')}
    </div>

    <div>
      <div class="label" style="margin-bottom:6px;">Notes for the day</div>
      <textarea class="field" id="routine-day-notes" rows="3" placeholder="Anything worth remembering about today" onchange="setRoutineDayNotes('${date}',this.value)">${escapeHtml((dayLogs.find(l=>l.notes)||{}).notes||'')}</textarea>
    </div>

    <div style="display:flex;justify-content:flex-end;">
      <button class="btn btn-primary" onclick="closeModal();render()">Done</button>
    </div>
  </div>`);
}

function toggleRoutineDay(date,catId,done){
  const logs=store.get('routine:log',[]);
  const existing=logs.find(l=>l.date===date&&l.category===catId);
  if(existing){existing.done=done}
  else{logs.push({id:uid(),date,category:catId,done,notes:'',createdAt:new Date().toISOString()})}
  store.set('routine:log',logs);
}

function setRoutineDayNotes(date,notes){
  const logs=store.get('routine:log',[]);
  // Notes are tied to the first log entry of that day; if none, create a placeholder
  let target=logs.find(l=>l.date===date);
  if(!target){
    target={id:uid(),date,category:'other',done:false,notes,createdAt:new Date().toISOString()};
    logs.push(target);
  }else{
    target.notes=notes;
  }
  store.set('routine:log',logs);
}

function openRoutineCategoryManager(){
  const custom=store.get('routine:categories:custom',[]);
  const colors=['#4fe3f0','#3df5a8','#ffb547','#7aa2ff','#b57cff','#ff5c7a','#ffe066','#5ef2e0'];

  const renderCustomList=()=>custom.length===0?`<div style="color:var(--bone-mute);font-size:13px;padding:14px 0;text-align:center;">No custom categories yet.</div>`:custom.map((c,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--ink-3);border:1px solid var(--line);border-radius:6px;margin-bottom:6px;">
    <span style="display:flex;align-items:center;gap:10px;"><span style="width:10px;height:10px;border-radius:2px;background:${c.color};"></span><span>${escapeHtml(c.label)}</span></span>
    <button class="btn btn-ghost btn-sm btn-danger" onclick="removeRoutineCategory(${i})">${icon('trash',12)}</button>
  </div>`).join('');

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div>
      <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;">Routine categories</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-top:6px;">Built-in: House chores, Laundry, Massage, Self-care, Mosque, Other. Add your own below.</div>
    </div>

    <div>
      <div class="label" style="margin-bottom:6px;">Add custom category</div>
      <div style="display:flex;gap:8px;">
        <input class="field" id="rc-label" placeholder="e.g. Meditation, Reading, Vitamins" style="flex:1;">
        <select class="field" id="rc-color" style="width:120px;">
          ${colors.map(c=>`<option value="${c}" style="background:${c};color:${c};">${c}</option>`).join('')}
        </select>
        <button class="btn btn-primary" onclick="addRoutineCategory()">Add</button>
      </div>
    </div>

    <div>
      <div class="label" style="margin-bottom:8px;">Your categories</div>
      <div id="rc-list">${renderCustomList()}</div>
    </div>

    <div style="display:flex;justify-content:flex-end;">
      <button class="btn" onclick="closeModal();render()">Done</button>
    </div>
  </div>`);
}

function addRoutineCategory(){
  const label=document.getElementById('rc-label').value.trim();
  const color=document.getElementById('rc-color').value;
  if(!label)return;
  const custom=store.get('routine:categories:custom',[]);
  custom.push({id:'custom-'+uid().slice(0,6),label,color,icon:'circle'});
  store.set('routine:categories:custom',custom);
  closeModal();
  openRoutineCategoryManager();
}
function removeRoutineCategory(idx){
  const custom=store.get('routine:categories:custom',[]);
  custom.splice(idx,1);
  store.set('routine:categories:custom',custom);
  closeModal();
  openRoutineCategoryManager();
}


// ============ COMMAND CENTRE CALENDAR ============
// Aggregate events across the whole CRM for a given month
function __baseCmdEvents(year, month){
  const eventsByDate={};
  const add=(date,evt)=>{if(!eventsByDate[date])eventsByDate[date]=[];eventsByDate[date].push(evt)};

  // Custom calendar notes
  const notes=store.get('calendar:notes',[]);
  notes.forEach(n=>{
    if(!n.date)return;
    const d=new Date(n.date);
    if(d.getFullYear()===year&&d.getMonth()===month){
      add(n.date,{color:n.color||'#4fe3f0',label:n.title,type:'note',ref:n.id});
    }
  });

  // Recurring bills — forecast next 6 months from latest spawned
  const bills=store.get('bills:log',[]);
  const recurringBills=bills.filter(b=>b.recurring==='monthly');
  recurringBills.forEach(b=>{
    const start=new Date(b.date);
    // Generate forecast dates that fall in the target month
    let next=new Date(start);
    next.setMonth(next.getMonth()+1);
    let safety=0;
    while(safety<24&&(next.getFullYear()<year||(next.getFullYear()===year&&next.getMonth()<=month))){
      if(next.getFullYear()===year&&next.getMonth()===month){
        const ds=next.toISOString().slice(0,10);
        add(ds,{color:'#ffb547',label:`${b.description||b.type} ${b.currency||'£'}${b.amount}`,type:'bill-forecast',ref:b.id});
      }
      next.setMonth(next.getMonth()+1);
      safety++;
    }
  });

  // Liability due dates (personal + per profile)
  const personalBalance=store.get('personal:balance',[]);
  personalBalance.forEach(b=>{
    if(b.kind!=='liability'||!b.dueDate)return;
    const d=new Date(b.dueDate);
    if(d.getFullYear()===year&&d.getMonth()===month){
      add(b.dueDate,{color:'#ff5c7a',label:`Due: ${b.name} ${b.currency||'£'}${b.amount}`,type:'liability',ref:b.id});
    }
  });

  const profiles=store.get('profiles:list',[]);
  profiles.forEach(p=>{
    const balance=store.get(`profile:${p.id}:balance`,[]);
    balance.forEach(b=>{
      if(b.kind!=='liability'||!b.dueDate)return;
      const d=new Date(b.dueDate);
      if(d.getFullYear()===year&&d.getMonth()===month){
        add(b.dueDate,{color:'#ff5c7a',label:`Due: ${b.name} (${p.name})`,type:'liability',ref:b.id});
      }
    });

    // Contact next-action dates
    const contacts=store.get(`profile:${p.id}:contacts`,[]);
    contacts.forEach(c=>{
      if(!c.nextActionDate)return;
      const d=new Date(c.nextActionDate);
      if(d.getFullYear()===year&&d.getMonth()===month){
        add(c.nextActionDate,{color:p.color||'#4fe3f0',label:`${c.name}: ${c.nextAction||'Follow up'}`,type:'contact-action',ref:c.id,profileId:p.id});
      }
    });

    // Recurring transactions forecast
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    const recurringTxs=txs.filter(t=>t.recurring==='monthly');
    recurringTxs.forEach(t=>{
      const start=new Date(t.date);
      let next=new Date(start);
      next.setMonth(next.getMonth()+1);
      let safety=0;
      while(safety<24&&(next.getFullYear()<year||(next.getFullYear()===year&&next.getMonth()<=month))){
        if(next.getFullYear()===year&&next.getMonth()===month){
          const ds=next.toISOString().slice(0,10);
          add(ds,{color:t.type==='revenue'?'#3df5a8':'#ff5c7a',label:`${t.description} (${p.name})`,type:'tx-forecast',ref:t.id});
        }
        next.setMonth(next.getMonth()+1);
        safety++;
      }
    });

    // Unpaid revenue due dates — green dot, includes profile name
    txs.filter(t=>t.type==='revenue'&&t.paid===false&&t.dueDate).forEach(t=>{
      const d=new Date(t.dueDate);
      if(d.getFullYear()===year&&d.getMonth()===month){
        const todayKey=new Date().toISOString().slice(0,10);
        const overdue=t.dueDate<todayKey;
        add(t.dueDate,{color:overdue?'#ff5c7a':'#3df5a8',label:`${overdue?'⚠ Overdue':'Due'}: ${t.description} ${t.currency||'£'}${t.amount} (${p.name})`,type:'revenue-due',ref:t.id,profileId:p.id});
      }
    });
  });

  return eventsByDate;
}

function openCalendarDayModal(date){
  const eventsByDate=buildCommandEventsForMonth(new Date(date).getFullYear(),new Date(date).getMonth());
  const events=eventsByDate[date]||[];
  const notes=store.get('calendar:notes',[]);
  const dayNotes=notes.filter(n=>n.date===date);

  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div>
      <div class="serif" style="font-size:22px;font-weight:500;letter-spacing:-0.01em;">${fmtDate(date)}</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-top:4px;">${daysAgo(date)}</div>
    </div>

    ${events.length>0?`<div>
      <div class="label" style="margin-bottom:8px;">${events.length} event${events.length===1?'':'s'}</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${events.map(e=>`<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--ink-3);border:1px solid var(--line);border-radius:6px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${e.color};flex-shrink:0;"></span>
          <span style="flex:1;font-size:13px;">${escapeHtml(e.label||'')}</span>
          <span style="font-size:10.5px;color:var(--bone-mute);text-transform:uppercase;letter-spacing:0.06em;">${e.type.replace('-',' ')}</span>
        </div>`).join('')}
      </div>
    </div>`:''}

    <div>
      <div class="label" style="margin-bottom:8px;">Add note for this day</div>
      <input class="field" id="cal-note-title" placeholder="e.g. Client meeting / Visa renewal / Mum's birthday" style="margin-bottom:8px;">
      <textarea class="field" id="cal-note-body" rows="2" placeholder="Optional details"></textarea>
    </div>

    ${dayNotes.length>0?`<div>
      <div class="label" style="margin-bottom:8px;">Existing notes</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${dayNotes.map(n=>`<div style="padding:10px 12px;background:var(--ink-3);border:1px solid var(--line);border-radius:6px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;">
            <div style="font-weight:500;font-size:13px;">${escapeHtml(n.title)}</div>
            <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteCalendarNote('${n.id}','${date}')">${icon('trash',12)}</button>
          </div>
          ${n.body?`<div style="font-size:12px;color:var(--bone-dim);margin-top:6px;white-space:pre-wrap;">${escapeHtml(n.body)}</div>`:''}
        </div>`).join('')}
      </div>
    </div>`:''}

    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button class="btn" onclick="closeModal()">Close</button>
      <button class="btn btn-primary" onclick="saveCalendarNote('${date}')">Save note</button>
    </div>
  </div>`);
}

function saveCalendarNote(date){
  const title=document.getElementById('cal-note-title').value.trim();
  const body=document.getElementById('cal-note-body').value.trim();
  if(!title){closeModal();return}
  const notes=store.get('calendar:notes',[]);
  notes.push({id:uid(),date,title,body,color:'#4fe3f0',createdAt:new Date().toISOString()});
  store.set('calendar:notes',notes);
  closeModal();
  render();
}

function deleteCalendarNote(id,date){
  const notes=store.get('calendar:notes',[]);
  const note=notes.find(n=>n.id===id);
  if(!note)return;
  store.set('calendar:notes',notes.filter(n=>n.id!==id));
  showToast('Note deleted','Undo',()=>{
    const cur=store.get('calendar:notes',[]);
    cur.push(note);
    store.set('calendar:notes',cur);
    closeModal();
    if(date)openCalendarDayModal(date);
  },10000);
  closeModal();
  if(date)openCalendarDayModal(date);
}


// ============ RECURRING ENTRY ENGINE ============
// Runs on app load. For every transaction or bill marked recurring='monthly',
// generates fresh instances for any month that's passed since the last instance.
// Each generated instance is independent — editing/deleting it doesn't affect others.
function processRecurring(){
  const now=new Date();
  let totalCreated=0;

  // Bills
  const bills=store.get('bills:log',[]);
  const recurringBills=bills.filter(b=>b.recurring==='monthly');
  recurringBills.forEach(template=>{
    // Find all instances spawned from this template (or it's the template itself)
    const seriesKey=template.seriesId||template.id;
    const instances=bills.filter(b=>(b.seriesId===seriesKey)||(b.id===seriesKey));
    // Sort by date desc
    instances.sort((a,b)=>new Date(b.date)-new Date(a.date));
    const latest=instances[0];
    const latestDate=new Date(latest.date);
    // Compute next due dates until we catch up to now
    let nextDate=new Date(latestDate);
    nextDate.setMonth(nextDate.getMonth()+1);
    while(nextDate<=now){
      // Generate a new instance
      const newInstance={
        ...template,
        id:uid(),
        date:nextDate.toISOString().slice(0,10),
        seriesId:seriesKey,
        recurring:null, // only the template/latest is the active marker
        createdAt:new Date().toISOString()
      };
      bills.unshift(newInstance);
      totalCreated++;
      nextDate=new Date(nextDate);
      nextDate.setMonth(nextDate.getMonth()+1);
    }
    // Move the recurring flag forward to the latest spawned instance
    if(totalCreated>0){
      // Strip recurring flag from old template, set on latest
      bills.forEach(b=>{
        if((b.seriesId===seriesKey||b.id===seriesKey)&&b!==bills[0])b.recurring=null;
      });
      bills[0].recurring='monthly';
    }
  });
  store.set('bills:log',bills);

  // Per-profile transactions
  const profiles=store.get('profiles:list',[]);
  let txCreated=0;
  profiles.forEach(p=>{
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    const recurringTxs=txs.filter(t=>t.recurring==='monthly');
    let modified=false;
    recurringTxs.forEach(template=>{
      const seriesKey=template.seriesId||template.id;
      const instances=txs.filter(t=>(t.seriesId===seriesKey)||(t.id===seriesKey));
      instances.sort((a,b)=>new Date(b.date)-new Date(a.date));
      const latest=instances[0];
      const latestDate=new Date(latest.date);
      let nextDate=new Date(latestDate);
      nextDate.setMonth(nextDate.getMonth()+1);
      while(nextDate<=now){
        txs.unshift({
          ...template,
          id:uid(),
          date:nextDate.toISOString().slice(0,10),
          seriesId:seriesKey,
          recurring:null,
          createdAt:new Date().toISOString()
        });
        txCreated++;
        modified=true;
        nextDate=new Date(nextDate);
        nextDate.setMonth(nextDate.getMonth()+1);
      }
      if(modified){
        // Move recurring flag to newest
        txs.forEach(t=>{
          if((t.seriesId===seriesKey||t.id===seriesKey)&&t!==txs[0])t.recurring=null;
        });
        txs[0].recurring='monthly';
      }
    });
    if(modified)store.set(`profile:${p.id}:transactions`,txs);
  });

  totalCreated+=txCreated;
  if(totalCreated>0){
    // Defer toast until after first render
    setTimeout(()=>showToast(`Generated ${totalCreated} recurring ${totalCreated===1?'entry':'entries'} from monthly templates.`,null,null,4000),300);
  }
}


// ============ BALANCE SNAPSHOTS ============
function snapshotKey(scope){return scope==='personal'?'personal:balance:snapshots':`profile:${scope}:balance:snapshots`}

function takeSnapshot(scope){
  const items=store.get(balanceKey(scope),[]);
  if(items.length===0)return false;
  const snaps=store.get(snapshotKey(scope),[]);
  const todayStr=today();
  // Don't double-snapshot the same day — replace if exists
  const filtered=snaps.filter(s=>s.date!==todayStr);
  filtered.push({
    date:todayStr,
    items:JSON.parse(JSON.stringify(items)),
    takenAt:new Date().toISOString()
  });
  // Keep ascending by date
  filtered.sort((a,b)=>new Date(a.date)-new Date(b.date));
  store.set(snapshotKey(scope),filtered);
  return true;
}

// Auto-snapshot once per month (on first load that month)
function autoSnapshotIfNeeded(){
  const profiles=store.get('profiles:list',[]);
  const scopes=['personal',...profiles.map(p=>p.id)];
  scopes.forEach(scope=>{
    const items=store.get(balanceKey(scope),[]);
    if(items.length===0)return;
    const snaps=store.get(snapshotKey(scope),[]);
    const last=snaps[snaps.length-1];
    if(!last){takeSnapshot(scope);return}
    const lastDate=new Date(last.date);
    const now=new Date();
    // If last snapshot was in a different (calendar) month, take a new one
    if(lastDate.getMonth()!==now.getMonth()||lastDate.getFullYear()!==now.getFullYear()){
      takeSnapshot(scope);
    }
  });
}


// ============ GLOBAL SEARCH ============
function openGlobalSearch(){
  // Build search corpus once on open
  const profiles=store.get('profiles:list',[]);
  const corpus=[];

  // Per-profile data
  profiles.forEach(p=>{
    const meta=store.get(`profile:${p.id}:meta`)||{};
    const profName=meta.name||p.name;

    store.get(`profile:${p.id}:contacts`,[]).forEach(c=>{
      corpus.push({
        type:'Contact',
        scope:profName,
        scopeColor:p.color,
        text:`${c.name} ${c.email||''} ${c.phone||''} ${c.notes||''}`.trim(),
        primary:c.name,
        secondary:[c.email,c.phone,c.stage].filter(Boolean).join(' · '),
        action:()=>{state.profileId=p.id;navigate('contacts',p.id);setTimeout(()=>{const el=document.getElementById('contact-search');if(el){el.value=c.name;el.dispatchEvent(new Event('input'))}},200)}
      });
    });

    store.get(`profile:${p.id}:transactions`,[]).forEach(t=>{
      corpus.push({
        type:'Ledger',
        scope:profName,
        scopeColor:p.color,
        text:`${t.description||''} ${t.category||''} ${t.notes||''}`.trim(),
        primary:t.description||'(no description)',
        secondary:`${t.type==='revenue'?'+':'−'}${t.currency||'£'}${(t.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})} · ${t.category||''} · ${fmtShortDate(t.date)}`,
        action:()=>{state.profileId=p.id;navigate('transactions',p.id);setTimeout(()=>openTxModal(t.id),300)}
      });
    });

    store.get(`profile:${p.id}:inventory`,[]).forEach(i=>{
      corpus.push({
        type:'Inventory',
        scope:profName,
        scopeColor:p.color,
        text:`${i.name||''} ${i.sku||''} ${i.channel||''} ${i.notes||''}`.trim(),
        primary:i.name||'(unnamed)',
        secondary:`${i.qtyOnHand||0} in stock · ${i.qtySold||0} sold · ${i.currency||'£'}${i.salePrice||0}`,
        action:()=>{state.profileId=p.id;navigate('inventory',p.id);setTimeout(()=>openInventoryModal(i.id),300)}
      });
    });

    store.get(`profile:${p.id}:balance`,[]).forEach(b=>{
      corpus.push({
        type:b.kind==='asset'?'Asset':'Liability',
        scope:profName,
        scopeColor:p.color,
        text:`${b.name||''} ${b.category||''} ${b.notes||''}`.trim(),
        primary:b.name||'(unnamed)',
        secondary:`${b.category||''} · ${b.currency||'£'}${(b.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}`,
        action:()=>{state.profileId=p.id;navigate('balance',p.id);setTimeout(()=>openBalanceModal(p.id,b.kind,b.id),300)}
      });
    });
  });

  // Personal data
  store.get('bills:log',[]).forEach(b=>{
    corpus.push({
      type:'Bill',
      scope:'Personal',
      scopeColor:'#7d86b0',
      text:`${b.description||''} ${b.type||''} ${b.location||''} ${b.notes||''}`.trim(),
      primary:b.description||b.type||'(unnamed)',
      secondary:`${b.type||''}${b.location?' · '+b.location:''} · ${b.currency||'£'}${(b.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})} · ${fmtShortDate(b.date)}`,
      action:()=>{navigate('bills');setTimeout(()=>openBillModal(b.id),300)}
    });
  });

  store.get('personal:balance',[]).forEach(b=>{
    corpus.push({
      type:b.kind==='asset'?'Asset':'Liability',
      scope:'Personal',
      scopeColor:'#7d86b0',
      text:`${b.name||''} ${b.category||''} ${b.notes||''}`.trim(),
      primary:b.name||'(unnamed)',
      secondary:`${b.category||''} · ${b.currency||'£'}${(b.amount||0).toLocaleString('en-GB',{maximumFractionDigits:0})}`,
      action:()=>{navigate('personalBalance');setTimeout(()=>openBalanceModal('personal',b.kind,b.id),300)}
    });
  });

  store.get('daily:log',[]).forEach(l=>{
    if(!l.notes&&!l.split)return;
    corpus.push({
      type:'Gym',
      scope:'Personal',
      scopeColor:'#7d86b0',
      text:`${l.notes||''} ${l.split||''}`.trim(),
      primary:l.split?`${l.split} session`:'Rest day',
      secondary:`${fmtDate(l.date)}${l.notes?' · '+l.notes.slice(0,60):''}`,
      action:()=>{navigate('daily');setTimeout(()=>openDailyModal(l.id),300)}
    });
  });

  const wUnit=store.get('weight:unit','kg');
  store.get('weight:log',[]).forEach(w=>{
    corpus.push({
      type:'Weight',
      scope:'Personal',
      scopeColor:'#7aa2ff',
      text:`weight ${w.notes||''}`.trim(),
      primary:`${formatWeight(w.kg,wUnit)} weigh-in`,
      secondary:`${fmtDate(w.date)}${w.notes?' · '+w.notes.slice(0,60):''}`,
      action:()=>{navigate('daily');setTimeout(()=>openWeightModal(w.id),300)}
    });
  });

  store.get('running:log',[]).forEach(r=>{
    corpus.push({
      type:'Run',
      scope:'Personal',
      scopeColor:'#7d86b0',
      text:`${r.notes||''} run`.trim(),
      primary:`${r.distance||0} km run`,
      secondary:`${fmtDate(r.date)} · ${fmtDuration(r.duration)}${r.notes?' · '+r.notes.slice(0,40):''}`,
      action:()=>{navigate('running');setTimeout(()=>openRunModal(r.id),300)}
    });
  });

  // Profiles themselves
  profiles.forEach(p=>{
    corpus.push({
      type:'Profile',
      scope:'Workspace',
      scopeColor:p.color,
      text:`${p.name} ${p.type||''}`.trim(),
      primary:p.name,
      secondary:p.type||'',
      action:()=>navigate('dashboard',p.id)
    });
  });

  // Render overlay
  const overlay=document.createElement('div');
  overlay.className='search-overlay';
  overlay.id='search-overlay';
  overlay.innerHTML=`<div class="search-panel">
    <div class="search-input">
      ${icon('search',16,'var(--bone-mute)')}
      <input type="text" id="gs-input" placeholder="Search anything — contacts, ledger, items, bills, runs…" autocomplete="off">
      <kbd style="background:var(--ink-3);border:1px solid var(--line);border-radius:3px;padding:2px 6px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--bone-mute);">esc</kbd>
    </div>
    <div class="search-results" id="gs-results"><div class="search-empty">Start typing to search across everything in Atlas.</div></div>
    <div class="search-hint"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></div>
  </div>`;
  document.body.appendChild(overlay);

  let focusedIdx=0;
  let lastResults=[];

  const close=()=>overlay.remove();
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()});

  const input=document.getElementById('gs-input');
  const resultsEl=document.getElementById('gs-results');

  const doSearch=()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){
      resultsEl.innerHTML='<div class="search-empty">Start typing to search across everything in Atlas.</div>';
      lastResults=[];
      return;
    }
    const matches=corpus.filter(c=>c.text.toLowerCase().includes(q)).slice(0,30);
    lastResults=matches;
    if(matches.length===0){
      resultsEl.innerHTML=`<div class="search-empty">No matches for "${escapeHtml(q)}".</div>`;
      return;
    }
    // Group by type
    const grouped={};
    matches.forEach(m=>{if(!grouped[m.type])grouped[m.type]=[];grouped[m.type].push(m)});
    let html='';
    let runIdx=0;
    Object.entries(grouped).forEach(([type,items])=>{
      html+=`<div class="search-section">${type}</div>`;
      items.forEach(m=>{
        const idx=runIdx++;
        html+=`<div class="search-result ${idx===focusedIdx?'focused':''}" data-idx="${idx}">
          <span style="width:6px;height:6px;border-radius:1px;background:${m.scopeColor};flex-shrink:0;"></span>
          <div style="min-width:0;flex:1;">
            <div style="font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(m.primary)}</div>
            <div style="font-size:11.5px;color:var(--bone-mute);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(m.secondary||'')}</div>
          </div>
          <span class="search-result-meta">${escapeHtml(m.scope)}</span>
        </div>`;
      });
    });
    resultsEl.innerHTML=html;
    resultsEl.querySelectorAll('.search-result').forEach(el=>{
      el.addEventListener('click',()=>{
        const idx=parseInt(el.dataset.idx);
        const item=lastResults[idx];
        if(item){close();item.action()}
      });
    });
  };

  input.addEventListener('input',()=>{focusedIdx=0;doSearch()});
  overlay.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();close()}
    else if(e.key==='ArrowDown'){e.preventDefault();focusedIdx=Math.min(focusedIdx+1,lastResults.length-1);doSearch()}
    else if(e.key==='ArrowUp'){e.preventDefault();focusedIdx=Math.max(focusedIdx-1,0);doSearch()}
    else if(e.key==='Enter'){e.preventDefault();const item=lastResults[focusedIdx];if(item){close();item.action()}}
  });
  setTimeout(()=>input.focus(),50);
}


// ============ KEYBOARD SHORTCUTS ============
// ============ PRIVACY BLUR ============
function savePrivacy(){
  const blurOnBlur=document.getElementById('privacy-blur').checked;
  store.set('settings:privacy',{blurOnBlur});
  showToast(blurOnBlur?'Blur on focus loss enabled':'Blur disabled',null,null,2000);
}
function setupPrivacyBlur(){
  let isBlurred=false;
  window.addEventListener('blur',()=>{
    const p=store.get('settings:privacy',{blurOnBlur:false});
    if(p.blurOnBlur){document.body.classList.add('app-blurred');isBlurred=true}
  });
  // Unblur on any click or focus
  const unblur=()=>{
    if(!isBlurred)return;
    document.body.classList.remove('app-blurred');
    isBlurred=false;
  };
  window.addEventListener('focus',unblur);
  document.addEventListener('mousedown',unblur,true);
  document.addEventListener('keydown',unblur,true);
}


function setupKeyboardShortcuts(){
  document.addEventListener('keydown',e=>{
    const isMod=e.metaKey||e.ctrlKey;
    const inField=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);

    // ⌘K → global search
    if(isMod&&e.key==='k'){
      e.preventDefault();
      if(!document.getElementById('search-overlay'))openGlobalSearch();
      return;
    }
    // / → global search (only if not in a field)
    if(e.key==='/'&&!inField&&!document.querySelector('.modal-backdrop')){
      e.preventDefault();
      if(!document.getElementById('search-overlay'))openGlobalSearch();
      return;
    }
    // ⌘N → new entry on current page
    if(isMod&&e.key==='n'){
      e.preventDefault();
      contextualNew();
      return;
    }
    // ⌘\ → toggle sidebar
    if(isMod&&e.key==='\\'){
      e.preventDefault();
      toggleSidebar();
      return;
    }
    // Esc handled by individual modals/overlays
  });
}

function contextualNew(){
  switch(state.view){
    case'profiles':openNewProfile();break;
    case'contacts':openContactModal();break;
    case'transactions':openTxModal();break;
    case'balance':openBalanceModal(state.profileId,'asset');break;
    case'inventory':openInventoryModal();break;
    case'bills':openBillModal();break;
    case'daily':openDailyModal();break;
    case'running':openRunModal();break;
    case'personalBalance':openBalanceModal('personal','asset');break;
    default:openGlobalSearch();
  }
}




// ============ THEME ============
function getTheme(){return store.get('settings:theme','dark')}
function applyTheme(){
  const t=getTheme();
  document.body.classList.toggle('theme-light',t==='light');
  // Update meta theme-color so iOS/PWA chrome matches
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',t==='light'?'#f7f4ec':'#0a0a0b');
}
function toggleTheme(){
  const next=getTheme()==='light'?'dark':'light';
  store.set('settings:theme',next);
  applyTheme();
  render();
  showToast(`${next==='light'?'Light':'Dark'} mode`,null,null,1500);
}

// ============ DASHBOARD SECTION ORDER ============
const DEFAULT_CMD_ORDER=['hud','you','goals','include','period','kpis','breakdown','calendar','activity'];
function getCmdOrder(){
  const saved=store.get('dashboard:cmd:order',null);
  if(!Array.isArray(saved))return [...DEFAULT_CMD_ORDER];
  // Add any missing keys at the end (forward-compatible)
  const merged=[...saved];
  DEFAULT_CMD_ORDER.forEach(k=>{if(!merged.includes(k)){if(k==='hud')merged.unshift(k);else if(k==='you'||k==='goals'){const an=k==='goals'&&merged.includes('you')?'you':'hud';merged.splice(merged.indexOf(an)+1,0,k)}else merged.push(k)}});
  // Drop any unknown keys
  return merged.filter(k=>DEFAULT_CMD_ORDER.includes(k));
}
function saveCmdOrder(order){store.set('dashboard:cmd:order',order)}
function resetCmdOrder(){
  store.del('dashboard:cmd:order');
  showToast('Dashboard layout reset',null,null,1500);
  render();
}

// Generic drag handler used by reorderable section containers.
// Container needs data-reorder-key="<storeKey>"; children need data-section-id.
function attachReorder(containerSelector, onReorder){
  document.querySelectorAll(containerSelector).forEach(container=>{
    const sections=container.querySelectorAll('.draggable-section');
    sections.forEach(sec=>{
      const handle=sec.querySelector('.drag-handle');
      if(!handle)return;
      handle.addEventListener('mousedown',()=>{sec.setAttribute('draggable','true')});
      handle.addEventListener('touchstart',()=>{sec.setAttribute('draggable','true')},{passive:true});
      sec.addEventListener('dragstart',e=>{
        if(sec.getAttribute('draggable')!=='true'){e.preventDefault();return}
        sec.classList.add('dragging');
        e.dataTransfer.effectAllowed='move';
        e.dataTransfer.setData('text/plain',sec.dataset.sectionId);
      });
      sec.addEventListener('dragend',()=>{
        sec.classList.remove('dragging');
        sec.removeAttribute('draggable');
        container.querySelectorAll('.draggable-section').forEach(s=>s.classList.remove('drag-over-top','drag-over-bottom'));
      });
      sec.addEventListener('dragover',e=>{
        e.preventDefault();
        const rect=sec.getBoundingClientRect();
        const above=(e.clientY-rect.top)<rect.height/2;
        sec.classList.toggle('drag-over-top',above);
        sec.classList.toggle('drag-over-bottom',!above);
      });
      sec.addEventListener('dragleave',()=>{
        sec.classList.remove('drag-over-top','drag-over-bottom');
      });
      sec.addEventListener('drop',e=>{
        e.preventDefault();
        const draggedId=e.dataTransfer.getData('text/plain');
        const targetId=sec.dataset.sectionId;
        if(!draggedId||draggedId===targetId)return;
        const rect=sec.getBoundingClientRect();
        const above=(e.clientY-rect.top)<rect.height/2;
        const order=Array.from(container.querySelectorAll('.draggable-section')).map(s=>s.dataset.sectionId);
        const fromIdx=order.indexOf(draggedId);
        if(fromIdx<0)return;
        order.splice(fromIdx,1);
        let toIdx=order.indexOf(targetId);
        if(!above)toIdx++;
        order.splice(toIdx,0,draggedId);
        onReorder(order);
      });
    });
  });
}

// ============ MULTI-SELECT (CONTACTS) ============
function getSelectedContacts(){return window._selectedContacts||new Set()}
function clearSelectedContacts(){window._selectedContacts=new Set();const bar=document.getElementById('bulk-bar');if(bar)bar.style.display='none'}
function toggleContactSelection(id,checked){
  if(!window._selectedContacts)window._selectedContacts=new Set();
  if(checked)window._selectedContacts.add(id);else window._selectedContacts.delete(id);
  updateBulkBar();
}
function selectAllContacts(checked){
  const profileId=state.profileId;
  const contacts=store.get(`profile:${profileId}:contacts`,[]);
  const stageFilter=window._stageFilter||'All';
  const search=window._contactSearch||'';
  const filtered=contacts.filter(c=>{
    if(stageFilter!=='All'&&c.stage!==stageFilter)return false;
    if(!search)return true;
    const s=search.toLowerCase();
    return `${c.name||''} ${c.email||''} ${c.phone||''} ${c.company||''} ${c.title||''} ${c.city||''} ${c.country||''} ${c.linkedinUrl||''} ${c.notes||''}`.toLowerCase().includes(s);
  });
  if(!window._selectedContacts)window._selectedContacts=new Set();
  if(checked){filtered.forEach(c=>window._selectedContacts.add(c.id))}
  else{filtered.forEach(c=>window._selectedContacts.delete(c.id))}
  rerenderContactsTable();
  updateBulkBar();
}
function selectByStage(stage){
  const profileId=state.profileId;
  const contacts=store.get(`profile:${profileId}:contacts`,[]);
  if(!window._selectedContacts)window._selectedContacts=new Set();
  contacts.filter(c=>c.stage===stage).forEach(c=>window._selectedContacts.add(c.id));
  rerenderContactsTable();
  updateBulkBar();
}
function updateBulkBar(){
  const bar=document.getElementById('bulk-bar');
  if(!bar)return;
  const sel=getSelectedContacts();
  if(sel.size===0){bar.style.display='none';return}
  bar.style.display='flex';
  const cnt=bar.querySelector('.count');
  if(cnt)cnt.textContent=`${sel.size} selected`;
}

function exportSelectedContactsCSV(){
  const sel=getSelectedContacts();
  if(sel.size===0){showToast('No contacts selected',null,null,2000);return}
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]).filter(c=>sel.has(c.id));
  exportContactRowsCSV(contacts,`contacts-selected-${today()}.csv`);
}
function exportContactsByStageCSV(stage){
  const contacts=store.get(`profile:${state.profileId}:contacts`,[]).filter(c=>c.stage===stage);
  if(contacts.length===0){showToast(`No contacts in "${stage}"`,null,null,2000);return}
  exportContactRowsCSV(contacts,`contacts-${stage.toLowerCase().replace(/\s+/g,'-')}-${today()}.csv`);
}
function exportContactRowsCSV(contacts,filename){
  const headers=['Date Added','Full Name','First Name','Last Name','Phone','Email','Title','Company','City','Country','LinkedIn URL','Company Website','Source','Status','Contact Attempts','Last Contacted','Next Action','Next Action Date','Outcome','Notes','Value'];
  const rows=contacts.map(c=>[
    c.createdAt?c.createdAt.slice(0,10):'',c.name||'',
    c.firstName||(c.name||'').split(' ')[0]||'',c.lastName||(c.name||'').split(' ').slice(1).join(' ')||'',
    c.phone||'',c.email||'',c.title||'',c.company||'',c.city||'',c.country||'',
    c.linkedinUrl||'',c.companyWebsite||'',c.source||'',c.stage||'',c.contactAttempts||0,
    c.lastContacted||'',c.nextAction||'',c.nextActionDate||'',c.outcome||'',c.notes||'',c.value||0
  ]);
  const csv=[headers,...rows].map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile(csv,filename,'text/csv');
  showToast(`Exported ${contacts.length} contact${contacts.length===1?'':'s'} to CSV`,null,null,2500);
}

function exportContactsPDF(scope){
  // scope: 'selected' | 'all' | a stage name
  let contacts=store.get(`profile:${state.profileId}:contacts`,[]);
  let title='All Contacts';
  let filename=`contacts-all-${today()}.pdf`;
  if(scope==='selected'){
    const sel=getSelectedContacts();
    if(sel.size===0){showToast('No contacts selected',null,null,2000);return}
    contacts=contacts.filter(c=>sel.has(c.id));
    title=`Selected Contacts (${contacts.length})`;
    filename=`contacts-selected-${today()}.pdf`;
  }else if(scope&&scope!=='all'){
    contacts=contacts.filter(c=>c.stage===scope);
    if(contacts.length===0){showToast(`No contacts in "${scope}"`,null,null,2000);return}
    title=`Contacts — ${scope}`;
    filename=`contacts-${scope.toLowerCase().replace(/\s+/g,'-')}-${today()}.pdf`;
  }
  generateContactsPDF(contacts,title,filename);
}

function generateContactsPDF(contacts,title,filename){
  if(!window.jspdf||!window.jspdf.jsPDF){
    showToast('PDF library not loaded — check internet connection',null,null,3500);
    return;
  }
  const {jsPDF}=window.jspdf;
  const meta=store.get(`profile:${state.profileId}:meta`)||{};
  const doc=new jsPDF({orientation:'landscape',unit:'pt',format:'a4'});
  doc.setFont('helvetica','bold');doc.setFontSize(18);
  doc.text(title,40,40);
  doc.setFont('helvetica','normal');doc.setFontSize(10);doc.setTextColor(120);
  doc.text(`${meta.name||'Atlas'} · ${contacts.length} contact${contacts.length===1?'':'s'} · ${fmtDate(today())}`,40,58);
  const head=[['Name','Email','Phone','Stage','Title','Company','Location','Last contact','Attempts']];
  const body=contacts.map(c=>[
    c.name||'',c.email||'',c.phone||'',c.stage||'',c.title||'',c.company||'',
    [c.city,c.country].filter(Boolean).join(', '),
    c.lastContacted?fmtShortDate(c.lastContacted):'—',
    String(c.contactAttempts||0)
  ]);
  doc.autoTable({startY:74,head,body,
    styles:{fontSize:8,cellPadding:5,overflow:'linebreak'},
    headStyles:{fillColor:[20,20,22],textColor:[244,241,234],fontStyle:'bold'},
    alternateRowStyles:{fillColor:[247,244,236]},
    columnStyles:{0:{cellWidth:90},1:{cellWidth:120},2:{cellWidth:80},3:{cellWidth:60},4:{cellWidth:80},5:{cellWidth:80},6:{cellWidth:80},7:{cellWidth:60},8:{cellWidth:50}},
    margin:{left:40,right:40}
  });
  savePdf(doc,filename);
  showToast(`Exported ${contacts.length} contact${contacts.length===1?'':'s'} to PDF`,null,null,2500);
}

function exportSingleContactPDF(id){
  const c=store.get(`profile:${state.profileId}:contacts`,[]).find(x=>x.id===id);
  if(!c){showToast('Contact not found',null,null,2000);return}
  if(!window.jspdf||!window.jspdf.jsPDF){
    showToast('PDF library not loaded — check internet connection',null,null,3500);
    return;
  }
  const {jsPDF}=window.jspdf;
  const meta=store.get(`profile:${state.profileId}:meta`)||{};
  const doc=new jsPDF({unit:'pt',format:'a4'});
  doc.setFont('helvetica','bold');doc.setFontSize(20);
  doc.text(c.name||'Contact',40,50);
  doc.setFont('helvetica','normal');doc.setFontSize(10);doc.setTextColor(120);
  doc.text(`${meta.name||'Atlas'} · ${fmtDate(today())}`,40,68);
  doc.setTextColor(20);
  let y=100;
  const row=(label,val)=>{
    if(val===null||val===undefined||val==='')return;
    doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(120);
    doc.text(label.toUpperCase(),40,y);
    doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(20);
    const lines=doc.splitTextToSize(String(val),470);
    doc.text(lines,40,y+14);
    y+=14+lines.length*13+8;
  };
  row('Stage',c.stage);
  row('Email',c.email);
  row('Phone',c.phone);
  row('Title',c.title);
  row('Company',c.company);
  row('Location',[c.city,c.country].filter(Boolean).join(', '));
  row('LinkedIn',c.linkedinUrl);
  row('Source',c.source);
  row('Contact attempts',c.contactAttempts||0);
  row('Last contacted',c.lastContacted?fmtDate(c.lastContacted):null);
  row('Next action',c.nextAction);
  row('Next action date',c.nextActionDate?fmtDate(c.nextActionDate):null);
  row('Outcome',c.outcome);
  row('Notes',c.notes);
  savePdf(doc,`contact-${(c.name||'unnamed').toLowerCase().replace(/\s+/g,'-')}-${today()}.pdf`);
}

function bulkDeleteContacts(){
  const sel=getSelectedContacts();
  if(sel.size===0)return;
  if(!confirm(`Delete ${sel.size} contact${sel.size===1?'':'s'}? This can be undone.`))return;
  const profileId=state.profileId;
  const contacts=store.get(`profile:${profileId}:contacts`,[]);
  const removed=contacts.filter(c=>sel.has(c.id));
  const next=contacts.filter(c=>!sel.has(c.id));
  store.set(`profile:${profileId}:contacts`,next);
  clearSelectedContacts();
  showToast(`Deleted ${removed.length} contact${removed.length===1?'':'s'}`,'Undo',()=>{
    const cur=store.get(`profile:${profileId}:contacts`,[]);
    store.set(`profile:${profileId}:contacts`,[...removed,...cur]);
    render();
    showToast('Restored',null,null,2000);
  },30000);
  render();
}

function bulkChangeStage(){
  const sel=getSelectedContacts();
  if(sel.size===0)return;
  const stage=prompt(`Change stage for ${sel.size} contact${sel.size===1?'':'s'} to:\n${STAGES.join(', ')}`);
  if(!stage||!STAGES.includes(stage)){if(stage)alert('Invalid stage. No changes made.');return}
  const profileId=state.profileId;
  const contacts=store.get(`profile:${profileId}:contacts`,[]);
  let count=0;
  const next=contacts.map(c=>{if(sel.has(c.id)){count++;return{...c,stage}}return c});
  store.set(`profile:${profileId}:contacts`,next);
  showToast(`Moved ${count} contact${count===1?'':'s'} to "${stage}"`,null,null,2500);
  clearSelectedContacts();
  render();
}



// ============================================================
// SYNC CORE — three-way merge shared by the Mac and the phone
// (also loaded by main.js / tests through module.exports)
// ============================================================
// Every stored key holds JSON. When both devices changed the same key since they
// last agreed (the "base"), we merge instead of overwriting:
//  • lists of records with an id → merged record by record (adds, edits and deletes
//    from both sides survive; an edit beats a delete)
//  • plain objects → merged field by field
//  • anything else (a number, a string) → the most recent change wins
var SYNC_LOCAL_KEYS=['notify:sent','__sync'];
function __sNorm(v){return v===null?undefined:v}
function __sEq(a,b){a=__sNorm(a);b=__sNorm(b);if(a===b)return true;if(a===undefined||b===undefined)return false;return JSON.stringify(a)===JSON.stringify(b)}
function __sIsObj(v){return v!==null&&typeof v==='object'&&!Array.isArray(v)}
function __sIsRecArr(v){return Array.isArray(v)&&v.every(x=>__sIsObj(x)&&x.id!==undefined&&x.id!==null)}
function syncMerge3(base,mine,theirs,theirsNewer){
  base=__sNorm(base);mine=__sNorm(mine);theirs=__sNorm(theirs);
  if(__sEq(mine,theirs))return mine;
  if(__sEq(base,mine))return theirs;   // only they changed it
  if(__sEq(base,theirs))return mine;   // only we changed it
  // both changed it
  if(Array.isArray(mine)&&Array.isArray(theirs)&&__sIsRecArr(mine)&&__sIsRecArr(theirs)&&(base===undefined||__sIsRecArr(base))){
    const key=x=>String(x.id);
    const B=new Map((base||[]).map(x=>[key(x),x])),M=new Map(mine.map(x=>[key(x),x])),T=new Map(theirs.map(x=>[key(x),x]));
    const pick=id=>{
      const inB=B.has(id),inM=M.has(id),inT=T.has(id);
      if(inM&&inT)return syncMerge3(B.get(id),M.get(id),T.get(id),theirsNewer);
      if(inM){if(inB&&__sEq(B.get(id),M.get(id)))return undefined;return M.get(id)} // they deleted an untouched record
      if(inT){if(inB&&__sEq(B.get(id),T.get(id)))return undefined;return T.get(id)} // we deleted an untouched record
      return undefined;
    };
    // order: follow "mine", slotting their new records next to their neighbours
    const out=[],seen=new Set();
    const firstCommon=theirs.findIndex(x=>M.has(key(x)));
    theirs.forEach((x,i)=>{const id=key(x);if(!M.has(id)&&!B.has(id)&&(firstCommon<0||i<firstCommon)){out.push(x);seen.add(id)}});
    mine.forEach(x=>{const id=key(x);if(seen.has(id))return;seen.add(id);const v=pick(id);if(v!==undefined)out.push(v)});
    theirs.forEach(x=>{const id=key(x);if(seen.has(id))return;seen.add(id);const v=pick(id);if(v!==undefined)out.push(v)});
    return out;
  }
  if(__sIsObj(mine)&&__sIsObj(theirs)&&(base===undefined||__sIsObj(base))){
    const out={};const b=base||{};
    new Set([...Object.keys(mine),...Object.keys(theirs),...Object.keys(b)]).forEach(k=>{
      const v=syncMerge3(b[k],mine[k],theirs[k],theirsNewer);
      if(v!==undefined)out[k]=v;
    });
    return out;
  }
  return theirsNewer?theirs:mine;
}
// The Mac's side of one sync round. `api` gives raw access to the Mac's data.
// req = {sinceRev, changes:[{key,value,deleted,base,t}]}
function syncServe(req,api){
  const since=+req.sinceRev||0;
  const touched=new Set();let applied=0;
  (req.changes||[]).forEach(c=>{
    if(!c||typeof c.key!=='string'||SYNC_LOCAL_KEYS.includes(c.key))return;
    touched.add(c.key);
    const cur=api.raw(c.key);const meta=api.meta(c.key);
    const incoming=c.deleted?undefined:c.value;
    const serverChanged=meta&&meta.r>since;
    const val=serverChanged?syncMerge3(c.base,cur,incoming,(+c.t||0)>=(meta.t||0)):incoming;
    if(!__sEq(val,cur)){api.write(c.key,val,c.t);applied++}
  });
  const rev=api.rev();
  const out=[];
  api.keys().forEach(k=>{
    if(SYNC_LOCAL_KEYS.includes(k))return;
    const m=api.meta(k);
    if(since===0||touched.has(k)||(m&&m.r>since)){
      const v=api.raw(k);
      out.push(v===undefined?{key:k,deleted:true}:{key:k,value:v});
    }
  });
  return {rev,epoch:api.epoch(),applied,changes:out,full:since===0};
}
if(typeof module!=='undefined'&&module.exports)module.exports={syncMerge3,syncServe,SYNC_LOCAL_KEYS,__sEq};

// ======================================================================
// ATLAS DESKTOP — additions. Function declarations below intentionally
// replace earlier ones of the same name (last declaration wins).
// ======================================================================

let __chartSeq=0;

// ---------- Sidebar (orbital mark, desktop footer) ----------
function renderSidebar(){
  const profiles=store.get('profiles:list',[]);
  const activeProfile=state.profileId?store.get(`profile:${state.profileId}:meta`):null;
  const inProfile=!!activeProfile&&!['command','profiles','daily','running','routine','bills','personalBalance','settings'].includes(state.view);
  const navBtn=(view,label,iconName)=>`<div class="nav-item ${state.view===view?'active':''}" onclick="navigate('${view}')">${icon(iconName,15)}<span>${label}</span></div>`;
  const profBtn=(view,label,iconName)=>`<div class="nav-item ${state.view===view?'active':''}" onclick="navigate('${view}','${state.profileId}')">${icon(iconName,15)}<span>${label}</span></div>`;
  const group=(t)=>`<div class="label" style="padding:0 12px;margin:22px 0 6px;">${t}</div>`;
  return `
    <div style="padding:0 6px 18px;display:flex;align-items:center;gap:11px;">
      ${atlasMark(34)}
      <div>
        <div class="serif" style="font-size:19px;font-weight:600;line-height:1;letter-spacing:-0.02em;">Atlas</div>
        <div style="font-size:11px;color:var(--bone-mute);margin-top:3px;">${DESKTOP?`Desktop · saved on this ${MACHINE}`:'Browser mode'}</div>
      </div>
    </div>
    <button class="nav-item" onclick="openGlobalSearch()" style="margin:0 0 6px;background:var(--ink-3);border:1px solid var(--line);width:100%;justify-content:flex-start;color:var(--bone-mute);">
      ${icon('search',14)}<span style="flex:1;text-align:left;">Search</span>
      <kbd style="background:transparent;border:1px solid var(--line);border-radius:5px;padding:1px 6px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--bone-mute);">⌘K</kbd>
    </button>
    ${group('Overview')}
    ${navBtn('command','Command Centre','dashboard')}
    ${navBtn('profiles','Profiles','building')}
    ${group('Personal')}
    ${navBtn('routine','Daily routine','calendar')}
    ${navBtn('daily','Gym log','dumbbell')}
    ${navBtn('running','Running','run')}
    ${navBtn('bills','Bills','receipt')}
    ${navBtn('personalBalance','Net worth','wallet')}
    ${inProfile?(()=>{
      const modules=getProfileModules(activeProfile);
      return `<div class="label" style="padding:0 12px;margin:22px 0 6px;display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${activeProfile.color};box-shadow:0 0 8px ${activeProfile.color};"></span>${escapeHtml(activeProfile.name)}</div>
      ${profBtn('dashboard','Dashboard','dashboard')}
      ${modules.includes('contacts')?profBtn('contacts','Contacts','users'):''}
      ${modules.includes('inventory')?profBtn('inventory','Inventory','package'):''}
      ${modules.includes('analytics')?profBtn('analytics','Analytics','chart'):''}
      ${profBtn('transactions','Ledger','dollar')}
      ${profBtn('balance','Balance sheet','wallet')}`;
    })():''}
    ${profiles.length>0&&!inProfile?`${group('Ventures')}
      ${profiles.slice(0,8).map(p=>`<div class="nav-item" onclick="navigate('dashboard','${p.id}')"><span style="width:8px;height:8px;border-radius:50%;background:${p.color};box-shadow:0 0 8px ${p.color};flex-shrink:0;margin:0 3px;"></span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</span></div>`).join('')}`:''}
    <div style="margin-top:auto;padding-top:18px;">
      ${navBtn('settings','Settings & data','settings')}
      <div style="padding:12px 12px 0;font-size:11.5px;color:var(--bone-mute);display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <span>${new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})}</span>
        <button class="btn btn-ghost btn-sm" onclick="toggleTheme()" title="Switch light / dark" style="padding:5px 8px;">${getTheme()==='light'?'Dark':'Light'}</button>
      </div>
    </div>`;
}

function atlasMark(size){
  return `<svg width="${size}" height="${size}" viewBox="18 2 92 116" aria-label="Atlas" role="img" style="flex-shrink:0;overflow:visible">
    <defs>
      <radialGradient id="atl-g" cx="36%" cy="28%" r="78%"><stop offset="0" stop-color="#ffffff"/><stop offset=".22" style="stop-color:var(--ember)"/><stop offset=".78" style="stop-color:var(--violet)"/><stop offset="1" stop-color="#6a3fc9"/></radialGradient>
      <linearGradient id="atl-f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--bone)"/><stop offset="1" style="stop-color:var(--bone-mute)"/></linearGradient>
      <clipPath id="atl-c"><circle cx="63" cy="37" r="30"/></clipPath>
    </defs>
    <ellipse cx="63" cy="37" rx="42" ry="11" fill="none" style="stroke:var(--ember)" stroke-opacity=".4" stroke-width="1.6" transform="rotate(-18 63 37)"/>
    <circle cx="63" cy="37" r="30" fill="url(#atl-g)"/>
    <g clip-path="url(#atl-c)" fill="none" stroke="#0b1030" stroke-opacity=".3" stroke-width="1.6"><ellipse cx="63" cy="37" rx="12.5" ry="30"/><ellipse cx="63" cy="37" rx="24" ry="30"/><path d="M33 37h60M35 23h56M35 51h56"/></g>
    <g fill="none" stroke="url(#atl-f)" stroke-linecap="round" stroke-linejoin="round">
      <path d="M53 75 Q65 79 74 93" stroke-width="13"/><path d="M46.5 72 L54 76.5" stroke-width="6.5"/>
      <path d="M53 75 L43 61 L37 49" stroke-width="7"/><path d="M69 73 L81 63 L89 51" stroke-width="7"/>
      <path d="M73 93 L57 99 L54.5 112" stroke-width="7.6"/><path d="M76 95 L84 112 L101 112.5" stroke-width="7.6"/>
    </g>
    <circle cx="44" cy="71.5" r="6.6" fill="url(#atl-f)"/>
  </svg>`;
}

// ---------- Orbital hero for Command Centre ----------
function renderOrbitHero(ctx){
  const fx=ctx.fx;
  const ps=[...ctx.profileSummaries].sort((a,b)=>b.revenue-a.revenue);
  const maxRev=Math.max(1,...ps.map(p=>Math.max(p.revenue,0)));
  const C=200;
  const rings=[112,146,180];
  const speeds=[70,110,160];
  const margin=ctx.bizRevenue>0?Math.max(-1,Math.min(1,ctx.bizProfit/ctx.bizRevenue)):0;
  const gaugeR=70,circ=2*Math.PI*gaugeR;
  const marginColor=margin>=0?'var(--jade)':'var(--rust)';
  // place planets: ring = index % 3, angle spread within ring
  const perRing=[[],[],[]];
  ps.forEach((p,i)=>perRing[i%3].push(p));
  const planets=perRing.map((list,ri)=>{
    const R=rings[ri];
    const g=list.map((p,j)=>{
      const ang=(j/Math.max(1,list.length))*Math.PI*2+ri*0.9;
      const x=C+Math.cos(ang)*R,y=C+Math.sin(ang)*R;
      const r=6+13*Math.sqrt(Math.max(p.revenue,0)/maxRev);
      return `<g class="orbit-planet" onclick="navigate('dashboard','${p.id}')"><title>${escapeHtml(p.name)} — revenue ${fmtReporting(p.revenue)}, net ${fmtReporting(p.profit)}</title>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r+7).toFixed(1)}" fill="${p.color}" opacity=".12"/>
        <circle class="body" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${p.color}" filter="url(#planetGlow)"/>
        <circle cx="${(x-r*0.35).toFixed(1)}" cy="${(y-r*0.35).toFixed(1)}" r="${(r*0.35).toFixed(1)}" fill="#fff" opacity=".35"/>
      </g>`;
    }).join('');
    return `<g class="orbit-ring" style="animation-duration:${speeds[ri]}s;${ri===1?'animation-direction:reverse;':''}">${g}</g>`;
  }).join('');
  const ticks=Array.from({length:72},(_,i)=>{
    const a=i/72*Math.PI*2,long=i%6===0;
    const r1=194,r2=long?186:190;
    return `<line x1="${(C+Math.cos(a)*r1).toFixed(1)}" y1="${(C+Math.sin(a)*r1).toFixed(1)}" x2="${(C+Math.cos(a)*r2).toFixed(1)}" y2="${(C+Math.sin(a)*r2).toFixed(1)}" stroke="var(--bone-mute)" stroke-opacity="${long?.6:.3}" stroke-width="1"/>`;
  }).join('');
  const periodLabel={thisMonth:'this month',lastMonth:'last month',thisFy:'this '+ctx.fy.label,lastFy:'last '+ctx.prevFy.label,all:'all time'}[ctx.cmdFilter]||'';
  const netColor=ctx.totalNet>=0?'var(--bone)':'var(--rust)';

  return `<div class="draggable-section card orbit-hero" data-section-id="hud" style="margin-bottom:16px;">
    <div class="drag-handle" title="Drag to reorder">⋮⋮</div>
    <div class="orbit-readout">
      <div class="label" style="margin-bottom:10px;">Net worth across everything</div>
      <div class="big" style="color:${netColor};">${fmtReporting(ctx.totalNet)}</div>
      <div style="display:flex;gap:18px;margin-top:12px;font-size:13px;color:var(--bone-dim);flex-wrap:wrap;">
        <span><span style="color:var(--jade);">▲</span> Assets ${fmtReporting(ctx.totalAssets)}</span>
        <span><span style="color:var(--rust);">▼</span> Liabilities ${fmtReporting(ctx.totalLiab)}</span>
      </div>
      ${ps.length?`<div class="orbit-legend">
        <div class="row" style="cursor:default;color:var(--bone-mute);font-size:12px;padding-top:0;padding-bottom:4px;"><span></span><span>Venture</span><span style="text-align:right;">Revenue</span><span style="text-align:right;min-width:84px;">Net, ${periodLabel}</span></div>
        ${ps.map(p=>`<div class="row" onclick="navigate('dashboard','${p.id}')">
          <span style="width:10px;height:10px;border-radius:50%;background:${p.color};box-shadow:0 0 10px ${p.color};"></span>
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</span>
          <span class="mono" style="text-align:right;color:var(--bone-dim);font-size:12.5px;">${fmtReporting(p.revenue)}</span>
          <span class="mono" style="text-align:right;min-width:84px;font-size:12.5px;color:${p.profit>=0?'var(--jade)':'var(--rust)'};">${p.profit>=0?'+':''}${fmtReporting(p.profit)}</span>
        </div>`).join('')}
      </div>`:`<div style="margin-top:22px;color:var(--bone-dim);font-size:13.5px;line-height:1.55;max-width:42ch;">Each business you track becomes a planet here, sized by its revenue.</div>
      <button class="btn btn-primary" style="margin-top:14px;" onclick="navigate('profiles');setTimeout(openNewProfile,50)">${icon('plus',14)} Add your first venture</button>`}
    </div>
    <div class="orbit-stage">
      <svg viewBox="0 0 400 400" role="img" aria-label="Ventures orbiting your net worth">
        <defs>
          <radialGradient id="coreGrad" cx="38%" cy="32%"><stop offset="0" stop-color="#ffffff" stop-opacity=".95"/><stop offset=".28" stop-color="var(--ember)"/><stop offset=".75" stop-color="var(--violet)"/><stop offset="1" stop-color="var(--violet)" stop-opacity=".6"/></radialGradient>
          <radialGradient id="coreHalo"><stop offset=".45" stop-color="var(--ember)" stop-opacity=".28"/><stop offset="1" stop-color="var(--ember)" stop-opacity="0"/></radialGradient>
          <filter id="planetGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        ${ticks}
        ${rings.map((r,i)=>`<circle cx="${C}" cy="${C}" r="${r}" fill="none" stroke="${i===1?'var(--violet)':'var(--ember)'}" stroke-opacity=".22" stroke-width="1" ${i===2?'stroke-dasharray="2 5"':''}/>`).join('')}
        <circle cx="${C}" cy="${C}" r="104" fill="url(#coreHalo)"/>
        <circle cx="${C}" cy="${C}" r="${gaugeR}" fill="none" stroke="var(--line-2)" stroke-width="5"/>
        ${Math.abs(margin)<0.005?'':`<circle cx="${C}" cy="${C}" r="${gaugeR}" fill="none" stroke="${marginColor}" stroke-width="5" stroke-linecap="round"
          stroke-dasharray="${(Math.abs(margin)*circ).toFixed(1)} ${circ.toFixed(1)}" transform="${margin<0?`translate(${2*C} 0) scale(-1 1) `:''}rotate(-90 ${C} ${C})" filter="url(#planetGlow)"/>`}
        <circle cx="${C}" cy="${C}" r="50" fill="url(#coreGrad)"/>
        <text x="${C}" y="${C-2}" text-anchor="middle" font-family="Space Grotesk" font-weight="600" font-size="22" fill="#05121a">${ctx.bizRevenue>0?Math.round(margin*100)+'%':'—'}</text>
        <text x="${C}" y="${C+16}" text-anchor="middle" font-family="Inter" font-size="9.5" fill="#05121a" opacity=".75">business margin</text>
        ${planets}
      </svg>
    </div>
  </div>`;
}

// ---------- Charts (luminous) ----------
function renderAreaChart(data,color='#3fb4ff'){
  if(!data||data.length===0||data.every(d=>d.value===0))return `<div style="height:240px;display:flex;align-items:center;justify-content:center;color:var(--bone-mute);font-size:13px;">Nothing logged in this period yet</div>`;
  const id='ac'+(++__chartSeq);
  const W=600,H=180,P=20;
  const max=Math.max(...data.map(d=>d.value),1);
  const step=(W-P*2)/Math.max(1,data.length-1);
  const pts=data.map((d,i)=>[P+i*step,H-P-(d.value/max)*(H-P*2)]);
  const path=pts.map((p,i)=>(i===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
  const area=path+` L${pts[pts.length-1][0]},${H-P} L${P},${H-P} Z`;
  const labels=data.filter((_,i)=>i%5===0||i===data.length-1);
  const peakIdx=data.findIndex(d=>d.value===max);
  return `<svg viewBox="0 0 ${W} ${H+20}" style="width:100%;height:240px;overflow:visible" preserveAspectRatio="none">
    <defs>
      <linearGradient id="${id}f" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.38"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient>
      <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="var(--violet)"/></linearGradient>
      <filter id="${id}g" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    ${[0.25,0.5,0.75].map(f=>`<line x1="${P}" x2="${W-P}" y1="${P+f*(H-P*2)}" y2="${P+f*(H-P*2)}" stroke="var(--line)" stroke-dasharray="2 5"/>`).join('')}
    <line x1="${P}" x2="${W-P}" y1="${H-P}" y2="${H-P}" stroke="var(--line-2)"/>
    <path d="${area}" fill="url(#${id}f)"/>
    <path d="${path}" fill="none" stroke="url(#${id}s)" stroke-width="2.2" stroke-linejoin="round" filter="url(#${id}g)" vector-effect="non-scaling-stroke"/>
    <circle cx="${pts[peakIdx][0]}" cy="${pts[peakIdx][1]}" r="4" fill="${color}" filter="url(#${id}g)"/>
    ${labels.map(d=>{const idx=data.indexOf(d);return `<text x="${P+idx*step}" y="${H+15}" fill="var(--bone-mute)" font-size="9.5" text-anchor="middle" font-family="Inter">${escapeHtml(d.label)}</text>`}).join('')}
  </svg>`;
}

function renderPieChart(data){
  const total=data.reduce((a,b)=>a+b.value,0);
  if(total===0)return'';
  const id='pc'+(++__chartSeq);
  const cx=90,cy=90,r=66,sw=16,circ=2*Math.PI*r,gap=data.length>1?3:0;
  let off=0;
  const arcs=data.map(d=>{
    const len=(d.value/total)*circ;
    const seg=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${sw}" stroke-dasharray="${Math.max(0.1,len-gap).toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 ${cx} ${cy})" filter="url(#${id})"/>`;
    off+=len;return seg;
  }).join('');
  return `<div style="display:flex;justify-content:center;margin-bottom:14px;"><svg viewBox="0 0 180 180" style="width:180px;height:180px;overflow:visible">
      <defs><filter id="${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--ink-3)" stroke-width="${sw}"/>
      ${arcs}
      <text x="${cx}" y="${cy+4}" text-anchor="middle" font-family="Space Grotesk" font-weight="600" font-size="30" fill="var(--bone)">${total}</text>
      <text x="${cx}" y="${cy+22}" text-anchor="middle" font-family="Inter" font-size="10" fill="var(--bone-mute)">total</text>
    </svg></div>
    ${data.map(s=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;font-size:12.5px;">
      <div style="display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${s.color};box-shadow:0 0 8px ${s.color};"></span><span style="color:var(--bone-dim);">${s.name}</span></div>
      <span class="mono" style="color:var(--bone);">${s.value}</span>
    </div>`).join('')}`;
}

function renderBarChart(data,colors=['#3df5a8','#ff5c7a']){
  if(!data||data.length===0)return `<div style="height:240px;display:flex;align-items:center;justify-content:center;color:var(--bone-mute);font-size:13px;">Nothing logged in this period yet</div>`;
  const id='bc'+(++__chartSeq);
  const W=600,H=200,P=24;
  const keys=Object.keys(data[0]).filter(k=>k!=='label');
  const max=Math.max(...data.flatMap(d=>keys.map(k=>d[k])),1);
  const slot=(W-P*2)/data.length;
  const barW=Math.max(2,slot/(keys.length+0.6));
  return `<svg viewBox="0 0 ${W} ${H+20}" style="width:100%;height:240px;" preserveAspectRatio="none">
    <defs>${colors.map((c,i)=>`<linearGradient id="${id}${i}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".25"/></linearGradient>`).join('')}</defs>
    ${[0.25,0.5,0.75].map(f=>`<line x1="${P}" x2="${W-P}" y1="${P+f*(H-P*2)}" y2="${P+f*(H-P*2)}" stroke="var(--line)" stroke-dasharray="2 5"/>`).join('')}
    <line x1="${P}" x2="${W-P}" y1="${H-P}" y2="${H-P}" stroke="var(--line-2)"/>
    ${data.map((d,i)=>keys.map((k,j)=>{
      const x=P+i*slot+j*barW+(slot-barW*keys.length)/2;
      const h=(d[k]/max)*(H-P*2);
      if(h<=0)return'';
      return `<rect x="${x.toFixed(1)}" y="${(H-P-h).toFixed(1)}" width="${Math.max(1,barW-1.5).toFixed(1)}" height="${h.toFixed(1)}" rx="${Math.min(3,barW/3).toFixed(1)}" fill="url(#${id}${j%colors.length})"/>`;
    }).join('')).join('')}
    ${data.filter((_,i)=>i%Math.max(1,Math.floor(data.length/8))===0).map(d=>{const i=data.indexOf(d);return `<text x="${P+i*slot+slot/2}" y="${H+15}" fill="var(--bone-mute)" font-size="9.5" text-anchor="middle" font-family="Inter">${escapeHtml(d.label)}</text>`}).join('')}
  </svg>`;
}

function renderNetWorthChart(points){
  if(points.length<2)return'';
  const id='nw'+(++__chartSeq);
  const w=720,h=180,pad=20;
  const minNet=Math.min(...points.map(p=>p.net)),maxNet=Math.max(...points.map(p=>p.net));
  const range=maxNet-minNet||1;
  const x=i=>pad+(i/(points.length-1))*(w-pad*2);
  const y=v=>h-pad-((v-minNet)/range)*(h-pad*2);
  const path=points.map((p,i)=>`${i===0?'M':'L'}${x(i).toFixed(1)},${y(p.net).toFixed(1)}`).join(' ');
  const fillPath=`${path} L${x(points.length-1).toFixed(1)},${h-pad} L${x(0).toFixed(1)},${h-pad} Z`;
  const up=points[points.length-1].net>=points[0].net;
  const stroke=up?'var(--jade)':'var(--rust)';
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="width:100%;height:160px;display:block;overflow:visible">
    <defs><linearGradient id="${id}f" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${up?'#3df5a8':'#ff5c7a'}" stop-opacity=".3"/><stop offset="1" stop-color="${up?'#3df5a8':'#ff5c7a'}" stop-opacity="0"/></linearGradient>
    <filter id="${id}g" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <path d="${fillPath}" fill="url(#${id}f)"/>
    <path d="${path}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" filter="url(#${id}g)" vector-effect="non-scaling-stroke"/>
    ${points.map((p,i)=>`<circle cx="${x(i).toFixed(1)}" cy="${y(p.net).toFixed(1)}" r="3" fill="${stroke}"/>`).join('')}
  </svg>
  <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--bone-mute);margin-top:4px;">
    <span>${fmtShortDate(points[0].date)}</span><span>${fmtShortDate(points[points.length-1].date)}</span>
  </div>`;
}

// ---------- prompt() replacements (Electron has no window.prompt) ----------
function quickRestock(itemId){
  const items=store.get(`profile:${state.profileId}:inventory`,[]);
  const item=items.find(i=>i.id===itemId);
  if(!item)return;
  showModal(`Restock ${escapeHtml(item.name)}`,`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Units to add</div><input class="field mono" id="rs-qty" type="number" min="1" value="1"></div>
    ${item.costPrice>0?`<label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="rs-log" checked style="accent-color:var(--ember);">
      <span>Log the purchase cost in the Ledger</span>
      <span style="margin-left:auto;font-size:11.5px;color:var(--bone-mute);">${item.currency||'£'}${item.costPrice} per unit</span>
    </label>`:''}
  </div>`,()=>{
    const n=parseInt(document.getElementById('rs-qty').value);
    if(!n||n<=0){alert('Enter how many units you are adding.');return false}
    const cur=store.get(`profile:${state.profileId}:inventory`,[]);
    const it=cur.find(i=>i.id===itemId);
    it.qtyOnHand=(it.qtyOnHand||0)+n;
    store.set(`profile:${state.profileId}:inventory`,cur);
    const logIt=document.getElementById('rs-log');
    if(logIt&&logIt.checked){
      const txs=store.get(`profile:${state.profileId}:transactions`,[]);
      txs.unshift({id:uid(),date:today(),type:'cost',description:`Restocked ${n} × ${it.name}`,category:'Inventory',currency:it.currency||'£',amount:n*(it.costPrice||0),notes:'Auto-logged from Inventory restock',createdAt:new Date().toISOString(),sourceItemId:it.id});
      store.set(`profile:${state.profileId}:transactions`,txs);
    }
    showToast(`Added ${n} × ${it.name} to stock`,null,null,2500);
    return true;
  },'Add to stock');
}

function bulkChangeStage(){
  const sel=getSelectedContacts();
  if(sel.size===0)return;
  showModal(`Move ${sel.size} contact${sel.size===1?'':'s'}`,`<div><div class="label" style="margin-bottom:6px;">New stage</div>
    <select class="field" id="bulk-stage">${STAGES.map(s=>`<option value="${escAttr(s)}">${escapeHtml(s)}</option>`).join('')}</select></div>`,()=>{
    const stage=document.getElementById('bulk-stage').value;
    const profileId=state.profileId;
    const contacts=store.get(`profile:${profileId}:contacts`,[]);
    let count=0;
    store.set(`profile:${profileId}:contacts`,contacts.map(c=>{if(sel.has(c.id)){count++;return{...c,stage}}return c}));
    showToast(`Moved ${count} contact${count===1?'':'s'} to "${stage}"`,null,null,2500);
    clearSelectedContacts();
    return true;
  },'Move contacts');
}

// ---------- files out: native save dialog on desktop ----------
function downloadFile(content,filename,type){
  if(DESKTOP){
    DESKTOP.saveFile(filename,content).then(r=>{if(r&&r.ok)showToast(`Saved ${filename}`,'Show',()=>DESKTOP.reveal(r.path),5000)});
    return;
  }
  const blob=new Blob([content],{type});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),100);
}
function savePdf(doc,filename){
  if(DESKTOP){
    const b64=doc.output('datauristring').split(',')[1];
    DESKTOP.saveFile(filename,b64,'base64').then(r=>{if(r&&r.ok)showToast(`Saved ${filename}`,'Show',()=>DESKTOP.reveal(r.path),5000)});
  }else doc.save(filename);
}

// ---------- Data & backups (Settings) ----------
function renderDataCard(){
  if(PHONE)return renderPhoneDataCard();
  if(!DESKTOP){
    return `<div class="card" style="padding:22px;margin-bottom:16px;border-color:var(--gold);">
      <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:6px;">Browser mode</div>
      <div style="font-size:13px;color:var(--bone-dim);line-height:1.55;">This copy is running in a web browser, so data sits in browser storage and can be wiped by the browser. Use the Atlas desktop app instead, and export a backup now.</div>
    </div>`;
  }
  return `<div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Your data</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:14px;line-height:1.55;">Atlas saves every change to a file on this ${MACHINE} within a second. A dated backup is kept each day (last 60 days), plus one every time Atlas opens. Nothing is stored in a browser.</div>
    <div class="mono" style="font-size:12px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;background:var(--ink-3);color:var(--bone-dim);word-break:break-all;margin-bottom:14px;" id="data-path">${escapeHtml(__dataPath)}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn" onclick="DESKTOP.openFolder()">${icon('file',14)} Open data folder</button>
      <button class="btn" onclick="desktopBackupNow()">${icon('download',14)} Back up now</button>
      <button class="btn" onclick="desktopChangeFolder()">${icon('mapPin',14)} Move data folder…</button>
      <button class="btn btn-danger" onclick="desktopRestore()">${icon('refresh',14)} Restore from backup…</button>
    </div>
    <div style="margin-top:12px;font-size:12px;color:var(--bone-mute);line-height:1.5;">For a copy that survives losing this ${MACHINE}, move the data folder into ${IS_MAC?'iCloud Drive':'OneDrive, Dropbox or Google Drive'}. Restoring replaces everything currently in Atlas, but the current state is backed up first.</div>
    <div id="backup-list" style="margin-top:14px;"></div>
  </div>`;
}
async function loadBackupList(){
  const el=document.getElementById('backup-list');
  if(!el||!DESKTOP)return;
  const info=await DESKTOP.info();
  const list=(info.backups||[]).slice(0,8);
  if(!list.length){el.innerHTML='';return}
  el.innerHTML=`<details><summary style="cursor:pointer;font-size:12.5px;color:var(--bone-dim);">Recent backups (${info.backups.length})</summary>
    <div style="margin-top:8px;display:flex;flex-direction:column;gap:4px;">${list.map(b=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 10px;border:1px solid var(--line);border-radius:8px;font-size:12px;">
      <span class="mono" style="color:var(--bone-dim);">${escapeHtml(b.name)}</span>
      <span style="display:flex;gap:10px;align-items:center;"><span style="color:var(--bone-mute);">${(b.size/1024).toFixed(0)} KB</span>
      <button class="btn btn-ghost btn-sm" onclick="desktopRestore('${escAttr(b.name)}')">Restore</button></span>
    </div>`).join('')}</div></details>`;
}
async function desktopBackupNow(){
  flushSaveSync();
  const r=await DESKTOP.backupNow();
  if(r&&r.ok){showToast(`Backup saved: ${r.name}`,null,null,3500);loadBackupList()}
}
async function desktopChangeFolder(){
  flushSaveSync();
  const r=await DESKTOP.changeFolder();
  if(r&&r.ok){
    __dataDir=r.dataDir;__dataPath=r.dataDir+'/atlas-data.json';
    showToast('Data folder moved. The old folder was left in place as a spare copy.',null,null,6000);
    render();
  }
}
async function desktopRestore(name){
  if(!confirm(name?`Replace everything in Atlas with the backup "${name}"?\n\nYour current data is backed up first.`:'Pick an Atlas backup file to restore. This replaces everything currently in Atlas — your current data is backed up first.'))return;
  flushSaveSync();
  const r=await DESKTOP.restoreBackup(name||null);
  if(r&&r.ok){location.reload()}
  else if(r&&r.error){alert(r.error)}
}

// ---------- first run ----------
function maybeShowWelcome(){
  if(!DESKTOP)return;
  if(__loadInfo.recovered){
    showToast(`The data file was damaged, so Atlas loaded your most recent backup${__loadInfo.file?' ('+__loadInfo.file+')':''}.`,null,null,12000);
  }
  if(__loadInfo.source!=='new'||!__startedEmpty||store.get('settings:setupDone',false))return;
  openSetupWizard();return;
  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div style="display:flex;align-items:center;gap:14px;">${atlasMark(48)}
      <div><div class="serif" style="font-size:24px;font-weight:600;">Welcome to Atlas</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-top:4px;">Your data is saved as a file you own, on this ${MACHINE}.</div></div></div>
    <div style="font-size:13.5px;color:var(--bone-dim);line-height:1.6;">Everything you enter is written to <span class="mono" style="color:var(--bone);font-size:12px;">${escapeHtml(__dataPath)}</span>, with automatic daily backups next to it. Clearing your browser can no longer wipe it.</div>
    <div style="font-size:13.5px;color:var(--bone-dim);line-height:1.6;">If you have an Atlas backup file (a <span class="mono" style="font-size:12px;">.json</span> exported from Atlas), import it now. Otherwise start fresh and create your first profile.</div>
    <input type="file" id="welcome-import" accept=".json" style="display:none" onchange="closeModal();importAll(this.files[0])">
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button class="btn" onclick="closeModal()">Start fresh</button>
      <button class="btn btn-primary" onclick="document.getElementById('welcome-import').click()">${icon('upload',14)} Import old backup</button>
    </div>
  </div>`);
}

// ======================================================================
// ANALYTICS — tailored to the business type
// ======================================================================
const ANALYTICS_KINDS={
  pipeline:{label:'Sales pipeline',desc:'Leads, conversion, sources and deal value'},
  product:{label:'Product sales',desc:'Orders, units, margin, best sellers and stock'},
  trading:{label:'Trading & returns',desc:'P&L curve, win rate, drawdown'},
  content:{label:'Income streams',desc:'Where revenue comes from and how it trends'},
  general:{label:'Finance only',desc:'Revenue, costs and margin by category'}
};
const TYPE_TO_ANALYTICS={'Lead Gen':'pipeline','Service':'pipeline','Consulting':'pipeline','SaaS':'pipeline',
  'E-commerce':'product','Wholesale':'product','Author/Creator':'product',
  'Trading':'trading','Investment':'trading','Content':'content'};
const CONTACT_NOUN={'Lead Gen':['lead','leads'],'SaaS':['sign-up','sign-ups'],'Service':['enquiry','enquiries'],'Consulting':['enquiry','enquiries']};
function analyticsKind(meta){
  if(meta.analyticsKind&&ANALYTICS_KINDS[meta.analyticsKind])return meta.analyticsKind;
  if(TYPE_TO_ANALYTICS[meta.type])return TYPE_TO_ANALYTICS[meta.type];
  const m=getProfileModules(meta);
  if(m.includes('inventory'))return 'product';
  if(m.includes('contacts'))return 'pipeline';
  return 'general';
}
function setAnalyticsKind(v){
  const meta=store.get(`profile:${state.profileId}:meta`);
  if(!meta)return;
  if(v==='auto')delete meta.analyticsKind;else meta.analyticsKind=v;
  store.set(`profile:${state.profileId}:meta`,meta);
  render();
}

function anaDayKey(d){const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`}
function anaRangeKeys(range){
  const end=new Date();
  const start=new Date();start.setDate(end.getDate()-(range-1));
  const pEnd=new Date(start);pEnd.setDate(pEnd.getDate()-1);
  const pStart=new Date(pEnd);pStart.setDate(pEnd.getDate()-(range-1));
  return {from:anaDayKey(start),to:anaDayKey(end),pFrom:anaDayKey(pStart),pTo:anaDayKey(pEnd)};
}
const anaIn=(d,a,b)=>!!d&&d.slice(0,10)>=a&&d.slice(0,10)<=b;
function anaDelta(cur,prev){
  if(!prev&&!cur)return null;
  if(!prev)return {txt:'new',up:cur>0};
  const pct=((cur-prev)/Math.abs(prev))*100;
  return {txt:`${pct>=0?'+':''}${pct.toFixed(0)}%`,up:pct>=0};
}
function anaKpi(label,value,opts={}){
  const {sub='',delta=null,goodUp=true,accent='var(--bone)'}=opts;
  const dCol=delta?((delta.up===goodUp)?'var(--jade)':'var(--rust)'):'';
  return `<div class="card" style="padding:18px;">
    <div class="label" style="margin-bottom:12px;">${label}</div>
    <div class="serif mono" style="font-size:24px;font-weight:500;color:${accent};letter-spacing:-0.01em;line-height:1.15;">${value}</div>
    <div style="font-size:11.5px;color:var(--bone-mute);margin-top:7px;display:flex;gap:8px;flex-wrap:wrap;">
      ${delta?`<span style="color:${dCol};font-weight:500;">${delta.txt}</span><span>vs previous period</span>`:''}${sub?`<span>${sub}</span>`:''}
    </div>
  </div>`;
}
function anaCard(title,sub,body,extra=''){
  return `<div class="card" style="padding:22px;${extra}">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">${title}</div>
    <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">${sub}</div>
    ${body}
  </div>`;
}
function anaBars(rows,opts={}){
  // rows: {label, value, right, color}
  if(!rows.length)return `<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">${opts.empty||'Nothing in this period yet.'}</div>`;
  const max=Math.max(...rows.map(r=>Math.abs(r.value)),1);
  return rows.map(r=>`<div style="margin-bottom:12px;">
    <div style="display:flex;justify-content:space-between;gap:12px;font-size:12.5px;margin-bottom:5px;">
      <span style="color:var(--bone-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(r.label)}</span>
      <span class="mono" style="white-space:nowrap;">${r.right}</span>
    </div>
    <div style="height:6px;background:var(--ink-3);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${(Math.abs(r.value)/max*100).toFixed(1)}%;background:${r.color||'var(--ember)'};border-radius:3px;box-shadow:0 0 10px ${r.color||'var(--ember)'};"></div></div>
  </div>`).join('');
}
function anaRevCostChart(txs,range,rep){
  // bucket by day (≤31), week (≤90) or month (year)
  const bucket=range<=31?'day':range<=90?'week':'month';
  const out=[];const map={};
  const now=new Date();
  if(bucket==='month'){
    for(let i=11;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;map[k]={label:d.toLocaleDateString('en-GB',{month:'short'}),revenue:0,cost:0};out.push(map[k])}
    txs.forEach(t=>{const k=(t.date||'').slice(0,7);if(map[k])map[k][t.type==='revenue'?'revenue':'cost']+=rep(t)});
  }else{
    const step=bucket==='day'?1:7;
    const n=Math.ceil(range/step);
    for(let i=n-1;i>=0;i--){
      const e=new Date();e.setDate(e.getDate()-i*step);
      const s=new Date(e);s.setDate(e.getDate()-(step-1));
      const row={label:e.toLocaleDateString('en-GB',{day:'numeric',month:'short'}),revenue:0,cost:0,a:anaDayKey(s),b:anaDayKey(e)};
      out.push(row);
    }
    txs.forEach(t=>{const r=out.find(o=>t.date>=o.a&&t.date<=o.b);if(r)r[t.type==='revenue'?'revenue':'cost']+=rep(t)});
    out.forEach(o=>{delete o.a;delete o.b});
  }
  return `${renderBarChart(out)}
    <div style="display:flex;gap:16px;margin-top:8px;font-size:11.5px;color:var(--bone-mute);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#3df5a8;margin-right:6px;vertical-align:middle;"></span>Revenue</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#ff5c7a;margin-right:6px;vertical-align:middle;"></span>Cost</span>
      <span style="margin-left:auto;">per ${bucket}</span>
    </div>`;
}
function anaByCategory(txs,type,rep,palette){
  const m={};
  txs.filter(t=>t.type===type).forEach(t=>{const k=t.category||'Uncategorised';m[k]=(m[k]||0)+rep(t)});
  const total=Object.values(m).reduce((a,b)=>a+b,0);
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v],i)=>({label:k,value:v,right:`${fmtReporting(v)} · ${total>0?Math.round(v/total*100):0}%`,color:palette[i%palette.length]}));
}
const ANA_PAL=['#3fb4ff','#b57cff','#3df5a8','#ffb547','#7aa2ff','#ff5c7a','#5ef2e0','#c9a46a'];

function renderAnalytics(){
  const pid=state.profileId;
  const meta=store.get(`profile:${pid}:meta`);
  if(!meta)return '<div class="page">Profile not found.</div>';
  const cur=meta.currency||'£';
  const range=window._anaRange||30;
  const kind=analyticsKind(meta);
  const R=anaRangeKeys(range);
  const rep=t=>toReporting(t.amount||0,t.currency||cur);
  const txsAll=store.get(`profile:${pid}:transactions`,[]);
  const txs=txsAll.filter(t=>anaIn(t.date,R.from,R.to));
  const prev=txsAll.filter(t=>anaIn(t.date,R.pFrom,R.pTo));
  const sum=(arr,type)=>arr.filter(t=>t.type===type).reduce((a,t)=>a+rep(t),0);
  const F={rev:sum(txs,'revenue'),cost:sum(txs,'cost'),pRev:sum(prev,'revenue'),pCost:sum(prev,'cost')};
  F.net=F.rev-F.cost;F.pNet=F.pRev-F.pCost;
  const ctx={pid,meta,cur,range,R,rep,txsAll,txs,prev,F};

  const autoKind=TYPE_TO_ANALYTICS[meta.type]||null;
  const controls=`<select class="field" style="width:auto;min-width:170px;" title="Which analytics this business uses" onchange="setAnalyticsKind(this.value)">
      <option value="auto" ${!meta.analyticsKind?'selected':''}>Auto (${escapeHtml(meta.type||'Other')})</option>
      ${Object.entries(ANALYTICS_KINDS).map(([k,v])=>`<option value="${k}" ${meta.analyticsKind===k?'selected':''}>${v.label}</option>`).join('')}
    </select>
    <select class="field" style="width:140px;" onchange="window._anaRange=parseInt(this.value);render()">
      <option value="7" ${range===7?'selected':''}>Last 7 days</option>
      <option value="30" ${range===30?'selected':''}>Last 30 days</option>
      <option value="90" ${range===90?'selected':''}>Last 90 days</option>
      <option value="365" ${range===365?'selected':''}>Last 12 months</option>
    </select>`;
  const body=kind==='pipeline'?anaPipeline(ctx):kind==='product'?anaProduct(ctx):kind==='trading'?anaTrading(ctx):kind==='content'?anaContent(ctx):anaGeneral(ctx);
  return `<div class="page">
    ${profileHeaderHtml('Analytics',`${ANALYTICS_KINDS[kind].label} · ${ANALYTICS_KINDS[kind].desc}`,controls)}
    ${body}
  </div>`;
}

// ---------- Pipeline (lead gen, services, consulting, SaaS) ----------
function anaPipeline(c){
  const {pid,meta,F,R,rep,txs}=c;
  const [one,many]=CONTACT_NOUN[meta.type]||['contact','contacts'];
  const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
  const contacts=store.get(`profile:${pid}:contacts`,[]);
  const inP=contacts.filter(x=>anaIn(x.createdAt,R.from,R.to));
  const inPrev=contacts.filter(x=>anaIn(x.createdAt,R.pFrom,R.pTo));
  const CLOSED=['Lost','Closed - unreachable','Closed - Not interested'];
  const open=contacts.filter(x=>x.stage!=='Won'&&!CLOSED.includes(x.stage));
  const wonP=inP.filter(x=>x.stage==='Won').length;
  const conv=inP.length?wonP/inP.length*100:0;
  const prevConv=inPrev.length?inPrev.filter(x=>x.stage==='Won').length/inPrev.length*100:0;
  const cpl=inP.length?F.cost/inP.length:0;
  const pCpl=inPrev.length?F.pCost/inPrev.length:0;
  const pipeVal=open.reduce((a,x)=>a+toReporting(+x.value||0,c.cur),0);
  const wonAll=contacts.filter(x=>x.stage==='Won');
  const avgDeal=wonAll.filter(x=>+x.value>0).length?wonAll.reduce((a,x)=>a+toReporting(+x.value||0,c.cur),0)/wonAll.filter(x=>+x.value>0).length:0;
  const todayKey=today();
  const overdue=open.filter(x=>x.nextActionDate&&x.nextActionDate<=todayKey).length;
  const revPerWon=wonP?F.rev/wonP:0;

  // funnel on the period's contacts (falls back to all when the period is empty)
  const base=inP.length?inP:contacts;
  const order=STAGES.filter(s=>!CLOSED.includes(s));
  const funnel=order.map(s=>({label:s,value:base.filter(x=>x.stage===s).length,color:STAGE_COLORS[s]}));
  const closedN=base.filter(x=>CLOSED.includes(x.stage)).length;
  funnel.forEach(f=>f.right=`${f.value} · ${base.length?Math.round(f.value/base.length*100):0}%`);

  const src={};
  base.forEach(x=>{const s=x.source||'Unknown';src[s]=src[s]||{n:0,won:0};src[s].n++;if(x.stage==='Won')src[s].won++});
  const srcRows=Object.entries(src).sort((a,b)=>b[1].n-a[1].n).slice(0,8);

  return `
  <div class="stagger grid-3" style="margin-bottom:16px;">
    ${anaKpi(`New ${many}`,inP.length,{delta:anaDelta(inP.length,inPrev.length)})}
    ${anaKpi('Conversion to won',conv.toFixed(1)+'%',{delta:inPrev.length?{txt:`${(conv-prevConv)>=0?'+':''}${(conv-prevConv).toFixed(1)} pts`,up:conv>=prevConv}:null,sub:`${wonP} won`,accent:'var(--jade)'})}
    ${anaKpi(`Cost per ${one}`,inP.length?fmtReporting(cpl):'—',{delta:inP.length&&inPrev.length?anaDelta(cpl,pCpl):null,goodUp:false,sub:`${fmtReporting(F.cost)} spent`})}
    ${anaKpi('Revenue',fmtReporting(F.rev),{delta:anaDelta(F.rev,F.pRev),sub:wonP?`${fmtReporting(revPerWon)} per win`:''})}
    ${anaKpi('Open pipeline value',fmtReporting(pipeVal),{sub:`${open.length} open ${open.length===1?one:many}`,accent:'var(--gold)'})}
    ${anaKpi('Follow-ups due',overdue,{sub:avgDeal?`avg won deal ${fmtReporting(avgDeal)}`:'next action today or earlier',accent:overdue?'var(--rust)':'var(--bone)'})}
  </div>
  <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
    ${anaCard('Funnel',`Where this period's ${many} are now${inP.length?'':' (showing all — none added in this period)'}`,anaBars(funnel)+(closedN?`<div style="font-size:12px;color:var(--bone-mute);margin-top:4px;">${closedN} closed without a sale (lost, unreachable or not interested)</div>`:''))}
    ${anaCard('Sources',`Which channels bring ${many} that convert`,srcRows.length?`<table class="table"><thead><tr><th>Source</th><th style="text-align:right;">${cap(many)}</th><th style="text-align:right;">Won</th><th style="text-align:right;">Conv.</th></tr></thead><tbody>
      ${srcRows.map(([s,v])=>`<tr><td>${escapeHtml(s)}</td><td class="mono" style="text-align:right;">${v.n}</td><td class="mono" style="text-align:right;color:var(--jade);">${v.won}</td><td class="mono" style="text-align:right;">${v.n?Math.round(v.won/v.n*100):0}%</td></tr>`).join('')}
    </tbody></table>`:`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">Set a source on your ${many} to see which channels work.</div>`)}
  </div>
  ${anaCard('Revenue vs cost','Money in and out over the period',anaRevCostChart(txs,c.range,rep),'margin-bottom:16px;')}
  ${anaCard('Where the money goes','Costs by category this period',anaBars(anaByCategory(txs,'cost',rep,ANA_PAL),{empty:'No costs logged in this period.'}))}`;
}

// ---------- Product sales (e-commerce, wholesale, books) ----------
function anaProduct(c){
  const {pid,F,R,rep,txs,prev,txsAll}=c;
  const items=store.get(`profile:${pid}:inventory`,[]);
  const byId=Object.fromEntries(items.map(i=>[i.id,i]));
  const qtyOf=t=>{const m=/^Sold\s+(\d+)\s*×/.exec(t.description||'');if(m)return +m[1];const it=byId[t.sourceItemId];return it&&it.salePrice>0?Math.max(1,Math.round((t.amount||0)/it.salePrice)):1};
  const sales=arr=>arr.filter(t=>t.type==='revenue');
  const units=arr=>sales(arr).filter(t=>t.sourceItemId).reduce((a,t)=>a+qtyOf(t),0);
  const isCogs=t=>t.type==='cost'&&/^COGS/i.test(t.description||'');
  const cogs=arr=>arr.filter(isCogs).reduce((a,t)=>a+rep(t),0);
  const orders=sales(txs).length,pOrders=sales(prev).length;
  const u=units(txs),pu=units(prev);
  const gp=F.rev-cogs(txs),pgp=F.pRev-cogs(prev);
  const gm=F.rev>0?gp/F.rev*100:0,pgm=F.pRev>0?pgp/F.pRev*100:0;
  const aov=orders?F.rev/orders:0,paov=pOrders?F.pRev/pOrders:0;
  const stockVal=items.reduce((a,i)=>a+toReporting((i.qtyOnHand||0)*(i.costPrice||0),i.currency||c.cur),0);
  const opex=F.cost-cogs(txs)-txs.filter(t=>t.type==='cost'&&/^Restocked/i.test(t.description||'')).reduce((a,t)=>a+rep(t),0);

  // per-product in period
  const per={};
  sales(txs).filter(t=>t.sourceItemId&&byId[t.sourceItemId]).forEach(t=>{
    const it=byId[t.sourceItemId];const p=per[it.id]=per[it.id]||{it,units:0,rev:0};
    p.units+=qtyOf(t);p.rev+=rep(t);
  });
  const top=Object.values(per).sort((a,b)=>b.rev-a.rev).slice(0,8);
  const unlinked=sales(txs).filter(t=>!t.sourceItemId).reduce((a,t)=>a+rep(t),0);

  // channels
  const ch={};
  Object.values(per).forEach(p=>{const k=p.it.channel||'Unassigned';ch[k]=(ch[k]||0)+p.rev});
  const chTotal=Object.values(ch).reduce((a,b)=>a+b,0);
  const chRows=Object.entries(ch).sort((a,b)=>b[1]-a[1]).map(([k,v],i)=>({label:k,value:v,right:`${fmtReporting(v)} · ${chTotal?Math.round(v/chTotal*100):0}%`,color:ANA_PAL[i%ANA_PAL.length]}));

  // stock cover: units sold in the last 30 days per item
  const k30=anaRangeKeys(30);
  const sold30={};
  txsAll.filter(t=>t.type==='revenue'&&t.sourceItemId&&anaIn(t.date,k30.from,k30.to)).forEach(t=>{sold30[t.sourceItemId]=(sold30[t.sourceItemId]||0)+qtyOf(t)});
  const cover=items.map(i=>{const rate=(sold30[i.id]||0)/30;const days=rate>0?(i.qtyOnHand||0)/rate:Infinity;return {i,rate,days}})
    .filter(x=>x.rate>0||(x.i.qtyOnHand||0)<=0).sort((a,b)=>a.days-b.days).slice(0,6);
  const outN=items.filter(i=>(i.qtyOnHand||0)<=0).length;
  const lowN=items.filter(i=>(i.qtyOnHand||0)>0&&(i.qtyOnHand||0)<=3).length;
  const soldAll=items.reduce((a,i)=>a+(i.qtySold||0),0),onHand=items.reduce((a,i)=>a+Math.max(0,i.qtyOnHand||0),0);
  const sellThrough=soldAll+onHand>0?soldAll/(soldAll+onHand)*100:0;

  return `
  <div class="stagger grid-3" style="margin-bottom:16px;">
    ${anaKpi('Sales revenue',fmtReporting(F.rev),{delta:anaDelta(F.rev,F.pRev)})}
    ${anaKpi('Orders',orders,{delta:anaDelta(orders,pOrders),sub:`${u} units`})}
    ${anaKpi('Average order value',orders?fmtReporting(aov):'—',{delta:orders&&pOrders?anaDelta(aov,paov):null})}
    ${anaKpi('Gross margin',F.rev>0?gm.toFixed(0)+'%':'—',{delta:F.rev>0&&F.pRev>0?{txt:`${gm-pgm>=0?'+':''}${(gm-pgm).toFixed(0)} pts`,up:gm>=pgm}:null,sub:`${fmtReporting(gp)} after cost of goods`,accent:gm>=0?'var(--jade)':'var(--rust)'})}
    ${anaKpi('Stock on hand (at cost)',fmtReporting(stockVal),{sub:`${onHand} units · ${sellThrough.toFixed(0)}% sell-through`,accent:'var(--ember)'})}
    ${anaKpi('Stock alerts',outN+lowN,{sub:`${outN} out · ${lowN} low (3 or fewer)`,accent:outN+lowN?'var(--rust)':'var(--bone)'})}
  </div>
  <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
    ${anaCard('Best sellers','By revenue this period',top.length?`<table class="table"><thead><tr><th>Product</th><th style="text-align:right;">Units</th><th style="text-align:right;">Revenue</th><th style="text-align:right;" class="table-hide-mobile">Margin / unit</th></tr></thead><tbody>
      ${top.map(p=>{const m=toReporting((p.it.salePrice||0)-(p.it.costPrice||0),p.it.currency||c.cur);return `<tr><td>${escapeHtml(p.it.name)}</td><td class="mono" style="text-align:right;">${p.units}</td><td class="mono" style="text-align:right;">${fmtReporting(p.rev)}</td><td class="mono table-hide-mobile" style="text-align:right;color:${m>=0?'var(--jade)':'var(--rust)'};">${fmtReporting(m)}</td></tr>`}).join('')}
    </tbody></table>${unlinked>0?`<div style="font-size:12px;color:var(--bone-mute);margin-top:10px;">Plus ${fmtReporting(unlinked)} of sales logged in the Ledger without a product.</div>`:''}`:`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">No product sales in this period. Use “Sell” in Inventory so each sale is tied to a product.</div>`)}
    ${anaCard('Sales by channel','Share of product revenue',anaBars(chRows,{empty:'Set a channel on your products (Amazon, Shopify, direct…) to compare them.'}))}
  </div>
  <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
    ${anaCard('Revenue vs cost','Sales against everything spent',anaRevCostChart(txs,c.range,rep))}
    ${anaCard('Running out','Days of stock left at the last 30 days’ sales rate',cover.length?cover.map(x=>{const d=x.days;const col=d<=7?'var(--rust)':d<=30?'var(--gold)':'var(--jade)';return `<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px;">
      <div><div>${escapeHtml(x.i.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${x.i.qtyOnHand||0} left · ${(x.rate*30).toFixed(0)} sold in 30 days</div></div>
      <span class="mono" style="color:${col};font-weight:600;">${(x.i.qtyOnHand||0)<=0?'Out':d===Infinity?'—':Math.floor(d)+' days'}</span></div>`}).join(''):`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">No products have sold in the last 30 days.</div>`)}
  </div>
  ${anaCard('Costs outside stock','Running costs this period, excluding cost of goods and restocks',anaBars(anaByCategory(txs.filter(t=>t.type==='cost'&&!isCogs(t)&&!/^Restocked/i.test(t.description||'')),'cost',rep,ANA_PAL),{empty:'No other costs logged in this period.'})+(opex>0&&F.rev>0?`<div style="font-size:12px;color:var(--bone-mute);margin-top:6px;">Running costs are ${Math.round(opex/F.rev*100)}% of sales.</div>`:''))}`;
}

// ---------- Trading & investment ----------
function anaTrading(c){
  const {F,R,rep,txs,txsAll,meta}=c;
  const isInv=meta.type==='Investment';
  const daily={};
  txs.forEach(t=>{const k=t.date;daily[k]=(daily[k]||0)+(t.type==='revenue'?1:-1)*rep(t)});
  const days=Object.entries(daily).sort((a,b)=>a[0]<b[0]?-1:1);
  const wins=days.filter(d=>d[1]>0),losses=days.filter(d=>d[1]<0);
  const winRate=days.length?wins.length/days.length*100:0;
  const gW=wins.reduce((a,d)=>a+d[1],0),gL=-losses.reduce((a,d)=>a+d[1],0);
  const pf=gL>0?gW/gL:(gW>0?Infinity:0);
  const avgW=wins.length?gW/wins.length:0,avgL=losses.length?gL/losses.length:0;
  let cum=0,peak=0,dd=0;
  const pts=[{date:R.from,net:0}];
  days.forEach(([d,v])=>{cum+=v;peak=Math.max(peak,cum);dd=Math.max(dd,peak-cum);pts.push({date:d,net:cum})});
  const best=days.reduce((m,d)=>d[1]>(m?m[1]:-Infinity)?d:m,null),worst=days.reduce((m,d)=>d[1]<(m?m[1]:Infinity)?d:m,null);
  const dayBars=days.slice(-40).map(([d,v])=>({label:fmtShortDate(d),gain:Math.max(v,0),loss:Math.max(-v,0)}));
  // by instrument / strategy (category)
  const cat={};
  txs.forEach(t=>{const k=t.category||'Uncategorised';cat[k]=cat[k]||{net:0,n:0};cat[k].net+=(t.type==='revenue'?1:-1)*rep(t);cat[k].n++});
  const catRows=Object.entries(cat).sort((a,b)=>b[1].net-a[1].net);
  const fees=txs.filter(t=>t.type==='cost'&&/fee|commission|spread|swap|data|platform|subscription/i.test(`${t.category} ${t.description}`)).reduce((a,t)=>a+rep(t),0);

  return `
  <div class="stagger grid-3" style="margin-bottom:16px;">
    ${anaKpi(isInv?'Net return':'Net P&L',fmtReporting(F.net),{delta:anaDelta(F.net,F.pNet),accent:F.net>=0?'var(--jade)':'var(--rust)'})}
    ${anaKpi('Winning days',days.length?winRate.toFixed(0)+'%':'—',{sub:`${wins.length} up · ${losses.length} down`})}
    ${anaKpi('Profit factor',pf===Infinity?'∞':pf?pf.toFixed(2):'—',{sub:'gains ÷ losses',accent:pf>=1?'var(--jade)':'var(--rust)'})}
    ${anaKpi('Avg up day / down day',`${fmtReporting(avgW)} / ${fmtReporting(avgL)}`,{sub:avgL?`ratio ${(avgW/avgL).toFixed(2)}`:''})}
    ${anaKpi('Max drawdown',fmtReporting(dd),{sub:peak>0?`${Math.round(dd/peak*100)}% from peak`:'from period start',accent:dd>0?'var(--rust)':'var(--bone)'})}
    ${anaKpi('Fees & costs',fmtReporting(fees),{sub:F.rev>0?`${Math.round(fees/F.rev*100)}% of gains`:'commissions, spreads, data'})}
  </div>
  ${anaCard(isInv?'Cumulative return':'Equity curve','Running total of profit and loss across the period',pts.length>2?renderNetWorthChart(pts):`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">Log at least two days of results to draw the curve.</div>`,'margin-bottom:16px;')}
  <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
    ${anaCard('Daily results',`Green = up day, red = down day${days.length>40?' (last 40 days)':''}`,renderBarChart(dayBars))}
    ${anaCard('Best & worst',`Across ${days.length} active ${days.length===1?'day':'days'}`,days.length?`
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">Best day</span><span class="mono" style="color:var(--jade);">${fmtReporting(best[1])} · ${fmtShortDate(best[0])}</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">Worst day</span><span class="mono" style="color:var(--rust);">${fmtReporting(worst[1])} · ${fmtShortDate(worst[0])}</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px;"><span style="color:var(--bone-dim);">Gross gains / losses</span><span class="mono">${fmtReporting(gW)} / ${fmtReporting(gL)}</span></div>`:`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">No results logged in this period. Log gains as Revenue and losses or fees as Costs.</div>`)}
  </div>
  ${anaCard(isInv?'By holding':'By instrument or strategy','Uses the Ledger category, e.g. GBPUSD, NAS100 or Breakout',catRows.length?`<table class="table"><thead><tr><th>Category</th><th style="text-align:right;">Entries</th><th style="text-align:right;">Net</th></tr></thead><tbody>
    ${catRows.map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td class="mono" style="text-align:right;">${v.n}</td><td class="mono" style="text-align:right;color:${v.net>=0?'var(--jade)':'var(--rust)'};">${v.net>=0?'+':''}${fmtReporting(v.net)}</td></tr>`).join('')}
  </tbody></table>`:`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">Nothing logged in this period.</div>`)}`;
}

// ---------- Content / creator income streams ----------
function anaContent(c){
  const {F,rep,txs,txsAll,prev}=c;
  const streams=anaByCategory(txs,'revenue',rep,ANA_PAL);
  const pStreams={};prev.filter(t=>t.type==='revenue').forEach(t=>{const k=t.category||'Uncategorised';pStreams[k]=(pStreams[k]||0)+rep(t)});
  const top=streams[0];
  const share=top&&F.rev>0?top.value/F.rev*100:0;
  // 12-month trend
  const now=new Date();const months=[];
  for(let i=11;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);const k=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;months.push({k,label:d.toLocaleDateString('en-GB',{month:'short'}),value:0})}
  txsAll.filter(t=>t.type==='revenue').forEach(t=>{const m=months.find(x=>x.k===(t.date||'').slice(0,7));if(m)m.value+=rep(t)});
  const growing=streams.map(s=>({...s,prev:pStreams[s.label]||0}));
  return `
  <div class="stagger grid-3" style="margin-bottom:16px;">
    ${anaKpi('Income',fmtReporting(F.rev),{delta:anaDelta(F.rev,F.pRev)})}
    ${anaKpi('Income streams',streams.length,{sub:'Ledger categories with income'})}
    ${anaKpi('Biggest stream',top?escapeHtml(top.label):'—',{sub:top?`${share.toFixed(0)}% of income${share>60?' — concentrated':''}`:'',accent:share>60?'var(--gold)':'var(--bone)'})}
    ${anaKpi('Costs',fmtReporting(F.cost),{delta:anaDelta(F.cost,F.pCost),goodUp:false,sub:F.rev>0?`${Math.round(F.cost/F.rev*100)}% of income`:''})}
    ${anaKpi('Net',fmtReporting(F.net),{delta:anaDelta(F.net,F.pNet),accent:F.net>=0?'var(--jade)':'var(--rust)'})}
  </div>
  <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
    ${anaCard('Income by stream','Uses the Ledger category, e.g. Ads, Sponsorship, Affiliate',anaBars(streams,{empty:'No income logged in this period.'}))}
    ${anaCard('Stream momentum','This period against the one before',growing.length?growing.map(s=>{const d=anaDelta(s.value,s.prev);return `<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">${escapeHtml(s.label)}</span><span class="mono">${fmtReporting(s.value)} <span style="color:${d&&d.up?'var(--jade)':'var(--rust)'};margin-left:8px;">${d?d.txt:''}</span></span></div>`}).join(''):`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">Nothing to compare yet.</div>`)}
  </div>
  ${anaCard('Monthly income','Last 12 months, all streams',renderAreaChart(months,'#b57cff'),'margin-bottom:16px;')}
  ${anaCard('Revenue vs cost','Money in and out over the period',anaRevCostChart(txs,c.range,rep))}`;
}

// ---------- General / finance only ----------
function anaGeneral(c){
  const {F,rep,txs}=c;
  const margin=F.rev>0?F.net/F.rev*100:0;
  return `
  <div class="stagger grid-3" style="margin-bottom:16px;">
    ${anaKpi('Revenue',fmtReporting(F.rev),{delta:anaDelta(F.rev,F.pRev)})}
    ${anaKpi('Costs',fmtReporting(F.cost),{delta:anaDelta(F.cost,F.pCost),goodUp:false})}
    ${anaKpi('Net',fmtReporting(F.net),{delta:anaDelta(F.net,F.pNet),accent:F.net>=0?'var(--jade)':'var(--rust)'})}
    ${anaKpi('Net margin',F.rev>0?margin.toFixed(0)+'%':'—',{accent:margin>=0?'var(--jade)':'var(--rust)'})}
  </div>
  ${anaCard('Revenue vs cost','Money in and out over the period',anaRevCostChart(txs,c.range,rep),'margin-bottom:16px;')}
  <div class="stagger grid-2 grid-mobile-1">
    ${anaCard('Revenue by category','This period',anaBars(anaByCategory(txs,'revenue',rep,ANA_PAL),{empty:'No revenue logged in this period.'}))}
    ${anaCard('Costs by category','This period',anaBars(anaByCategory(txs,'cost',rep,['#ff5c7a','#ffb547','#b57cff','#7aa2ff','#c9a46a']),{empty:'No costs logged in this period.'}))}
  </div>`;
}

// ======================================================================
// DASHBOARD — financial position (balance sheet + P&L together)
// ======================================================================
function profileBalance(pid,cur){
  const items=store.get(`profile:${pid}:balance`,[]);
  const assets=items.filter(i=>i.kind==='asset'),liabs=items.filter(i=>i.kind==='liability');
  const a=assets.reduce((s,i)=>s+toReporting(i.amount||0,i.currency||cur),0);
  const l=liabs.reduce((s,i)=>s+toReporting(i.amount||0,i.currency||cur),0);
  return {items,assets,liabs,a,l,net:a-l};
}
function renderFinancialPosition(d){
  const {pid,cur,revenue,costs,profit,hasContacts,hasInventory,totalSold,cpl,dispCur,stockValue,txs}=d;
  const B=profileBalance(pid,cur);
  const fy=getFiscalYear();
  const fyTx=txs.filter(t=>inFiscalYear(t.date,fy));
  const fyRev=fyTx.filter(t=>t.type==='revenue').reduce((a,t)=>a+toReporting(t.amount||0,t.currency||cur),0);
  const fyCost=fyTx.filter(t=>t.type==='cost').reduce((a,t)=>a+toReporting(t.amount||0,t.currency||cur),0);
  const cash=B.assets.filter(i=>['Cash','Bank'].includes(i.category)).reduce((s,i)=>s+toReporting(i.amount||0,i.currency||cur),0);
  const hasCat=c=>B.assets.some(i=>i.category===c);
  const unpaid=txs.filter(t=>t.type==='revenue'&&t.paid===false);
  const unpaidVal=unpaid.reduce((a,t)=>a+toReporting(t.amount||0,t.currency||cur),0);
  const todayKey=today();
  const soon=new Date();soon.setDate(soon.getDate()+30);const soonKey=anaDayKey(soon);
  const dueSoon=B.liabs.filter(i=>i.dueDate&&i.dueDate<=soonKey).sort((a,b)=>a.dueDate<b.dueDate?-1:1);
  const dueSoonVal=dueSoon.reduce((s,i)=>s+toReporting(i.amount||0,i.currency||cur),0);
  const row=(label,val,col='var(--bone)',muted=false)=>`<div style="display:flex;justify-content:space-between;padding:7px 0;font-size:13.5px;"><span style="color:${muted?'var(--bone-mute)':'var(--bone-dim)'};">${label}</span><span class="mono" style="color:${col};font-weight:500;">${val}</span></div>`;
  const catSum=(list)=>{const m={};list.forEach(i=>{const k=i.category||'Other';m[k]=(m[k]||0)+toReporting(i.amount||0,i.currency||cur)});return Object.entries(m).sort((a,b)=>b[1]-a[1])};
  const offBook=[];
  if(hasInventory&&stockValue>0&&!hasCat('Inventory'))offBook.push({label:'Stock on hand, at cost (from Inventory)',val:stockValue,cat:'Inventory',name:'Stock on hand (at cost)'});
  if(unpaidVal>0&&!hasCat('Receivables'))offBook.push({label:`Unpaid invoices (${unpaid.length}, from Ledger)`,val:unpaidVal,cat:'Receivables',name:'Unpaid invoices'});

  return `<div class="card" style="padding:22px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <div class="serif" style="font-size:18px;font-weight:500;">Financial position</div>
      <button class="btn btn-ghost btn-sm" onclick="navigate('balance','${pid}')">Balance sheet ${icon('chevron',13)}</button>
    </div>
    <div style="font-size:12px;color:var(--bone-mute);margin-bottom:14px;">What the business owns and owes, plus how it's trading</div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
      <div style="padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--ink-3);">
        <div class="label">Net position</div>
        <div class="serif mono" style="font-size:24px;margin-top:6px;color:${B.net>=0?'var(--ember)':'var(--rust)'};">${fmtReporting(B.net)}</div>
        <div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">assets − liabilities</div>
      </div>
      <div style="padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--ink-3);">
        <div class="label">Cash & bank</div>
        <div class="serif mono" style="font-size:24px;margin-top:6px;">${fmtReporting(cash)}</div>
        <div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">${dueSoonVal>0?`<span style="color:${dueSoonVal>cash?'var(--rust)':'var(--gold)'};">${fmtReporting(dueSoonVal)} due in 30 days</span>`:'nothing due in 30 days'}</div>
      </div>
    </div>

    ${B.items.length===0?`<div style="font-size:13px;color:var(--bone-dim);padding:10px 12px;border:1px dashed var(--line-2);border-radius:10px;margin-bottom:12px;line-height:1.5;">No assets or liabilities recorded for this business yet, so the net position is £0. <a href="#" onclick="navigate('balance','${pid}');return false;" style="color:var(--ember);">Add bank balances, equipment, loans…</a></div>`:`
    ${row('Assets',fmtReporting(B.a),'var(--jade)')}
    ${catSum(B.assets).map(([k,v])=>row('&nbsp;&nbsp;'+escapeHtml(k),fmtReporting(v),'var(--bone-dim)',true)).join('')}
    ${row('Liabilities','−'+fmtReporting(B.l),'var(--rust)')}
    ${catSum(B.liabs).map(([k,v])=>row('&nbsp;&nbsp;'+escapeHtml(k),fmtReporting(v),'var(--bone-dim)',true)).join('')}`}

    ${offBook.length?`<div style="margin:10px 0 4px;padding:12px;border:1px solid rgba(255,181,71,0.35);border-radius:10px;background:rgba(255,181,71,0.06);">
      <div style="font-size:12.5px;color:var(--gold);margin-bottom:6px;">Not on the balance sheet yet</div>
      ${offBook.map((o,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:5px 0;font-size:13px;">
        <span style="color:var(--bone-dim);">${o.label}</span>
        <span style="display:flex;align-items:center;gap:10px;"><span class="mono">${fmtReporting(o.val)}</span>
        <button class="btn btn-sm" onclick="addOffBookAsset('${pid}','${o.cat}','${escAttr(o.name)}',${o.val.toFixed(2)})">Add</button></span>
      </div>`).join('')}
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">Including these, the net position would be ${fmtReporting(B.net+offBook.reduce((a,o)=>a+o.val,0))}.</div>
    </div>`:''}

    <div style="height:1px;background:var(--line);margin:14px 0 8px;"></div>
    <div class="label" style="margin-bottom:4px;">Trading — ${escapeHtml(fy.label)} so far</div>
    ${row('Revenue',fmtReporting(fyRev))}
    ${row('Costs','−'+fmtReporting(fyCost),'var(--rust)')}
    ${row('Net profit',fmtReporting(fyRev-fyCost),fyRev-fyCost>=0?'var(--jade)':'var(--rust)')}
    ${(()=>{const mv=getMoves().filter(m=>(m.from===pid||m.to===pid)&&inFiscalYear(m.date,fy));const o=mv.filter(m=>m.from===pid&&m.to==='personal').reduce((a,m)=>a+toReporting(m.amount,m.currency),0);const i=mv.filter(m=>m.to===pid&&m.from==='personal').reduce((a,m)=>a+toReporting(m.toAmount,m.toCurrency),0);return (o||i)?row('Paid to you',fmtReporting(o),'var(--gold)')+(i?row('Put in by you',fmtReporting(i),'var(--jade)'):''):''})()}
    <div style="height:1px;background:var(--line);margin:8px 0;"></div>
    ${row('All-time net profit',fmtReporting(profit),profit>=0?'var(--jade)':'var(--rust)',true)}
    ${hasContacts?row('Cost per contact (all-time)',`${dispCur}${cpl}`,'var(--bone-mute)',true):''}
    ${hasInventory&&totalSold>0?row('Avg revenue per unit sold',`${dispCur}${(revenue/totalSold).toFixed(2)}`,'var(--bone-mute)',true):''}
  </div>`;
}
function addOffBookAsset(pid,category,name,amount){
  const fx=getFx();
  const items=store.get(`profile:${pid}:balance`,[]);
  items.push({id:uid(),kind:'asset',name,category,currency:fx.reporting,amount:Math.round(amount*100)/100,notes:`Added from dashboard on ${today()}. Update it on the Balance sheet when it changes.`,createdAt:new Date().toISOString()});
  store.set(`profile:${pid}:balance`,items);
  showToast(`Added “${name}” to the balance sheet`,null,null,3000);
  render();
}

// ======================================================================
// MONEY ENGINE — cash accounts, ledger cash effects, moving money
// ======================================================================
Object.assign(ICONS,{
  transfer:'<path d="M4 8h14"/><path d="M14 4l4 4-4 4"/><path d="M20 16H6"/><path d="M10 12l-4 4 4 4"/>',
  flag:'<path d="M4 22V4"/><path d="M4 4h13l-3 4 3 4H4"/>',
  archive:'<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v12h14V8"/><path d="M10 12h4"/>',
  flow:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'
});

const CASH_CATS=['Cash','Bank'];
const round2=n=>Math.round((+n||0)*100)/100;
function fxConvert(amount,from,to){
  if(!amount||from===to)return amount||0;
  const r=getFx().rates;
  return amount/(r[from]||1)*(r[to]||1);
}
function cashAccounts(scope){
  return store.get(balanceKey(scope),[]).filter(b=>b.kind==='asset'&&CASH_CATS.includes(b.category));
}
function scopeMeta(scope){return scope==='personal'?null:store.get(`profile:${scope}:meta`)}
function scopeName(scope){
  if(scope==='personal')return 'You (personal)';
  const m=scopeMeta(scope);return m?m.name:'Deleted business';
}
function scopeColor(scope){return scope==='personal'?'var(--violet)':(scopeMeta(scope)?.color||'var(--bone-mute)')}
function scopeCurrency(scope){return scope==='personal'?getFx().reporting:(scopeMeta(scope)?.currency||'£')}
function adjustBalanceItem(scope,itemId,delta){
  const bal=store.get(balanceKey(scope),[]);
  const it=bal.find(b=>b.id===itemId);
  if(!it)return null;
  it.amount=round2((+it.amount||0)+delta);
  store.set(balanceKey(scope),bal);
  return it;
}
function upsertLinkedItem(scope,linkKey,def){
  const bal=store.get(balanceKey(scope),[]);
  let it=bal.find(b=>b.linkKey===linkKey);
  if(!it){
    it={id:uid(),kind:def.kind,category:def.category,name:def.name,currency:def.currency,amount:0,linkKey,notes:'Kept up to date by Move money.',createdAt:new Date().toISOString()};
    bal.push(it);store.set(balanceKey(scope),bal);
  }
  return it.id;
}
function pickAccount(scope,currency,preferredId){
  const accts=cashAccounts(scope);
  if(preferredId){const a=accts.find(x=>x.id===preferredId);if(a)return a}
  const m=accts.filter(a=>(a.currency||'£')===currency).sort((a,b)=>(b.amount||0)-(a.amount||0));
  return m[0]||null;
}
function accountOptions(scope,selected,noneLabel){
  const accts=cashAccounts(scope);
  return accts.map(a=>`<option value="${a.id}" ${a.id===selected?'selected':''}>${escapeHtml(a.name)} · ${a.currency||'£'}${Math.round(a.amount||0).toLocaleString('en-GB')}</option>`).join('')
    +(noneLabel?`<option value="" ${!selected?'selected':''}>${noneLabel}</option>`:'');
}

// ---- cash effects for bills & ledger (overrides) ----
function applyCashDeduction(scope,item,amount,currency){
  if(!amount||amount<=0)return null;
  const a=pickAccount(scope,currency,item&&item.accountId);
  if(!a)return null;
  const amt=round2(fxConvert(amount,currency,a.currency||'£'));
  adjustBalanceItem(scope,a.id,-amt);
  return {assetId:a.id,assetName:a.name,amount:amt,currency:a.currency||'£'};
}
function processTxCashDeduction(profileId,tx,prevTx){
  if(prevTx&&prevTx.cashAssetId&&prevTx.deductedAmount){
    revertCashDeduction(profileId,prevTx.cashAssetId,prevTx.deductedAmount);
  }
  tx.cashAssetId=null;tx.deductedAmount=null;
  const isCost=tx.type==='cost';
  const wants=isCost?tx.deductFromCash!==false:(tx.type==='revenue'&&tx.deductFromCash===true&&tx.paid!==false);
  if(!wants||!(tx.amount>0))return null;
  const a=pickAccount(profileId,tx.currency||'£',tx.accountId);
  if(!a)return null;
  const amt=round2(fxConvert(tx.amount,tx.currency||'£',a.currency||'£'));
  const delta=isCost?-amt:amt;
  adjustBalanceItem(profileId,a.id,delta);
  tx.cashAssetId=a.id;tx.accountId=a.id;tx.deductedAmount=-delta;
  return {assetId:a.id,assetName:a.name,amount:amt,currency:a.currency||'£',direction:isCost?'out':'in'};
}
function markTxPaid(id){
  const pid=state.profileId;
  const txs=store.get(`profile:${pid}:transactions`,[]);
  const tx=txs.find(x=>x.id===id);
  if(!tx)return;
  const prevDue=tx.dueDate;
  tx.paid=true;tx.dueDate=null;
  let res=null;
  if(tx.deductFromCash!==false&&!tx.cashAssetId){tx.deductFromCash=true;res=processTxCashDeduction(pid,tx,null)}
  store.set(`profile:${pid}:transactions`,txs);
  showToast(`Marked “${tx.description}” paid${res?` · +${res.currency}${Math.round(res.amount).toLocaleString('en-GB')} to ${res.assetName}`:''}`,'Undo',()=>{
    const cur=store.get(`profile:${pid}:transactions`,[]);
    const t=cur.find(x=>x.id===id);
    if(!t)return;
    if(t.cashAssetId&&t.deductedAmount)revertCashDeduction(pid,t.cashAssetId,t.deductedAmount);
    t.paid=false;t.dueDate=prevDue;t.cashAssetId=null;t.deductedAmount=null;
    store.set(`profile:${pid}:transactions`,cur);render();
  },6000);
  render();
}

// ---- categories per business type ----
const TYPE_CATEGORIES={
  'Lead Gen':{revenue:['Introducer fees','Commission','Retainers'],cost:['Advertising','Lead purchase','Software','Compliance','Contractors']},
  'Service':{revenue:['Client work','Retainers','Call-out fees'],cost:['Materials','Subcontractors','Fuel & travel','Equipment','Insurance']},
  'Consulting':{revenue:['Fees','Retainers','Workshops'],cost:['Travel','Software','Subcontractors','Insurance','Training']},
  'E-commerce':{revenue:['Product sales','Shipping charged'],cost:['Stock','Shipping','Platform fees','Advertising','Packaging','Returns']},
  'Wholesale':{revenue:['Wholesale orders','Shipping charged'],cost:['Stock','Freight','Warehousing','Platform fees']},
  'Author/Creator':{revenue:['Royalties','Direct sales','Speaking','Licensing'],cost:['Printing','Editing','Design','Advertising','Distribution']},
  'SaaS':{revenue:['Subscriptions','Setup fees','Services'],cost:['Hosting','Software','Payment fees','Advertising','Contractors']},
  'Trading':{revenue:['Trading profit','Payouts'],cost:['Trading loss','Challenge fees','Platform fees','Data','Commissions']},
  'Investment':{revenue:['Dividends','Interest','Gains'],cost:['Losses','Platform fees','Advice']},
  'Content':{revenue:['Ads','Sponsorship','Affiliate','Memberships','Merch'],cost:['Equipment','Software','Editors','Travel','Advertising']}
};
Object.assign(CATEGORY_COLORS,{'Introducer fees':'#3fb4ff',Commission:'#3df5a8',Retainers:'#7aa2ff',Advertising:'#ff5c7a',Software:'#b57cff',Stock:'#c9a46a',Shipping:'#5ef2e0','Platform fees':'#ffb547',Royalties:'#3df5a8',Subscriptions:'#3fb4ff',Hosting:'#b57cff',Ads:'#3fb4ff',Sponsorship:'#b57cff',Affiliate:'#3df5a8','Trading profit':'#3df5a8','Trading loss':'#ff5c7a','Challenge fees':'#ffb547'});
function getTxCategories(meta,type){
  const base=type==='revenue'?REVENUE_CATEGORIES:COST_CATEGORIES;
  const t=(TYPE_CATEGORIES[meta?.type]||{})[type]||[];
  const custom=(meta?.categories||{})[type]||[];
  const seen=new Set();const out=[];
  [...t,...custom,...base].forEach(c=>{if(!seen.has(c)){seen.add(c);out.push(c)}});
  return out;
}
function addProfileCategory(pid,type,name){
  const meta=store.get(`profile:${pid}:meta`);if(!meta||!name)return;
  meta.categories=meta.categories||{revenue:[],cost:[]};
  meta.categories[type]=meta.categories[type]||[];
  if(!meta.categories[type].includes(name))meta.categories[type].push(name);
  store.set(`profile:${pid}:meta`,meta);
}

// ---- ledger entry modal (override) ----
function openTxModal(id){
  const pid=state.profileId;
  const txs=store.get(`profile:${pid}:transactions`,[]);
  const meta=store.get(`profile:${pid}:meta`);
  const defaultCur=meta?.currency||'£';
  const t=id?txs.find(x=>x.id===id):{date:today(),type:'revenue',description:'',category:'',amount:'',currency:defaultCur,notes:''};
  if(!t)return;
  if(!t.currency)t.currency=defaultCur;
  const cats=getTxCategories(meta,t.type);
  if(!t.category)t.category=cats[0];
  const accts=cashAccounts(pid);
  let selAcct='';
  if(id)selAcct=t.cashAssetId||'';
  else{const a=pickAccount(pid,t.currency,null)||accts[0];selAcct=a?a.id:''}
  window._txCats=meta;
  const catOpts=(type,selected)=>getTxCategories(meta,type).map(c=>`<option value="${escAttr(c)}" ${c===selected?'selected':''}>${escapeHtml(c)}</option>`).join('')+`<option value="__new__">+ New category…</option>`;
  const linked=t.transferId?`<div style="font-size:12px;color:var(--gold);padding:8px 12px;border:1px solid rgba(255,181,71,.3);border-radius:9px;">This entry was created by Move money. Edit the move instead to keep both sides in step.</div>`:'';

  showModal(id?'Edit entry':'New entry',`<div style="display:flex;flex-direction:column;gap:14px;">
    ${linked}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:4px;border:1px solid var(--line);border-radius:11px;background:var(--ink-3);" id="t-type-seg">
      <button type="button" class="btn btn-sm ${t.type==='revenue'?'btn-primary':'btn-ghost'}" data-type="revenue" onclick="setTxType('revenue')">${icon('trendUp',13)} Money in</button>
      <button type="button" class="btn btn-sm ${t.type==='cost'?'btn-primary':'btn-ghost'}" data-type="cost" onclick="setTxType('cost')">${icon('trendDown',13)} Money out</button>
    </div>
    <input type="hidden" id="t-type" value="${t.type}">
    <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Amount *</div>
        <div style="display:flex;gap:6px;"><select class="field" id="t-cur" style="width:92px;">${CURRENCIES.map(c=>`<option value="${escAttr(c.symbol)}" ${c.symbol===t.currency?'selected':''}>${escapeHtml(c.symbol)} ${c.code}</option>`).join('')}</select>
        <input class="field mono" id="t-amount" type="number" step="0.01" min="0" placeholder="0.00" value="${t.amount||''}"></div></div>
      <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="t-date" type="date" value="${t.date}"></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Description *</div><input class="field" id="t-desc" placeholder="e.g. Client invoice #104 / Meta ads — April" value="${escAttr(t.description)}"></div>
    <div><div class="label" style="margin-bottom:6px;">Category</div>
      <select class="field" id="t-cat" onchange="if(this.value==='__new__'){document.getElementById('t-cat-new-row').style.display='block';document.getElementById('t-cat-new').focus()}else document.getElementById('t-cat-new-row').style.display='none'">${catOpts(t.type,t.category)}</select>
      <div id="t-cat-new-row" style="display:none;margin-top:8px;"><input class="field" id="t-cat-new" placeholder="New category name" style="margin-bottom:10px;">${colorPicker('t-cat-color',SWATCHES[(Object.keys(getCatColors()).length*5+2)%SWATCHES.length][1],{compact:true})}</div>
    </div>
    <div id="t-revenue-row" style="display:${t.type==='revenue'?'block':'none'};">
      <div class="label" style="margin-bottom:6px;">Has it been paid?</div>
      <div style="display:flex;gap:8px;">
        <button type="button" id="t-paid-yes" class="btn btn-sm ${t.paid!==false?'btn-primary':''}" style="flex:1;" onclick="setTxPaid(true)">${icon('check',12)} Paid</button>
        <button type="button" id="t-paid-no" class="btn btn-sm ${t.paid===false?'btn-primary':''}" style="flex:1;" onclick="setTxPaid(false)">${icon('clock',12)} Invoice sent, not paid yet</button>
      </div>
      <input type="hidden" id="t-paid" value="${t.paid===false?'0':'1'}">
      <div id="t-due-row" style="display:${t.paid===false?'block':'none'};margin-top:10px;">
        <div class="label" style="margin-bottom:6px;">Due date</div>
        <input class="field" id="t-due" type="date" value="${t.dueDate||''}">
      </div>
    </div>
    <div>
      <div class="label" style="margin-bottom:6px;" id="t-acct-label">${t.type==='revenue'?'Paid into':'Paid from'}</div>
      ${accts.length?`<select class="field" id="t-acct">${accountOptions(pid,selAcct,'Don’t update any account')}</select>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:5px;" id="t-acct-hint">${t.type==='revenue'&&t.paid===false?'The balance updates when you mark it paid.':'Keeps the balance on this business’s Balance sheet up to date.'}</div>`
      :`<div style="font-size:12.5px;color:var(--bone-dim);padding:10px 12px;border:1px dashed var(--line-2);border-radius:9px;">Add a bank or cash account on the <a href="#" onclick="closeModal();navigate('balance','${pid}');return false;" style="color:var(--ember);">Balance sheet</a> and Atlas will keep its balance up to date as you log money in and out.</div><input type="hidden" id="t-acct" value="">`}
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="t-notes" rows="2" placeholder="Optional">${escapeHtml(t.notes||'')}</textarea></div>
    <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="t-recurring" ${t.recurring?'checked':''} style="accent-color:var(--ember);">
      <span>Repeats every month</span>
      <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">Atlas adds next month’s automatically</span>
    </label>
  </div>`,()=>{
    const desc=document.getElementById('t-desc').value.trim();
    const amount=parseFloat(document.getElementById('t-amount').value);
    if(!desc){alert('Add a short description.');return false}
    if(!amount||amount<=0){alert('Enter an amount greater than zero.');return false}
    const txType=document.getElementById('t-type').value;
    let category=document.getElementById('t-cat').value;
    if(category==='__new__'){
      category=document.getElementById('t-cat-new').value.trim();
      if(!category){alert('Name the new category.');return false}
      addProfileCategory(pid,txType,category);setCatColor(category,document.getElementById('t-cat-color').value);
    }
    const isPaid=txType==='revenue'?document.getElementById('t-paid').value!=='0':true;
    const acct=document.getElementById('t-acct').value;
    const upd={
      ...t,
      id:t.id||uid(),
      date:document.getElementById('t-date').value||today(),
      type:txType,description:desc,category,
      currency:document.getElementById('t-cur').value,
      amount:round2(amount),
      notes:document.getElementById('t-notes').value,
      recurring:document.getElementById('t-recurring').checked?'monthly':null,
      paid:txType==='revenue'?isPaid:true,
      dueDate:txType==='revenue'&&!isPaid?(document.getElementById('t-due').value||null):null,
      deductFromCash:!!acct,
      accountId:acct||null,
      createdAt:t.createdAt||new Date().toISOString()
    };
    const result=processTxCashDeduction(pid,upd,id?t:null);
    const cur=store.get(`profile:${pid}:transactions`,[]);
    const next=id?cur.map(x=>x.id===id?upd:x):[upd,...cur];
    store.set(`profile:${pid}:transactions`,next);
    if(result)showToast(`${result.direction==='in'?'+':'−'}${result.currency}${Math.round(result.amount).toLocaleString('en-GB')} ${result.direction==='in'?'to':'from'} ${result.assetName}`,null,null,3000);
    return true;
  });
}
function setTxType(type){
  document.getElementById('t-type').value=type;
  document.querySelectorAll('#t-type-seg button').forEach(b=>{const on=b.dataset.type===type;b.classList.toggle('btn-primary',on);b.classList.toggle('btn-ghost',!on)});
  onTxTypeChange();
}
function setTxPaid(paid){
  document.getElementById('t-paid').value=paid?'1':'0';
  document.getElementById('t-paid-yes').classList.toggle('btn-primary',paid);
  document.getElementById('t-paid-no').classList.toggle('btn-primary',!paid);
  document.getElementById('t-due-row').style.display=paid?'none':'block';
  const h=document.getElementById('t-acct-hint');
  if(h)h.textContent=paid?'Keeps the balance on this business’s Balance sheet up to date.':'The balance updates when you mark it paid.';
}
function onTxTypeChange(){
  const type=document.getElementById('t-type').value;
  const meta=store.get(`profile:${state.profileId}:meta`);
  const cat=document.getElementById('t-cat');
  if(cat)cat.innerHTML=getTxCategories(meta,type).map(c=>`<option value="${escAttr(c)}">${escapeHtml(c)}</option>`).join('')+`<option value="__new__">+ New category…</option>`;
  const nr=document.getElementById('t-cat-new-row');if(nr)nr.style.display='none';
  const revRow=document.getElementById('t-revenue-row');
  if(revRow)revRow.style.display=type==='revenue'?'block':'none';
  const lbl=document.getElementById('t-acct-label');
  if(lbl)lbl.textContent=type==='revenue'?'Paid into':'Paid from';
  if(type==='cost')setTxPaid(true);
}

// ---- recurring engine (override): new instances get their own cash effect ----
function processRecurring(){
  const now=new Date();
  let total=0;
  const spawn=(list,template,seriesKey,onNew)=>{
    const instances=list.filter(x=>x.seriesId===seriesKey||x.id===seriesKey).sort((a,b)=>new Date(b.date)-new Date(a.date));
    let next=new Date(instances[0].date);next.setMonth(next.getMonth()+1);
    let made=0;
    while(next<=now){
      const inst={...template,id:uid(),date:next.toISOString().slice(0,10),seriesId:seriesKey,recurring:null,cashAssetId:null,deductedAmount:null,createdAt:new Date().toISOString()};
      if(inst.paid===false){inst.dueDate=inst.date}
      onNew(inst);
      list.unshift(inst);made++;
      next=new Date(next);next.setMonth(next.getMonth()+1);
    }
    if(made){
      list.forEach(x=>{if((x.seriesId===seriesKey||x.id===seriesKey)&&x!==list[0])x.recurring=null});
      list[0].recurring='monthly';
    }
    return made;
  };
  const bills=store.get('bills:log',[]);
  let billsMade=0;
  bills.filter(b=>b.recurring==='monthly').forEach(tpl=>{
    billsMade+=spawn(bills,tpl,tpl.seriesId||tpl.id,inst=>{if(inst.deductFromCash)processBillCashDeduction(inst,null)});
  });
  if(billsMade)store.set('bills:log',bills);
  total+=billsMade;
  store.get('profiles:list',[]).forEach(p=>{
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    let made=0;
    txs.filter(t=>t.recurring==='monthly').forEach(tpl=>{
      made+=spawn(txs,tpl,tpl.seriesId||tpl.id,inst=>{processTxCashDeduction(p.id,inst,null)});
    });
    if(made){store.set(`profile:${p.id}:transactions`,txs);total+=made}
  });
  if(total>0)setTimeout(()=>showToast(`Added ${total} repeating ${total===1?'entry':'entries'} for this month.`,null,null,4000),300);
}

// ======================================================================
// MOVE MONEY
// ======================================================================
const MOVE_KINDS={
  drawing:{label:'Owner’s drawing',dir:'b2p',desc:'Taking profit out for yourself (sole trader or partnership). Not a business cost.',pay:true},
  dividend:{label:'Dividend',dir:'b2p',desc:'Paying yourself from a limited company’s profits. Not a business cost.',pay:true},
  salary:{label:'Salary',dir:'b2p',desc:'Wages paid to you. Also logged as a Salaries cost in the business ledger.',pay:true},
  refund:{label:'Expense refund',dir:'b2p',desc:'The business paying you back for business costs you paid personally.'},
  director_loan:{label:'Borrow from the business',dir:'b2p',desc:'A loan to you (director’s loan). Tracked as money you owe the business.'},
  owner_loan_repay:{label:'Business repays your loan',dir:'b2p',desc:'The business pays back money you lent it.'},
  capital:{label:'Put money in',dir:'p2b',desc:'You invest your own money into the business (capital).'},
  owner_loan:{label:'Lend to the business',dir:'p2b',desc:'You lend money the business will pay back. Tracked as money it owes you.'},
  director_loan_repay:{label:'Repay what you borrowed',dir:'p2b',desc:'You pay back a director’s loan.'},
  transfer:{label:'Transfer',dir:'any',desc:'Move money between your own accounts or between businesses.'}
};
const PAY_KINDS=['drawing','dividend','salary'];
function moveDirection(from,to){
  if(from!=='personal'&&to==='personal')return 'b2p';
  if(from==='personal'&&to!=='personal')return 'p2b';
  return 'any';
}
function kindsFor(from,to){
  const d=moveDirection(from,to);
  return Object.entries(MOVE_KINDS).filter(([k,v])=>d==='any'?v.dir==='any':v.dir===d);
}
function getMoves(){return store.get('transfers:log',[])}

function openMoveModal(id,preset){
  const profiles=store.get('profiles:list',[]).filter(p=>!p.archived);
  const existing=id?getMoves().find(m=>m.id===id):null;
  if(id&&!existing)return;
  const defFrom=existing?.from||preset?.from||(state.profileId||profiles[0]?.id||'personal');
  const defTo=existing?.to||preset?.to||(defFrom==='personal'?(profiles[0]?.id||'personal'):'personal');
  window._mv={
    id:id||null,
    from:defFrom,to:defTo,
    kind:existing?.kind||preset?.kind||null,
    fromAcct:existing?.fromAcct??null,toAcct:existing?.toAcct??null,
    amount:existing?.amount||'',toAmount:existing?.toAmount||'',toTouched:!!existing&&existing.currency!==existing.toCurrency,
    date:existing?.date||today(),notes:existing?.notes||''
  };
  showModal(id?'Edit money move':'Move money',`<div id="mv-body"></div>`,saveMove,id?'Save changes':'Move money');
  renderMoveForm();
}
function mvRead(){
  const m=window._mv;const g=i=>document.getElementById(i);
  if(!g('mv-from'))return m;
  m.from=g('mv-from').value;m.to=g('mv-to').value;
  m.kind=g('mv-kind')?.value||m.kind;
  m.fromAcct=g('mv-from-acct')?.value??m.fromAcct;
  m.toAcct=g('mv-to-acct')?.value??m.toAcct;
  m.amount=g('mv-amount').value;m.date=g('mv-date').value;m.notes=g('mv-notes').value;
  if(g('mv-to-amount'))m.toAmount=g('mv-to-amount').value;
  return m;
}
function mvCurrencyOf(scope,acctId){
  const a=acctId?cashAccounts(scope).find(x=>x.id===acctId):null;
  return a?(a.currency||'£'):scopeCurrency(scope);
}
function renderMoveForm(changed){
  const m=window._mv;
  const profiles=store.get('profiles:list',[]).filter(p=>!p.archived||p.id===m.from||p.id===m.to);
  const scopes=[...profiles.map(p=>({id:p.id,name:p.name,color:p.color})),{id:'personal',name:'You (personal)',color:'var(--violet)'}];
  const kinds=kindsFor(m.from,m.to);
  if(!kinds.find(([k])=>k===m.kind))m.kind=kinds[0][0];
  const fa=cashAccounts(m.from),ta=cashAccounts(m.to);
  if(m.fromAcct===null||(m.fromAcct&&!fa.find(a=>a.id===m.fromAcct)))m.fromAcct=fa[0]?.id||'';
  if(m.toAcct===null||(m.toAcct&&!ta.find(a=>a.id===m.toAcct)))m.toAcct=(pickAccount(m.to,mvCurrencyOf(m.from,m.fromAcct),null)||ta[0])?.id||'';
  const fromCur=mvCurrencyOf(m.from,m.fromAcct),toCur=mvCurrencyOf(m.to,m.toAcct);
  const diffCur=fromCur!==toCur;
  if(diffCur&&!m.toTouched&&m.amount)m.toAmount=round2(fxConvert(+m.amount,fromCur,toCur));
  const k=MOVE_KINDS[m.kind];
  const sel=(id,opts,val,extra='')=>`<select class="field" id="${id}" onchange="mvRead();${extra}renderMoveForm()">${opts.map(o=>`<option value="${escAttr(o.id)}" ${o.id===val?'selected':''}>${escapeHtml(o.name)}</option>`).join('')}</select>`;
  const acctSel=(id,scope,accts,val)=>accts.length?`<select class="field" id="${id}" onchange="mvRead();window._mv.toTouched=false;renderMoveForm()">${accountOptions(scope,val,'Not from an account I track')}</select>`
    :`<div style="font-size:12px;color:var(--bone-mute);padding:9px 11px;border:1px dashed var(--line-2);border-radius:9px;">No bank or cash account yet — the move is recorded without changing a balance. <a href="#" onclick="mvRead();mvAddAccount('${scope}');return false;" style="color:var(--ember);">Add one</a></div><input type="hidden" id="${id}" value="">`;
  const salaryWarn=m.kind==='salary'?`<div style="font-size:12px;color:var(--bone-dim);">A matching <b>Salaries</b> cost is added to ${escapeHtml(scopeName(m.from))}’s ledger, so it reduces that business’s profit.</div>`:'';
  document.getElementById('mv-body').innerHTML=`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:end;">
      <div><div class="label" style="margin-bottom:6px;">From</div>${sel('mv-from',scopes,m.from,'window._mv.fromAcct=null;window._mv.toTouched=false;')}</div>
      <button type="button" class="btn btn-ghost btn-sm" title="Swap" style="margin-bottom:4px;" onclick="mvRead();const x=window._mv.from;window._mv.from=window._mv.to;window._mv.to=x;window._mv.fromAcct=null;window._mv.toAcct=null;window._mv.kind=null;renderMoveForm()">${icon('transfer',15)}</button>
      <div><div class="label" style="margin-bottom:6px;">To</div>${sel('mv-to',scopes,m.to,'window._mv.toAcct=null;window._mv.toTouched=false;')}</div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">What is it?</div>
      <select class="field" id="mv-kind" onchange="mvRead();renderMoveForm()">${kinds.map(([kk,v])=>`<option value="${kk}" ${kk===m.kind?'selected':''}>${escapeHtml(v.label)}</option>`).join('')}</select>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:5px;line-height:1.45;">${escapeHtml(k.desc)}</div></div>
    ${salaryWarn}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Out of</div>${acctSel('mv-from-acct',m.from,fa,m.fromAcct)}</div>
      <div><div class="label" style="margin-bottom:6px;">Into</div>${acctSel('mv-to-acct',m.to,ta,m.toAcct)}</div>
    </div>
    <div style="display:grid;grid-template-columns:${diffCur?'1fr 1fr 1fr':'1fr 1fr'};gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Amount (${escapeHtml(fromCur)})</div><input class="field mono" id="mv-amount" type="number" step="0.01" min="0" value="${m.amount}" placeholder="0.00" oninput="mvAmountInput()"></div>
      ${diffCur?`<div><div class="label" style="margin-bottom:6px;">Arrives as (${escapeHtml(toCur)})</div><input class="field mono" id="mv-to-amount" type="number" step="0.01" min="0" value="${m.toAmount}" oninput="window._mv.toTouched=true"></div>`:''}
      <div><div class="label" style="margin-bottom:6px;">Date</div><input class="field" id="mv-date" type="date" value="${m.date}"></div>
    </div>
    ${diffCur?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:-6px;">Converted at your Settings rate. Change “Arrives as” to what actually landed.</div>`:''}
    <div><div class="label" style="margin-bottom:6px;">Note</div><input class="field" id="mv-notes" value="${escAttr(m.notes)}" placeholder="Optional, e.g. October drawings"></div>
  </div>`;
}
function mvAmountInput(){
  const m=mvRead();m.toTouched=false;
  const t=document.getElementById('mv-to-amount');
  if(t){const fc=mvCurrencyOf(m.from,m.fromAcct),tc=mvCurrencyOf(m.to,m.toAcct);t.value=m.amount?round2(fxConvert(+m.amount,fc,tc)):'';m.toAmount=t.value}
}
function mvAddAccount(scope){
  const name=scope==='personal'?'Current account':`${scopeName(scope)} bank account`;
  const bal=store.get(balanceKey(scope),[]);
  const acc={id:uid(),kind:'asset',category:'Bank',name,currency:scopeCurrency(scope),amount:0,notes:'Created from Move money. Set its real balance on the Balance sheet.',createdAt:new Date().toISOString()};
  bal.push(acc);store.set(balanceKey(scope),bal);
  if(window._mv.from===scope)window._mv.fromAcct=acc.id;
  if(window._mv.to===scope)window._mv.toAcct=acc.id;
  renderMoveForm();
  showToast(`Added “${name}” with a £0 starting balance — update it on the Balance sheet.`.replace('£',scopeCurrency(scope)),null,null,5000);
}
function saveMove(){
  const m=mvRead();
  if(m.from===m.to&&(!m.fromAcct||m.fromAcct===m.toAcct)){alert('Choose two different places to move money between.');return false}
  const amount=round2(parseFloat(m.amount));
  if(!amount||amount<=0){alert('Enter an amount greater than zero.');return false}
  const fromCur=mvCurrencyOf(m.from,m.fromAcct),toCur=mvCurrencyOf(m.to,m.toAcct);
  const toAmount=fromCur===toCur?amount:round2(parseFloat(m.toAmount)||fxConvert(amount,fromCur,toCur));
  if(m.id){const old=getMoves().find(x=>x.id===m.id);if(old)revertMoveEffects(old)}
  const rec={id:m.id||uid(),date:m.date||today(),kind:m.kind,from:m.from,to:m.to,fromAcct:m.fromAcct||null,toAcct:m.toAcct||null,amount,currency:fromCur,toAmount,toCurrency:toCur,notes:m.notes||'',effects:[],createdAt:new Date().toISOString()};
  applyMoveEffects(rec);
  const list=getMoves().filter(x=>x.id!==rec.id);
  list.unshift(rec);
  store.set('transfers:log',list);
  showToast(`${MOVE_KINDS[rec.kind].label}: ${fromCur}${amount.toLocaleString('en-GB')} from ${scopeName(rec.from)} to ${scopeName(rec.to)}`,null,null,4000);
  return true;
}
function applyMoveEffects(rec){
  const eff=rec.effects=[];
  const bal=(scope,itemId,delta)=>{if(itemId&&adjustBalanceItem(scope,itemId,delta))eff.push({scope,itemId,delta})};
  bal(rec.from,rec.fromAcct,-rec.amount);
  bal(rec.to,rec.toAcct,rec.toAmount);
  const biz=rec.from==='personal'?rec.to:rec.from;
  const bname=scopeName(biz);
  const link=(scope,key,def,delta)=>{const id=upsertLinkedItem(scope,key,def);bal(scope,id,delta)};
  switch(rec.kind){
    case 'director_loan':
      link(biz,'dla:'+biz,{kind:'asset',category:'Receivables',name:'Director’s loan (owed by you)',currency:rec.currency},rec.amount);
      link('personal','dla:'+biz,{kind:'liability',category:'Loan',name:`Owed to ${bname}`,currency:rec.toCurrency},rec.toAmount);break;
    case 'director_loan_repay':
      link(biz,'dla:'+biz,{kind:'asset',category:'Receivables',name:'Director’s loan (owed by you)',currency:rec.toCurrency},-rec.toAmount);
      link('personal','dla:'+biz,{kind:'liability',category:'Loan',name:`Owed to ${bname}`,currency:rec.currency},-rec.amount);break;
    case 'owner_loan':
      link('personal','ola:'+biz,{kind:'asset',category:'Receivables',name:`Loan to ${bname}`,currency:rec.currency},rec.amount);
      link(biz,'ola:'+biz,{kind:'liability',category:'Loan',name:'Owed to you (owner loan)',currency:rec.toCurrency},rec.toAmount);break;
    case 'owner_loan_repay':
      link(biz,'ola:'+biz,{kind:'liability',category:'Loan',name:'Owed to you (owner loan)',currency:rec.currency},-rec.amount);
      link('personal','ola:'+biz,{kind:'asset',category:'Receivables',name:`Loan to ${bname}`,currency:rec.toCurrency},-rec.toAmount);break;
    case 'salary':{
      const txs=store.get(`profile:${rec.from}:transactions`,[]);
      const tx={id:uid(),date:rec.date,type:'cost',description:`Salary${rec.notes?' — '+rec.notes:''}`,category:'Salaries',currency:rec.currency,amount:rec.amount,notes:'Created by Move money',deductFromCash:false,transferId:rec.id,createdAt:new Date().toISOString()};
      txs.unshift(tx);store.set(`profile:${rec.from}:transactions`,txs);
      eff.push({tx:{scope:rec.from,id:tx.id}});break;
    }
  }
}
function revertMoveEffects(rec){
  (rec.effects||[]).forEach(e=>{
    if(e.tx){const txs=store.get(`profile:${e.tx.scope}:transactions`,[]);store.set(`profile:${e.tx.scope}:transactions`,txs.filter(t=>t.id!==e.tx.id))}
    else adjustBalanceItem(e.scope,e.itemId,-e.delta);
  });
}
function deleteMove(id){
  const list=getMoves();const rec=list.find(x=>x.id===id);if(!rec)return;
  const scopes=[...new Set([rec.from,rec.to,'personal'])];
  const snaps=[{key:'transfers:log',prevValue:list}];
  scopes.forEach(s=>{snaps.push({key:balanceKey(s),prevValue:store.get(balanceKey(s),[])});if(s!=='personal')snaps.push({key:`profile:${s}:transactions`,prevValue:store.get(`profile:${s}:transactions`,[])})});
  revertMoveEffects(rec);
  store.set('transfers:log',list.filter(x=>x.id!==id));
  render();
  deleteWithUndoMulti(snaps,'money move');
}
function movesFor(scope){return getMoves().filter(m=>m.from===scope||m.to===scope)}
function moveRowHtml(m,perspective){
  const out=m.from===perspective;
  const other=out?m.to:m.from;
  const amt=out?`−${m.currency}${Math.round(m.amount).toLocaleString('en-GB')}`:`+${m.toCurrency}${Math.round(m.toAmount).toLocaleString('en-GB')}`;
  return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;">
    <span style="width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:var(--ink-3);border:1px solid var(--line);color:${out?'var(--gold)':'var(--jade)'};flex-shrink:0;">${icon('transfer',14)}</span>
    <div style="flex:1;min-width:0;">
      <div style="font-weight:500;">${escapeHtml(MOVE_KINDS[m.kind]?.label||'Move')}${m.notes?` <span style="color:var(--bone-mute);font-weight:400;">· ${escapeHtml(m.notes)}</span>`:''}</div>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${out?'to':'from'} ${escapeHtml(scopeName(other))} · ${fmtShortDate(m.date)}</div>
    </div>
    <span class="mono" style="color:${out?'var(--gold)':'var(--jade)'};font-weight:500;">${amt}</span>
    <button class="btn btn-ghost btn-sm" onclick="openMoveModal('${m.id}')" title="Edit">${icon('edit',13)}</button>
    <button class="btn btn-ghost btn-sm btn-danger" onclick="deleteMove('${m.id}')" title="Delete">${icon('trash',13)}</button>
  </div>`;
}
// Ledger card for a business
function renderLedgerMoves(pid){
  const moves=movesFor(pid);
  const fy=getFiscalYear();
  const inFy=moves.filter(m=>inFiscalYear(m.date,fy));
  const outTot=inFy.filter(m=>m.from===pid).reduce((a,m)=>a+toReporting(m.amount,m.currency),0);
  const inTot=inFy.filter(m=>m.to===pid).reduce((a,m)=>a+toReporting(m.toAmount,m.toCurrency),0);
  return `<div class="card" style="padding:22px;margin-bottom:16px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:6px;flex-wrap:wrap;">
      <div><div class="serif" style="font-size:18px;font-weight:500;">Money moved</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">Drawings, dividends, loans and transfers. These change cash, not profit.</div></div>
      <button class="btn btn-sm" onclick="openMoveModal(null,{from:'${pid}',to:'personal'})">${icon('transfer',13)} Move money</button>
    </div>
    ${moves.length?`<div style="display:flex;gap:22px;margin:10px 0 6px;font-size:12.5px;color:var(--bone-dim);flex-wrap:wrap;">
      <span>Taken out this ${escapeHtml(fy.label)}: <span class="mono" style="color:var(--gold);">${fmtReporting(outTot)}</span></span>
      <span>Put in: <span class="mono" style="color:var(--jade);">${fmtReporting(inTot)}</span></span></div>
      ${moves.slice(0,6).map(m=>moveRowHtml(m,pid)).join('')}
      ${moves.length>6?`<div style="font-size:12px;color:var(--bone-mute);margin-top:8px;">Showing the latest 6 of ${moves.length}. The full list is under Cash flow.</div>`:''}`
    :`<div style="font-size:13px;color:var(--bone-dim);padding:6px 0;">Nothing moved yet. When you pay yourself from this business, record it here so its cash and your personal cash stay right.</div>`}
  </div>`;
}

// ======================================================================
// INSIGHTS — personal cash flow, goals, tax set-aside, runway, forecast
// ======================================================================
function monthKey(d){const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}`}
function lastMonths(n){const out=[];const now=new Date();for(let i=n-1;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);out.push({k:monthKey(d),label:d.toLocaleDateString('en-GB',{month:'short'}),date:d})}return out}

// ---------- personal money in/out ----------
function personalFlows(){
  const moves=getMoves();
  const INCOME=['drawing','dividend','salary','refund'];
  const inMoves=moves.filter(m=>m.to==='personal'&&m.from!=='personal'&&INCOME.includes(m.kind));
  const outMoves=moves.filter(m=>m.from==='personal'&&m.to!=='personal');
  const bills=store.get('bills:log',[]);
  return {inMoves,outMoves,bills};
}
function sumMoves(list,side){return list.reduce((a,m)=>a+(side==='to'?toReporting(m.toAmount,m.toCurrency):toReporting(m.amount,m.currency)),0)}
function sumBills(list){return list.reduce((a,b)=>a+toReporting(b.amount||0,b.currency||'£'),0)}

function renderCashflow(){
  const {inMoves,outMoves,bills}=personalFlows();
  const now=new Date();const mk=monthKey(now);
  const fy=getFiscalYear();
  const mIn=inMoves.filter(m=>monthKey(m.date)===mk),mBills=bills.filter(b=>b.date&&monthKey(b.date)===mk);
  const inM=sumMoves(mIn,'to'),billsM=sumBills(mBills),left=inM-billsM;
  const rate=inM>0?left/inM*100:null;
  const fyIn=inMoves.filter(m=>inFiscalYear(m.date,fy));
  const fyBorrowed=getMoves().filter(m=>m.kind==='director_loan'&&inFiscalYear(m.date,fy)).reduce((a,m)=>a+toReporting(m.toAmount,m.toCurrency),0);
  const byKind=k=>sumMoves(fyIn.filter(m=>m.kind===k),'to');
  const fyBills=sumBills(bills.filter(b=>b.date&&inFiscalYear(b.date,fy)));
  const months=lastMonths(12).map(x=>({label:x.label,in:sumMoves(inMoves.filter(m=>monthKey(m.date)===x.k),'to'),out:sumBills(bills.filter(b=>b.date&&monthKey(b.date)===x.k))}));
  const avgIn=months.slice(-3).reduce((a,b)=>a+b.in,0)/3,avgOut=months.slice(-3).reduce((a,b)=>a+b.out,0)/3;
  // bills by type this FY
  const bt={};bills.filter(b=>b.date&&inFiscalYear(b.date,fy)).forEach(b=>{const k=b.type||'Other';bt[k]=(bt[k]||0)+toReporting(b.amount||0,b.currency||'£')});
  const btRows=Object.entries(bt).sort((a,b)=>b[1]-a[1]).map(([k,v])=>({label:k,value:v,right:`${fmtReporting(v)} · ${fyBills?Math.round(v/fyBills*100):0}%`,color:BILL_COLORS[k]||'#7d86b0'}));
  // from which business
  const src={};fyIn.forEach(m=>{src[m.from]=(src[m.from]||0)+toReporting(m.toAmount,m.toCurrency)});
  const srcRows=Object.entries(src).sort((a,b)=>b[1]-a[1]).map(([s,v])=>({label:scopeName(s),value:v,right:fmtReporting(v),color:scopeColor(s)}));
  const all=getMoves().filter(m=>m.from==='personal'||m.to==='personal').sort((a,b)=>a.date<b.date?1:-1);

  return `<div class="page" style="max-width:1300px;">
    <div class="header-row header-mobile">
      <div><div class="label" style="margin-bottom:6px;">Personal finances</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;">Cash flow</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">What your businesses pay you, against what you spend.</div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="navigate('bills');setTimeout(()=>openBillModal(),60)">${icon('plus',14)} Bill</button>
        <button class="btn btn-primary" onclick="openMoveModal(null,{to:'personal'})">${icon('transfer',14)} Move money</button>
      </div>
    </div>
    <div class="stagger grid-3" style="margin-bottom:16px;">
      ${anaKpi('Paid to you this month',fmtReporting(inM),{sub:`avg ${fmtReporting(avgIn)} a month`,accent:'var(--jade)'})}
      ${anaKpi('Bills this month',fmtReporting(billsM),{sub:`avg ${fmtReporting(avgOut)} a month`,accent:'var(--gold)'})}
      ${anaKpi('Left over',fmtReporting(left),{accent:left>=0?'var(--ember)':'var(--rust)',sub:left<0?'spending more than you’re paying yourself':'this month'})}
      ${anaKpi('Savings rate',rate===null?'—':Math.round(rate)+'%',{sub:'of what you paid yourself',accent:rate===null?'var(--bone)':rate>=20?'var(--jade)':rate>=0?'var(--gold)':'var(--rust)'})}
    </div>
    <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
      ${anaCard('Month by month','Paid to you against bills, last 12 months',`${renderBarChart(months.map(x=>({label:x.label,in:x.in,out:x.out})),['#3df5a8','#ffb547'])}
        <div style="display:flex;gap:16px;margin-top:8px;font-size:11.5px;color:var(--bone-mute);">
          <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#3df5a8;margin-right:6px;vertical-align:middle;"></span>Paid to you</span>
          <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#ffb547;margin-right:6px;vertical-align:middle;"></span>Bills</span></div>`)}
      ${anaCard(`Your income — ${escapeHtml(fy.label)}`,'Totals you’ll want for a tax return',`
        ${[['Salary',byKind('salary')],['Dividends',byKind('dividend')],['Owner’s drawings',byKind('drawing')],['Expense refunds',byKind('refund')],['Borrowed from businesses',fyBorrowed]].map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">${l}</span><span class="mono">${fmtReporting(v)}</span></div>`).join('')}
        <div style="display:flex;justify-content:space-between;padding:10px 0 0;font-size:13px;"><span style="color:var(--bone-dim);">Bills this ${escapeHtml(fy.label)}</span><span class="mono" style="color:var(--gold);">${fmtReporting(fyBills)}</span></div>
        <div style="font-size:11.5px;color:var(--bone-mute);margin-top:10px;line-height:1.45;">Expense refunds and loans usually aren’t taxable income. Check with an accountant for your situation.</div>`)}
    </div>
    <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">${renderBudgetsCard()}${anaCard('Where it goes',`Bills by type this ${escapeHtml(fy.label)}`,anaBars(btRows,{empty:'No bills logged this year.'}))}</div>
    <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
      ${anaCard('Where it comes from',`Paid to you by each business this ${escapeHtml(fy.label)}`,anaBars(srcRows,{empty:'Nothing paid to you yet this year. Use Move money when you take money out of a business.'}))}
      ${anaCard('Your savings rate','Paid to you minus bills, last 6 months',lastMonths(6).map(x=>{const i=sumMoves(inMoves.filter(m=>monthKey(m.date)===x.k),'to'),o=sumBills(bills.filter(b=>b.date&&monthKey(b.date)===x.k));const r=i>0?Math.round((i-o)/i*100):null;return `<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">${x.label}</span><span class="mono" style="color:${r===null?'var(--bone-mute)':r>=20?'var(--jade)':r>=0?'var(--gold)':'var(--rust)'};">${r===null?'—':r+'%'}</span></div>`}).join(''))}
    </div>
    ${anaCard('All money moves','Between you and your businesses',all.length?all.slice(0,30).map(m=>moveRowHtml(m,'personal')).join(''):`<div style="font-size:13px;color:var(--bone-dim);">No moves yet. <a href="#" onclick="openMoveModal(null,{to:'personal'});return false;" style="color:var(--ember);">Record the first one</a>.</div>`)}
  </div>`;
}

// ---------- business: goals, tax, runway, forecast ----------
function bizNumbers(pid){
  const meta=store.get(`profile:${pid}:meta`)||{};
  const cur=meta.currency||'£';
  const txs=store.get(`profile:${pid}:transactions`,[]);
  const rep=t=>toReporting(t.amount||0,t.currency||cur);
  const now=new Date();const mk=monthKey(now);
  const inM=txs.filter(t=>t.date&&monthKey(t.date)===mk);
  const mRev=inM.filter(t=>t.type==='revenue').reduce((a,t)=>a+rep(t),0);
  const mCost=inM.filter(t=>t.type==='cost').reduce((a,t)=>a+rep(t),0);
  const fy=getFiscalYear();
  const fyTx=txs.filter(t=>t.date&&inFiscalYear(t.date,fy));
  const fyRev=fyTx.filter(t=>t.type==='revenue').reduce((a,t)=>a+rep(t),0);
  const fyTax=fyTx.filter(t=>t.type==='cost'&&t.category==='Tax').reduce((a,t)=>a+rep(t),0);
  const fyCostEx=fyTx.filter(t=>t.type==='cost'&&t.category!=='Tax').reduce((a,t)=>a+rep(t),0);
  const accts=cashAccounts(pid);
  const cash=accts.reduce((a,b)=>a+toReporting(b.amount||0,b.currency||cur),0);
  // average monthly net over the last 3 complete months
  const prev3=[1,2,3].map(i=>monthKey(new Date(now.getFullYear(),now.getMonth()-i,1)));
  const net3=txs.filter(t=>t.date&&prev3.includes(monthKey(t.date))).reduce((a,t)=>a+(t.type==='revenue'?1:-1)*rep(t),0)/3;
  const out3=getMoves().filter(m=>m.from===pid&&prev3.includes(monthKey(m.date))&&m.kind!=='salary').reduce((a,m)=>a+toReporting(m.amount,m.currency),0)/3;
  return {meta,cur,txs,mRev,mCost,mNet:mRev-mCost,fy,fyRev,fyCostEx,fyTax,fyProfit:fyRev-fyCostEx,cash,accts,net3,out3,burn:net3-out3};
}
function progressBar(v,target,color){
  const pct=target>0?Math.max(0,Math.min(100,v/target*100)):0;
  return `<div style="height:8px;background:var(--ink-3);border-radius:5px;overflow:hidden;border:1px solid var(--line);"><div style="height:100%;width:${pct.toFixed(1)}%;background:linear-gradient(90deg,${color},var(--violet));box-shadow:0 0 12px ${color};border-radius:5px;"></div></div>`;
}
function monthPace(v){const now=new Date();const dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();return v/now.getDate()*dim}
function renderGoalsTaxCard(pid){
  const N=bizNumbers(pid);const g=N.meta.goals||{};const rate=+N.meta.taxRate||0;
  const goalRow=(label,v,target,color)=>{
    if(!(target>0))return '';
    const pace=monthPace(v);const on=pace>=target;
    return `<div style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;"><span style="color:var(--bone-dim);">${label}</span><span class="mono">${fmtReporting(v)} <span style="color:var(--bone-mute);">/ ${fmtReporting(target)}</span></span></div>
      ${progressBar(v,target,color)}
      <div style="font-size:11.5px;margin-top:5px;color:${on?'var(--jade)':'var(--gold)'};">${v>=target?'Target reached':on?`On pace for ${fmtReporting(pace)}`:`On pace for ${fmtReporting(pace)} — ${fmtReporting(target-pace)} short`}</div>
    </div>`;
  };
  const goals=goalRow('Revenue this month',N.mRev,+g.revenue,'var(--ember)')+goalRow('Profit this month',N.mNet,+g.profit,'var(--jade)');
  const estTax=Math.max(0,N.fyProfit*rate/100);
  const keep=Math.max(0,estTax-N.fyTax);
  return `<div class="card" style="padding:22px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <div class="serif" style="font-size:18px;font-weight:500;">Goals & tax</div>
      <button class="btn btn-ghost btn-sm" onclick="openEditProfile('${pid}')">${icon('settings',13)} Set</button>
    </div>
    ${goals||`<div style="font-size:13px;color:var(--bone-dim);margin-bottom:14px;line-height:1.5;">Set a monthly revenue or profit target and Atlas tracks your pace through the month. <a href="#" onclick="openEditProfile('${pid}');return false;" style="color:var(--ember);">Set targets</a></div>`}
    <div style="padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--ink-3);">
      <div style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--bone-dim);margin-bottom:6px;">${icon('shield',13)} Set aside for tax · ${escapeHtml(N.fy.label)}</div>
      ${rate>0?`<div class="serif mono" style="font-size:24px;color:${keep>0?'var(--gold)':'var(--jade)'};">${fmtReporting(keep)}</div>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;line-height:1.45;">${rate}% of ${fmtReporting(N.fyProfit)} profit = ${fmtReporting(estTax)}${N.fyTax>0?`, minus ${fmtReporting(N.fyTax)} already paid (Tax category)`:''}. A rough guide, not tax advice.</div>`
      :`<div style="font-size:12.5px;color:var(--bone-dim);line-height:1.5;">Set a tax rate for this business and Atlas shows how much of this year’s profit to keep aside. <a href="#" onclick="openEditProfile('${pid}');return false;" style="color:var(--ember);">Set a rate</a></div>`}
    </div>
  </div>`;
}
function forecastPoints(pid,days=90){
  const N=bizNumbers(pid);
  const start=new Date();start.setHours(0,0,0,0);
  const end=new Date(start);end.setDate(end.getDate()+days);
  const ev=[];
  const k=d=>anaDayKey(d);
  // repeating entries
  N.txs.filter(t=>t.recurring==='monthly').forEach(t=>{
    let d=new Date(t.date);d.setMonth(d.getMonth()+1);
    while(d<=end){if(d>start)ev.push({date:k(d),v:(t.type==='revenue'?1:-1)*toReporting(t.amount||0,t.currency||N.cur),label:t.description});d=new Date(d);d.setMonth(d.getMonth()+1)}
  });
  // invoices still to be paid
  N.txs.filter(t=>t.type==='revenue'&&t.paid===false).forEach(t=>{
    const due=t.dueDate&&new Date(t.dueDate)>start?t.dueDate:k(new Date(start.getTime()+86400000*7));
    if(new Date(due)<=end)ev.push({date:due,v:toReporting(t.amount||0,t.currency||N.cur),label:`Invoice: ${t.description}`});
  });
  // liabilities with a due date
  store.get(`profile:${pid}:balance`,[]).filter(b=>b.kind==='liability'&&b.dueDate).forEach(b=>{
    const due=new Date(b.dueDate)<start?k(start):b.dueDate;
    if(new Date(due)<=end)ev.push({date:due,v:-toReporting(b.amount||0,b.currency||N.cur),label:`Due: ${b.name}`});
  });
  ev.sort((a,b)=>a.date<b.date?-1:1);
  let bal=N.cash;const pts=[{date:k(start),net:bal}];let low={date:k(start),net:bal};
  ev.forEach(e=>{bal+=e.v;pts.push({date:e.date,net:bal});if(bal<low.net)low={date:e.date,net:bal}});
  pts.push({date:k(end),net:bal});
  return {pts,ev,low,endBal:bal,N};
}
function renderCashOutlookCard(pid){
  const F=forecastPoints(pid,90);const N=F.N;
  const hasAcct=N.accts.length>0;
  let runway;
  if(N.burn<0&&N.cash>0)runway={txt:`${(N.cash/-N.burn).toFixed(1)} months`,col:N.cash/-N.burn<3?'var(--rust)':N.cash/-N.burn<6?'var(--gold)':'var(--jade)',sub:`at ${fmtReporting(-N.burn)} a month going out (incl. what you take out)`};
  else if(N.burn>=0&&(N.net3!==0))runway={txt:'Cash-positive',col:'var(--jade)',sub:`adding about ${fmtReporting(N.burn)} a month after what you take out`};
  else runway={txt:'—',col:'var(--bone)',sub:'needs a few months of ledger history'};
  return `<div class="card" style="padding:22px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;gap:10px;flex-wrap:wrap;">
      <div><div class="serif" style="font-size:18px;font-weight:500;">Cash outlook</div>
      <div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">Next 90 days from repeating entries, unpaid invoices and bills due</div></div>
    </div>
    ${!hasAcct?`<div style="font-size:13px;color:var(--bone-dim);line-height:1.5;">Add this business’s bank or cash account on the <a href="#" onclick="navigate('balance','${pid}');return false;" style="color:var(--ember);">Balance sheet</a> to see runway and a cash forecast.</div>`:`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px;">
      <div><div class="label">Cash now</div><div class="serif mono" style="font-size:20px;margin-top:4px;">${fmtReporting(N.cash)}</div></div>
      <div><div class="label">In 90 days</div><div class="serif mono" style="font-size:20px;margin-top:4px;color:${F.endBal>=0?'var(--bone)':'var(--rust)'};">${fmtReporting(F.endBal)}</div></div>
      <div><div class="label">Runway</div><div class="serif mono" style="font-size:20px;margin-top:4px;color:${runway.col};">${runway.txt}</div></div>
    </div>
    ${F.ev.length?renderNetWorthChart(F.pts):`<div style="font-size:12.5px;color:var(--bone-mute);padding:8px 0;">Nothing scheduled yet. Mark regular income and costs as “Repeats every month”, and add due dates to unpaid invoices, to build the forecast.</div>`}
    <div style="font-size:11.5px;color:var(--bone-mute);margin-top:10px;line-height:1.45;">${runway.sub}${F.low.net<0?` · <span style="color:var(--rust);">Cash drops below zero around ${fmtShortDate(F.low.date)}.</span>`:F.ev.length?` · Lowest point ${fmtReporting(F.low.net)} on ${fmtShortDate(F.low.date)}.`:''}</div>`}
  </div>`;
}
function renderDashInsights(pid){
  return `<div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">${renderGoalsTaxCard(pid)}${renderCashOutlookCard(pid)}</div>`;
}

// ---------- Command Centre sections ----------
function renderCmdYou(ctx){
  if(!sectionOn('money'))return '';
  const {inMoves,bills}=personalFlows();
  const mk=monthKey(new Date());
  const inM=sumMoves(inMoves.filter(m=>monthKey(m.date)===mk),'to');
  const billsM=sumBills(bills.filter(b=>b.date&&monthKey(b.date)===mk));
  const left=inM-billsM;const rate=inM>0?Math.round(left/inM*100):null;
  const stat=(l,v,c)=>`<div><div class="label">${l}</div><div class="serif mono" style="font-size:22px;margin-top:6px;color:${c};">${v}</div></div>`;
  return `<div class="draggable-section card" data-section-id="you" style="padding:22px;margin-bottom:16px;">
    <div class="drag-handle" title="Drag to reorder">⋮⋮</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:10px;flex-wrap:wrap;">
      <div><div class="serif" style="font-size:18px;font-weight:500;">Your month</div><div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">What your businesses paid you against your bills</div></div>
      <button class="btn btn-ghost btn-sm" onclick="navigate('cashflow')">Cash flow ${icon('chevron',13)}</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;">
      ${stat('Paid to you',fmtReporting(inM),'var(--jade)')}${stat('Bills',fmtReporting(billsM),'var(--gold)')}${stat('Left over',fmtReporting(left),left>=0?'var(--ember)':'var(--rust)')}${stat('Savings rate',rate===null?'—':rate+'%','var(--bone)')}
    </div>
  </div>`;
}
function renderCmdGoals(ctx){
  const rows=store.get('profiles:list',[]).filter(p=>!p.archived).map(p=>{const N=bizNumbers(p.id);return {p,N,g:N.meta.goals||{}}}).filter(r=>+r.g.revenue>0||+r.g.profit>0);
  if(!rows.length)return '';
  return `<div class="draggable-section card" data-section-id="goals" style="padding:22px;margin-bottom:16px;">
    <div class="drag-handle" title="Drag to reorder">⋮⋮</div>
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Targets this month</div>
    <div style="font-size:12px;color:var(--bone-mute);margin-bottom:16px;">Day ${new Date().getDate()} of ${new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;">
      ${rows.map(({p,N,g})=>{const t=+g.revenue>0?+g.revenue:+g.profit;const v=+g.revenue>0?N.mRev:N.mNet;const pace=monthPace(v);return `<div style="cursor:pointer;" onclick="navigate('dashboard','${p.id}')">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;"><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${p.color};box-shadow:0 0 8px ${p.color};margin-right:8px;"></span>${escapeHtml(p.name)}</span><span class="mono" style="color:var(--bone-dim);">${fmtReporting(v)} / ${fmtReporting(t)}</span></div>
        ${progressBar(v,t,p.color)}
        <div style="font-size:11.5px;margin-top:5px;color:${pace>=t?'var(--jade)':'var(--gold)'};">${+g.revenue>0?'Revenue':'Profit'} · ${v>=t?'reached':pace>=t?'on pace':'behind pace'}</div>
      </div>`}).join('')}
    </div>
  </div>`;
}

// ======================================================================
// COLOURS — named swatches, picker, category colours
// ======================================================================
const SWATCHES=[
  ['Sky','#3fb4ff'],['Royal blue','#4f6dff'],['Azure','#2f8cff'],['Cyan','#22d3ee'],['Teal','#14b8a6'],['Mint','#3df5a8'],
  ['Emerald','#10b981'],['Lime','#a3e635'],['Lemon','#ffe066'],['Amber','#ffb547'],['Orange','#ff8a3d'],['Coral','#ff6b6b'],
  ['Rose','#ff5c7a'],['Pink','#f472b6'],['Magenta','#e056fd'],['Violet','#b57cff'],['Lavender','#a5b4fc'],['Indigo','#6366f1'],
  ['Sand','#d6c29a'],['Bronze','#c9a46a'],['Cocoa','#a1785c'],['Slate','#94a3b8'],['Steel','#7d86b0'],['Pearl','#e9edff']
];
const swatchName=hex=>(SWATCHES.find(s=>s[1].toLowerCase()===String(hex).toLowerCase())||[null])[0];
function nearestSwatchName(hex){
  const rgb=h=>{const m=/^#?([0-9a-f]{6})$/i.exec(String(h).trim());if(!m)return null;const n=parseInt(m[1],16);return [n>>16&255,n>>8&255,n&255]};
  const c=rgb(hex);if(!c)return '';let best=null,bd=1e9;
  SWATCHES.forEach(([n,h])=>{const d=rgb(h);const dist=(d[0]-c[0])**2+(d[1]-c[1])**2+(d[2]-c[2])**2;if(dist<bd){bd=dist;best=n}});
  return best;
}
function colorPicker(id,selected,{compact=false}={}){
  const sel=selected||SWATCHES[0][1];const sz=compact?22:28;
  const named=swatchName(sel);
  return `<div class="color-picker" id="${id}-wrap">
    <input type="hidden" id="${id}" value="${escAttr(sel)}">
    <div style="display:grid;grid-template-columns:repeat(${compact?12:12},${sz}px);gap:${compact?6:8}px;">
      ${SWATCHES.map(([n,h])=>`<button type="button" title="${n}" aria-label="${n}" data-hex="${h}" onclick="pickSwatch('${id}','${h}')" style="width:${sz}px;height:${sz}px;border-radius:50%;background:${h};border:0;cursor:pointer;box-shadow:0 0 10px -3px ${h};outline:${h.toLowerCase()===sel.toLowerCase()?'2px solid var(--bone)':'none'};outline-offset:2px;"></button>`).join('')}
    </div>
    <div style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:12px;color:var(--bone-mute);">
      <span id="${id}-name">${named?`Selected: <span style="color:var(--bone);">${named}</span>`:'Custom colour'}</span>
      <label style="margin-left:auto;display:flex;align-items:center;gap:6px;cursor:pointer;">Custom <input type="color" value="${escAttr(sel)}" onchange="pickSwatch('${id}',this.value)" style="width:28px;height:22px;border:1px solid var(--line);border-radius:6px;background:transparent;padding:0;cursor:pointer;"></label>
    </div>
  </div>`;
}
function pickSwatch(id,hex){
  const inp=document.getElementById(id);if(!inp)return;inp.value=hex;
  document.querySelectorAll(`#${id}-wrap [data-hex]`).forEach(b=>b.style.outline=b.dataset.hex.toLowerCase()===hex.toLowerCase()?'2px solid var(--bone)':'none');
  const n=swatchName(hex);const lab=document.getElementById(id+'-name');if(lab)lab.innerHTML=n?`Selected: <span style="color:var(--bone);">${n}</span>`:'Custom colour';
  inp.dispatchEvent(new Event('change'));
}
// category colours: user choice > built-in > stable auto colour
const getCatColors=()=>store.get('settings:categoryColors',{})||{};
function categoryColor(cat){
  const u=getCatColors();if(u[cat])return u[cat];
  if(CATEGORY_COLORS[cat])return CATEGORY_COLORS[cat];
  let h=0;for(const ch of String(cat||''))h=(h*31+ch.charCodeAt(0))>>>0;
  return SWATCHES[h%(SWATCHES.length-1)][1];
}
function setCatColor(cat,hex){const u=getCatColors();u[cat]=hex;store.set('settings:categoryColors',u)}
function swatchDot(hex,size=10){return `<span style="display:inline-block;width:${size}px;height:${size}px;border-radius:50%;background:${hex};box-shadow:0 0 8px -2px ${hex};vertical-align:middle;"></span>`}

// ---- Ledger categories manager (per business) ----
function openCategoryManager(pid){
  pid=pid||state.profileId;const meta=store.get(`profile:${pid}:meta`);if(!meta)return;
  const custom=meta.categories||{revenue:[],cost:[]};
  const used=new Set(store.get(`profile:${pid}:transactions`,[]).map(t=>t.category));
  const list=type=>getTxCategories(meta,type).map(cat=>{const isCustom=(custom[type]||[]).includes(cat);return `<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:var(--ink-3);margin-bottom:6px;">
      <button type="button" title="Change colour" data-cat="${escAttr(cat)}" onclick="openCatColor(this.dataset.cat,'${pid}')" style="width:22px;height:22px;border-radius:50%;border:0;cursor:pointer;background:${categoryColor(cat)};box-shadow:0 0 10px -3px ${categoryColor(cat)};flex-shrink:0;"></button>
      <span style="flex:1;font-size:13px;">${escapeHtml(cat)}</span>
      <span style="font-size:11px;color:var(--bone-mute);">${nearestSwatchName(categoryColor(cat))}${used.has(cat)?' · in use':''}</span>
      ${isCustom&&!used.has(cat)?`<button class="btn btn-ghost btn-sm btn-danger" title="Remove" data-cat="${escAttr(cat)}" onclick="removeProfileCategory('${pid}','${type}',this.dataset.cat)">${icon('trash',12)}</button>`:''}
    </div>`}).join('');
  showCustomModal(`<div class="serif" style="font-size:22px;margin-bottom:4px;">Categories</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">For ${escapeHtml(meta.name)}. ${PHONE?'Tap':'Click'} a colour dot to change it — colours are used in the ledger and every chart.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div><div class="label" style="margin-bottom:8px;">Money in</div>${list('revenue')}</div>
      <div><div class="label" style="margin-bottom:8px;">Money out</div>${list('cost')}</div>
    </div>
    <div style="margin-top:14px;padding:14px;border:1px solid var(--line);border-radius:12px;">
      <div class="label" style="margin-bottom:8px;">Add a category</div>
      <div style="display:grid;grid-template-columns:1fr auto;gap:8px;margin-bottom:10px;"><input class="field" id="cm-name" placeholder="e.g. Consulting fees / Fuel"><select class="field" id="cm-type" style="width:140px;"><option value="revenue">Money in</option><option value="cost">Money out</option></select></div>
      ${colorPicker('cm-color',SWATCHES[(Object.keys(getCatColors()).length*5)%SWATCHES.length][1],{compact:true})}
      <div style="display:flex;justify-content:flex-end;margin-top:12px;"><button class="btn btn-primary" onclick="addCategoryFromManager('${pid}')">${icon('plus',13)} Add</button></div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:16px;"><button class="btn" onclick="closeModal();render()">Done</button></div>`);
}
function addCategoryFromManager(pid){
  const name=document.getElementById('cm-name').value.trim();if(!name)return;
  addProfileCategory(pid,document.getElementById('cm-type').value,name);setCatColor(name,document.getElementById('cm-color').value);
  openCategoryManager(pid);
}
function removeProfileCategory(pid,type,name){const meta=store.get(`profile:${pid}:meta`);if(!meta?.categories?.[type])return;meta.categories[type]=meta.categories[type].filter(c=>c!==name);store.set(`profile:${pid}:meta`,meta);openCategoryManager(pid)}
function openCatColor(cat,pid){
  window._ccCat=cat;
  showCustomModal(`<div class="serif" style="font-size:20px;margin-bottom:12px;">Colour for “${escapeHtml(cat)}”</div>${colorPicker('cc-color',categoryColor(cat))}
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;"><button class="btn" onclick="openCategoryManager('${pid}')">Back</button><button class="btn btn-primary" onclick="setCatColor(window._ccCat,document.getElementById('cc-color').value);openCategoryManager('${pid}')">Save colour</button></div>`);
}

// ---- Habit categories manager (override) ----
function openRoutineCategoryManager(){
  const custom=store.get('routine:categories:custom',[]);const hidden=store.get('routine:hidden',[])||[];
  const row=(c,isCustom,i)=>`<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--ink-3);border:1px solid var(--line);border-radius:9px;margin-bottom:6px;${!isCustom&&hidden.includes(c.id)?'opacity:.45;':''}">
    ${isCustom?`<button type="button" title="Change colour" onclick="openHabitColor(${i})" style="width:22px;height:22px;border-radius:50%;border:0;cursor:pointer;background:${c.color};box-shadow:0 0 10px -3px ${c.color};"></button>`:swatchDot(c.color,18)}
    <span style="flex:1;">${escapeHtml(c.label)}</span><span style="font-size:11px;color:var(--bone-mute);">${nearestSwatchName(c.color)}</span>
    ${isCustom?`<button class="btn btn-ghost btn-sm btn-danger" title="Remove" onclick="removeRoutineCategory(${i})">${icon('trash',12)}</button>`
      :`<button class="btn btn-ghost btn-sm" onclick="toggleBuiltinHabit('${c.id}')">${hidden.includes(c.id)?'Show':'Hide'}</button>`}
  </div>`;
  showCustomModal(`<div style="display:flex;flex-direction:column;gap:16px;">
    <div><div class="serif" style="font-size:22px;font-weight:500;">Habits</div><div style="font-size:13px;color:var(--bone-dim);margin-top:6px;">Add the daily habits you want to track. Hidden ones keep their history.</div></div>
    <div style="padding:14px;border:1px solid var(--line);border-radius:12px;">
      <div class="label" style="margin-bottom:8px;">Add a habit</div>
      <input class="field" id="rc-label" placeholder="e.g. Meditate, Read 10 pages, Vitamins" style="margin-bottom:10px;" onkeydown="if(event.key==='Enter')addRoutineCategory()">
      ${colorPicker('rc-color',SWATCHES[(custom.length*7+3)%SWATCHES.length][1],{compact:true})}
      <div style="display:flex;justify-content:flex-end;margin-top:12px;"><button class="btn btn-primary" onclick="addRoutineCategory()">${icon('plus',13)} Add habit</button></div>
    </div>
    <div><div class="label" style="margin-bottom:8px;">Your habits</div>${custom.length?custom.map((c,i)=>row(c,true,i)).join(''):'<div style="font-size:13px;color:var(--bone-mute);margin-bottom:6px;">None added yet.</div>'}</div>
    <div><div class="label" style="margin-bottom:8px;">Built in</div>${DEFAULT_ROUTINE_CATEGORIES.map(c=>row(c,false)).join('')}</div>
    <div style="display:flex;justify-content:flex-end;"><button class="btn" onclick="closeModal();render()">Done</button></div>
  </div>`);
}
function toggleBuiltinHabit(id){const h=store.get('routine:hidden',[])||[];store.set('routine:hidden',h.includes(id)?h.filter(x=>x!==id):[...h,id]);openRoutineCategoryManager()}
function openHabitColor(i){
  const custom=store.get('routine:categories:custom',[]);const c=custom[i];if(!c)return;
  showCustomModal(`<div class="serif" style="font-size:20px;margin-bottom:12px;">Colour for “${escapeHtml(c.label)}”</div>${colorPicker('hc-color',c.color)}
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;"><button class="btn" onclick="openRoutineCategoryManager()">Back</button><button class="btn btn-primary" onclick="const cs=store.get('routine:categories:custom',[]);cs[${i}].color=document.getElementById('hc-color').value;store.set('routine:categories:custom',cs);openRoutineCategoryManager()">Save colour</button></div>`);
}

// ======================================================================
// SHARING-READY — currencies, sections, profiles, setup, settings
// ======================================================================
const DEFAULT_RATES={'£':1,'$':1.34,'€':1.16,'฿':43.5,'CA$':1.86,'A$':2.05,'NZ$':2.27,'¥':198,'CN¥':9.6,'₹':115,'CHF':1.07,'S$':1.73,'HK$':10.4,'AED':4.92,'SAR':5.02,'QAR':4.88,'MAD':12.4,'E£':66,'₦':2050,'R':24,'KSh':173,'₺':55,'₨':375,'৳':163,'RM':5.75,'Rp':21800,'₱':77,'SEK':12.8,'NOK':13.6,'DKK':8.65,'zł':4.95,'R$':7.4,'MX$':25};
[
  ['CA$','CAD','Canadian dollar'],['A$','AUD','Australian dollar'],['NZ$','NZD','New Zealand dollar'],['¥','JPY','Japanese yen'],['CN¥','CNY','Chinese yuan'],['₹','INR','Indian rupee'],['CHF','CHF','Swiss franc'],['S$','SGD','Singapore dollar'],['HK$','HKD','Hong Kong dollar'],
  ['AED','AED','UAE dirham'],['SAR','SAR','Saudi riyal'],['QAR','QAR','Qatari riyal'],['MAD','MAD','Moroccan dirham'],['E£','EGP','Egyptian pound'],['₦','NGN','Nigerian naira'],['R','ZAR','South African rand'],['KSh','KES','Kenyan shilling'],['₺','TRY','Turkish lira'],
  ['₨','PKR','Pakistani rupee'],['৳','BDT','Bangladeshi taka'],['RM','MYR','Malaysian ringgit'],['Rp','IDR','Indonesian rupiah'],['₱','PHP','Philippine peso'],['SEK','SEK','Swedish krona'],['NOK','NOK','Norwegian krone'],['DKK','DKK','Danish krone'],['zł','PLN','Polish złoty'],['R$','BRL','Brazilian real'],['MX$','MXN','Mexican peso']
].forEach(([symbol,code,name])=>{if(!CURRENCIES.find(c=>c.code===code))CURRENCIES.push({symbol,code,label:`${symbol} ${code}`,name})});
const CUR_NAMES={GBP:'British pound',USD:'US dollar',EUR:'Euro',THB:'Thai baht'};
CURRENCIES.forEach(c=>{if(!c.name)c.name=CUR_NAMES[c.code]||c.code});
function getFx(){
  const s=store.get('settings:fx',null)||{};
  return {reporting:s.reporting||'£',rates:{...DEFAULT_RATES,...(s.rates||{}),'£':1}};
}
function toReporting(amount,fromCur){
  if(!amount)return 0;
  const fx=getFx();
  if(fromCur===fx.reporting)return amount;
  return amount/(fx.rates[fromCur]||1)*(fx.rates[fx.reporting]||1);
}
function currenciesInUse(){
  const used=new Set([getFx().reporting]);
  const add=c=>{if(c)used.add(c)};
  store.get('profiles:list',[]).forEach(p=>{
    const m=store.get(`profile:${p.id}:meta`);add(m?.currency);
    store.get(`profile:${p.id}:transactions`,[]).forEach(t=>add(t.currency));
    store.get(`profile:${p.id}:balance`,[]).forEach(b=>add(b.currency));
  });
  store.get('personal:balance',[]).forEach(b=>add(b.currency));
  store.get('bills:log',[]).forEach(b=>add(b.currency));
  return used;
}
function renderFxRateInputs(fx){
  const used=currenciesInUse();
  const inp=c=>`<div><div style="font-size:11px;color:var(--bone-mute);margin-bottom:4px;">${escapeHtml(c.label)} · ${escapeHtml(c.name||'')}</div>
    <input class="field mono" id="fx-rate-${escAttr(c.symbol)}" type="number" step="0.0001" value="${fx.rates[c.symbol]||1}" onchange="saveFxFromUI()"></div>`;
  const others=CURRENCIES.filter(c=>c.symbol!=='£');
  const usedList=others.filter(c=>used.has(c.symbol)),rest=others.filter(c=>!used.has(c.symbol));
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;">${usedList.map(inp).join('')||'<div style="font-size:12.5px;color:var(--bone-mute);">Only pounds in use so far.</div>'}</div>
    <details style="margin-top:12px;"><summary style="cursor:pointer;font-size:12.5px;color:var(--bone-dim);">All ${rest.length} other currencies</summary>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-top:10px;">${rest.map(inp).join('')}</div></details>`;
}

// ---------- user, sections ----------
const SECTION_DEFS=[
  {key:'money',label:'Bills, cash flow & net worth',desc:'Personal spending, what your businesses pay you, and everything you own and owe'},
  {key:'routine',label:'Daily routine',desc:'Tick off daily habits'},
  {key:'gym',label:'Gym log',desc:'Training days and body weight'},
  {key:'running',label:'Running',desc:'Runs, distance and pace'}
];
function getSections(){return {money:true,routine:true,gym:true,running:true,tasks:true,goals:true,people:true,renewals:true,checkin:true,...(store.get('settings:sections',{})||{})}}
function sectionOn(k){return getSections()[k]!==false}
function toggleSection(k,on){const s=getSections();s[k]=on;store.set('settings:sections',s);render()}
function userName(){return (store.get('settings:user',{})||{}).name||''}
function greeting(){const h=new Date().getHours();return h<5?'Working late':h<12?'Good morning':h<18?'Good afternoon':'Good evening'}

// ---------- routing (overrides) ----------
const PERSONAL_VIEWS=['today','command','profiles','daily','running','routine','bills','personalBalance','settings','cashflow','tasks','goals','renewals','people','checkin'];
function navigate(view,profileId=null){
  state.view=view;
  if(profileId)state.profileId=profileId;
  if(PERSONAL_VIEWS.includes(view))state.profileId=null;
  if(state.profileId&&['contacts','analytics','inventory'].includes(view)){
    const meta=store.get(`profile:${state.profileId}:meta`);
    if(meta&&!getProfileModules(meta).includes(view))state.view='dashboard';
  }
  state.sidebarOpen=false;
  render();
  const mainEl=document.querySelector('.main');if(mainEl)mainEl.scrollTop=0;
  window.scrollTo(0,0);
}
function renderView(){
  switch(state.view){
    case'today':return renderToday();
    case'tasks':return renderTasks();
    case'goals':return renderGoals();
    case'renewals':return renderRenewals();
    case'people':return renderPeople();
    case'checkin':return renderCheckin();
    case'command':return renderCommandCentre();
    case'profiles':return renderProfiles();
    case'dashboard':return renderDashboard();
    case'contacts':return renderContacts();
    case'analytics':return renderAnalytics();
    case'transactions':return renderTransactions();
    case'balance':return renderBalanceSheet();
    case'inventory':return renderInventory();
    case'daily':return renderDaily();
    case'running':return renderRunning();
    case'routine':return renderRoutine();
    case'bills':return renderBills();
    case'personalBalance':return renderPersonalBalance();
    case'cashflow':return renderCashflow();
    case'settings':return renderSettings();
    default:return renderToday();
  }
}

// ---------- sidebar (override) ----------
function renderSidebar(){
  const profiles=store.get('profiles:list',[]);
  const live=profiles.filter(p=>!p.archived);
  const activeProfile=state.profileId?store.get(`profile:${state.profileId}:meta`):null;
  const inProfile=!!activeProfile&&!PERSONAL_VIEWS.includes(state.view);
  const S=getSections();
  const navBtn=(view,label,iconName)=>`<div class="nav-item ${state.view===view?'active':''}" onclick="navigate('${view}')">${icon(iconName,15)}<span>${label}</span></div>`;
  const profBtn=(view,label,iconName)=>`<div class="nav-item ${state.view===view?'active':''}" onclick="navigate('${view}','${state.profileId}')">${icon(iconName,15)}<span>${label}</span></div>`;
  const group=t=>`<div class="label" style="padding:0 12px;margin:20px 0 6px;">${t}</div>`;
  const life=[S.tasks?navBtn('tasks','Tasks','checkSquare'):'',S.goals?navBtn('goals','Goals','flag'):'',S.people?navBtn('people','People','users'):'',S.renewals?navBtn('renewals','Renewals','passport'):'',S.checkin?navBtn('checkin','Check-in','smile'):''].join('');
  const money=[S.money?navBtn('cashflow','Cash flow','flow'):'',S.money?navBtn('bills','Bills','receipt'):'',S.money?navBtn('personalBalance','Net worth','wallet'):''].join('');
  const body=[S.routine?navBtn('routine','Habits','calendar'):'',S.gym?navBtn('daily','Gym log','dumbbell'):'',S.running?navBtn('running','Running','run'):''].join('');
  const personal=(life?group('Life')+life:'')+(money?group('Money')+money:'')+(body?group('Health & habits')+body:'');
  return `
    <div style="padding:0 6px 16px;display:flex;align-items:center;gap:11px;">
      ${atlasMark(34)}
      <div style="min-width:0;">
        <div class="serif" style="font-size:19px;font-weight:600;line-height:1;letter-spacing:-0.02em;">Atlas</div>
        <div style="font-size:11px;color:var(--bone-mute);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${userName()?escapeHtml(userName())+' · ':''}${PHONE?'synced with '+escapeHtml(PHONE.state.mac||'your Mac'):DESKTOP?`saved on this ${MACHINE}`:'browser mode'}</div>
      </div>
    </div>
    <div style="display:flex;gap:6px;margin-bottom:6px;">
      <button class="nav-item" onclick="openGlobalSearch()" style="flex:1;background:var(--ink-3);border:1px solid var(--line);justify-content:flex-start;color:var(--bone-mute);min-width:0;">
        ${icon('search',14)}<span style="flex:1;text-align:left;">Search</span><kbd style="background:transparent;border:1px solid var(--line);border-radius:5px;padding:1px 6px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--bone-mute);">${IS_MAC?'⌘':'Ctrl '}K</kbd>
      </button>
    </div>
    <button class="btn btn-primary" onclick="openMoveModal()" style="width:100%;justify-content:center;margin-bottom:4px;">${icon('transfer',14)} Move money</button>
    ${group('Overview')}
    ${navBtn('today','Today','sun')}
    ${navBtn('command','Command Centre','dashboard')}
    ${navBtn('profiles','Businesses','building')}
    ${personal}
    ${inProfile?(()=>{
      const modules=getProfileModules(activeProfile);
      return `<div class="label" style="padding:0 12px;margin:20px 0 6px;display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${activeProfile.color};box-shadow:0 0 8px ${activeProfile.color};"></span>${escapeHtml(activeProfile.name)}${activeProfile.archived?' · archived':''}</div>
      ${profBtn('dashboard','Dashboard','dashboard')}
      ${modules.includes('contacts')?profBtn('contacts','Contacts','users'):''}
      ${modules.includes('inventory')?profBtn('inventory','Inventory','package'):''}
      ${modules.includes('analytics')?profBtn('analytics','Analytics','chart'):''}
      ${profBtn('transactions','Ledger','dollar')}
      ${profBtn('balance','Balance sheet','wallet')}`;
    })():''}
    ${live.length>0&&!inProfile?`${group('Businesses')}
      ${live.slice(0,8).map(p=>`<div class="nav-item" onclick="navigate('dashboard','${p.id}')"><span style="width:8px;height:8px;border-radius:50%;background:${p.color};box-shadow:0 0 8px ${p.color};flex-shrink:0;margin:0 3px;"></span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</span></div>`).join('')}`:''}
    <div style="margin-top:auto;padding-top:18px;">
      ${navBtn('settings','Settings & data','settings')}
      <div style="padding:12px 12px 0;font-size:11.5px;color:var(--bone-mute);display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <span>${new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})}</span>
        <button class="btn btn-ghost btn-sm" onclick="toggleTheme()" title="Switch light / dark" style="padding:5px 8px;">${getTheme()==='light'?'Dark':'Light'}</button>
      </div>
    </div>`;
}

// ---------- Command Centre header & quick actions ----------
function cmdHeaderHtml(fx){
  const n=userName();
  return `<div class="header-row header-mobile">
    <div>
      <div class="label" style="margin-bottom:6px;">${greeting()}${n?', '+escapeHtml(n.split(' ')[0]):''} · ${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}</div>
      <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;letter-spacing:-0.02em;">Command Centre</h1>
      <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">Everything across your businesses and personal money, in ${escapeHtml(fx.reporting)}.</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn" onclick="quickLog()">${icon('plus',14)} Log money in/out</button>
      ${sectionOn('money')?`<button class="btn" onclick="navigate('bills');setTimeout(()=>openBillModal(),60)">${icon('receipt',14)} Add bill</button>`:''}
      <button class="btn btn-primary" onclick="openMoveModal()">${icon('transfer',14)} Move money</button>
    </div>
  </div>`;
}
function quickLog(){
  const live=store.get('profiles:list',[]).filter(p=>!p.archived);
  if(!live.length){navigate('profiles');setTimeout(()=>openNewProfile(),60);return}
  if(live.length===1){navigate('transactions',live[0].id);setTimeout(()=>openTxModal(),60);return}
  showCustomModal(`<div class="serif" style="font-size:22px;margin-bottom:6px;">Which business?</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Pick where this money came in or went out.</div>
    <div style="display:flex;flex-direction:column;gap:6px;">${live.map(p=>`<button class="nav-item" style="border:1px solid var(--line);" onclick="closeModal();navigate('transactions','${p.id}');setTimeout(()=>openTxModal(),60)"><span style="width:10px;height:10px;border-radius:50%;background:${p.color};box-shadow:0 0 8px ${p.color};"></span><span>${escapeHtml(p.name)}</span><span style="margin-left:auto;font-size:11.5px;color:var(--bone-mute);">${escapeHtml(p.type)}</span></button>`).join('')}</div>`);
}

// ---------- Profiles page (override) ----------
const PROFILE_COLORS=['#3fb4ff','#b57cff','#3df5a8','#ffb547','#ff6b6b','#22d3ee','#f472b6','#a3e635','#ff8a3d','#6366f1','#14b8a6','#ffe066'];
function renderProfiles(){
  const all=store.get('profiles:list',[]);
  const live=all.filter(p=>!p.archived),arch=all.filter(p=>p.archived);
  const card=p=>{
    const N=bizNumbers(p.id);const g=N.meta.goals||{};
    const bal=profileBalance(p.id,N.cur);
    const goalT=+g.revenue>0?+g.revenue:0;
    return `<div class="card" style="padding:22px;cursor:pointer;position:relative;overflow:hidden;" onclick="navigate('dashboard','${p.id}')">
      <div style="position:absolute;inset:0 0 auto 0;height:2px;background:linear-gradient(90deg,transparent,${p.color},transparent);opacity:.8;"></div>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;">
        <div style="width:40px;height:40px;border-radius:12px;background:${p.color}1f;border:1px solid ${p.color}55;display:flex;align-items:center;justify-content:center;color:${p.color};box-shadow:0 0 18px -6px ${p.color};">${icon('building',18)}</div>
        <div style="display:flex;gap:6px;align-items:center;">
          <span class="chip" style="background:var(--ink-3);color:var(--bone-dim);border:1px solid var(--line);">${escapeHtml(p.type)}</span>
          <button class="btn btn-ghost btn-sm" title="Edit" onclick="event.stopPropagation();openEditProfile('${p.id}')">${icon('edit',13)}</button>
        </div>
      </div>
      <div class="serif" style="font-size:22px;font-weight:500;margin-bottom:2px;">${escapeHtml(p.name)}</div>
      <div style="color:var(--bone-mute);font-size:12px;margin-bottom:16px;">${escapeHtml(N.cur)} · since ${fmtDate(p.createdAt)}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding-top:14px;border-top:1px solid var(--line);">
        <div><div class="label">This month</div><div class="mono" style="font-size:14px;margin-top:4px;color:${N.mNet>=0?'var(--jade)':'var(--rust)'};">${N.mNet>=0?'+':''}${fmtReporting(N.mNet)}</div></div>
        <div><div class="label">Cash</div><div class="mono" style="font-size:14px;margin-top:4px;">${N.accts.length?fmtReporting(N.cash):'—'}</div></div>
        <div><div class="label">Net position</div><div class="mono" style="font-size:14px;margin-top:4px;color:${bal.net>=0?'var(--bone)':'var(--rust)'};">${fmtReporting(bal.net)}</div></div>
      </div>
      ${goalT?`<div style="margin-top:14px;">${progressBar(N.mRev,goalT,p.color)}<div style="font-size:11px;color:var(--bone-mute);margin-top:5px;">${fmtReporting(N.mRev)} of ${fmtReporting(goalT)} monthly revenue target</div></div>`:''}
    </div>`;
  };
  return `<div class="page" style="max-width:1240px;">
    <div class="header-row header-mobile">
      <div><div class="label" style="margin-bottom:6px;">Your portfolio</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;">Businesses</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${live.length===0?'Add a business, side hustle or investment account to start tracking it.':`${live.length} active${arch.length?` · ${arch.length} archived`:''}`}</div></div>
      <button class="btn btn-primary" onclick="openNewProfile()">${icon('plus',15)} New business</button>
    </div>
    ${live.length===0?`<div class="card" style="padding:56px;text-align:center;">
      <div style="display:flex;justify-content:center;margin-bottom:16px;">${atlasMark(56)}</div>
      <div class="serif" style="font-size:22px;margin-bottom:6px;">Add your first business</div>
      <div style="color:var(--bone-dim);font-size:14px;margin:0 auto 20px;max-width:46ch;line-height:1.55;">Each business gets its own dashboard, ledger and balance sheet, with analytics that fit how it makes money.</div>
      <button class="btn btn-primary" onclick="openNewProfile()">${icon('plus',15)} New business</button>
    </div>`:`<div class="stagger" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">${live.map(card).join('')}</div>`}
    ${arch.length?`<details style="margin-top:24px;"><summary style="cursor:pointer;font-size:13px;color:var(--bone-dim);">${icon('archive',13)} Archived (${arch.length}) — kept for your records, left out of totals</summary>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;margin-top:14px;opacity:.75;">${arch.map(card).join('')}</div></details>`:''}
  </div>`;
}

// ---------- profile form (override) ----------
function openNewProfile(editingId){
  const allTypes=getAllTypes();
  const existing=editingId?store.get(`profile:${editingId}:meta`):null;
  const isEdit=!!existing;
  const initialType=existing?.type||'Lead Gen';
  const initialModules=existing?getProfileModules(existing):MODULE_DEFAULTS[initialType];
  const initialColor=existing?.color||PROFILE_COLORS[store.get('profiles:list',[]).length%PROFILE_COLORS.length];
  const initialCurrency=existing?.currency||getFx().reporting;
  const g=existing?.goals||{};
  const curOpts=sel=>CURRENCIES.map(c=>`<option value="${escAttr(c.symbol)}" ${c.symbol===sel?'selected':''}>${escapeHtml(c.label)} — ${escapeHtml(c.name)}</option>`).join('');
  showModal(isEdit?'Business settings':'New business',`<div style="display:flex;flex-direction:column;gap:16px;">
    <div><div class="label" style="margin-bottom:6px;">Name</div><input class="field" id="np-name" placeholder="e.g. Acme Trading" value="${escAttr(existing?.name||'')}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">What kind of business?</div>
        <select class="field" id="np-type" onchange="onTypeChange()">
          ${allTypes.map(t=>`<option value="${escAttr(t)}" ${t===initialType?'selected':''}>${escapeHtml(t)}</option>`).join('')}
          <option value="__custom__">+ Something else…</option>
        </select>
        <div id="np-custom-row" style="display:none;margin-top:8px;"><input class="field" id="np-custom" placeholder="e.g. Restaurant / Property / Agency"></div>
      </div>
      <div><div class="label" style="margin-bottom:6px;">Currency</div><select class="field" id="np-currency">${curOpts(initialCurrency)}</select></div>
    </div>
    <div><div class="label" style="margin-bottom:8px;">Tools for this business</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${ALL_MODULES.map(m=>`<label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;cursor:pointer;background:var(--ink-3);">
          <input type="checkbox" id="np-mod-${m}" ${initialModules.includes(m)?'checked':''} style="accent-color:var(--ember);">
          <span>${MODULE_LABELS[m]}</span>
          <span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">${m==='contacts'?'Leads, clients, pipeline':m==='analytics'?'Insights matched to the business type':'Products, stock, sales channels'}</span>
        </label>`).join('')}
      </div>
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:6px;">Dashboard, Ledger and Balance sheet are always included.</div>
    </div>
    ${isEdit?'':`<div><div class="label" style="margin-bottom:6px;">Money in its bank account today <span style="color:var(--bone-mute);font-weight:400;">(optional)</span></div>
      <input class="field mono" id="np-opening" type="number" step="0.01" placeholder="0.00">
      <div style="font-size:11.5px;color:var(--bone-mute);margin-top:5px;">Creates a bank account on its Balance sheet, so cash, runway and the forecast work from day one.</div></div>`}
    <div style="padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--ink-3);">
      <div class="label" style="margin-bottom:10px;">${icon('flag',12)} Targets & tax <span style="font-weight:400;">(optional)</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
        <div><div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:5px;">Monthly revenue (${escapeHtml(getFx().reporting)})</div><input class="field mono" id="np-goal-rev" type="number" value="${g.revenue||''}" placeholder="—"></div>
        <div><div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:5px;">Monthly profit (${escapeHtml(getFx().reporting)})</div><input class="field mono" id="np-goal-profit" type="number" value="${g.profit||''}" placeholder="—"></div>
        <div><div style="font-size:11.5px;color:var(--bone-mute);margin-bottom:5px;">Tax to set aside (%)</div><input class="field mono" id="np-tax" type="number" min="0" max="80" value="${existing?.taxRate||''}" placeholder="e.g. 20"></div>
      </div>
    </div>
    <div><div class="label" style="margin-bottom:8px;">Colour</div>${colorPicker('np-color',initialColor)}</div>
    ${isEdit?`<div style="display:flex;gap:8px;flex-wrap:wrap;padding-top:6px;border-top:1px solid var(--line);">
      <button type="button" class="btn btn-sm" onclick="closeModal();setProfileArchived('${editingId}',${!existing.archived})">${icon('archive',13)} ${existing.archived?'Restore from archive':'Archive business'}</button>
      <button type="button" class="btn btn-sm btn-danger" onclick="closeModal();deleteProfile('${editingId}')">${icon('trash',13)} Delete…</button>
    </div>`:''}
  </div>`,()=>{
    const name=document.getElementById('np-name').value.trim();
    if(!name){alert('Give the business a name.');return false}
    let type=document.getElementById('np-type').value;
    if(type==='__custom__'){
      const custom=document.getElementById('np-custom').value.trim();
      if(!custom){alert('Describe the kind of business, or pick one from the list.');return false}
      type=custom;addCustomType(custom);
    }
    const modules=ALL_MODULES.filter(m=>document.getElementById('np-mod-'+m).checked);
    const color=document.getElementById('np-color').value;
    const currency=document.getElementById('np-currency').value;
    const num=id=>{const v=parseFloat(document.getElementById(id).value);return v>0?v:null};
    const goals={revenue:num('np-goal-rev'),profit:num('np-goal-profit')};
    const taxRate=num('np-tax');
    if(isEdit){
      const updated={...existing,name,type,color,currency,modules,goals,taxRate};
      store.set(`profile:${editingId}:meta`,updated);
      const list=store.get('profiles:list',[]);
      const idx=list.findIndex(p=>p.id===editingId);
      if(idx>=0){list[idx]={...list[idx],name,type,color};store.set('profiles:list',list)}
    }else{
      const id=uid();
      const meta={id,name,type,color,currency,modules,goals,taxRate,createdAt:new Date().toISOString()};
      store.set(`profile:${id}:meta`,meta);
      store.set(`profile:${id}:contacts`,[]);
      store.set(`profile:${id}:transactions`,[]);
      const opening=parseFloat(document.getElementById('np-opening').value);
      if(opening>=0&&!isNaN(opening))store.set(`profile:${id}:balance`,[{id:uid(),kind:'asset',category:'Bank',name:`${name} bank account`,currency,amount:round2(opening),notes:'Opening balance',createdAt:new Date().toISOString()}]);
      const list=store.get('profiles:list',[]);
      list.unshift({id,name,type,color,createdAt:meta.createdAt});
      store.set('profiles:list',list);
      setTimeout(()=>navigate('dashboard',id),30);
    }
    return true;
  },isEdit?'Save':'Create business');
}
function setProfileArchived(id,archived){
  const meta=store.get(`profile:${id}:meta`);if(!meta)return;
  meta.archived=archived;store.set(`profile:${id}:meta`,meta);
  const list=store.get('profiles:list',[]);const p=list.find(x=>x.id===id);if(p){p.archived=archived;store.set('profiles:list',list)}
  if(window._cmdInclude)window._cmdInclude[id]=!archived;
  showToast(archived?`Archived ${meta.name}. It’s left out of totals but kept for your records.`:`Restored ${meta.name}.`,'Undo',()=>setProfileArchived(id,!archived),6000);
  navigate('profiles');
}

// ---------- Settings additions ----------
function renderSettingsExtras(){
  const u=store.get('settings:user',{})||{};const S=getSections();
  return `${typeof renderPhoneSyncCard==='function'?renderPhoneSyncCard():''}<div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">You</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:12px;">Used for the greeting on the Command Centre. Stays on this ${MACHINE}.</div>
    <input class="field" style="max-width:340px;" placeholder="Your name" value="${escAttr(u.name||'')}" onchange="store.set('settings:user',{...(store.get('settings:user',{})||{}),name:this.value.trim()});render()">
  </div>
  <div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Sections</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:14px;">Show only what you use. Hiding a section keeps its data.</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:8px;">${SECTION_DEFS.map(d=>`<label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" ${S[d.key]!==false?'checked':''} onchange="toggleSection('${d.key}',this.checked)" style="accent-color:var(--ember);"><span>${d.label}</span><span style="margin-left:auto;font-size:11px;color:var(--bone-mute);">${d.desc}</span></label>`).join('')}</div>
  </div>${renderSettingsLife()}`;
}

// ---------- First-run setup ----------
function openSetupWizard(step){
  window._wiz=window._wiz||{step:1,name:'',reporting:'£',fiscal:'uk',sections:{tasks:true,goals:true,people:true,renewals:true,checkin:true,money:true,routine:true,gym:false,running:false},biz:{name:'',type:'Service',currency:'£',opening:''},personalCash:''};
  const w=window._wiz;if(step)w.step=step;
  const dots=`<div style="display:flex;gap:6px;margin-bottom:18px;">${[1,2,3].map(i=>`<span style="height:4px;flex:1;border-radius:3px;background:${i<=w.step?'linear-gradient(90deg,var(--ember),var(--violet))':'var(--line)'};"></span>`).join('')}</div>`;
  const curSel=(id,val)=>`<select class="field" id="${id}">${CURRENCIES.map(c=>`<option value="${escAttr(c.symbol)}" ${c.symbol===val?'selected':''}>${escapeHtml(c.label)} — ${escapeHtml(c.name)}</option>`).join('')}</select>`;
  let body='';
  if(w.step===1)body=`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:18px;">${atlasLogoFull(150)}
      <div class="serif" style="font-size:24px;font-weight:600;margin-top:12px;">Welcome to Atlas</div>
      <div style="font-size:13px;color:var(--bone-dim);margin-top:4px;max-width:44ch;">Your businesses, money and life in one command centre. Everything stays on this ${MACHINE}.</div></div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div><div class="label" style="margin-bottom:6px;">Your first name</div><input class="field" id="wz-name" value="${escAttr(w.name)}" placeholder="So Atlas can greet you"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div><div class="label" style="margin-bottom:6px;">Main currency</div>${curSel('wz-cur',w.reporting)}</div>
        <div><div class="label" style="margin-bottom:6px;">Your tax year starts</div><select class="field" id="wz-fy">
          <option value="uk" ${w.fiscal==='uk'?'selected':''}>6 April (UK)</option><option value="cal" ${w.fiscal==='cal'?'selected':''}>1 January</option><option value="jul" ${w.fiscal==='jul'?'selected':''}>1 July (e.g. Australia)</option><option value="oct" ${w.fiscal==='oct'?'selected':''}>1 October</option></select></div>
      </div>
    </div>`;
  if(w.step===2)body=`
    <div class="serif" style="font-size:22px;font-weight:600;margin-bottom:4px;">What do you want Atlas to run?</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Business tools are always there. Pick the parts of your life to manage here — change it any time in Settings.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">${SECTION_DEFS.map(d=>`<label style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--line);border-radius:10px;cursor:pointer;background:var(--ink-3);">
      <input type="checkbox" id="wz-sec-${d.key}" ${w.sections[d.key]?'checked':''} style="accent-color:var(--ember);"><div><div>${d.label}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;">${d.desc}</div></div></label>`).join('')}</div>
    <div id="wz-pcash-row" style="margin-top:14px;"><div class="label" style="margin-bottom:6px;">Money in your personal bank account today <span style="font-weight:400;">(optional)</span></div><input class="field mono" id="wz-pcash" type="number" step="0.01" value="${escAttr(w.personalCash)}" placeholder="0.00"></div>`;
  if(w.step===3)body=`
    <div class="serif" style="font-size:22px;font-weight:600;margin-bottom:4px;">Add your first business</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:16px;">Atlas sets up the right tools and analytics for the kind of business. You can add more later.</div>
    <div style="display:flex;flex-direction:column;gap:14px;">
      <div><div class="label" style="margin-bottom:6px;">Business name</div><input class="field" id="wz-bname" value="${escAttr(w.biz.name)}" placeholder="e.g. Acme Trading"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div><div class="label" style="margin-bottom:6px;">Kind of business</div><select class="field" id="wz-btype">${BUILTIN_TYPES.map(t=>`<option ${t===w.biz.type?'selected':''}>${escapeHtml(t)}</option>`).join('')}</select></div>
        <div><div class="label" style="margin-bottom:6px;">Currency</div>${curSel('wz-bcur',w.biz.currency||w.reporting)}</div>
      </div>
      <div><div class="label" style="margin-bottom:6px;">Money in its bank account today <span style="font-weight:400;">(optional)</span></div><input class="field mono" id="wz-bopen" type="number" step="0.01" value="${escAttr(w.biz.opening)}" placeholder="0.00"></div>
      <div style="font-size:12px;color:var(--bone-mute);">Moving from another copy of Atlas? <a href="#" onclick="document.getElementById('wz-import').click();return false;" style="color:var(--ember);">Import a backup file</a> instead.</div>
      <input type="file" id="wz-import" accept=".json" style="display:none" onchange="finishSetup(true);importAll(this.files[0])">
    </div>`;
  showCustomModal(`${dots}${body}
    <div style="display:flex;gap:8px;justify-content:space-between;margin-top:22px;">
      <div style="display:flex;gap:6px;"><button class="btn btn-ghost" onclick="${w.step===1?'finishSetup(true)':'wizNext(-1)'}">${w.step===1?'Skip':'Back'}</button>${w.step===1?`<button class="btn" onclick="loadSampleData()">${icon('sparkles',13)} Try with sample data</button>`:''}</div>
      <div style="display:flex;gap:8px;">${w.step===3?`<button class="btn" onclick="wizRead();finishSetup(false,true)">Skip — no business yet</button>`:''}
      <button class="btn btn-primary" onclick="${w.step===3?'wizRead();finishSetup(false)':'wizNext(1)'}">${w.step===3?'Finish':'Continue'}</button></div>
    </div>`);
}
function wizRead(){
  const w=window._wiz;const g=id=>document.getElementById(id);
  if(w.step===1&&g('wz-name')){w.name=g('wz-name').value.trim();w.reporting=g('wz-cur').value;w.fiscal=g('wz-fy').value;w.biz.currency=w.reporting}
  if(w.step===2&&g('wz-sec-money')){SECTION_DEFS.forEach(d=>w.sections[d.key]=g('wz-sec-'+d.key).checked);w.personalCash=g('wz-pcash').value}
  if(w.step===3&&g('wz-bname')){w.biz={name:g('wz-bname').value.trim(),type:g('wz-btype').value,currency:g('wz-bcur').value,opening:g('wz-bopen').value}}
}
function wizNext(d){wizRead();openSetupWizard(Math.max(1,Math.min(3,window._wiz.step+d)))}
function finishSetup(skipped,noBiz){
  const w=window._wiz||{};
  store.set('settings:setupDone',true);
  if(!skipped){
    if(w.name)store.set('settings:user',{name:w.name});
    const fx=store.get('settings:fx',null)||{rates:{}};fx.reporting=w.reporting;store.set('settings:fx',fx);
    const fyMap={uk:{month:4,day:6,label:'UK tax year (Apr 6 → Apr 5)'},cal:{month:1,day:1,label:'Calendar year'},jul:{month:7,day:1,label:'Custom (7/1)'},oct:{month:10,day:1,label:'Custom (10/1)'}};
    saveFiscalConfig(fyMap[w.fiscal]||fyMap.uk);
    store.set('settings:sections',w.sections);
    applyStarterHabits();
    const pc=parseFloat(w.personalCash);
    if(pc>=0&&!isNaN(pc)&&w.sections.money)store.set('personal:balance',[{id:uid(),kind:'asset',category:'Bank',name:'Current account',currency:w.reporting,amount:round2(pc),notes:'Opening balance',createdAt:new Date().toISOString()}]);
    if(!noBiz&&w.biz?.name){
      const id=uid();const b=w.biz;
      const meta={id,name:b.name,type:b.type,color:PROFILE_COLORS[0],currency:b.currency,modules:MODULE_DEFAULTS[b.type]||[],goals:{},createdAt:new Date().toISOString()};
      store.set(`profile:${id}:meta`,meta);store.set(`profile:${id}:contacts`,[]);store.set(`profile:${id}:transactions`,[]);
      const op=parseFloat(b.opening);
      if(op>=0&&!isNaN(op))store.set(`profile:${id}:balance`,[{id:uid(),kind:'asset',category:'Bank',name:`${b.name} bank account`,currency:b.currency,amount:round2(op),notes:'Opening balance',createdAt:new Date().toISOString()}]);
      store.set('profiles:list',[{id,name:b.name,type:b.type,color:meta.color,createdAt:meta.createdAt}]);
    }
  }
  closeModal();applyTheme();render();
  if(!skipped)showToast(`You’re set up${w.name?', '+w.name:''}. Use Move money whenever you pay yourself.`,null,null,6000);
}

// ======================================================================
// LIFE — tasks, goals, renewals, people, check-in, budgets
// ======================================================================
const LK=k=>'life:'+k;
const lget=k=>store.get(LK(k),[]);
const lset=(k,v)=>store.set(LK(k),v);
function lupsert(k,item){const a=lget(k);const i=a.findIndex(x=>x.id===item.id);if(i>=0)a[i]=item;else a.unshift(item);lset(k,a)}
function ldelete(k,id,label){const it=lget(k).find(x=>x.id===id);if(!it)return;deleteWithUndo(LK(k),it,label);render()}
const addDays=(d,n)=>{const x=new Date(d+'T12:00:00');x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)};
const daysUntil=d=>Math.round((new Date(d+'T12:00:00')-new Date(today()+'T12:00:00'))/86400000);
const relDay=d=>{if(!d)return '';const n=daysUntil(d);return n===0?'today':n===1?'tomorrow':n===-1?'yesterday':n<0?`${-n} days ago`:n<7?new Date(d+'T12:00:00').toLocaleDateString('en-GB',{weekday:'long'}):fmtShortDate(d)};
const hdr=(eyebrow,title,sub,actions='')=>`<div class="header-row header-mobile"><div><div class="label" style="margin-bottom:6px;">${eyebrow}</div><h1 class="serif" style="font-size:38px;font-weight:500;margin:0;">${title}</h1>${sub?`<div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${sub}</div>`:''}</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${actions}</div></div>`;
const emptyBox=(msg,btn)=>`<div class="card" style="padding:40px;text-align:center;"><div style="color:var(--bone-dim);font-size:14px;margin:0 auto 16px;max-width:52ch;line-height:1.55;">${msg}</div>${btn||''}</div>`;
Object.assign(ICONS,{
  checkSquare:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12l3 3 5-6"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  passport:'<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 17h6"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  gift:'<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8c-2-4-6-4-6-1s6 1 6 1 6 2 6-1-4-3-6 1"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  pie:'<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>'
});
SECTION_DEFS.unshift(
  {key:'tasks',label:'Tasks',desc:'To-dos with due dates, priorities and your top 3 for today'},
  {key:'goals',label:'Goals',desc:'Bigger life goals with milestones and progress'},
  {key:'people',label:'People',desc:'Birthdays, and reminders to stay in touch'},
  {key:'renewals',label:'Renewals',desc:'Passport, visa, insurance, car, licences — before they expire'},
  {key:'checkin',label:'Check-in & journal',desc:'A daily 10-second energy, mood and sleep score plus one line of reflection'}
);
function areaOptions(sel){
  const live=store.get('profiles:list',[]).filter(p=>!p.archived);
  return `<option value="personal" ${sel==='personal'||!sel?'selected':''}>Personal</option>`+live.map(p=>`<option value="${p.id}" ${sel===p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
}
const areaName=a=>!a||a==='personal'?'Personal':scopeName(a);
const areaColor=a=>!a||a==='personal'?'var(--violet)':scopeColor(a);

// ---------------- TASKS ----------------
function taskBuckets(list){
  const t=today();const open=list.filter(x=>!x.done);
  return {
    overdue:open.filter(x=>x.due&&x.due<t),
    today:open.filter(x=>x.due===t),
    week:open.filter(x=>x.due&&x.due>t&&x.due<=addDays(t,7)),
    later:open.filter(x=>x.due&&x.due>addDays(t,7)),
    someday:open.filter(x=>!x.due),
    done:list.filter(x=>x.done).sort((a,b)=>(b.doneAt||'').localeCompare(a.doneAt||''))
  };
}
const topToday=()=>lget('tasks').filter(x=>!x.done&&x.top===today());
function taskRow(x,{compact=false}={}){
  const t=today();const over=x.due&&x.due<t&&!x.done;
  return `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line);">
    <input type="checkbox" ${x.done?'checked':''} onchange="toggleTask('${x.id}')" style="accent-color:var(--ember);width:17px;height:17px;cursor:pointer;flex-shrink:0;" aria-label="Done">
    <div style="flex:1;min-width:0;cursor:pointer;" onclick="openTaskModal('${x.id}')">
      <div style="font-size:13.5px;${x.done?'text-decoration:line-through;color:var(--bone-mute);':''}overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${x.priority==='high'?'<span style="color:var(--rust);font-weight:600;">!</span> ':''}${compact&&x.time&&!x.done?`<span class="mono" style="color:var(--ember);font-size:12px;margin-right:6px;">${fmtTime(x.time)}</span>`:''}${escapeHtml(x.title)}</div>
      ${compact?'':`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;display:flex;gap:8px;flex-wrap:wrap;">
        <span><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${areaColor(x.area)};margin-right:5px;vertical-align:middle;"></span>${escapeHtml(areaName(x.area))}</span>
        ${x.due?`<span style="color:${over?'var(--rust)':'var(--bone-mute)'};">${over?'Overdue · ':''}${relDay(x.due)}</span>`:''}${x.time?`<span style="color:var(--ember);">${icon('clock',11)} ${taskTimeLabel(x)}</span>`:x.duration?`<span>${fmtDur(x.duration)}</span>`:''}${x.repeat?`<span>↻ ${x.repeat}</span>`:''}</div>`}
    </div>
    ${x.done?'':`<button class="btn btn-ghost btn-sm" title="${x.top===t?'Remove from top 3':'Add to today’s top 3'}" onclick="toggleTop('${x.id}')" style="color:${x.top===t?'var(--gold)':'var(--bone-mute)'};">${icon('star',14)}</button>`}
  </div>`;
}
function toggleTask(id){
  const a=lget('tasks');const x=a.find(t=>t.id===id);if(!x)return;
  x.done=!x.done;x.doneAt=x.done?new Date().toISOString():null;
  if(x.done&&x.repeat&&!x.spawned){
    const base=x.due||today();
    const next=x.repeat==='daily'?addDays(base,1):x.repeat==='weekly'?addDays(base,7):(()=>{const d=new Date(base+'T12:00:00');d.setMonth(d.getMonth()+1);return d.toISOString().slice(0,10)})();
    a.unshift({...x,id:uid(),done:false,doneAt:null,due:next,top:null,spawned:false,createdAt:new Date().toISOString()});x.spawned=true;
  }
  lset('tasks',a);
  if(x.done)showToast(`Done: ${x.title}`,'Undo',()=>{const b=lget('tasks');const y=b.find(t=>t.id===id);if(y){y.done=false;y.doneAt=null;lset('tasks',b);render()}},4000);
  render();
}
function toggleTop(id){
  const a=lget('tasks');const x=a.find(t=>t.id===id);if(!x)return;
  if(x.top===today())x.top=null;
  else{if(topToday().length>=3){showToast('Your top 3 is full. Unstar one first.',null,null,3000);return}x.top=today();if(!x.due)x.due=today()}
  lset('tasks',a);render();
}
function quickAddTask(inputId,opts={}){
  const el=document.getElementById(inputId);const raw=(el?.value||'').trim();if(!raw)return;
  const q=parseTaskText(raw);const title=q.title||raw;
  const due=q.due||(opts.due===undefined?today():(q.time?today():opts.due));
  lupsert('tasks',{id:uid(),title,due,time:q.time||null,duration:q.duration||null,priority:'normal',area:opts.area||'personal',done:false,top:opts.top?today():null,repeat:null,notes:'',createdAt:new Date().toISOString()});
  if(q.time||q.duration)showToast(`Added: ${title}${q.time?' · '+(due!==today()?relDay(due)+' ':'')+fmtTime(q.time):''}${q.duration?' · '+fmtDur(q.duration):''}`,null,null,2500);
  el.value='';render();
  setTimeout(()=>document.getElementById(inputId)?.focus(),30);
}
function openTaskModal(id,preset={}){
  const x=id?lget('tasks').find(t=>t.id===id):{title:'',due:today(),priority:'normal',area:state.profileId||'personal',repeat:null,notes:'',...preset};
  if(!x)return;
  showModal(id?'Edit task':'New task',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Task</div><input class="field" id="tk-title" value="${escAttr(x.title)}" placeholder="e.g. Renew car insurance"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Due</div><input class="field" id="tk-due" type="date" value="${x.due||''}"></div>
      <div><div class="label" style="margin-bottom:6px;">For</div><select class="field" id="tk-area">${areaOptions(x.area)}</select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Start time <span style="color:var(--bone-mute);text-transform:none;letter-spacing:0;">(optional)</span></div><input class="field" id="tk-time" type="time" step="300" value="${x.time||''}"></div>
      <div><div class="label" style="margin-bottom:6px;">How long</div><select class="field" id="tk-dur">${durationOptions(x.duration)}</select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Priority</div><select class="field" id="tk-pri"><option value="normal" ${x.priority!=='high'?'selected':''}>Normal</option><option value="high" ${x.priority==='high'?'selected':''}>High</option></select></div>
      <div><div class="label" style="margin-bottom:6px;">Repeats</div><select class="field" id="tk-rep">${[['','Never'],['daily','Every day'],['weekly','Every week'],['monthly','Every month']].map(([v,l])=>`<option value="${v}" ${(x.repeat||'')===v?'selected':''}>${l}</option>`).join('')}</select></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="tk-notes" rows="2">${escapeHtml(x.notes||'')}</textarea></div>
    ${id?`<button type="button" class="btn btn-sm btn-danger" style="align-self:flex-start;" onclick="closeModal();ldelete('tasks','${id}','task')">${icon('trash',13)} Delete task</button>`:''}
  </div>`,()=>{
    const title=document.getElementById('tk-title').value.trim();if(!title){alert('Name the task.');return false}
    lupsert('tasks',{...x,id:x.id||uid(),title,due:document.getElementById('tk-due').value||(document.getElementById('tk-time').value?today():null),time:document.getElementById('tk-time').value||null,duration:+document.getElementById('tk-dur').value||null,area:document.getElementById('tk-area').value,priority:document.getElementById('tk-pri').value,repeat:document.getElementById('tk-rep').value||null,notes:document.getElementById('tk-notes').value,done:!!x.done,createdAt:x.createdAt||new Date().toISOString()});
    return true;
  },id?'Save':'Add task');
}
function renderTasks(){
  const af=window._taskArea||'all';
  let list=lget('tasks');if(af!=='all')list=list.filter(x=>(x.area||'personal')===af);
  const B=taskBuckets(list);
  const group=(title,items,col)=>items.length?`<div class="card" style="padding:18px 22px;margin-bottom:14px;"><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><div class="serif" style="font-size:16px;color:${col||'var(--bone)'};">${title}</div><span class="mono" style="font-size:12px;color:var(--bone-mute);">${items.length}</span></div>${items.sort((a,b)=>(a.due||'').localeCompare(b.due||'')||(!!b.time-!!a.time)||(a.time||'').localeCompare(b.time||'')||(b.priority==='high')-(a.priority==='high')).map(x=>taskRow(x)).join('')}</div>`:'';
  const openCount=list.filter(x=>!x.done).length;
  return `<div class="page" style="max-width:1000px;">
    ${hdr('Life','Tasks',openCount?`${openCount} open · ${B.overdue.length?`<span style="color:var(--rust);">${B.overdue.length} overdue</span> · `:''}${topToday().length}/3 starred for today`:'Nothing on your list.',`<select class="field" style="width:auto;" onchange="window._taskArea=this.value;render()"><option value="all">Everything</option>${areaOptions(af==='all'?'':af).replace('selected','')}</select><button class="btn btn-primary" onclick="openTaskModal()">${icon('plus',14)} New task</button>`)}
    <div class="card" style="padding:12px;margin-bottom:16px;display:flex;gap:8px;">
      <input class="field" id="tk-quick" placeholder="${PHONE?'Add a task, e.g. “Gym tomorrow 7am 1h”':'Add a task and press Enter, e.g. “Call accountant 3pm 30m” or “Gym tomorrow 7am 1h”'}" onkeydown="if(event.key==='Enter')quickAddTask('tk-quick',{area:window._taskArea&&window._taskArea!=='all'?window._taskArea:'personal'})">
      <button class="btn" onclick="quickAddTask('tk-quick',{due:null})" title="Add without a date">No date</button>
    </div>
    ${dayPlanCard()}
    ${group('Overdue',B.overdue,'var(--rust)')}${group('Today',B.today,'var(--ember)')}${group('Next 7 days',B.week)}${group('Later',B.later)}${group('Someday',B.someday,'var(--bone-dim)')}
    ${!openCount?emptyBox('Add what’s on your mind. Star up to three things each day to make them your top 3 on the Today page.'):''}
    ${B.done.length?`<details style="margin-top:8px;"><summary style="cursor:pointer;font-size:13px;color:var(--bone-dim);">Completed (${B.done.length})</summary><div class="card" style="padding:8px 22px;margin-top:10px;">${B.done.slice(0,30).map(x=>taskRow(x)).join('')}</div></details>`:''}
  </div>`;
}

// ---------------- GOALS ----------------
const GOAL_AREAS=['Health','Wealth','Career','Relationships','Mind','Faith','Learning','Adventure','Other'];
const GOAL_COLORS={Health:'#3df5a8',Wealth:'#ffb547',Career:'#3fb4ff',Relationships:'#ff5c7a',Mind:'#b57cff',Faith:'#ffe066',Learning:'#7aa2ff',Adventure:'#5ef2e0',Other:'#7d86b0'};
function goalProgress(g){
  if(g.status==='done')return 100;
  const ms=g.milestones||[];
  if(ms.length)return Math.round(ms.filter(m=>m.done).length/ms.length*100);
  return Math.max(0,Math.min(100,+g.progress||0));
}
function toggleMilestone(gid,mid){
  const a=lget('goals');const g=a.find(x=>x.id===gid);if(!g)return;const m=(g.milestones||[]).find(x=>x.id===mid);if(!m)return;
  m.done=!m.done;lset('goals',a);
  if(goalProgress(g)===100&&g.status!=='done')showToast(`All milestones done for “${g.title}”. Mark the goal achieved?`,'Achieved',()=>{const b=lget('goals');const y=b.find(x=>x.id===gid);if(y){y.status='done';y.doneAt=today();lset('goals',b);render()}},8000);
  render();
}
function openGoalModal(id){
  const g=id?lget('goals').find(x=>x.id===id):{title:'',area:'Health',why:'',target:'',milestones:[],progress:0,status:'active'};
  if(!g)return;
  showModal(id?'Edit goal':'New goal',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">Goal</div><input class="field" id="gl-title" value="${escAttr(g.title)}" placeholder="e.g. Run a half marathon / Save a £10k buffer"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Area of life</div><select class="field" id="gl-area">${GOAL_AREAS.map(a=>`<option ${a===g.area?'selected':''}>${a}</option>`).join('')}</select></div>
      <div><div class="label" style="margin-bottom:6px;">Target date</div><input class="field" id="gl-target" type="date" value="${g.target||''}"></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Why it matters</div><input class="field" id="gl-why" value="${escAttr(g.why||'')}" placeholder="The reason you’ll read when it gets hard"></div>
    <div><div class="label" style="margin-bottom:6px;">Milestones <span style="font-weight:400;">(one per line — progress is worked out from these)</span></div>
      <textarea class="field" id="gl-ms" rows="5" placeholder="Run 5k without stopping&#10;Run 10k&#10;Run 16k&#10;Race day">${escapeHtml((g.milestones||[]).map(m=>m.text).join('\n'))}</textarea></div>
    <div id="gl-manual"><div class="label" style="margin-bottom:6px;">Or set progress yourself (%)</div><input class="field mono" id="gl-prog" type="number" min="0" max="100" value="${g.progress||0}"></div>
    ${id?`<div style="display:flex;gap:8px;"><button type="button" class="btn btn-sm" onclick="closeModal();setGoalStatus('${id}','${g.status==='done'?'active':'done'}')">${g.status==='done'?'Reopen goal':icon('check',13)+' Mark achieved'}</button><button type="button" class="btn btn-sm btn-danger" onclick="closeModal();ldelete('goals','${id}','goal')">${icon('trash',13)} Delete</button></div>`:''}
  </div>`,()=>{
    const title=document.getElementById('gl-title').value.trim();if(!title){alert('Name the goal.');return false}
    const lines=document.getElementById('gl-ms').value.split('\n').map(s=>s.trim()).filter(Boolean);
    const old=g.milestones||[];
    const milestones=lines.map(t=>{const o=old.find(m=>m.text===t);return o||{id:uid(),text:t,done:false}});
    lupsert('goals',{...g,id:g.id||uid(),title,area:document.getElementById('gl-area').value,target:document.getElementById('gl-target').value||null,why:document.getElementById('gl-why').value.trim(),milestones,progress:+document.getElementById('gl-prog').value||0,status:g.status||'active',createdAt:g.createdAt||new Date().toISOString()});
    return true;
  },id?'Save':'Add goal');
}
function setGoalStatus(id,status){const a=lget('goals');const g=a.find(x=>x.id===id);if(!g)return;g.status=status;g.doneAt=status==='done'?today():null;lset('goals',a);if(status==='done')showToast(`Achieved: ${g.title}. Well done.`,null,null,4000);render()}
function goalCard(g,{compact=false}={}){
  const p=goalProgress(g);const col=GOAL_COLORS[g.area]||'#7d86b0';
  const dl=g.target?daysUntil(g.target):null;
  return `<div class="card" style="padding:20px;${g.status==='done'?'opacity:.7;':''}">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px;">
      <div style="min-width:0;"><span class="chip" style="background:${col}1f;color:${col};border:1px solid ${col}44;">${escapeHtml(g.area)}</span>
      <div class="serif" style="font-size:18px;margin-top:8px;cursor:pointer;" onclick="openGoalModal('${g.id}')">${escapeHtml(g.title)}</div>
      ${g.why&&!compact?`<div style="font-size:12.5px;color:var(--bone-mute);margin-top:4px;line-height:1.45;">${escapeHtml(g.why)}</div>`:''}</div>
      <div class="serif mono" style="font-size:22px;color:${col};">${p}%</div>
    </div>
    ${progressBar(p,100,col)}
    <div style="font-size:11.5px;color:${dl!==null&&dl<0&&p<100?'var(--rust)':'var(--bone-mute)'};margin-top:6px;">${g.status==='done'?`Achieved ${fmtShortDate(g.doneAt)}`:dl===null?'No target date':dl<0?`${-dl} days past target`:`${dl} days to go · ${fmtDate(g.target)}`}</div>
    ${!compact&&(g.milestones||[]).length?`<div style="margin-top:12px;display:flex;flex-direction:column;gap:4px;">${g.milestones.map(m=>`<label style="display:flex;gap:9px;align-items:center;font-size:13px;cursor:pointer;"><input type="checkbox" ${m.done?'checked':''} onchange="toggleMilestone('${g.id}','${m.id}')" style="accent-color:${col};"><span style="${m.done?'text-decoration:line-through;color:var(--bone-mute);':''}">${escapeHtml(m.text)}</span></label>`).join('')}</div>`:''}
  </div>`;
}
function renderGoals(){
  const gs=lget('goals');const active=gs.filter(g=>g.status!=='done'),done=gs.filter(g=>g.status==='done');
  const byArea={};active.forEach(g=>{byArea[g.area]=(byArea[g.area]||0)+1});
  return `<div class="page" style="max-width:1200px;">
    ${hdr('Life','Goals',active.length?`${active.length} in progress · ${done.length} achieved`:'Decide what you’re working towards.',`<button class="btn btn-primary" onclick="openGoalModal()">${icon('plus',14)} New goal</button>`)}
    ${active.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">${GOAL_AREAS.filter(a=>byArea[a]).map(a=>`<span class="chip" style="background:var(--ink-3);border:1px solid var(--line);color:var(--bone-dim);"><span style="width:7px;height:7px;border-radius:50%;background:${GOAL_COLORS[a]};"></span>${a} · ${byArea[a]}</span>`).join('')}</div>
      <div class="stagger" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:16px;">${active.map(g=>goalCard(g)).join('')}</div>`
    :emptyBox('A goal with a few milestones beats a vague wish. Try one for health, one for money and one for the people in your life.',`<button class="btn btn-primary" onclick="openGoalModal()">${icon('plus',14)} Set your first goal</button>`)}
    ${done.length?`<details style="margin-top:22px;"><summary style="cursor:pointer;font-size:13px;color:var(--bone-dim);">Achieved (${done.length})</summary><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:16px;margin-top:12px;">${done.map(g=>goalCard(g,{compact:true})).join('')}</div></details>`:''}
  </div>`;
}

// ---------------- RENEWALS ----------------
const RENEWAL_CATS=['Passport','Visa / residency','ID card','Driving licence','Car (MOT, tax, insurance)','Insurance','Domain / hosting','Professional licence','Health check','Lease / contract','Warranty','Other'];
function renewalStatus(r){
  const d=daysUntil(r.expires);const lead=+r.remind||30;
  if(d<0)return {d,col:'var(--rust)',txt:`Expired ${-d} day${d===-1?'':'s'} ago`,level:3};
  if(d<=lead)return {d,col:'var(--gold)',txt:d===0?'Expires today':`${d} day${d===1?'':'s'} left`,level:2};
  return {d,col:'var(--jade)',txt:d>90?`${Math.round(d/30)} months left`:`${d} days left`,level:1};
}
function openRenewalModal(id){
  const r=id?lget('renewals').find(x=>x.id===id):{name:'',category:'Passport',expires:'',remind:60,cost:'',currency:getFx().reporting,notes:''};
  if(!r)return;
  showModal(id?'Edit renewal':'Track an expiry date',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div><div class="label" style="margin-bottom:6px;">What is it?</div><input class="field" id="rn-name" value="${escAttr(r.name)}" placeholder="e.g. UK passport / Thai visa / Car insurance"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Type</div><select class="field" id="rn-cat">${RENEWAL_CATS.map(c=>`<option ${c===r.category?'selected':''}>${escapeHtml(c)}</option>`).join('')}</select></div>
      <div><div class="label" style="margin-bottom:6px;">Expires on</div><input class="field" id="rn-exp" type="date" value="${r.expires||''}"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Remind me</div><select class="field" id="rn-rem">${[[7,'1 week before'],[14,'2 weeks before'],[30,'1 month before'],[60,'2 months before'],[90,'3 months before'],[180,'6 months before']].map(([v,l])=>`<option value="${v}" ${+r.remind===v?'selected':''}>${l}</option>`).join('')}</select></div>
      <div><div class="label" style="margin-bottom:6px;">Renewal cost <span style="font-weight:400;">(optional)</span></div><div style="display:flex;gap:6px;"><select class="field" id="rn-cur" style="width:90px;">${CURRENCIES.map(c=>`<option value="${escAttr(c.symbol)}" ${c.symbol===r.currency?'selected':''}>${escapeHtml(c.symbol)}</option>`).join('')}</select><input class="field mono" id="rn-cost" type="number" value="${r.cost||''}"></div></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><input class="field" id="rn-notes" value="${escAttr(r.notes||'')}" placeholder="Document number, where to renew, what you need"></div>
    ${id?`<button type="button" class="btn btn-sm btn-danger" style="align-self:flex-start;" onclick="closeModal();ldelete('renewals','${id}','renewal')">${icon('trash',13)} Delete</button>`:''}
  </div>`,()=>{
    const name=document.getElementById('rn-name').value.trim();const exp=document.getElementById('rn-exp').value;
    if(!name||!exp){alert('Add a name and the expiry date.');return false}
    lupsert('renewals',{...r,id:r.id||uid(),name,category:document.getElementById('rn-cat').value,expires:exp,remind:+document.getElementById('rn-rem').value,cost:parseFloat(document.getElementById('rn-cost').value)||null,currency:document.getElementById('rn-cur').value,notes:document.getElementById('rn-notes').value,createdAt:r.createdAt||new Date().toISOString()});
    return true;
  },id?'Save':'Track it');
}
function markRenewed(id){
  const r=lget('renewals').find(x=>x.id===id);if(!r)return;
  const base=r.expires>today()?r.expires:today();
  const next=(()=>{const d=new Date(base+'T12:00:00');d.setFullYear(d.getFullYear()+1);return d.toISOString().slice(0,10)})();
  showModal(`Renewed: ${escapeHtml(r.name)}`,`<div><div class="label" style="margin-bottom:6px;">New expiry date</div><input class="field" id="rn-next" type="date" value="${next}"></div>
    ${r.cost?`<label style="display:flex;gap:10px;align-items:center;margin-top:14px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;background:var(--ink-3);cursor:pointer;"><input type="checkbox" id="rn-bill" checked style="accent-color:var(--ember);"> Log ${escapeHtml(r.currency||'')}${r.cost} as a bill</label>`:''}`,()=>{
    const a=lget('renewals');const x=a.find(y=>y.id===id);x.expires=document.getElementById('rn-next').value;x.lastRenewed=today();lset('renewals',a);
    if(document.getElementById('rn-bill')?.checked){const bills=store.get('bills:log',[]);bills.unshift({id:uid(),date:today(),description:`${r.name} renewal`,type:'Other',location:'',amount:r.cost,currency:r.currency||'£',notes:'From Renewals',deductFromCash:false,createdAt:new Date().toISOString()});store.set('bills:log',bills)}
    showToast(`${r.name} renewed until ${fmtDate(x.expires)}`,null,null,3000);return true;
  },'Save');
}
function renderRenewals(){
  const rs=lget('renewals').sort((a,b)=>a.expires.localeCompare(b.expires));
  const soon=rs.filter(r=>renewalStatus(r).level>=2);
  const yearCost=rs.filter(r=>r.cost&&daysUntil(r.expires)<=365).reduce((a,r)=>a+toReporting(r.cost,r.currency||'£'),0);
  return `<div class="page" style="max-width:1100px;">
    ${hdr('Life','Renewals',rs.length?`${rs.length} tracked · ${soon.length?`<span style="color:var(--gold);">${soon.length} need attention</span>`:'nothing due soon'}${yearCost?` · ${fmtReporting(yearCost)} due in the next 12 months`:''}`:'Never get caught out by an expired passport or lapsed insurance.',`<button class="btn btn-primary" onclick="openRenewalModal()">${icon('plus',14)} Track an expiry</button>`)}
    ${rs.length?`<div class="card" style="overflow:auto;"><table class="table"><thead><tr><th>What</th><th class="table-hide-mobile">Type</th><th>Expires</th><th>Status</th><th class="table-hide-mobile" style="text-align:right;">Cost</th><th></th></tr></thead><tbody>
      ${rs.map(r=>{const s=renewalStatus(r);return `<tr><td style="cursor:pointer;" onclick="openRenewalModal('${r.id}')"><div style="font-weight:500;">${escapeHtml(r.name)}</div>${r.notes?`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(r.notes)}</div>`:''}</td>
        <td class="table-hide-mobile" style="color:var(--bone-dim);">${escapeHtml(r.category)}</td><td class="mono" style="font-size:12.5px;">${fmtDate(r.expires)}</td>
        <td><span class="chip" style="color:${s.col};border:1px solid currentColor;background:transparent;">${s.txt}</span></td>
        <td class="mono table-hide-mobile" style="text-align:right;">${r.cost?escapeHtml(r.currency||'')+Math.round(r.cost).toLocaleString('en-GB'):'—'}</td>
        <td style="text-align:right;white-space:nowrap;"><button class="btn btn-sm" onclick="markRenewed('${r.id}')">${icon('refresh',12)} Renewed</button></td></tr>`}).join('')}
    </tbody></table></div>`
    :emptyBox('Add the documents and policies that would hurt to let lapse: passport, visa, driving licence, car tax and insurance, health insurance, business licences, domains. Atlas reminds you before each one expires.',`<button class="btn btn-primary" onclick="openRenewalModal()">${icon('plus',14)} Track your first expiry</button>`)}
  </div>`;
}

// ---------------- PEOPLE ----------------
const RELATIONS=['Family','Partner','Friend','Work','Mentor','Client','Other'];
function nextBirthday(p){
  if(!p.birthday)return null;
  const [y,m,d]=p.birthday.split('-').map(Number);const now=new Date(today()+'T12:00:00');
  let nb=new Date(now.getFullYear(),m-1,d,12);if(nb<now)nb=new Date(now.getFullYear()+1,m-1,d,12);
  const age=y>1900?nb.getFullYear()-y:null;
  return {date:nb.toISOString().slice(0,10),days:Math.round((nb-now)/86400000),age};
}
function touchStatus(p){
  if(!(+p.touch>0))return null;
  if(!p.last)return {due:true,days:null};
  const since=-daysUntil(p.last);return {due:since>=+p.touch,days:since,overBy:since-+p.touch};
}
function markContacted(id){const a=lget('people');const p=a.find(x=>x.id===id);if(!p)return;const prev=p.last;p.last=today();lset('people',a);showToast(`Logged: in touch with ${p.name}`,'Undo',()=>{const b=lget('people');const q=b.find(x=>x.id===id);if(q){q.last=prev;lset('people',b);render()}},4000);render()}
function openPersonModal(id){
  const p=id?lget('people').find(x=>x.id===id):{name:'',relation:'Friend',birthday:'',touch:30,last:'',phone:'',email:'',notes:''};
  if(!p)return;
  showModal(id?escapeHtml(p.name):'Add a person',`<div style="display:flex;flex-direction:column;gap:14px;">
    <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Name</div><input class="field" id="pp-name" value="${escAttr(p.name)}"></div>
      <div><div class="label" style="margin-bottom:6px;">Who are they?</div><select class="field" id="pp-rel">${RELATIONS.map(r=>`<option ${r===p.relation?'selected':''}>${r}</option>`).join('')}</select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Birthday</div><input class="field" id="pp-bday" type="date" value="${p.birthday||''}"></div>
      <div><div class="label" style="margin-bottom:6px;">Stay in touch every</div><select class="field" id="pp-touch">${[[0,'No reminder'],[7,'Week'],[14,'2 weeks'],[30,'Month'],[60,'2 months'],[90,'3 months'],[180,'6 months']].map(([v,l])=>`<option value="${v}" ${+p.touch===v?'selected':''}>${l}</option>`).join('')}</select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div><div class="label" style="margin-bottom:6px;">Phone</div><input class="field" id="pp-phone" value="${escAttr(p.phone||'')}"></div>
      <div><div class="label" style="margin-bottom:6px;">Last in touch</div><input class="field" id="pp-last" type="date" value="${p.last||''}"></div>
    </div>
    <div><div class="label" style="margin-bottom:6px;">Notes</div><textarea class="field" id="pp-notes" rows="3" placeholder="Kids’ names, what they’re working on, gift ideas…">${escapeHtml(p.notes||'')}</textarea></div>
    ${id?`<button type="button" class="btn btn-sm btn-danger" style="align-self:flex-start;" onclick="closeModal();ldelete('people','${id}','person')">${icon('trash',13)} Delete</button>`:''}
  </div>`,()=>{
    const name=document.getElementById('pp-name').value.trim();if(!name){alert('Add their name.');return false}
    lupsert('people',{...p,id:p.id||uid(),name,relation:document.getElementById('pp-rel').value,birthday:document.getElementById('pp-bday').value||null,touch:+document.getElementById('pp-touch').value,phone:document.getElementById('pp-phone').value,last:document.getElementById('pp-last').value||null,notes:document.getElementById('pp-notes').value,createdAt:p.createdAt||new Date().toISOString()});
    return true;
  },id?'Save':'Add');
}
function renderPeople(){
  const ps=lget('people');
  const bdays=ps.map(p=>({p,b:nextBirthday(p)})).filter(x=>x.b).sort((a,b)=>a.b.days-b.b.days);
  const due=ps.map(p=>({p,t:touchStatus(p)})).filter(x=>x.t&&x.t.due).sort((a,b)=>(b.t.overBy||999)-(a.t.overBy||999));
  const card=p=>{const b=nextBirthday(p),t=touchStatus(p);return `<div class="card" style="padding:18px;">
    <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start;">
      <div style="display:flex;gap:12px;align-items:center;min-width:0;cursor:pointer;" onclick="openPersonModal('${p.id}')">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--ember),var(--violet));display:flex;align-items:center;justify-content:center;color:#04121a;font-weight:600;flex-shrink:0;">${escapeHtml(p.name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase())}</div>
        <div style="min-width:0;"><div style="font-weight:500;">${escapeHtml(p.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);">${escapeHtml(p.relation)}</div></div>
      </div>
      <button class="btn btn-sm" onclick="markContacted('${p.id}')">${icon('check',12)} In touch</button>
    </div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;font-size:12px;color:var(--bone-dim);">
      ${b?`<span>${icon('gift',12)} ${b.days===0?'<b style="color:var(--gold);">Birthday today</b>':`${fmtShortDate(b.date)} · ${b.days} days`}${b.age?` · turns ${b.age}`:''}</span>`:''}
      ${t?`<span style="color:${t.due?'var(--gold)':'var(--bone-dim)'};">${t.days===null?'Not logged yet':t.days===0?'In touch today':`Last in touch ${t.days} days ago`}</span>`:''}
    </div>
  </div>`};
  return `<div class="page" style="max-width:1200px;">
    ${hdr('Life','People',ps.length?`${ps.length} people · ${due.length?`<span style="color:var(--gold);">${due.length} to reach out to</span>`:'all caught up'}`:'The relationships that matter, kept warm.',`<button class="btn btn-primary" onclick="openPersonModal()">${icon('plus',14)} Add person</button>`)}
    ${ps.length?`<div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
      ${anaCard('Reach out','Overdue for a message or call',due.length?due.slice(0,6).map(({p,t})=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px;"><span>${escapeHtml(p.name)} <span style="color:var(--bone-mute);">· ${t.days===null?'never logged':t.days+' days'}</span></span><button class="btn btn-ghost btn-sm" onclick="markContacted('${p.id}')">${icon('check',12)} Done</button></div>`).join(''):'<div style="font-size:13px;color:var(--bone-dim);">Everyone’s caught up.</div>')}
      ${anaCard('Birthdays coming up','Next 60 days',bdays.filter(x=>x.b.days<=60).length?bdays.filter(x=>x.b.days<=60).slice(0,6).map(({p,b})=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px;"><span>${escapeHtml(p.name)}${b.age?` <span style="color:var(--bone-mute);">turns ${b.age}</span>`:''}</span><span class="mono" style="color:${b.days<=7?'var(--gold)':'var(--bone-dim)'};">${b.days===0?'today':fmtShortDate(b.date)}</span></div>`).join(''):'<div style="font-size:13px;color:var(--bone-dim);">None in the next two months.</div>')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">${ps.sort((a,b)=>a.name.localeCompare(b.name)).map(card).join('')}</div>`
    :emptyBox('Add family, close friends and the people who help your career. Atlas reminds you of birthdays and nudges you when it’s been too long.',`<button class="btn btn-primary" onclick="openPersonModal()">${icon('plus',14)} Add someone</button>`)}
  </div>`;
}

// ---------------- CHECK-IN & JOURNAL ----------------
const CHECK_DIMS=[['energy','Energy','var(--gold)'],['mood','Mood','var(--violet)'],['sleep','Sleep','var(--ember)']];
const getCheckin=d=>lget('checkins').find(c=>c.date===d);
function setCheckin(dim,val){
  const a=lget('checkins');let c=a.find(x=>x.date===today());
  if(!c){c={id:uid(),date:today(),energy:null,mood:null,sleep:null,note:''};a.unshift(c)}
  c[dim]=val;lset('checkins',a);render();
}
function saveCheckinNote(v){const a=lget('checkins');let c=a.find(x=>x.date===today());if(!c){c={id:uid(),date:today(),energy:null,mood:null,sleep:null,note:''};a.unshift(c)}c.note=v;lset('checkins',a)}
function checkinNoteInput(el){saveCheckinNote(el.value);const b=document.getElementById('ci-save');if(b){b.disabled=false;b.innerHTML='Save entry'}}
function checkinNoteKey(e,el){if(PHONE)return;if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();submitCheckinNote(el)}}
function submitCheckinNote(el){
  el=el||document.getElementById('ci-note');const v=(el?el.value:'').trim();
  const c=getCheckin(today());
  if(!v&&!(c&&(c.energy||c.mood||c.sleep))){showToast('Tap a score or write a line first');return}
  saveCheckinNote(v);render();showToast(v?'Journal entry saved':'Check-in saved');
}
function deleteCheckin(id){
  const a=lget('checkins');const i=a.findIndex(x=>x.id===id);if(i<0)return;const [gone]=a.splice(i,1);lset('checkins',a);render();
  showToast('Entry deleted','Undo',()=>{const b=lget('checkins');b.push(gone);lset('checkins',b);render()});
}
function checkinWidget({compact=false}={}){
  const c=getCheckin(today())||{};
  const row=([k,l,col])=>`<div style="display:flex;align-items:center;gap:10px;"><span style="width:56px;font-size:12.5px;color:var(--bone-dim);">${l}</span><div style="display:flex;gap:5px;">${[1,2,3,4,5].map(n=>`<button type="button" onclick="setCheckin('${k}',${n})" aria-label="${l} ${n}" style="width:30px;height:30px;border-radius:9px;border:1px solid ${c[k]===n?col:'var(--line)'};background:${c[k]===n?col:'var(--ink-3)'};color:${c[k]===n?'#04121a':'var(--bone-dim)'};font-weight:600;cursor:pointer;">${n}</button>`).join('')}</div></div>`;
  return `<div style="display:flex;flex-direction:column;gap:8px;">${CHECK_DIMS.map(row).join('')}
    ${compact?'':`<textarea id="ci-note" class="field" rows="3" placeholder="One line about today — a win, a worry, something you’re grateful for" oninput="checkinNoteInput(this)" onkeydown="checkinNoteKey(event,this)" style="margin-top:6px;">${escapeHtml(c.note||'')}</textarea>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;"><span style="font-size:11.5px;color:var(--bone-mute);">${PHONE?'':'Enter to save · Shift+Enter for a new line'}</span><button type="button" id="ci-save" class="btn btn-primary" onclick="submitCheckinNote()" ${c.note?'disabled':''}>${c.note?'✓ Saved':'Save entry'}</button></div>`}</div>`;
}
function checkinTrend(days=30){
  const pts=[];for(let i=days-1;i>=0;i--){const d=addDays(today(),-i);pts.push({d,c:getCheckin(d)})}
  const W=600,H=150,P=18;const x=i=>P+i*(W-2*P)/(days-1),y=v=>H-P-(v-1)*(H-2*P)/4;
  const line=(k,col)=>{let path='',pen=false;pts.forEach((p,i)=>{const v=p.c?.[k];if(v){path+=`${pen?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)} `;pen=true}else pen=false});const dots=pts.map((p,i)=>p.c?.[k]?`<circle cx="${x(i).toFixed(1)}" cy="${y(p.c[k]).toFixed(1)}" r="3.2" fill="${col}"/>`:'').join('');return `<path d="${path}" fill="none" stroke="${col}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>${dots}`};
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;max-height:200px;">${[1,2,3,4,5].map(v=>`<line x1="${P}" x2="${W-P}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)" stroke-dasharray="2 5"/>`).join('')}${line('energy','#ffb547')}${line('mood','#b57cff')}${line('sleep','#3fb4ff')}</svg>
    <div style="display:flex;gap:16px;font-size:11.5px;color:var(--bone-mute);margin-top:6px;">${CHECK_DIMS.map(([k,l,c])=>`<span><span style="display:inline-block;width:10px;height:3px;background:${c};margin-right:6px;vertical-align:middle;border-radius:2px;"></span>${l}</span>`).join('')}<span style="margin-left:auto;">1 = low · 5 = great</span></div>`;
}
function checkinAvg(k,days){const v=[];for(let i=0;i<days;i++){const c=getCheckin(addDays(today(),-i));if(c&&c[k])v.push(c[k])}return v.length?v.reduce((a,b)=>a+b,0)/v.length:null}
function checkinStreak(){let n=0;for(let i=0;;i++){const c=getCheckin(addDays(today(),-i));if(c&&(c.energy||c.mood||c.sleep))n++;else if(i===0)continue;else break}return n}
function renderCheckin(){
  const entries=lget('checkins').filter(c=>c.note||c.energy).sort((a,b)=>b.date.localeCompare(a.date));
  const avg=k=>{const v=checkinAvg(k,7);return v?v.toFixed(1):'—'};
  return `<div class="page" style="max-width:1100px;">
    ${hdr('Life','Check-in & journal','Ten seconds a day. Over weeks it shows what lifts you and what drains you.')}
    <div class="stagger grid-2 grid-mobile-1" style="margin-bottom:16px;">
      ${anaCard(`Today · ${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}`,'Tap a score for each',checkinWidget())}
      ${anaCard('Last 7 days','Averages and your streak',`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">${CHECK_DIMS.map(([k,l,c])=>`<div><div class="label">${l}</div><div class="serif mono" style="font-size:24px;color:${c};margin-top:4px;">${avg(k)}</div></div>`).join('')}<div><div class="label">Streak</div><div class="serif mono" style="font-size:24px;margin-top:4px;">${checkinStreak()}<span style="font-size:13px;color:var(--bone-mute);"> days</span></div></div></div>`)}
    </div>
    ${anaCard('Last 30 days','How you’ve been feeling',checkinTrend(30),'margin-bottom:16px;')}
    ${anaCard('Journal','Your notes, newest first',entries.length?entries.slice(0,40).map(c=>`<div style="padding:10px 0;border-bottom:1px solid var(--line);"><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--bone-mute);"><span>${fmtDate(c.date)}</span><span style="display:flex;align-items:center;gap:10px;"><span class="mono">${CHECK_DIMS.map(([k,l])=>c[k]?`${l}&nbsp;${c[k]}`:'').filter(Boolean).join(' · ')}</span><button type="button" class="btn btn-ghost" style="padding:2px 6px;" title="Delete entry" onclick="deleteCheckin('${c.id}')">${icon('x',12)}</button></span></div>${c.note?`<div style="font-size:13.5px;margin-top:4px;line-height:1.5;">${escapeHtml(c.note)}</div>`:''}</div>`).join(''):'<div style="font-size:13px;color:var(--bone-dim);">Your entries will appear here.</div>')}
  </div>`;
}

// ---------------- BUDGETS (shown on Cash flow) ----------------
const getBudgets=()=>store.get('life:budgets',{})||{};
function budgetStatus(){
  const b=getBudgets();const mk=monthKey(new Date());
  const spent={};store.get('bills:log',[]).filter(x=>x.date&&monthKey(x.date)===mk).forEach(x=>{const k=x.type||'Other';spent[k]=(spent[k]||0)+toReporting(x.amount||0,x.currency||'£')});
  return Object.entries(b).filter(([k,v])=>+v>0).map(([k,v])=>({type:k,limit:+v,spent:spent[k]||0,pct:(spent[k]||0)/(+v)*100}));
}
function renderBudgetsCard(){
  const rows=budgetStatus();const now=new Date();const dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();const monthPct=now.getDate()/dim*100;
  return anaCard('Budgets this month',`Day ${now.getDate()} of ${dim} · ${Math.round(monthPct)}% of the month gone`,
    (rows.length?rows.map(r=>{const col=r.pct>100?'var(--rust)':r.pct>=100?'var(--gold)':r.pct>monthPct+10?'var(--gold)':'var(--jade)';return `<div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px;"><span style="color:var(--bone-dim);">${escapeHtml(r.type)}</span><span class="mono">${fmtReporting(r.spent)} <span style="color:var(--bone-mute);">/ ${fmtReporting(r.limit)}</span></span></div>${progressBar(Math.min(r.spent,r.limit),r.limit,col)}<div style="font-size:11px;color:${col};margin-top:4px;">${r.pct>100?`${fmtReporting(r.spent-r.limit)} over`:r.pct>=100?'Used in full':`${fmtReporting(r.limit-r.spent)} left`}</div></div>`}).join('')
    :`<div style="font-size:13px;color:var(--bone-dim);margin-bottom:12px;">Set a monthly limit for rent, food, travel and the rest. Atlas tracks your bills against it and warns you on the Today page when you’re running ahead of the month.</div>`)
    +`<button class="btn btn-sm" onclick="openBudgetsModal()">${icon('edit',12)} ${rows.length?'Edit budgets':'Set budgets'}</button>`);
}
function openBudgetsModal(){
  const b=getBudgets();
  showModal('Monthly budgets',`<div style="font-size:12.5px;color:var(--bone-dim);margin-bottom:14px;">In ${escapeHtml(getFx().reporting)}. Leave blank for no limit.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">${BILL_TYPES.map(t=>`<div><div class="label" style="margin-bottom:5px;">${escapeHtml(t)}</div><input class="field mono" type="number" min="0" data-bt="${escAttr(t)}" value="${b[t]||''}"></div>`).join('')}</div>`,()=>{
    const out={};document.querySelectorAll('[data-bt]').forEach(i=>{const v=parseFloat(i.value);if(v>0)out[i.dataset.bt]=v});store.set('life:budgets',out);return true;
  });
}

// ---------------- calendar: add life events ----------------
function buildCommandEventsForMonth(year,month){
  const ev=__baseCmdEvents(year,month);
  const add=(date,e)=>{(ev[date]=ev[date]||[]).push(e)};
  const inM=d=>{if(!d)return false;const x=new Date(d+'T12:00:00');return x.getFullYear()===year&&x.getMonth()===month};
  if(sectionOn('tasks'))lget('tasks').filter(t=>!t.done&&inM(t.due)).forEach(t=>add(t.due,{color:'#7aa2ff',label:`${t.time?fmtTime(t.time)+' ':''}Task: ${t.title}`,type:'task',ref:t.id}));
  if(sectionOn('renewals'))lget('renewals').filter(r=>inM(r.expires)).forEach(r=>add(r.expires,{color:'#ff5c7a',label:`Expires: ${r.name}`,type:'renewal',ref:r.id}));
  if(sectionOn('people'))lget('people').filter(p=>p.birthday).forEach(p=>{const [,m,d]=p.birthday.split('-').map(Number);if(m-1===month){const ds=`${year}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;add(ds,{color:'#ffe066',label:`Birthday: ${p.name}`,type:'birthday',ref:p.id})}});
  if(sectionOn('goals'))lget('goals').filter(g=>g.status!=='done'&&inM(g.target)).forEach(g=>add(g.target,{color:GOAL_COLORS[g.area]||'#b57cff',label:`Goal target: ${g.title}`,type:'goal',ref:g.id}));
  return ev;
}

// ======================================================================
// TODAY — the daily command centre
// ======================================================================
function nextRecurringDate(dateStr){
  let d=new Date(dateStr+'T12:00:00');const t=new Date(today()+'T12:00:00');let n=0;
  do{d.setMonth(d.getMonth()+1);n++}while(d<t&&n<60);
  return d.toISOString().slice(0,10);
}
// Everything that needs attention, ranked. sev: 3 overdue, 2 today, 1 soon
function buildAgenda(){
  const t=today();const items=[];
  const push=(o)=>items.push(o);
  // unpaid invoices + leads + liabilities + cash, per business
  store.get('profiles:list',[]).filter(p=>!p.archived).forEach(p=>{
    const txs=store.get(`profile:${p.id}:transactions`,[]);
    txs.filter(x=>x.type==='revenue'&&x.paid===false&&x.dueDate&&x.dueDate<=addDays(t,3)).forEach(x=>{
      const d=daysUntil(x.dueDate);
      push({sev:d<0?3:d===0?2:1,date:x.dueDate,icon:'dollar',color:p.color,title:`${d<0?'Overdue invoice':'Invoice due'}: ${x.description}`,sub:`${p.name} · ${x.currency||'£'}${Math.round(x.amount).toLocaleString('en-GB')} · ${relDay(x.dueDate)}`,act:`agendaPaid('${p.id}','${x.id}')`,actLabel:'Paid'});
    });
    store.get(`profile:${p.id}:balance`,[]).filter(b=>b.kind==='liability'&&b.dueDate&&b.dueDate<=addDays(t,7)).forEach(b=>{
      const d=daysUntil(b.dueDate);
      push({sev:d<0?3:d===0?2:1,date:b.dueDate,icon:'receipt',color:'var(--rust)',title:`${b.name} due`,sub:`${p.name} · ${b.currency||'£'}${Math.round(b.amount||0).toLocaleString('en-GB')} · ${relDay(b.dueDate)}`,act:`navigate('balance','${p.id}')`,actLabel:'Open'});
    });
    const leads=store.get(`profile:${p.id}:contacts`,[]).filter(c=>c.nextActionDate&&c.nextActionDate<=t&&!['Won','Lost','Closed - unreachable','Closed - Not interested'].includes(c.stage));
    if(leads.length)push({sev:leads.some(c=>c.nextActionDate<t)?3:2,date:t,icon:'users',color:p.color,title:`${leads.length} follow-up${leads.length===1?'':'s'} due`,sub:`${p.name} · ${leads.slice(0,3).map(c=>c.name).join(', ')}${leads.length>3?'…':''}`,act:`navigate('contacts','${p.id}')`,actLabel:'Open'});
    if(cashAccounts(p.id).length){
      const F=forecastPoints(p.id,60);
      if(F.low.net<0)push({sev:daysUntil(F.low.date)<=14?3:1,date:F.low.date,icon:'trendDown',color:'var(--rust)',title:`${p.name} cash goes negative`,sub:`Around ${fmtShortDate(F.low.date)} · low of ${fmtReporting(F.low.net)}`,act:`navigate('dashboard','${p.id}')`,actLabel:'Review'});
    }
  });
  // personal liabilities
  store.get('personal:balance',[]).filter(b=>b.kind==='liability'&&b.dueDate&&b.dueDate<=addDays(t,7)).forEach(b=>{
    const d=daysUntil(b.dueDate);
    push({sev:d<0?3:d===0?2:1,date:b.dueDate,icon:'receipt',color:'var(--rust)',title:`${b.name} due`,sub:`${b.currency||'£'}${Math.round(b.amount||0).toLocaleString('en-GB')} · ${relDay(b.dueDate)}`,act:`navigate('personalBalance')`,actLabel:'Open'});
  });
  // recurring bills coming up
  if(sectionOn('money'))store.get('bills:log',[]).filter(b=>b.recurring==='monthly').forEach(b=>{
    const nd=nextRecurringDate(b.date);
    if(nd<=addDays(t,3))push({sev:nd===t?2:1,date:nd,icon:'receipt',color:'var(--gold)',title:`${b.description||b.type} due`,sub:`${b.currency||'£'}${Math.round(b.amount||0).toLocaleString('en-GB')} · ${relDay(nd)} · added automatically`,act:`navigate('bills')`,actLabel:'Bills'});
  });
  // budgets
  if(sectionOn('money')){const now=new Date();const mp=now.getDate()/new Date(now.getFullYear(),now.getMonth()+1,0).getDate()*100;
    budgetStatus().filter(b=>{const mk=monthKey(new Date());const fixed=store.get('bills:log',[]).filter(x=>x.date&&monthKey(x.date)===mk&&(x.type||'Other')===b.type).every(x=>x.recurring||x.seriesId);return b.pct>100||(!fixed&&(b.pct>=90||b.pct>mp+20))}).forEach(b=>push({sev:b.pct>100?3:1,date:t,icon:'pie',color:'var(--gold)',title:`${b.type} budget ${b.pct>100?'gone over':'running hot'}`,sub:`${fmtReporting(b.spent)} of ${fmtReporting(b.limit)} · ${Math.round(b.pct)}% used, ${Math.round(mp)}% of the month gone`,act:`navigate('cashflow')`,actLabel:'View'}));}
  // renewals
  if(sectionOn('renewals'))lget('renewals').forEach(r=>{const s=renewalStatus(r);if(s.level>=2)push({sev:s.d<0?3:s.d<=7?2:1,date:r.expires,icon:'passport',color:'var(--rust)',title:`${r.name} ${s.d<0?'has expired':'expires soon'}`,sub:`${s.txt} · ${fmtDate(r.expires)}`,act:`markRenewed('${r.id}')`,actLabel:'Renewed'})});
  // people
  if(sectionOn('people')){
    lget('people').forEach(p=>{const b=nextBirthday(p);if(b&&b.days<=7)push({sev:b.days===0?2:1,date:b.date,icon:'gift',color:'var(--gold)',title:b.days===0?`${p.name}’s birthday today`:`${p.name}’s birthday ${relDay(b.date)}`,sub:b.age?`Turns ${b.age}`:p.relation,act:`markContacted('${p.id}')`,actLabel:'Sent wishes'})});
    lget('people').map(p=>({p,s:touchStatus(p)})).filter(x=>x.s&&x.s.due).sort((a,b)=>(b.s.overBy||999)-(a.s.overBy||999)).slice(0,3)
      .forEach(({p,s})=>push({sev:1,date:t,icon:'heart',color:'var(--violet)',title:`Reach out to ${p.name}`,sub:s.days===null?'Not logged yet':`Last in touch ${s.days} days ago`,act:`markContacted('${p.id}')`,actLabel:'Done'}));
  }
  // goals near target
  if(sectionOn('goals'))lget('goals').filter(g=>g.status!=='done'&&g.target&&daysUntil(g.target)<=14&&goalProgress(g)<100).forEach(g=>push({sev:daysUntil(g.target)<0?3:1,date:g.target,icon:'flag',color:GOAL_COLORS[g.area],title:`Goal ${daysUntil(g.target)<0?'past its date':'deadline close'}: ${g.title}`,sub:`${goalProgress(g)}% done · target ${fmtShortDate(g.target)}`,act:`navigate('goals')`,actLabel:'Open'}));
  return items.sort((a,b)=>b.sev-a.sev||a.date.localeCompare(b.date));
}
function agendaPaid(pid,id){const prev=state.profileId;state.profileId=pid;markTxPaid(id);state.profileId=prev;render()}
function agendaRow(it){
  const sevCol=it.sev===3?'var(--rust)':it.sev===2?'var(--ember)':'var(--bone-mute)';
  return `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);">
    <span style="width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:var(--ink-3);border:1px solid var(--line);color:${it.color};flex-shrink:0;position:relative;">${icon(it.icon,14)}<span style="position:absolute;top:-3px;right:-3px;width:8px;height:8px;border-radius:50%;background:${sevCol};${it.sev>1?`box-shadow:0 0 8px ${sevCol};`:''}"></span></span>
    <div style="flex:1;min-width:0;"><div style="font-size:13.5px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(it.title)}</div><div style="font-size:11.5px;color:var(--bone-mute);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(it.sub)}</div></div>
    ${it.act?`<button class="btn btn-sm" onclick="${it.act}">${escapeHtml(it.actLabel)}</button>`:''}
  </div>`;
}
function habitsCard(){
  if(!sectionOn('routine'))return '';
  const cats=getRoutineCategories();const logs=store.get('routine:log',[]).filter(l=>l.date===today()&&l.done);
  const done=new Set(logs.map(l=>l.category));
  return anaCard('Habits',`${done.size} of ${cats.length} done today`,`<div style="display:flex;flex-wrap:wrap;gap:8px;">${cats.map(c=>{const on=done.has(c.id);return `<button class="btn btn-sm" onclick="toggleRoutineToday('${c.id}')" style="${on?`background:${c.color};border-color:${c.color};color:#04121a;`:''}">${on?icon('check',12):''} ${escapeHtml(c.label)}</button>`}).join('')}</div>
    <div style="margin-top:12px;"><a href="#" onclick="navigate('routine');return false;" style="font-size:12px;color:var(--ember);">Edit habits</a></div>`);
}
function moneySnapshot(){
  const fx=getFx();let assets=0,liab=0,cash=0;
  const scopes=['personal',...store.get('profiles:list',[]).filter(p=>!p.archived).map(p=>p.id)];
  scopes.forEach(s=>store.get(balanceKey(s),[]).forEach(b=>{const v=toReporting(b.amount||0,b.currency||'£');if(b.kind==='asset'){assets+=v;if(CASH_CATS.includes(b.category))cash+=v}else liab+=v}));
  const {inMoves,bills}=personalFlows();const mk=monthKey(new Date());
  const paid=sumMoves(inMoves.filter(m=>monthKey(m.date)===mk),'to'),billsM=sumBills(bills.filter(b=>b.date&&monthKey(b.date)===mk));
  const stat=(l,v,c,go)=>`<div style="cursor:pointer;" onclick="${go}"><div class="label">${l}</div><div class="serif mono" style="font-size:21px;margin-top:5px;color:${c};">${v}</div></div>`;
  return anaCard('Money at a glance',`In ${escapeHtml(fx.reporting)}, across everything`,`<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
    ${stat('Net worth',fmtReporting(assets-liab),'var(--bone)',"navigate('command')")}${stat('Cash & bank',fmtReporting(cash),'var(--ember)',"navigate('command')")}
    ${sectionOn('money')?stat('Paid to you · month',fmtReporting(paid),'var(--jade)',"navigate('cashflow')")+stat('Bills · month',fmtReporting(billsM),'var(--gold)',"navigate('bills')"):''}</div>`);
}
function renderToday(){
  const n=userName();const t=today();
  const tasks=lget('tasks');const B=taskBuckets(tasks);const top=topToday();
  const dueNow=[...B.overdue,...B.today.sort((a,b)=>(!!b.time-!!a.time)||(a.time||'').localeCompare(b.time||''))].filter(x=>x.top!==t);
  const agenda=buildAgenda();
  const checked=getCheckin(t);
  const goals=lget('goals').filter(g=>g.status!=='done').sort((a,b)=>(a.target||'9').localeCompare(b.target||'9')).slice(0,3);
  const demo=store.get('settings:demo',false);
  const urgent=agenda.filter(a=>a.sev>=2).length+B.overdue.length;
  return `<div class="page" style="max-width:1320px;">
    ${demo?`<div class="card" style="padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:12px;border-color:var(--gold);flex-wrap:wrap;"><span style="color:var(--gold);">${icon('sparkles',15)}</span><span style="flex:1;font-size:13px;">You’re exploring Atlas with sample data. Nothing here is real.</span><button class="btn btn-sm btn-primary" onclick="clearSampleData()">Clear it and start my own</button></div>`:''}
    <div class="header-row header-mobile">
      <div><div class="label" style="margin-bottom:6px;">${new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})}</div>
        <h1 class="serif" style="font-size:38px;font-weight:500;margin:0;">${greeting()}${n?', '+escapeHtml(n.split(' ')[0]):''}</h1>
        <div style="color:var(--bone-dim);margin-top:8px;font-size:14px;">${urgent?`${urgent} thing${urgent===1?' needs':'s need'} you today.`:agenda.length||dueNow.length?'Nothing urgent. Here’s what’s coming up.':'You’re clear. Plan something worthwhile.'}</div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" onclick="openQuickCapture()" title="${PHONE?'':(IS_MAC?'⌘':'Ctrl')+'+Shift+Space from anywhere'}">${icon('bolt',14)} Quick add</button>
        <button class="btn btn-primary" onclick="openMoveModal()">${icon('transfer',14)} Move money</button>
      </div>
    </div>
    <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
      <div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><div class="serif" style="font-size:18px;font-weight:500;">Your top 3</div><span class="mono" style="font-size:12px;color:var(--bone-mute);">${top.length}/3</span></div>
        <div style="font-size:12px;color:var(--bone-mute);margin-bottom:8px;">The three things that would make today a win. Star tasks to add them.</div>
        ${top.map(x=>taskRow(x,{compact:true})).join('')}
        ${top.length<3?`<div style="display:flex;gap:8px;margin:10px 0 4px;"><input class="field" id="top-quick" placeholder="${top.length?'Add another…':'What matters most today?'}" onkeydown="if(event.key==='Enter')quickAddTask('top-quick',{top:true})"></div>`:''}
        ${dueNow.length?`<div class="label" style="margin:16px 0 2px;">Also due${B.overdue.length?` · <span style="color:var(--rust);">${B.overdue.length} overdue</span>`:''}</div>${dueNow.slice(0,6).map(x=>taskRow(x)).join('')}${dueNow.length>6?`<a href="#" onclick="navigate('tasks');return false;" style="font-size:12px;color:var(--ember);display:inline-block;margin-top:8px;">${dueNow.length-6} more in Tasks</a>`:''}`:''}
      </div>
      ${sectionOn('checkin')?`<div class="card" style="padding:22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><div class="serif" style="font-size:18px;font-weight:500;">Check-in</div>${checked?`<span style="font-size:11.5px;color:var(--jade);">${icon('check',12)} done</span>`:''}</div>
        <div style="font-size:12px;color:var(--bone-mute);margin-bottom:12px;">How are you today? 1 = low · 5 = great</div>
        ${checkinWidget()}
        <div style="margin-top:10px;"><a href="#" onclick="navigate('checkin');return false;" style="font-size:12px;color:var(--ember);">See trends</a></div>
      </div>`:moneySnapshot()}
    </div>
    ${dayPlanCard({compact:true})}
    <div class="stagger grid-2-1 grid-mobile-1" style="margin-bottom:16px;">
      ${anaCard('Needs attention',agenda.length?`${agenda.length} item${agenda.length===1?'':'s'} across your businesses and life`:'Invoices, bills, renewals, birthdays, follow-ups and cash warnings show up here',agenda.length?agenda.slice(0,12).map(agendaRow).join(''):`<div style="font-size:13px;color:var(--bone-dim);padding:6px 0;">${icon('check',13)} All clear.</div>`)}
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${sectionOn('checkin')?moneySnapshot():''}
        ${habitsCard()}
      </div>
    </div>
    ${sectionOn('goals')?`<div style="display:flex;justify-content:space-between;align-items:center;margin:4px 0 12px;"><div class="serif" style="font-size:18px;">Goals in focus</div><a href="#" onclick="navigate('goals');return false;" style="font-size:12.5px;color:var(--ember);">All goals</a></div>
      ${goals.length?`<div class="stagger" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">${goals.map(g=>goalCard(g,{compact:true})).join('')}</div>`:`<div class="card" style="padding:20px;font-size:13px;color:var(--bone-dim);">No goals yet. <a href="#" onclick="openGoalModal();return false;" style="color:var(--ember);">Set one</a> for the next 90 days.</div>`}`:''}
  </div>`;
}

// ---------------- Quick capture ----------------
function openQuickCapture(kind){
  window._qc=kind||window._qc||'task';
  const k=window._qc;
  const tabs=[['task','Task','checkSquare'],['note','Journal note','file'],['money','Money in/out','dollar'],['move','Move money','transfer'],['bill','Bill','receipt'],['business','Business','building']].filter(([id])=>id!=='bill'&&id!=='note'||(id==='bill'?sectionOn('money'):sectionOn('checkin')));
  showCustomModal(`<div class="serif" style="font-size:22px;margin-bottom:12px;">Quick add</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">${tabs.map(([id,l,ic])=>`<button class="btn btn-sm ${id===k?'btn-primary':''}" onclick="openQuickCapture('${id}')">${icon(ic,12)} ${l}</button>`).join('')}</div>
    ${k==='task'?`<input class="field" id="qc-text" placeholder="What needs doing?" onkeydown="if(event.key==='Enter')qcSave()">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;"><select class="field" id="qc-due"><option value="${today()}">Today</option><option value="${addDays(today(),1)}">Tomorrow</option><option value="${addDays(today(),7)}">Next week</option><option value="">No date</option></select><select class="field" id="qc-area">${areaOptions('personal')}</select></div>`
    :k==='note'?`<textarea class="field" id="qc-text" rows="3" placeholder="A thought, a win, something to remember…"></textarea>`
    :`<div style="font-size:13px;color:var(--bone-dim);">${k==='business'?'Add a business, side hustle or investment account. It gets its own dashboard, ledger and balance sheet.':k==='money'?'Log money coming in or going out of a business.':k==='move'?'Pay yourself, put money in, or move money between businesses.':'Add a personal bill.'}</div>`}
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;"><button class="btn" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="qcSave()">${k==='task'||k==='note'?'Save':'Continue'}</button></div>`);
  setTimeout(()=>document.getElementById('qc-text')?.focus(),60);
}
function qcSave(){
  const k=window._qc;
  if(k==='task'){const title=document.getElementById('qc-text').value.trim();if(!title)return;lupsert('tasks',{id:uid(),title,due:document.getElementById('qc-due').value||null,area:document.getElementById('qc-area').value,priority:'normal',done:false,top:null,repeat:null,notes:'',createdAt:new Date().toISOString()});closeModal();showToast(`Added: ${title}`,null,null,2500);render();return}
  if(k==='note'){const v=document.getElementById('qc-text').value.trim();if(!v)return;const c=getCheckin(today());saveCheckinNote((c?.note?c.note+'\n':'')+v);closeModal();showToast('Added to today’s journal',null,null,2500);render();return}
  closeModal();
  if(k==='business')openNewProfile();else if(k==='money')quickLog();else if(k==='move')openMoveModal();else{navigate('bills');setTimeout(()=>openBillModal(),60)}
}

// ---------------- Reminders (desktop notifications) ----------------
function notifySettings(){return {on:true,...(store.get('settings:notify',{})||{})}}
function runReminders(){
  try{
    if(!notifySettings().on||typeof Notification==='undefined')return;
    const t=today();const sent=store.get('notify:sent',{})||{};
    if(sent.date!==t){sent.date=t;sent.ids=[]}
    const due=[...buildAgenda().filter(a=>a.sev>=2).map(a=>({id:a.title,title:a.title,body:a.sub})),
      ...[...taskBuckets(lget('tasks')).overdue,...taskBuckets(lget('tasks')).today].map(x=>({id:'task:'+x.id,title:x.due<t?`Overdue: ${x.title}`:`Today: ${x.title}`,body:areaName(x.area)}))];
    const fresh=due.filter(d=>!sent.ids.includes(d.id));
    if(!fresh.length)return;
    const show=(title,body)=>{const n=new Notification(title,{body,silent:false});n.onclick=()=>{window.focus();navigate('today')}};
    if(fresh.length<=3)fresh.forEach(d=>show(d.title,d.body));
    else show(`${fresh.length} things need you today`,fresh.slice(0,3).map(d=>d.title).join(' · '));
    sent.ids.push(...fresh.map(d=>d.id));store.set('notify:sent',sent);
  }catch(e){console.error('reminders',e)}
}
function startReminders(){setTimeout(runReminders,4000);setInterval(runReminders,30*60*1000)}

// ---------------- Passcode lock ----------------
async function sha256(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const lockCfg=()=>store.get('settings:lock',null);
let __lastActive=Date.now();
function showLock(){
  if(!lockCfg()||document.getElementById('lock-screen'))return;
  closeModal();
  const el=document.createElement('div');el.id='lock-screen';
  el.style.cssText='position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;background:rgba(3,7,24,.86);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);';
  el.innerHTML=`<div style="text-align:center;width:300px;">${atlasLogoFull(130).replace('display:block','display:block;margin:0 auto')}
    <div class="serif" style="font-size:20px;margin:16px 0 4px;">Atlas is locked</div><div style="font-size:12.5px;color:var(--bone-mute);margin-bottom:16px;">Enter your passcode</div>
    <input class="field mono" id="lock-input" type="password" inputmode="numeric" autocomplete="off" style="text-align:center;font-size:18px;letter-spacing:.3em;" onkeydown="if(event.key==='Enter')tryUnlock()">
    <div id="lock-err" style="font-size:12px;color:var(--rust);height:18px;margin-top:8px;"></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="tryUnlock()">Unlock</button></div>`;
  document.body.appendChild(el);document.body.classList.add('locked');
  setTimeout(()=>document.getElementById('lock-input')?.focus(),50);
}
async function tryUnlock(){
  const c=lockCfg();const v=document.getElementById('lock-input').value;
  if(c&&await sha256(c.salt+v)===c.hash){document.getElementById('lock-screen')?.remove();document.body.classList.remove('locked');__lastActive=Date.now()}
  else{document.getElementById('lock-err').textContent='That’s not it. Try again.';document.getElementById('lock-input').value=''}
}
function setupLock(){
  ['mousemove','keydown','mousedown','wheel'].forEach(e=>window.addEventListener(e,()=>{__lastActive=Date.now()},{passive:true}));
  setInterval(()=>{const c=lockCfg();if(c&&c.minutes>0&&Date.now()-__lastActive>c.minutes*60000)showLock()},20000);
  if(lockCfg())showLock();
}
function openLockSetup(){
  const c=lockCfg();
  showModal(c?'Change passcode':'Set a passcode',`<div style="display:flex;flex-direction:column;gap:12px;">
    <div style="font-size:12.5px;color:var(--bone-dim);line-height:1.5;">Atlas asks for this when it opens and after you’ve been away. It stops someone at your desk from browsing your numbers. Your data file itself isn’t encrypted, so keep your ${MACHINE}’s own password on too.</div>
    <div><div class="label" style="margin-bottom:6px;">New passcode (4+ digits or characters)</div><input class="field mono" id="lk-1" type="password" autocomplete="new-password"></div>
    <div><div class="label" style="margin-bottom:6px;">Type it again</div><input class="field mono" id="lk-2" type="password" autocomplete="new-password"></div>
    <div><div class="label" style="margin-bottom:6px;">Lock after</div><select class="field" id="lk-min">${[[0,'Only when Atlas opens'],[5,'5 minutes away'],[15,'15 minutes away'],[30,'30 minutes away'],[60,'1 hour away']].map(([v,l])=>`<option value="${v}" ${(c?.minutes??15)===v?'selected':''}>${l}</option>`).join('')}</select></div>
  </div>`,()=>{
    const a=document.getElementById('lk-1').value,b=document.getElementById('lk-2').value;
    if(a.length<4){alert('Use at least 4 characters.');return false}
    if(a!==b){alert('The two passcodes don’t match.');return false}
    const salt=uid()+uid();const minutes=+document.getElementById('lk-min').value;
    sha256(salt+a).then(hash=>{store.set('settings:lock',{salt,hash,minutes});showToast('Passcode set. Atlas will ask for it when it opens.',null,null,4000);render()});
    return true;
  },'Set passcode');
}
function removeLock(){if(confirm('Turn off the passcode?')){store.del('settings:lock');render()}}
function renderSettingsLife(){
  const ns=notifySettings();const c=lockCfg();
  return `${PHONE?'':`<div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">Reminders & shortcuts</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:14px;">Atlas sends a desktop notification for anything overdue or due today while it’s open — invoices, bills, renewals, birthdays, follow-ups and tasks.</div>
    <label style="display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--line);border-radius:9px;cursor:pointer;background:var(--ink-3);margin-bottom:10px;">
      <input type="checkbox" ${ns.on?'checked':''} onchange="store.set('settings:notify',{...notifySettings(),on:this.checked})" style="accent-color:var(--ember);"><span>Desktop reminders</span>
      <button class="btn btn-ghost btn-sm" style="margin-left:auto;" onclick="event.preventDefault();store.set('notify:sent',{});runReminders();showToast('Sent today’s reminders again',null,null,2000)">Test now</button></label>
    <div style="font-size:12.5px;color:var(--bone-dim);">Quick add from any app: <span class="mono" style="color:var(--bone);">${IS_MAC?'⌘':'Ctrl'}+Shift+Space</span> · Search: <span class="mono" style="color:var(--bone);">${IS_MAC?'⌘':'Ctrl'}+K</span></div>
  </div>`}
  <div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">${icon('lock',15)} Passcode lock</div>
    <div style="font-size:13px;color:var(--bone-dim);margin-bottom:14px;">${c?`On · locks ${c.minutes?`after ${c.minutes} minutes away and `:''}when Atlas opens.`:'Off. Add a passcode if other people use this '+MACHINE+'.'}</div>
    <div style="display:flex;gap:8px;">${c?`<button class="btn btn-sm" onclick="openLockSetup()">Change passcode</button><button class="btn btn-sm" onclick="showLock()">Lock now</button><button class="btn btn-sm btn-danger" onclick="removeLock()">Turn off</button>`:`<button class="btn btn-sm btn-primary" onclick="openLockSetup()">${icon('lock',12)} Set a passcode</button>`}</div>
  </div>`;
}

// ---------------- Routine categories for new users ----------------
function getRoutineCategories(){
  const hidden=store.get('routine:hidden',[])||[];
  const custom=store.get('routine:categories:custom',[]);
  return [...DEFAULT_ROUTINE_CATEGORIES.filter(c=>!hidden.includes(c.id)),...custom];
}
function applyStarterHabits(){
  store.set('routine:hidden',DEFAULT_ROUTINE_CATEGORIES.map(c=>c.id).filter(id=>id!=='chores'));
  store.set('routine:categories:custom',[
    {id:'move',label:'Move your body',color:'#3df5a8',icon:'dumbbell'},{id:'read',label:'Read 10 pages',color:'#7aa2ff',icon:'file'},
    {id:'mind',label:'Meditate / pray',color:'#b57cff',icon:'heart'},{id:'water',label:'Drink 2L water',color:'#3fb4ff',icon:'circle'},
    {id:'plan',label:'Plan tomorrow',color:'#ffb547',icon:'calendar'}]);
}

// ---------------- Sample data ----------------
function loadSampleData(){
  const d=n=>addDays(today(),-n),f=n=>addDays(today(),n);
  const mkP=(name,type,color,cur,modules,extra={})=>{const id=uid();const meta={id,name,type,color,currency:cur,modules,goals:{},createdAt:new Date(Date.now()-86400000*120).toISOString(),...extra};store.set(`profile:${id}:meta`,meta);const l=store.get('profiles:list',[]);l.push({id,name,type,color,createdAt:meta.createdAt});store.set('profiles:list',l);return id};
  store.set('settings:user',{name:'Alex'});store.set('settings:fx',{reporting:'£',rates:{}});
  const a=mkP('Northwind Studio','Consulting','#3fb4ff','£',['contacts','analytics'],{goals:{revenue:6000,profit:3500},taxRate:25});
  const b=mkP('Lumen Goods','E-commerce','#b57cff','£',['inventory','analytics'],{goals:{revenue:4000},taxRate:20});
  store.set(`profile:${a}:balance`,[{id:uid(),kind:'asset',category:'Bank',name:'Northwind business account',currency:'£',amount:14200},{id:uid(),kind:'liability',category:'Tax Owed',name:'VAT return',currency:'£',amount:2100,dueDate:f(5)}]);
  store.set(`profile:${b}:balance`,[{id:uid(),kind:'asset',category:'Bank',name:'Lumen bank account',currency:'£',amount:3900}]);
  const ta=[];for(let i=0;i<90;i+=6)ta.push({id:uid(),date:d(i),type:'revenue',description:`Client retainer — ${['Harbour Co','Peak Labs','Field & Oak'][i%3]}`,category:'Retainers',currency:'£',amount:1500+(i%4)*250,paid:true});
  ta.push({id:uid(),date:d(10),type:'revenue',description:'Brand strategy workshop',category:'Workshops',currency:'£',amount:2400,paid:false,dueDate:d(2)});
  for(let i=2;i<90;i+=15)ta.push({id:uid(),date:d(i),type:'cost',description:'Software & tools',category:'Software',currency:'£',amount:180,recurring:i===2?'monthly':null});
  ta.push({id:uid(),date:d(20),type:'cost',description:'Freelance designer',category:'Subcontractors',currency:'£',amount:900});
  store.set(`profile:${a}:transactions`,ta);
  const stages=['New','Contacted','Qualified','Won','Lost','Attempted'];
  store.set(`profile:${a}:contacts`,['Maya Chen','Tom Rivers','Priya Nair','Leo Hart','Sara Diaz','Ben Okafor','Hana Ito','Omar Aziz'].map((n,i)=>({id:uid(),name:n,stage:stages[i%6],source:i%2?'Referral':'LinkedIn',company:['Harbour Co','Peak Labs','Field & Oak','Nova'][i%4],value:2000+i*400,createdAt:new Date(Date.now()-86400000*i*5).toISOString(),nextActionDate:i<3?d(i):f(i),nextAction:'Follow up on proposal'})));
  const inv=[{id:uid(),name:'Linen tote',channel:'Shopify',costPrice:6,salePrice:24,currency:'£',qtyOnHand:42,qtySold:0},{id:uid(),name:'Ceramic mug',channel:'Etsy',costPrice:5,salePrice:18,currency:'£',qtyOnHand:3,qtySold:0}];
  const tb=[];for(let i=0;i<40;i++){const it=inv[i%3===0?1:0];it.qtySold++;tb.push({id:uid(),date:d(i*2%60),type:'revenue',description:`Sold 1 × ${it.name}`,category:'Product sales',currency:'£',amount:it.salePrice,sourceItemId:it.id,paid:true},{id:uid(),date:d(i*2%60),type:'cost',description:`COGS — 1 × ${it.name}`,category:'Inventory',currency:'£',amount:it.costPrice,sourceItemId:it.id})}
  tb.push({id:uid(),date:d(4),type:'cost',description:'Instagram ads',category:'Advertising',currency:'£',amount:220});
  store.set(`profile:${b}:inventory`,inv);store.set(`profile:${b}:transactions`,tb);
  store.set('personal:balance',[{id:uid(),kind:'asset',category:'Bank',name:'Current account',currency:'£',amount:3400},{id:uid(),kind:'asset',category:'Investments',name:'Index fund ISA',currency:'£',amount:18500},{id:uid(),kind:'liability',category:'Credit Card',name:'Credit card',currency:'£',amount:640,dueDate:f(9)}]);
  store.set('bills:log',[{id:uid(),date:d(14),description:'Rent',type:'Rent',currency:'£',amount:1350,recurring:'monthly'},{id:uid(),date:d(3),description:'Groceries',type:'Food',currency:'£',amount:86},{id:uid(),date:d(8),description:'Groceries',type:'Food',currency:'£',amount:74},{id:uid(),date:d(6),description:'Train to London',type:'Travel',currency:'£',amount:58},{id:uid(),date:d(11),description:'Gym membership',type:'Subscription',currency:'£',amount:40,recurring:'monthly'}]);
  store.set('life:budgets',{Rent:1350,Food:350,Travel:150,Subscription:80});
  store.set('transfers:log',[{id:uid(),date:d(12),kind:'dividend',from:a,to:'personal',fromAcct:null,toAcct:null,amount:2500,currency:'£',toAmount:2500,toCurrency:'£',notes:'Monthly dividend',effects:[]},{id:uid(),date:d(40),kind:'dividend',from:a,to:'personal',fromAcct:null,toAcct:null,amount:2500,currency:'£',toAmount:2500,toCurrency:'£',notes:'',effects:[]}]);
  lset('tasks',[
    {id:uid(),title:'Send Peak Labs proposal',due:today(),priority:'high',area:a,done:false,top:today()},
    {id:uid(),title:'Reorder ceramic mugs',due:today(),priority:'normal',area:b,done:false,top:today()},
    {id:uid(),title:'Book dentist',due:d(1),priority:'normal',area:'personal',done:false},
    {id:uid(),title:'Review monthly budget',due:f(2),priority:'normal',area:'personal',done:false,repeat:'monthly'},
    {id:uid(),title:'Plan weekend trip',due:null,priority:'normal',area:'personal',done:false}].map(x=>({...x,notes:'',createdAt:new Date().toISOString()})));
  lset('goals',[
    {id:uid(),title:'Run a half marathon',area:'Health',why:'Prove I can commit to something hard',target:f(120),status:'active',milestones:[{id:uid(),text:'Run 5k non-stop',done:true},{id:uid(),text:'Run 10k',done:true},{id:uid(),text:'Run 16k',done:false},{id:uid(),text:'Race day',done:false}]},
    {id:uid(),title:'Six-month cash buffer',area:'Wealth',why:'Freedom to say no to bad clients',target:f(200),status:'active',milestones:[],progress:45},
    {id:uid(),title:'Call Mum every Sunday',area:'Relationships',why:'',target:null,status:'active',milestones:[],progress:70}]);
  lset('renewals',[{id:uid(),name:'Passport',category:'Passport',expires:f(75),remind:90,notes:'Renew online — 3 weeks processing'},{id:uid(),name:'Car insurance',category:'Car (MOT, tax, insurance)',expires:f(12),remind:30,cost:520,currency:'£'},{id:uid(),name:'northwind.studio domain',category:'Domain / hosting',expires:f(160),remind:30,cost:18,currency:'£'}]);
  lset('people',[{id:uid(),name:'Mum',relation:'Family',birthday:'1962-'+f(4).slice(5),touch:7,last:d(9)},{id:uid(),name:'Jamie Cole',relation:'Friend',birthday:'1991-03-14',touch:30,last:d(45)},{id:uid(),name:'Dr. Lena Park',relation:'Mentor',touch:60,last:d(20)}].map(p=>({...p,phone:'',notes:''})));
  const ck=[];for(let i=0;i<24;i++)ck.push({id:uid(),date:d(i+1),energy:2+((i*7)%4),mood:2+((i*5)%4),sleep:2+((i*3)%4),note:i%5===0?['Shipped the Harbour Co deck. Felt good.','Slept badly, slow day.','Long run in the sun.','Great call with Lena.','Too much screen time.'][i/5|0]:''});
  lset('checkins',ck);
  applyStarterHabits();
  store.set('settings:sections',{money:true,routine:true,gym:false,running:false,tasks:true,goals:true,people:true,renewals:true,checkin:true});
  store.set('settings:demo',true);store.set('settings:setupDone',true);
  closeModal();navigate('today');
  showToast('Sample data loaded. Clear it from the banner on Today when you’re ready.',null,null,6000);
}
function clearSampleData(){
  if(!confirm('Remove all the sample data and start fresh?'))return;
  store.keys().forEach(k=>store.del(k));
  store.set('settings:fresh',true);
  window._wiz=null;render();setTimeout(()=>openSetupWizard(1),100);
}

// ============================================================
// SCHEDULE — start times, durations and a day plan for tasks
// ============================================================
const PLAN_PPH=52; // pixels per hour on the timeline
const fmtTime=hm=>{if(!hm)return '';const [h,m]=hm.split(':').map(Number);return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`};
const fmtDur=min=>{min=+min||0;if(!min)return '';const h=Math.floor(min/60),m=min%60;return h?`${h}h${m?` ${m}m`:''}`:`${m}m`};
const hmToMin=hm=>{const [h,m]=(hm||'0:0').split(':').map(Number);return h*60+(m||0)};
const minToHm=n=>{n=Math.max(0,Math.min(24*60-5,Math.round(n)));return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`};
function taskTimeLabel(x){if(!x.time)return '';return x.duration?`${fmtTime(x.time)}–${minToHm(hmToMin(x.time)+(+x.duration))}`:fmtTime(x.time)}
function durationOptions(sel){
  const opts=[['','Not set'],[15,'15 min'],[30,'30 min'],[45,'45 min'],[60,'1 hour'],[90,'1½ hours'],[120,'2 hours'],[180,'3 hours'],[240,'4 hours'],[360,'6 hours'],[480,'All day (8h)']];
  if(sel&&!opts.some(o=>+o[0]===+sel))opts.push([sel,fmtDur(sel)]);
  return opts.map(([v,l])=>`<option value="${v}" ${String(sel||'')===String(v)?'selected':''}>${l}</option>`).join('');
}

// "Call accountant 3pm 30m", "Gym tomorrow 7:30 for 1h", "Team call at 14:00 1.5h"
function parseTaskText(raw){
  let t=' '+raw+' ';let time=null,duration=null,due=null;
  const dm=t.match(/\s(?:for\s+)?(\d+(?:\.\d+)?)\s*(h|hr|hrs|hour|hours|m|min|mins|minute|minutes)(?=[\s,.]|$)/i);
  if(dm){const n=parseFloat(dm[1]);duration=/^h/i.test(dm[2])?Math.round(n*60):Math.round(n);if(duration>0&&duration<=24*60)t=t.replace(dm[0],' ');else duration=null}
  let tm=t.match(/\s(?:at\s+|@\s*)?(\d{1,2})(?:[:.](\d{2}))?\s*(am|pm)(?=[\s,.]|$)/i);
  if(tm){let h=+tm[1]%12;if(/pm/i.test(tm[3]))h+=12;const m=+(tm[2]||0);if(h<24&&m<60){time=minToHm(h*60+m);t=t.replace(tm[0],' ')}}
  else{tm=t.match(/\s(?:at\s+|@\s*)?([01]?\d|2[0-3])[:.]([0-5]\d)(?=[\s,.]|$)/);if(tm){time=minToHm(+tm[1]*60+ +tm[2]);t=t.replace(tm[0],' ')}}
  const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const dd=t.match(/\s(today|tonight|tomorrow|tmrw|(?:on\s+|next\s+)?(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday))(?=[\s,.]|$)/i);
  if(dd){const w=dd[1].toLowerCase().replace(/^(on|next)\s+/,'');
    if(w==='today'||w==='tonight')due=today();else if(w==='tomorrow'||w==='tmrw')due=addDays(today(),1);
    else{const target=days.indexOf(w);const cur=new Date(today()+'T12:00:00').getDay();let diff=(target-cur+7)%7;if(diff===0||/^next/i.test(dd[1]))diff+=diff===0?7:0;due=addDays(today(),diff)}
    t=t.replace(dd[0],' ')}
  const title=t.replace(/\s+/g,' ').trim().replace(/\s+(at|for|on)$/i,'');
  return {title,time,duration,due};
}

// ---------- day plan ----------
function planDate(){return window._planDate||today()}
function shiftPlanDate(n){window._planDate=n===0?today():addDays(planDate(),n);render()}
function tasksOn(date){return lget('tasks').filter(x=>x.due===date)}
function layoutBlocks(items){
  // items sorted by start; assign lanes inside overlapping clusters
  const out=[];let cluster=[],clusterEnd=-1;
  const flush=()=>{const lanes=[];cluster.forEach(b=>{let i=lanes.findIndex(e=>e<=b.s);if(i<0){i=lanes.length;lanes.push(0)}lanes[i]=b.e;b.lane=i});cluster.forEach(b=>{b.lanes=lanes.length;out.push(b)});cluster=[]};
  items.forEach(b=>{if(cluster.length&&b.s>=clusterEnd){flush();clusterEnd=-1}cluster.push(b);clusterEnd=Math.max(clusterEnd,b.e)});
  if(cluster.length)flush();return out;
}
function planStats(date){
  const timed=tasksOn(date).filter(x=>x.time&&!x.done).map(x=>({x,s:hmToMin(x.time),e:hmToMin(x.time)+(+x.duration||30)})).sort((a,b)=>a.s-b.s);
  let conflicts=0;for(let i=1;i<timed.length;i++)if(timed[i].s<Math.max(...timed.slice(0,i).map(b=>b.e)))conflicts++;
  const planned=tasksOn(date).filter(x=>!x.done).reduce((s,x)=>s+(+x.duration||0),0);
  return {timed,conflicts,planned};
}
function dayPlanCard({compact=false}={}){
  if(typeof sectionOn==='function'&&!sectionOn('tasks'))return '';
  const date=compact?today():planDate();const isToday=date===today();
  const all=tasksOn(date);
  const open=all.filter(x=>!x.done);
  const loose=[...(isToday?taskBuckets(lget('tasks')).overdue:[]),...open.filter(x=>!x.time)];
  const st=planStats(date);
  const blocks=layoutBlocks(all.filter(x=>x.time).map(x=>({x,s:hmToMin(x.time),e:hmToMin(x.time)+Math.max(15,+x.duration||30)})).sort((a,b)=>a.s-b.s||b.e-a.e));
  const earliest=Math.min(6,...blocks.map(b=>Math.floor(b.s/60)));const latest=Math.max(23,...blocks.map(b=>Math.ceil(b.e/60)));
  const H0=earliest,H1=Math.min(24,latest);const height=(H1-H0)*PLAN_PPH;
  const y=min=>(min-H0*60)/60*PLAN_PPH;
  const nowMin=new Date().getHours()*60+new Date().getMinutes();
  const next=st.timed.find(b=>b.e>nowMin);
  const summary=[st.planned?`${fmtDur(st.planned)} planned`:'',st.timed.length?`${st.timed.length} timed`:'',st.conflicts?`<span style="color:var(--rust);">${st.conflicts} clash${st.conflicts>1?'es':''}</span>`:'',isToday&&next?`next: ${escapeHtml(next.x.title)} at ${fmtTime(next.x.time)}`:''].filter(Boolean).join(' · ')||(PHONE?'Nothing scheduled yet. Tap a time to add a task.':'Nothing scheduled yet. Click a time to add a task, or drag one in.');
  const hours=[];for(let h=H0;h<H1;h++)hours.push(`<div class="plan-hour" style="top:${(h-H0)*PLAN_PPH}px;height:${PLAN_PPH}px;" onclick="planClick(event,'${date}',${h})"><span class="plan-hl mono">${String(h).padStart(2,'0')}:00</span></div>`);
  const blockHtml=blocks.map(b=>{
    const x=b.x;const col=areaColor(x.area);const h=Math.max(22,y(b.e)-y(b.s)-2);const w=100/b.lanes;
    const clash=st.timed.some(o=>o.x.id!==x.id&&o.s<b.e&&b.s<o.e)&&!x.done;
    return `<div class="plan-block${x.done?' done':''}" draggable="true" ondragstart="planDragStart(event,'${x.id}')" onclick="event.stopPropagation();openTaskModal('${x.id}')" title="${escAttr(x.title)} · ${taskTimeLabel(x)}"
      style="top:${y(b.s)+1}px;height:${h}px;left:calc(58px + (100% - 64px) * ${b.lane*w/100});width:calc((100% - 64px) * ${w/100} - 4px);border-color:${clash?'var(--rust)':col};background:linear-gradient(180deg,color-mix(in srgb,${col} 26%,transparent),color-mix(in srgb,${col} 12%,transparent));">
      <div style="display:flex;gap:6px;align-items:flex-start;"><input type="checkbox" ${x.done?'checked':''} onclick="event.stopPropagation()" onchange="toggleTask('${x.id}')" style="accent-color:${col};margin-top:2px;flex-shrink:0;"><div style="min-width:0;"><div class="plan-bt">${x.priority==='high'?'<b style="color:var(--rust);">!</b> ':''}${escapeHtml(x.title)}</div>${h>34?`<div class="plan-bs mono">${taskTimeLabel(x)}${clash?' · clash':''}</div>`:''}</div></div>
      <div class="plan-resize" draggable="true" ondragstart="event.stopPropagation();planResizeStart(event,'${x.id}')" title="Drag to change how long"></div></div>`}).join('');
  const nowLine=isToday&&nowMin>=H0*60&&nowMin<=H1*60?`<div class="plan-now" style="top:${y(nowMin)}px;"><span></span></div>`:'';
  const looseHtml=loose.length?loose.map(x=>`<div class="plan-chip" draggable="true" ondragstart="planDragStart(event,'${x.id}')" onclick="openTaskModal('${x.id}')"><span style="width:7px;height:7px;border-radius:50%;background:${areaColor(x.area)};flex-shrink:0;"></span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(x.title)}</span>${x.due&&x.due<date?`<span style="color:var(--rust);font-size:11px;">overdue</span>`:''}${x.duration?`<span class="mono" style="font-size:11px;color:var(--bone-mute);">${fmtDur(x.duration)}</span>`:''}<button class="btn btn-ghost btn-sm" style="padding:2px 6px;" title="Put in the next free slot" onclick="event.stopPropagation();autoSlot('${x.id}','${date}')">${icon('clock',12)}</button></div>`).join(''):`<div style="font-size:12.5px;color:var(--bone-mute);">Everything for this day has a time.</div>`;
  const dateLabel=isToday?'Today':date===addDays(today(),1)?'Tomorrow':new Date(date+'T12:00:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'short'});
  return `<div class="card plan-card" style="padding:20px 22px;margin-bottom:16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px;">
      <div class="serif" style="font-size:18px;font-weight:500;">${compact?'Your day':'Day plan'}${compact?'':` · <span style="color:var(--ember);">${dateLabel}</span>`}</div>
      ${compact?`<a href="#" onclick="navigate('tasks');return false;" style="font-size:12.5px;color:var(--ember);">Plan in Tasks</a>`:`<div style="display:flex;gap:6px;"><button class="btn btn-sm" onclick="shiftPlanDate(-1)" aria-label="Previous day">‹</button>${isToday?'':`<button class="btn btn-sm" onclick="shiftPlanDate(0)">Today</button>`}<button class="btn btn-sm" onclick="shiftPlanDate(1)" aria-label="Next day">›</button></div>`}
    </div>
    <div style="font-size:12px;color:var(--bone-mute);margin-bottom:14px;">${summary}</div>
    <div class="plan-wrap">
      <div class="plan-scroll" id="plan-scroll-${compact?'c':'f'}" style="max-height:${compact?340:560}px;">
        <div class="plan-tl" id="plan-tl-${compact?'c':'f'}" data-date="${date}" data-h0="${H0}" style="height:${height}px;" ondragover="event.preventDefault()" ondrop="planDrop(event,this)">${hours.join('')}${blockHtml}${nowLine}</div>
      </div>
      <div class="plan-side">
        <div class="label" style="margin-bottom:8px;">No time yet${loose.length?` · ${loose.length}`:''}</div>
        <div style="display:flex;flex-direction:column;gap:6px;">${looseHtml}</div>
        <div style="font-size:11.5px;color:var(--bone-mute);margin-top:12px;line-height:1.5;">${PHONE?`Tap ${icon('clock',11)} to put a task in the next free slot. Tap a block to change its time or length.`:`Drag a task onto the timeline, or press ${icon('clock',11)} to drop it into the next free slot. Drag a block’s bottom edge to change how long it takes.`}</div>
      </div>
    </div>
  </div>`;
}
function planClick(e,date,h){
  const r=e.currentTarget.getBoundingClientRect();const half=(e.clientY-r.top)>r.height/2?30:0;
  openTaskModal(null,{due:date,time:minToHm(h*60+half),duration:60});
}
function planDragStart(e,id){const b=e.currentTarget.classList.contains('plan-block')?e.currentTarget.getBoundingClientRect():null;window._dragOff=b?e.clientY-b.top:0;e.dataTransfer.setData('text/plain','move:'+id);e.dataTransfer.effectAllowed='move'}
function planResizeStart(e,id){e.dataTransfer.setData('text/plain','size:'+id);e.dataTransfer.effectAllowed='move'}
function planDrop(e,el){
  e.preventDefault();const data=e.dataTransfer.getData('text/plain')||'';const [kind,id]=data.split(':');if(!id)return;
  const r=el.getBoundingClientRect();const H0=+el.dataset.h0;
  const off=kind==='move'?(window._dragOff||0):0;const min=Math.round((H0*60+(e.clientY-off-r.top)/PLAN_PPH*60)/15)*15;
  const a=lget('tasks');const x=a.find(t=>t.id===id);if(!x)return;
  if(kind==='size'){if(!x.time)return;x.duration=Math.max(15,min-hmToMin(x.time))}
  else{x.time=minToHm(min);x.due=el.dataset.date;if(!x.duration)x.duration=30}
  lset('tasks',a);render();
}
function freeSlot(date,len,from){
  const busy=tasksOn(date).filter(x=>x.time&&!x.done).map(x=>[hmToMin(x.time),hmToMin(x.time)+(+x.duration||30)]).sort((a,b)=>a[0]-b[0]);
  let s=Math.ceil(from/15)*15;
  for(const [bs,be] of busy){if(s+len<=bs)break;if(be>s)s=Math.ceil(be/15)*15}
  return s+len<=24*60?s:null;
}
function autoSlot(id,date){
  const a=lget('tasks');const x=a.find(t=>t.id===id);if(!x)return;
  const len=+x.duration||30;
  const now=new Date();const from=date===today()?Math.max(8*60,now.getHours()*60+now.getMinutes()+5):9*60;
  const s=freeSlot(date,len,from);
  if(s===null){showToast('No free slot left that day',null,null,2500);return}
  x.due=date;x.time=minToHm(s);x.duration=len;lset('tasks',a);render();
  showToast(`${x.title} → ${taskTimeLabel(x)}`,'Undo',()=>{const b=lget('tasks');const y=b.find(t=>t.id===id);if(y){y.time=null;lset('tasks',b);render()}},4000);
}
function scrollPlans(){
  ['c','f'].forEach(k=>{const sc=document.getElementById('plan-scroll-'+k),tl=document.getElementById('plan-tl-'+k);if(!sc||!tl||sc.dataset.done)return;
    sc.dataset.done=1;const H0=+tl.dataset.h0;const first=[...tl.querySelectorAll('.plan-block')].map(b=>parseFloat(b.style.top)).sort((a,b)=>a-b)[0];
    const now=tl.querySelector('.plan-now');const target=now?parseFloat(now.style.top)-80:first!==undefined?first-30:(8-H0)*PLAN_PPH;
    sc.scrollTop=Math.max(0,target)});
}
new MutationObserver(()=>scrollPlans()).observe(document.documentElement,{childList:true,subtree:true});

// ---------- timed reminders: 10 minutes before a task starts ----------
function runTimedReminders(){
  try{
    if(!notifySettings().on||typeof Notification==='undefined')return;
    const t=today();const sent=store.get('notify:sent',{})||{};if(sent.date!==t){sent.date=t;sent.ids=[]}
    const now=new Date();const nm=now.getHours()*60+now.getMinutes();
    const soon=tasksOn(t).filter(x=>!x.done&&x.time&&hmToMin(x.time)-nm<=10&&hmToMin(x.time)-nm>=-1&&!sent.ids.includes('at:'+x.id+':'+x.time));
    soon.forEach(x=>{const n=new Notification(`${fmtTime(x.time)} · ${x.title}`,{body:`${x.duration?fmtDur(x.duration)+' · ':''}${areaName(x.area)}`});n.onclick=()=>{window.focus();navigate('tasks')};sent.ids.push('at:'+x.id+':'+x.time)});
    if(soon.length)store.set('notify:sent',sent);
  }catch(e){console.error('timed reminders',e)}
}
function startReminders(){setTimeout(runReminders,4000);setInterval(runReminders,30*60*1000);setInterval(runTimedReminders,60*1000);setTimeout(runTimedReminders,6000)}

// ======================================================================
// ANALYTICS — customisable metric library (add, remove, reorder per business)
// ======================================================================
function anaCtx(pid,range){
  const meta=store.get(`profile:${pid}:meta`)||{};
  const cur=meta.currency||'£';
  const R=anaRangeKeys(range);
  const rep=t=>toReporting(t.amount||0,t.currency||cur);
  const txsAll=store.get(`profile:${pid}:transactions`,[]);
  const txs=txsAll.filter(t=>anaIn(t.date,R.from,R.to));
  const prev=txsAll.filter(t=>anaIn(t.date,R.pFrom,R.pTo));
  const sum=(arr,type)=>arr.filter(t=>t.type===type).reduce((a,t)=>a+rep(t),0);
  const F={rev:sum(txs,'revenue'),cost:sum(txs,'cost'),pRev:sum(prev,'revenue'),pCost:sum(prev,'cost')};
  F.net=F.rev-F.cost;F.pNet=F.pRev-F.pCost;
  const c={pid,meta,cur,range,R,rep,txsAll,txs,prev,F,_m:{}};
  const memo=(k,fn)=>()=>c._m[k]||(c._m[k]=fn(c));
  c.pipe=memo('pipe',pipeCalc);c.prod=memo('prod',prodCalc);c.trade=memo('trade',tradeCalc);c.content=memo('content',contentCalc);
  return c;
}
function pipeCalc(c){
  const [one,many]=CONTACT_NOUN[c.meta.type]||['contact','contacts'];
  const contacts=store.get(`profile:${c.pid}:contacts`,[]);
  const CLOSED=['Lost','Closed - unreachable','Closed - Not interested'];
  const inP=contacts.filter(x=>anaIn(x.createdAt,c.R.from,c.R.to)),inPrev=contacts.filter(x=>anaIn(x.createdAt,c.R.pFrom,c.R.pTo));
  const open=contacts.filter(x=>x.stage!=='Won'&&!CLOSED.includes(x.stage));
  const wonP=inP.filter(x=>x.stage==='Won').length;
  const conv=inP.length?wonP/inP.length*100:0,prevConv=inPrev.length?inPrev.filter(x=>x.stage==='Won').length/inPrev.length*100:0;
  const wonAll=contacts.filter(x=>x.stage==='Won'),wonVal=wonAll.filter(x=>+x.value>0);
  const base=inP.length?inP:contacts;
  return {one,many,contacts,inP,inPrev,open,wonP,conv,prevConv,CLOSED,base,
    cpl:inP.length?c.F.cost/inP.length:0,pCpl:inPrev.length?c.F.pCost/inPrev.length:0,
    pipeVal:open.reduce((a,x)=>a+toReporting(+x.value||0,c.cur),0),
    avgDeal:wonVal.length?wonVal.reduce((a,x)=>a+toReporting(+x.value||0,c.cur),0)/wonVal.length:0,
    overdue:open.filter(x=>x.nextActionDate&&x.nextActionDate<=today()).length};
}
function prodCalc(c){
  const items=store.get(`profile:${c.pid}:inventory`,[]);const byId=Object.fromEntries(items.map(i=>[i.id,i]));
  const qtyOf=t=>{const m=/^Sold\s+(\d+)\s*×/.exec(t.description||'');if(m)return +m[1];const it=byId[t.sourceItemId];return it&&it.salePrice>0?Math.max(1,Math.round((t.amount||0)/it.salePrice)):1};
  const sales=a=>a.filter(t=>t.type==='revenue');
  const units=a=>sales(a).filter(t=>t.sourceItemId).reduce((s,t)=>s+qtyOf(t),0);
  const isCogs=t=>t.type==='cost'&&/^COGS/i.test(t.description||'');
  const cogs=a=>a.filter(isCogs).reduce((s,t)=>s+c.rep(t),0);
  const orders=sales(c.txs).length,pOrders=sales(c.prev).length;
  const gp=c.F.rev-cogs(c.txs),pgp=c.F.pRev-cogs(c.prev);
  const per={};sales(c.txs).filter(t=>t.sourceItemId&&byId[t.sourceItemId]).forEach(t=>{const it=byId[t.sourceItemId];const p=per[it.id]=per[it.id]||{it,units:0,rev:0};p.units+=qtyOf(t);p.rev+=c.rep(t)});
  const k30=anaRangeKeys(30);const sold30={};
  c.txsAll.filter(t=>t.type==='revenue'&&t.sourceItemId&&anaIn(t.date,k30.from,k30.to)).forEach(t=>{sold30[t.sourceItemId]=(sold30[t.sourceItemId]||0)+qtyOf(t)});
  const soldAll=items.reduce((a,i)=>a+(i.qtySold||0),0),onHand=items.reduce((a,i)=>a+Math.max(0,i.qtyOnHand||0),0);
  return {items,orders,pOrders,u:units(c.txs),pu:units(c.prev),gp,gm:c.F.rev>0?gp/c.F.rev*100:0,pgm:c.F.pRev>0?pgp/c.F.pRev*100:0,
    aov:orders?c.F.rev/orders:0,paov:pOrders?c.F.pRev/pOrders:0,isCogs,
    stockVal:items.reduce((a,i)=>a+toReporting((i.qtyOnHand||0)*(i.costPrice||0),i.currency||c.cur),0),
    top:Object.values(per).sort((a,b)=>b.rev-a.rev).slice(0,8),per,
    unlinked:sales(c.txs).filter(t=>!t.sourceItemId).reduce((a,t)=>a+c.rep(t),0),
    cover:items.map(i=>{const rate=(sold30[i.id]||0)/30;return {i,rate,days:rate>0?(i.qtyOnHand||0)/rate:Infinity}}).filter(x=>x.rate>0||(x.i.qtyOnHand||0)<=0).sort((a,b)=>a.days-b.days).slice(0,6),
    outN:items.filter(i=>(i.qtyOnHand||0)<=0).length,lowN:items.filter(i=>(i.qtyOnHand||0)>0&&(i.qtyOnHand||0)<=3).length,
    onHand,sellThrough:soldAll+onHand>0?soldAll/(soldAll+onHand)*100:0};
}
function tradeCalc(c){
  const daily={};c.txs.forEach(t=>{daily[t.date]=(daily[t.date]||0)+(t.type==='revenue'?1:-1)*c.rep(t)});
  const days=Object.entries(daily).sort((a,b)=>a[0]<b[0]?-1:1);
  const wins=days.filter(d=>d[1]>0),losses=days.filter(d=>d[1]<0);
  const gW=wins.reduce((a,d)=>a+d[1],0),gL=-losses.reduce((a,d)=>a+d[1],0);
  let cum=0,peak=0,dd=0;const pts=[{date:c.R.from,net:0}];
  days.forEach(([d,v])=>{cum+=v;peak=Math.max(peak,cum);dd=Math.max(dd,peak-cum);pts.push({date:d,net:cum})});
  const cat={};c.txs.forEach(t=>{const k=t.category||'Uncategorised';cat[k]=cat[k]||{net:0,n:0};cat[k].net+=(t.type==='revenue'?1:-1)*c.rep(t);cat[k].n++});
  return {days,wins,losses,gW,gL,pf:gL>0?gW/gL:(gW>0?Infinity:0),avgW:wins.length?gW/wins.length:0,avgL:losses.length?gL/losses.length:0,dd,peak,pts,
    best:days.reduce((m,d)=>d[1]>(m?m[1]:-Infinity)?d:m,null),worst:days.reduce((m,d)=>d[1]<(m?m[1]:Infinity)?d:m,null),
    catRows:Object.entries(cat).sort((a,b)=>b[1].net-a[1].net),
    fees:c.txs.filter(t=>t.type==='cost'&&/fee|commission|spread|swap|data|platform|subscription/i.test(`${t.category} ${t.description}`)).reduce((a,t)=>a+c.rep(t),0)};
}
function contentCalc(c){
  const streams=anaByCategory(c.txs,'revenue',c.rep,ANA_PAL);
  const pS={};c.prev.filter(t=>t.type==='revenue').forEach(t=>{const k=t.category||'Uncategorised';pS[k]=(pS[k]||0)+c.rep(t)});
  return {streams,prevStreams:pS,top:streams[0],share:streams[0]&&c.F.rev>0?streams[0].value/c.F.rev*100:0};
}
function monthsSeries(c,type){
  const now=new Date();const months=[];
  for(let i=11;i>=0;i--){const d=new Date(now.getFullYear(),now.getMonth()-i,1);months.push({k:`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`,label:d.toLocaleDateString('en-GB',{month:'short'}),value:0})}
  c.txsAll.filter(t=>type==='net'||t.type===type).forEach(t=>{const m=months.find(x=>x.k===(t.date||'').slice(0,7));if(m)m.value+=(type==='net'&&t.type==='cost'?-1:1)*c.rep(t)});
  return months;
}
const empty=t=>`<div style="color:var(--bone-mute);font-size:13px;padding:16px 0;">${t}</div>`;
const tbl=(head,rows)=>`<table class="table"><thead><tr>${head.map((h,i)=>`<th${i?' style="text-align:right;"':''}>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`;

// ---- the library ----
const W=[
 // General
 {id:'g.rev',g:'General',size:'kpi',label:'Revenue',r:c=>anaKpi('Revenue',fmtReporting(c.F.rev),{delta:anaDelta(c.F.rev,c.F.pRev)})},
 {id:'g.cost',g:'General',size:'kpi',label:'Costs',r:c=>anaKpi('Costs',fmtReporting(c.F.cost),{delta:anaDelta(c.F.cost,c.F.pCost),goodUp:false})},
 {id:'g.net',g:'General',size:'kpi',label:'Net profit',r:c=>anaKpi('Net profit',fmtReporting(c.F.net),{delta:anaDelta(c.F.net,c.F.pNet),accent:c.F.net>=0?'var(--jade)':'var(--rust)'})},
 {id:'g.margin',g:'General',size:'kpi',label:'Net margin',r:c=>{const m=c.F.rev>0?c.F.net/c.F.rev*100:0;return anaKpi('Net margin',c.F.rev>0?m.toFixed(0)+'%':'—',{accent:m>=0?'var(--jade)':'var(--rust)'})}},
 {id:'g.cash',g:'General',size:'kpi',label:'Cash & bank',r:c=>{const N=bizNumbers(c.pid);return anaKpi('Cash & bank',N.accts.length?fmtReporting(N.cash):'—',{sub:N.accts.length?`${N.accts.length} account${N.accts.length===1?'':'s'}`:'add one on the Balance sheet',accent:'var(--ember)'})}},
 {id:'g.unpaid',g:'General',size:'kpi',label:'Unpaid invoices',r:c=>{const u=c.txsAll.filter(t=>t.type==='revenue'&&t.paid===false);const v=u.reduce((a,t)=>a+c.rep(t),0);const od=u.filter(t=>t.dueDate&&t.dueDate<today()).length;return anaKpi('Unpaid invoices',fmtReporting(v),{sub:`${u.length} open${od?` · ${od} overdue`:''}`,accent:od?'var(--rust)':'var(--gold)'})}},
 {id:'g.avgtx',g:'General',size:'kpi',label:'Average sale',r:c=>{const n=c.txs.filter(t=>t.type==='revenue').length;return anaKpi('Average sale',n?fmtReporting(c.F.rev/n):'—',{sub:`${n} sale${n===1?'':'s'}`})}},
 {id:'g.paidyou',g:'General',size:'kpi',label:'Paid to you',r:c=>{const v=getMoves().filter(m=>m.from===c.pid&&m.to==='personal'&&anaIn(m.date,c.R.from,c.R.to)).reduce((a,m)=>a+toReporting(m.amount,m.currency),0);return anaKpi('Paid to you',fmtReporting(v),{sub:'drawings, dividends, salary',accent:'var(--gold)'})}},
 {id:'g.revcost',g:'General',size:'full',label:'Revenue vs cost chart',r:c=>anaCard('Revenue vs cost','Money in and out over the period',anaRevCostChart(c.txs,c.range,c.rep))},
 {id:'g.trend',g:'General',size:'full',label:'12-month revenue trend',r:c=>anaCard('Revenue · last 12 months','Every month, all categories',renderAreaChart(monthsSeries(c,'revenue'),'#3fb4ff'))},
 {id:'g.nettrend',g:'General',size:'full',label:'12-month profit trend',r:c=>{const m=monthsSeries(c,'net');let run=0;return anaCard('Profit · last 12 months','Cumulative net profit',renderNetWorthChart(m.map(x=>({date:x.k+'-01',net:(run+=x.value)}))))}},
 {id:'g.revcat',g:'General',size:'half',label:'Revenue by category',r:c=>anaCard('Revenue by category','This period',anaBars(anaByCategory(c.txs,'revenue',c.rep,ANA_PAL).map(r=>({...r,color:categoryColor(r.label)})),{empty:'No revenue in this period.'}))},
 {id:'g.costcat',g:'General',size:'half',label:'Costs by category',r:c=>anaCard('Costs by category','This period',anaBars(anaByCategory(c.txs,'cost',c.rep,ANA_PAL).map(r=>({...r,color:categoryColor(r.label)})),{empty:'No costs in this period.'}))},
 {id:'g.weekday',g:'General',size:'half',label:'Best days of the week',r:c=>{const d=[0,0,0,0,0,0,0];c.txs.filter(t=>t.type==='revenue').forEach(t=>{d[(new Date(t.date+'T12:00:00').getDay()+6)%7]+=c.rep(t)});const L=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];return anaCard('Best days of the week','Revenue by weekday this period',anaBars(d.map((v,i)=>({label:L[i],value:v,right:fmtReporting(v),color:'var(--ember)'})).filter(x=>c.F.rev>0),{empty:'No revenue in this period.'}))}},
 {id:'g.biggest',g:'General',size:'half',label:'Largest entries',r:c=>{const top=[...c.txs].sort((a,b)=>c.rep(b)-c.rep(a)).slice(0,6);return anaCard('Largest entries','Biggest money in and out this period',top.length?top.map(t=>`<div style="display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(t.description)}</span><span class="mono" style="color:${t.type==='revenue'?'var(--jade)':'var(--rust)'};">${t.type==='revenue'?'+':'−'}${fmtReporting(c.rep(t))}</span></div>`).join(''):empty('Nothing logged in this period.'))}},
 {id:'g.outlook',g:'General',size:'half',label:'Cash outlook & runway',r:c=>renderCashOutlookCard(c.pid)},
 {id:'g.goals',g:'General',size:'half',label:'Goals & tax set-aside',r:c=>renderGoalsTaxCard(c.pid)},
 // Sales pipeline
 {id:'p.new',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'New leads',r:c=>{const P=c.pipe();return anaKpi(`New ${P.many}`,P.inP.length,{delta:anaDelta(P.inP.length,P.inPrev.length)})}},
 {id:'p.conv',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Conversion to won',r:c=>{const P=c.pipe();return anaKpi('Conversion to won',P.conv.toFixed(1)+'%',{delta:P.inPrev.length?{txt:`${P.conv-P.prevConv>=0?'+':''}${(P.conv-P.prevConv).toFixed(1)} pts`,up:P.conv>=P.prevConv}:null,sub:`${P.wonP} won`,accent:'var(--jade)'})}},
 {id:'p.cpl',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Cost per lead',r:c=>{const P=c.pipe();return anaKpi(`Cost per ${P.one}`,P.inP.length?fmtReporting(P.cpl):'—',{delta:P.inP.length&&P.inPrev.length?anaDelta(P.cpl,P.pCpl):null,goodUp:false,sub:`${fmtReporting(c.F.cost)} spent`})}},
 {id:'p.pipe',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Open pipeline value',r:c=>{const P=c.pipe();return anaKpi('Open pipeline value',fmtReporting(P.pipeVal),{sub:`${P.open.length} open`,accent:'var(--gold)'})}},
 {id:'p.deal',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Average deal value',r:c=>{const P=c.pipe();return anaKpi('Average won deal',P.avgDeal?fmtReporting(P.avgDeal):'—',{sub:'all-time, from deal values'})}},
 {id:'p.follow',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Follow-ups due',r:c=>{const P=c.pipe();return anaKpi('Follow-ups due',P.overdue,{sub:'next action today or earlier',accent:P.overdue?'var(--rust)':'var(--bone)'})}},
 {id:'p.revwin',g:'Sales pipeline',needs:'contacts',size:'kpi',label:'Revenue per win',r:c=>{const P=c.pipe();return anaKpi('Revenue per win',P.wonP?fmtReporting(c.F.rev/P.wonP):'—',{sub:'this period'})}},
 {id:'p.funnel',g:'Sales pipeline',needs:'contacts',size:'half',label:'Funnel',r:c=>{const P=c.pipe();const order=STAGES.filter(s=>!P.CLOSED.includes(s));const rows=order.map(s=>{const v=P.base.filter(x=>x.stage===s).length;return {label:s,value:v,right:`${v} · ${P.base.length?Math.round(v/P.base.length*100):0}%`,color:STAGE_COLORS[s]}});const closed=P.base.filter(x=>P.CLOSED.includes(x.stage)).length;return anaCard('Funnel',`Where this period’s ${P.many} are now`,anaBars(rows)+(closed?`<div style="font-size:12px;color:var(--bone-mute);">${closed} closed without a sale</div>`:''))}},
 {id:'p.sources',g:'Sales pipeline',needs:'contacts',size:'half',label:'Lead sources',r:c=>{const P=c.pipe();const s={};P.base.forEach(x=>{const k=x.source||'Unknown';s[k]=s[k]||{n:0,w:0};s[k].n++;if(x.stage==='Won')s[k].w++});const rows=Object.entries(s).sort((a,b)=>b[1].n-a[1].n).slice(0,8);return anaCard('Sources',`Which channels bring ${P.many} that convert`,rows.length?tbl(['Source',P.many,'Won','Conv.'],rows.map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td class="mono" style="text-align:right;">${v.n}</td><td class="mono" style="text-align:right;color:var(--jade);">${v.w}</td><td class="mono" style="text-align:right;">${v.n?Math.round(v.w/v.n*100):0}%</td></tr>`).join('')):empty('Set a source on your contacts to compare channels.'))}},
 {id:'p.stages',g:'Sales pipeline',needs:'contacts',size:'half',label:'Pipeline value by stage',r:c=>{const P=c.pipe();const rows=STAGES.filter(s=>!P.CLOSED.includes(s)&&s!=='Won').map(s=>{const v=P.open.filter(x=>x.stage===s).reduce((a,x)=>a+toReporting(+x.value||0,c.cur),0);return {label:s,value:v,right:fmtReporting(v),color:STAGE_COLORS[s]}}).filter(r=>r.value>0);return anaCard('Pipeline value by stage','Open deals, using deal values',anaBars(rows,{empty:'Add deal values to your contacts to see this.'}))}},
 // Product sales
 {id:'s.orders',g:'Product sales',needs:'inventory',size:'kpi',label:'Orders',r:c=>{const P=c.prod();return anaKpi('Orders',P.orders,{delta:anaDelta(P.orders,P.pOrders),sub:`${P.u} units`})}},
 {id:'s.units',g:'Product sales',needs:'inventory',size:'kpi',label:'Units sold',r:c=>{const P=c.prod();return anaKpi('Units sold',P.u,{delta:anaDelta(P.u,P.pu)})}},
 {id:'s.aov',g:'Product sales',needs:'inventory',size:'kpi',label:'Average order value',r:c=>{const P=c.prod();return anaKpi('Average order value',P.orders?fmtReporting(P.aov):'—',{delta:P.orders&&P.pOrders?anaDelta(P.aov,P.paov):null})}},
 {id:'s.gm',g:'Product sales',needs:'inventory',size:'kpi',label:'Gross margin',r:c=>{const P=c.prod();return anaKpi('Gross margin',c.F.rev>0?P.gm.toFixed(0)+'%':'—',{delta:c.F.rev>0&&c.F.pRev>0?{txt:`${P.gm-P.pgm>=0?'+':''}${(P.gm-P.pgm).toFixed(0)} pts`,up:P.gm>=P.pgm}:null,sub:`${fmtReporting(P.gp)} after cost of goods`,accent:P.gm>=0?'var(--jade)':'var(--rust)'})}},
 {id:'s.stock',g:'Product sales',needs:'inventory',size:'kpi',label:'Stock on hand',r:c=>{const P=c.prod();return anaKpi('Stock on hand (at cost)',fmtReporting(P.stockVal),{sub:`${P.onHand} units · ${P.sellThrough.toFixed(0)}% sell-through`,accent:'var(--ember)'})}},
 {id:'s.alerts',g:'Product sales',needs:'inventory',size:'kpi',label:'Stock alerts',r:c=>{const P=c.prod();return anaKpi('Stock alerts',P.outN+P.lowN,{sub:`${P.outN} out · ${P.lowN} low`,accent:P.outN+P.lowN?'var(--rust)':'var(--bone)'})}},
 {id:'s.best',g:'Product sales',needs:'inventory',size:'half',label:'Best sellers',r:c=>{const P=c.prod();return anaCard('Best sellers','By revenue this period',P.top.length?tbl(['Product','Units','Revenue'],P.top.map(p=>`<tr><td>${escapeHtml(p.it.name)}</td><td class="mono" style="text-align:right;">${p.units}</td><td class="mono" style="text-align:right;">${fmtReporting(p.rev)}</td></tr>`).join(''))+(P.unlinked>0?`<div style="font-size:12px;color:var(--bone-mute);margin-top:10px;">Plus ${fmtReporting(P.unlinked)} of sales not tied to a product.</div>`:''):empty('Use “Sell” in Inventory so each sale is tied to a product.'))}},
 {id:'s.margins',g:'Product sales',needs:'inventory',size:'half',label:'Margin per product',r:c=>{const P=c.prod();const rows=P.items.filter(i=>i.salePrice>0).map(i=>{const m=(i.salePrice-(i.costPrice||0))/i.salePrice*100;return {label:i.name,value:m,right:`${m.toFixed(0)}% · ${fmtReporting(toReporting(i.salePrice-(i.costPrice||0),i.currency||c.cur))} each`,color:m>=50?'var(--jade)':m>=25?'var(--gold)':'var(--rust)'}}).sort((a,b)=>b.value-a.value);return anaCard('Margin per product','Sale price minus cost price',anaBars(rows,{empty:'Add sale and cost prices in Inventory.'}))}},
 {id:'s.channels',g:'Product sales',needs:'inventory',size:'half',label:'Sales by channel',r:c=>{const P=c.prod();const ch={};Object.values(P.per).forEach(p=>{const k=p.it.channel||'Unassigned';ch[k]=(ch[k]||0)+p.rev});const tot=Object.values(ch).reduce((a,b)=>a+b,0);return anaCard('Sales by channel','Share of product revenue',anaBars(Object.entries(ch).sort((a,b)=>b[1]-a[1]).map(([k,v],i)=>({label:k,value:v,right:`${fmtReporting(v)} · ${tot?Math.round(v/tot*100):0}%`,color:ANA_PAL[i%ANA_PAL.length]})),{empty:'Set a channel on your products to compare them.'}))}},
 {id:'s.runout',g:'Product sales',needs:'inventory',size:'half',label:'Running out (days of stock)',r:c=>{const P=c.prod();return anaCard('Running out','Days of stock left at the last 30 days’ sales rate',P.cover.length?P.cover.map(x=>{const d=x.days;const col=d<=7?'var(--rust)':d<=30?'var(--gold)':'var(--jade)';return `<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px;"><div><div>${escapeHtml(x.i.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);">${x.i.qtyOnHand||0} left · ${(x.rate*30).toFixed(0)} sold in 30 days</div></div><span class="mono" style="color:${col};font-weight:600;">${(x.i.qtyOnHand||0)<=0?'Out':d===Infinity?'—':Math.floor(d)+' days'}</span></div>`}).join(''):empty('No products have sold in the last 30 days.'))}},
 // Trading
 {id:'t.pnl',g:'Trading & returns',size:'kpi',label:'Net P&L',r:c=>anaKpi('Net P&L',fmtReporting(c.F.net),{delta:anaDelta(c.F.net,c.F.pNet),accent:c.F.net>=0?'var(--jade)':'var(--rust)'})},
 {id:'t.win',g:'Trading & returns',size:'kpi',label:'Winning days',r:c=>{const T=c.trade();return anaKpi('Winning days',T.days.length?Math.round(T.wins.length/T.days.length*100)+'%':'—',{sub:`${T.wins.length} up · ${T.losses.length} down`})}},
 {id:'t.pf',g:'Trading & returns',size:'kpi',label:'Profit factor',r:c=>{const T=c.trade();return anaKpi('Profit factor',T.pf===Infinity?'∞':T.pf?T.pf.toFixed(2):'—',{sub:'gains ÷ losses',accent:T.pf>=1?'var(--jade)':'var(--rust)'})}},
 {id:'t.avg',g:'Trading & returns',size:'kpi',label:'Average up/down day',r:c=>{const T=c.trade();return anaKpi('Avg up / down day',`${fmtReporting(T.avgW)} / ${fmtReporting(T.avgL)}`,{sub:T.avgL?`ratio ${(T.avgW/T.avgL).toFixed(2)}`:''})}},
 {id:'t.dd',g:'Trading & returns',size:'kpi',label:'Max drawdown',r:c=>{const T=c.trade();return anaKpi('Max drawdown',fmtReporting(T.dd),{sub:T.peak>0?`${Math.round(T.dd/T.peak*100)}% from peak`:'from period start',accent:T.dd>0?'var(--rust)':'var(--bone)'})}},
 {id:'t.fees',g:'Trading & returns',size:'kpi',label:'Fees & costs',r:c=>{const T=c.trade();return anaKpi('Fees & costs',fmtReporting(T.fees),{sub:c.F.rev>0?`${Math.round(T.fees/c.F.rev*100)}% of gains`:''})}},
 {id:'t.equity',g:'Trading & returns',size:'full',label:'Equity curve',r:c=>{const T=c.trade();return anaCard('Equity curve','Running total of profit and loss',T.pts.length>2?renderNetWorthChart(T.pts):empty('Log at least two days of results to draw the curve.'))}},
 {id:'t.daily',g:'Trading & returns',size:'half',label:'Daily results',r:c=>{const T=c.trade();return anaCard('Daily results','Green = up day, red = down day',renderBarChart(T.days.slice(-40).map(([d,v])=>({label:fmtShortDate(d),gain:Math.max(v,0),loss:Math.max(-v,0)}))))}},
 {id:'t.bw',g:'Trading & returns',size:'half',label:'Best & worst day',r:c=>{const T=c.trade();return anaCard('Best & worst',`Across ${T.days.length} active days`,T.days.length?`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">Best day</span><span class="mono" style="color:var(--jade);">${fmtReporting(T.best[1])} · ${fmtShortDate(T.best[0])}</span></div><div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">Worst day</span><span class="mono" style="color:var(--rust);">${fmtReporting(T.worst[1])} · ${fmtShortDate(T.worst[0])}</span></div><div style="display:flex;justify-content:space-between;padding:10px 0;font-size:13px;"><span style="color:var(--bone-dim);">Gross gains / losses</span><span class="mono">${fmtReporting(T.gW)} / ${fmtReporting(T.gL)}</span></div>`:empty('No results logged in this period.'))}},
 {id:'t.cat',g:'Trading & returns',size:'half',label:'P&L by instrument',r:c=>{const T=c.trade();return anaCard('By instrument or strategy','Uses the Ledger category',T.catRows.length?tbl(['Category','Entries','Net'],T.catRows.map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td class="mono" style="text-align:right;">${v.n}</td><td class="mono" style="text-align:right;color:${v.net>=0?'var(--jade)':'var(--rust)'};">${v.net>=0?'+':''}${fmtReporting(v.net)}</td></tr>`).join('')):empty('Nothing logged in this period.'))}},
 // Income streams
 {id:'c.streams',g:'Income streams',size:'kpi',label:'Number of income streams',r:c=>anaKpi('Income streams',c.content().streams.length,{sub:'categories with income'})},
 {id:'c.biggest',g:'Income streams',size:'kpi',label:'Biggest stream',r:c=>{const C=c.content();return anaKpi('Biggest stream',C.top?escapeHtml(C.top.label):'—',{sub:C.top?`${C.share.toFixed(0)}% of income${C.share>60?' — concentrated':''}`:'',accent:C.share>60?'var(--gold)':'var(--bone)'})}},
 {id:'c.bystream',g:'Income streams',size:'half',label:'Income by stream',r:c=>anaCard('Income by stream','Uses the Ledger category',anaBars(c.content().streams.map(r=>({...r,color:categoryColor(r.label)})),{empty:'No income logged in this period.'}))},
 {id:'c.momentum',g:'Income streams',size:'half',label:'Stream momentum',r:c=>{const C=c.content();return anaCard('Stream momentum','This period against the one before',C.streams.length?C.streams.map(s=>{const d=anaDelta(s.value,C.prevStreams[s.label]||0);return `<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px;"><span style="color:var(--bone-dim);">${escapeHtml(s.label)}</span><span class="mono">${fmtReporting(s.value)} <span style="color:${d&&d.up?'var(--jade)':'var(--rust)'};margin-left:8px;">${d?d.txt:''}</span></span></div>`}).join(''):empty('Nothing to compare yet.'))}}
];
const WMAP=Object.fromEntries(W.map(w=>[w.id,w]));
const ANA_DEFAULTS={
  pipeline:['p.new','p.conv','p.cpl','g.rev','p.pipe','p.follow','p.funnel','p.sources','g.revcost','g.costcat'],
  product:['g.rev','s.orders','s.aov','s.gm','s.stock','s.alerts','s.best','s.channels','g.revcost','s.runout','g.costcat'],
  trading:['t.pnl','t.win','t.pf','t.avg','t.dd','t.fees','t.equity','t.daily','t.bw','t.cat'],
  content:['g.rev','c.streams','c.biggest','g.cost','g.net','c.bystream','c.momentum','g.trend','g.revcost'],
  general:['g.rev','g.cost','g.net','g.margin','g.revcost','g.revcat','g.costcat']
};
function anaAvailable(meta){const mods=getProfileModules(meta);return W.filter(w=>!w.needs||mods.includes(w.needs))}
function anaLayout(meta){
  const kind=analyticsKind(meta);const ok=new Set(anaAvailable(meta).map(w=>w.id));
  const saved=(meta.anaLayout||{})[kind];
  return (Array.isArray(saved)?saved:ANA_DEFAULTS[kind]).filter(id=>ok.has(id));
}
function saveAnaLayout(list){
  const meta=store.get(`profile:${state.profileId}:meta`);if(!meta)return;
  meta.anaLayout=meta.anaLayout||{};meta.anaLayout[analyticsKind(meta)]=list;
  store.set(`profile:${state.profileId}:meta`,meta);render();
}
function anaMove(id,dir){const meta=store.get(`profile:${state.profileId}:meta`);const l=anaLayout(meta);const i=l.indexOf(id);const kpi=WMAP[id].size==='kpi';
  // move within the same row type (KPI tiles vs cards)
  let j=i+dir;while(j>=0&&j<l.length&&(WMAP[l[j]].size==='kpi')!==kpi)j+=dir;
  if(j<0||j>=l.length)return;[l[i],l[j]]=[l[j],l[i]];saveAnaLayout(l)}
function anaRemove(id){const meta=store.get(`profile:${state.profileId}:meta`);saveAnaLayout(anaLayout(meta).filter(x=>x!==id))}
function anaAdd(id){const meta=store.get(`profile:${state.profileId}:meta`);const l=anaLayout(meta);if(!l.includes(id))l.push(id);saveAnaLayout(l)}
function anaReset(){const meta=store.get(`profile:${state.profileId}:meta`);if(meta.anaLayout)delete meta.anaLayout[analyticsKind(meta)];store.set(`profile:${state.profileId}:meta`,meta);render()}
function anaWrap(w,html,edit){
  if(!edit)return html;
  return `<div style="position:relative;outline:1px dashed var(--line-2);outline-offset:3px;border-radius:16px;">${html}
    <div style="position:absolute;${w.size==='kpi'?'bottom:8px':'top:8px'};right:8px;display:flex;gap:4px;z-index:3;background:var(--panel-solid);border:1px solid var(--line);border-radius:9px;padding:3px;">
      <button class="btn btn-ghost btn-sm" style="padding:4px 7px;" title="Move ${w.size==='kpi'?'left':'up'}" onclick="anaMove('${w.id}',-1)">${w.size==='kpi'?'←':'↑'}</button>
      <button class="btn btn-ghost btn-sm" style="padding:4px 7px;" title="Move ${w.size==='kpi'?'right':'down'}" onclick="anaMove('${w.id}',1)">${w.size==='kpi'?'→':'↓'}</button>
      <button class="btn btn-ghost btn-sm btn-danger" style="padding:4px 7px;" title="Remove" onclick="anaRemove('${w.id}')">${icon('x',12)}</button>
    </div></div>`;
}
function renderAnalytics(){
  const pid=state.profileId;const meta=store.get(`profile:${pid}:meta`);
  if(!meta)return '<div class="page">Profile not found.</div>';
  const range=window._anaRange||30;const kind=analyticsKind(meta);const edit=!!window._anaEdit;
  const c=anaCtx(pid,range);
  const layout=anaLayout(meta);
  const safe=w=>{try{return w.r(c)}catch(e){console.error(w.id,e);return anaCard(w.label,'Couldn’t calculate this metric',empty(escapeHtml(e.message)))}};
  const kpis=layout.map(id=>WMAP[id]).filter(w=>w.size==='kpi');
  const cards=layout.map(id=>WMAP[id]).filter(w=>w.size!=='kpi');
  const avail=anaAvailable(meta).filter(w=>!layout.includes(w.id));
  const groups=[...new Set(avail.map(w=>w.g))];
  const controls=`<select class="field" style="width:auto;min-width:170px;" title="Starting set of metrics for this business" onchange="setAnalyticsKind(this.value)">
      <option value="auto" ${!meta.analyticsKind?'selected':''}>Auto (${escapeHtml(meta.type||'Other')})</option>
      ${Object.entries(ANALYTICS_KINDS).map(([k,v])=>`<option value="${k}" ${meta.analyticsKind===k?'selected':''}>${v.label}</option>`).join('')}
    </select>
    <select class="field" style="width:140px;" onchange="window._anaRange=parseInt(this.value);render()">
      ${[[7,'Last 7 days'],[30,'Last 30 days'],[90,'Last 90 days'],[365,'Last 12 months']].map(([v,l])=>`<option value="${v}" ${range===v?'selected':''}>${l}</option>`).join('')}
    </select>
    <button class="btn ${edit?'btn-primary':''}" onclick="window._anaEdit=!window._anaEdit;render()">${icon(edit?'check':'settings',14)} ${edit?'Done':'Customise'}</button>`;
  return `<div class="page">
    ${profileHeaderHtml('Analytics',`${ANALYTICS_KINDS[kind].label} · ${layout.length} metrics`,controls)}
    ${edit?`<div class="card" style="padding:18px 22px;margin-bottom:16px;border-color:var(--ember);">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
        <div><div class="serif" style="font-size:17px;">Add metrics</div><div style="font-size:12px;color:var(--bone-mute);margin-top:2px;">${PHONE?'Tap':'Click'} to add. Use the arrows on each metric to reorder, ✕ to remove. Saved for this business.</div></div>
        <button class="btn btn-sm" onclick="anaReset()">${icon('refresh',12)} Reset to default</button>
      </div>
      ${groups.length?groups.map(g=>`<div style="margin-bottom:10px;"><div class="label" style="margin-bottom:6px;">${g}</div><div style="display:flex;flex-wrap:wrap;gap:6px;">${avail.filter(w=>w.g===g).map(w=>`<button class="btn btn-sm" onclick="anaAdd('${w.id}')">${icon('plus',11)} ${escapeHtml(w.label)}<span style="color:var(--bone-mute);font-size:10.5px;margin-left:4px;">${w.size==='kpi'?'tile':w.size==='full'?'wide':'card'}</span></button>`).join('')}</div></div>`).join(''):'<div style="font-size:13px;color:var(--bone-dim);">Every available metric is already showing.</div>'}
      ${getProfileModules(meta).includes('contacts')&&getProfileModules(meta).includes('inventory')?'':`<div style="font-size:11.5px;color:var(--bone-mute);margin-top:4px;">Turn on Contacts or Inventory in business settings to unlock pipeline or product metrics.</div>`}
    </div>`:''}
    ${kpis.length?`<div class="stagger grid-3" style="margin-bottom:16px;">${kpis.map(w=>anaWrap(w,safe(w),edit)).join('')}</div>`:''}
    <div class="ana-grid">${cards.map(w=>`<div class="${w.size==='full'?'ana-full':''}">${anaWrap(w,safe(w),edit)}</div>`).join('')}</div>
    ${!layout.length?emptyBox('No metrics on this page yet.',`<button class="btn btn-primary" onclick="window._anaEdit=true;render()">${icon('plus',14)} Add metrics</button>`):''}
  </div>`;
}

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

// ============================================================
// PHONE SYNC — the Mac side (answers phones, Settings → Phone)
// ============================================================
ICONS.smartphone='<rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="11" y1="18" x2="13" y2="18"/>';
ICONS.wifi='<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>';
const DSYNC=DESKTOP&&DESKTOP.sync?DESKTOP.sync:null;
const DLINK=DESKTOP&&DESKTOP.link?DESKTOP.link:null;
let __lcfg=null,__lsig=null,__lPairOff=null;const __lOffs=new Map();
let __syncStatus=null,__syncPendingRender=false;
function __uiBusy(){
  const a=document.activeElement;
  return !!document.querySelector('.modal-backdrop')||(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName));
}
function syncRefreshUI(){if(__uiBusy()){__syncPendingRender=true;return}__syncPendingRender=false;render()}
setInterval(()=>{if(__syncPendingRender&&!__uiBusy())syncRefreshUI()},1500);
function __syncApi(){
  const S=__mem.__sync||(__mem.__sync={keys:{},epoch:Math.random().toString(36).slice(2,10)});
  return {
    raw:k=>__mem[k]===undefined?undefined:__clone(__mem[k]),
    meta:k=>S.keys[k],
    write:(k,v,t)=>{if(v===undefined||v===null)delete __mem[k];else __mem[k]=__clone(v);const r=__nextRev();S.keys[k]={r,t:+t||Date.now(),...(v===undefined||v===null?{d:1}:{})};__dirty=true},
    rev:()=>S.last||__nextRev(),
    epoch:()=>S.epoch,
    keys:()=>[...new Set([...Object.keys(__mem),...Object.keys(S.keys)])].filter(k=>k!=='__sync')
  };
}
function handlePhoneSync(req){
  const S=__mem.__sync||{};
  // a phone that last synced against a different history (e.g. after a restore) gets everything again
  if(req.epoch&&S.epoch&&req.epoch!==S.epoch)req={...req,sinceRev:0};
  const res=syncServe(req,__syncApi());
  if(res.applied){flushSave();syncRefreshUI();showToast(`Synced ${res.applied} change${res.applied===1?'':'s'} from ${req.device&&req.device.name||'your phone'}`,null,null,3500)}
  return res;
}
if(DSYNC){
  DSYNC.onRequest((id,payload)=>{let out;try{out=handlePhoneSync(payload)}catch(e){console.error(e);out={error:e.message}}DSYNC.respond(id,out)});
  DSYNC.onEvent(ev=>{if(ev.type==='paired'){showToast(`${ev.device} is now connected to Atlas`,null,null,4000);closeModal();linkRefresh()}if(state.view==='settings')loadSyncStatus()});
  DSYNC.ready();
}
async function loadSyncStatus(){if(!DSYNC)return;__syncStatus=await DSYNC.status();const el=document.getElementById('sync-card');if(el)el.outerHTML=renderPhoneSyncCard()}
function renderPhoneSyncCard(){
  if(!DSYNC)return '';
  const st=__syncStatus;
  if(!st){setTimeout(loadSyncStatus,0);return `<div class="card" id="sync-card" style="padding:22px;margin-bottom:16px;"><div class="serif" style="font-size:18px;">Phone</div><div style="font-size:13px;color:var(--bone-mute);">Loading…</div></div>`}
  const devs=st.devices||[];
  return `<div class="card" id="sync-card" style="padding:22px;margin-bottom:16px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;">
      <div><div class="serif" style="font-size:18px;font-weight:500;margin-bottom:4px;">${icon('smartphone',16)} Atlas on your phone</div>
      <div style="font-size:13px;color:var(--bone-dim);max-width:640px;line-height:1.55;">Your phone gets its own copy of Atlas that works offline and syncs with this ${MACHINE} whenever Atlas is open here and both have an internet connection, on any network. Your data goes straight from one device to the other, encrypted end to end. It isn’t stored online anywhere.</div></div>
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:13.5px;"><input type="checkbox" ${st.enabled?'checked':''} onchange="setPhoneSync(this.checked)" style="accent-color:var(--ember);width:18px;height:18px;">Phone sync ${st.enabled?'on':'off'}</label>
    </div>
    ${st.error?`<div style="margin-top:12px;padding:10px 12px;border:1px solid var(--rust);border-radius:9px;font-size:13px;color:var(--rust);">${escapeHtml(st.error)}</div>`:''}
    ${st.enabled?`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center;">
      <button class="btn btn-primary" onclick="openPairPhone()">${icon('plus',14)} Connect a phone</button>
      <span style="font-size:12px;color:var(--bone-mute);">${linkOnline()?`<span style="color:var(--jade);">●</span> Ready for your phones`:`<span style="color:var(--amber,#f5b942);">●</span> Waiting for an internet connection`}</span></div>
    <div style="margin-top:16px;">${devs.length?devs.map(d=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--line);">
        <span style="color:var(--ember);">${icon('smartphone',16)}</span><div style="flex:1;min-width:0;"><div style="font-size:13.5px;">${escapeHtml(d.name)}</div><div style="font-size:11.5px;color:var(--bone-mute);">${d.wifi?'Wi-Fi only · ':''}${d.lastSync?`Last synced ${daysAgo(d.lastSync)==='today'?new Date(d.lastSync).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}):daysAgo(d.lastSync)}`:'Connected, not synced yet'}</div></div>
        <button class="btn btn-sm" onclick="renamePhone('${d.id}')">Rename</button><button class="btn btn-sm btn-danger" onclick="revokePhone('${d.id}')">Disconnect</button></div>`).join(''):`<div style="font-size:12.5px;color:var(--bone-mute);">No phones connected yet.</div>`}</div>`:''}
  </div>`;
}
async function setPhoneSync(on){__syncStatus=await DSYNC.setEnabled(on);loadSyncStatus();linkRefresh();if(on&&!(__syncStatus.devices||[]).length&&!__syncStatus.error)openPairPhone()}
async function revokePhone(id){if(!confirm('Disconnect this phone? It keeps its copy but stops syncing until you pair it again.'))return;__syncStatus=await DSYNC.revoke(id);loadSyncStatus();linkRefresh()}
async function renamePhone(id){const d=(__syncStatus.devices||[]).find(x=>x.id===id);showModal('Rename phone',`<input class="field" id="ph-name" value="${escAttr(d?d.name:'')}">`,()=>{DSYNC.rename(id,document.getElementById('ph-name').value.trim()||'Phone').then(s=>{__syncStatus=s;loadSyncStatus()});return true},'Save')}
async function openPairPhoneWifi(){
  const p=await DSYNC.pairCode();
  showModal('Connect a phone',`<div style="display:grid;grid-template-columns:220px 1fr;gap:22px;align-items:start;" class="grid-mobile-1">
    <div style="background:#fff;border-radius:14px;padding:8px;">${p.svg}</div>
    <div style="font-size:13.5px;line-height:1.6;">
      <div style="padding:12px 14px;border:1px solid var(--line-2);border-radius:12px;background:var(--ink-3);margin-bottom:14px;"><div class="label">Pairing code</div><div class="mono" style="font-size:30px;letter-spacing:.14em;margin-top:4px;color:var(--ember);">${p.code.slice(0,3)} ${p.code.slice(3)}</div><div style="font-size:12px;color:var(--bone-mute);margin-top:4px;">Already set up Atlas on your phone? Open it from your home screen and type this code.</div></div>
      <ol style="margin:0;padding-left:18px;">
        <li>Make sure your phone is on the <b>same Wi-Fi</b> as this ${MACHINE}.</li>
        <li>Point your phone’s camera at the code and open the link.</li>
        <li>Follow the three steps on your phone: download the Atlas certificate, trust it, then open Atlas and <b>Add to Home Screen</b>.</li>
      </ol>
      <div style="margin-top:12px;font-size:12px;color:var(--bone-mute);">The code works once and expires in 30 minutes. Can’t scan? Type this into your phone’s browser:<br><span class="mono" style="color:var(--bone);user-select:all;">${escapeHtml(p.url)}</span>${p.ipUrl?`<br>or <span class="mono" style="user-select:all;">${escapeHtml(p.ipUrl)}</span>`:''}</div>
      <div style="margin-top:10px;font-size:12px;color:var(--bone-mute);">If your ${MACHINE} asks whether Atlas may accept incoming connections, choose <b>Allow</b>.</div>
    </div></div>`,()=>true,'Done');
}

// ---------- direct link: phones that installed Atlas from the web ----------
function linkOnline(){return !!(__lsig&&__lsig.connected())}
async function linkRefresh(){
  if(!DLINK||typeof AtlasLink==='undefined')return;
  try{
    __lcfg=await DLINK.config();
    if(!__lcfg.enabled){__lOffs.forEach(f=>f());__lOffs.clear();if(__lPairOff){__lPairOff();__lPairOff=null}if(__lsig){__lsig.close();__lsig=null}return}
    if(!__lsig){__lsig=AtlasLink.newSignal(__lcfg.brokers);let was=false;setInterval(()=>{const on=linkOnline();if(on!==was){was=on;if(state.view==='settings'&&document.getElementById('sync-card'))loadSyncStatus()}},3000)}
    const keys=new Set(__lcfg.devices.map(d=>d.key));
    for(const [k,off] of __lOffs)if(!keys.has(k)){off();__lOffs.delete(k)}
    for(const d of __lcfg.devices)if(!__lOffs.has(d.key))__lOffs.set(d.key,await AtlasLink.listen(__lsig,d.key,h=>linkDecide(d.id,h)));
  }catch(e){console.error('link',e)}
}
function linkDecide(id,hello){
  const d=(__lcfg&&__lcfg.devices||[]).find(x=>x.id===id);
  if(!d||hello.dev!==d.id)return {reject:'unknown'};
  if(d.revoked)return {reject:'revoked'};
  return {serve:(op,body)=>linkServe(d,op,body)};
}
function linkServe(d,op,body){
  if(op==='ping')return {mac:__lcfg.mac,macId:__lcfg.macId};
  if(op!=='sync')throw new Error('Unknown request');
  const b=body||{};
  const res=handlePhoneSync({device:{id:d.id,name:d.name},sinceRev:b.sinceRev||0,epoch:b.epoch||null,changes:Array.isArray(b.changes)?b.changes:[]});
  DLINK.touch(d.id);
  return {...res,mac:__lcfg.mac,macId:__lcfg.macId};
}
async function openPairPhone(){
  if(!DLINK)return openPairPhoneWifi();
  if(!__lsig)await linkRefresh();
  const p=await DLINK.pairCode();
  if(__lPairOff)__lPairOff();
  __lPairOff=await AtlasLink.listen(__lsig,p.code,hello=>{
    if(!hello.pair)return {reject:'refused'};
    let dev=null;
    return {serve:async(op,body)=>{
      if(op==='pair'){
        const r=await DLINK.addDevice(p.code,{id:body&&body.deviceId,key:body&&body.key,name:body&&body.name});
        if(r.error)throw new Error(r.error);
        dev=r.device;if(__lPairOff){__lPairOff();__lPairOff=null}
        await linkRefresh();
        return {mac:r.mac,macId:r.macId};
      }
      if(dev)return linkServe(dev,op,body);
      throw new Error('Not paired');
    }};
  });
  setTimeout(()=>{if(__lPairOff){__lPairOff();__lPairOff=null}},Math.max(0,p.expires-Date.now()));
  const short=p.phoneUrl.replace(/^https?:\/\//,'').replace(/\/$/,'');
  showModal('Connect a phone',`<div style="display:grid;grid-template-columns:220px 1fr;gap:22px;align-items:start;" class="grid-mobile-1">
    <div style="background:#fff;border-radius:14px;padding:8px;">${p.svg}</div>
    <div style="font-size:13.5px;line-height:1.6;">
      <ol style="margin:0 0 14px;padding-left:18px;">
        <li>Point your phone’s camera at the code and open the link.</li>
        <li><b>iPhone:</b> tap <b>Share</b>, then <b>Add to Home Screen</b>, then open Atlas from your home screen.<br><b>Android:</b> tap <b>Install</b> (or ⋮ → <b>Add to Home screen</b>).</li>
        <li>Atlas connects to this ${MACHINE} and copies your data across.</li>
      </ol>
      <div style="padding:12px 14px;border:1px solid var(--line-2);border-radius:12px;background:var(--ink-3);"><div class="label">Can’t scan? Open <span class="mono" style="text-transform:none;color:var(--bone);user-select:all;">${escapeHtml(short)}</span> on your phone and type</div><div class="mono" id="pair-code-text" style="font-size:20px;letter-spacing:.04em;white-space:nowrap;margin-top:6px;color:var(--ember);user-select:all;">${AtlasLink.fmtCode(p.code)}</div></div>
      <div style="margin-top:12px;font-size:12px;color:var(--bone-mute);">Keep this window open until your phone says it’s connected. The code works once and expires in 30 minutes. Both devices need an internet connection.</div>
      <div style="margin-top:10px;font-size:12px;color:var(--bone-mute);">No internet where you are? <a href="#" onclick="closeModal();setTimeout(openPairPhoneWifi,50);return false;" style="color:var(--ember);">Connect over Wi-Fi only</a> (older method, needs a security certificate on the phone).</div>
    </div></div>`,()=>true,'Done');
}
if(DLINK)setTimeout(linkRefresh,800);

// ============================================================
// PHONE — sync client, tab bar and phone-only touches
// ============================================================
const PSTATE=PHONE?PHONE.state:null;
let __pSyncing=false,__pLastTry=0,__pFail=0,__pStatus='idle',__pErr='',__pPending=false;
function phoneDirtyCount(){return PSTATE?Object.keys(PSTATE.dirty||{}).length:0}
function phoneBusy(){const a=document.activeElement;return !!document.querySelector('.modal-backdrop,.search-overlay')||(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))}
function phoneRefresh(){if(phoneBusy()){__pPending=true;return}__pPending=false;render()}
// ---------- finding the Mac on whatever network we're both on ----------
// The phone remembers every address the Mac has reported, plus its network name, and tries them
// all (and the usual iPhone hotspot range) whenever the last one stops answering.
const ATLAS_PORT=47801;
let __pBaseOk=0;
function phoneHostList(){
  const own=location.host;const out=[];
  const add=b=>{if(b&&!out.includes(b))out.push(b)};
  add(PSTATE.base||location.origin);
  (PSTATE.hosts||[]).forEach(h=>add(`https://${h}:${ATLAS_PORT}`));
  add(location.origin);
  for(let i=2;i<=14;i++)add(`https://172.20.10.${i}:${ATLAS_PORT}`); // iPhone Personal Hotspot
  return out;
}
async function phonePing(base,ms){
  const c=new AbortController();const t=setTimeout(()=>c.abort(),ms||3500);
  try{const r=await fetch(base+'/api/ping',{cache:'no-store',signal:c.signal});const j=await r.json();
    if(!r.ok||j.app!=='Atlas')throw 0;
    if(PSTATE.macId?j.macId!==PSTATE.macId:(PSTATE.mac&&j.mac!==PSTATE.mac))throw 0; // someone else's Mac
    return {base,info:j};
  }finally{clearTimeout(t)}
}
async function phoneFindMac(){
  const cur=PSTATE.base||location.origin;
  if(Date.now()-__pBaseOk<60000)return cur;
  try{const r=await phonePing(cur,3000);phoneLearn(r.info,cur);return cur}catch(e){}
  const others=phoneHostList().filter(b=>b!==cur);
  try{const r=await Promise.any(others.map(b=>phonePing(b,4000)));phoneLearn(r.info,r.base);return r.base}
  catch(e){return null}
}
function phoneLearn(info,base){
  __pBaseOk=Date.now();
  if(info){if(info.macId)PSTATE.macId=info.macId;if(info.mac)PSTATE.mac=info.mac;
    const seen=[...(info.hosts||[]),...(PSTATE.hosts||[])];PSTATE.hosts=[...new Set(seen)].slice(0,16)}
  PSTATE.base=base===location.origin?null:base;
  // let the offline cache fetch app updates from wherever the Mac is now
  try{navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({altBase:PSTATE.base})}catch(e){}
}
// ---------- direct link (web-installed phone app) ----------
let __lchan=null,__ldial=null;
async function linkChan(){
  if(window.__ATLAS_LINK_CHAN&&!window.__ATLAS_LINK_CHAN.closed){__lchan=window.__ATLAS_LINK_CHAN;window.__ATLAS_LINK_CHAN=null}
  if(__lchan&&!__lchan.closed)return __lchan;
  if(!__ldial)__ldial=AtlasLink.dial(AtlasLink.signal(),PSTATE.rtc.key,{dev:PSTATE.rtc.deviceId}).then(c=>{__lchan=c;return c}).finally(()=>{__ldial=null});
  return __ldial;
}
async function linkCall(op,body){const c=await linkChan();return c.call(op,body,45000)}
async function phoneSync(manual){
  if(!PHONE||__pSyncing||!(PSTATE.token||PSTATE.rtc)||PSTATE.revoked)return;
  __pSyncing=true;__pLastTry=Date.now();__pStatus='syncing';phonePill();
  const sentAt=Date.now();
  const keys=Object.keys(PSTATE.dirty);
  const changes=keys.map(k=>({key:k,...(__mem[k]===undefined?{deleted:true}:{value:__mem[k]}),base:PSTATE.shadow[k],t:PSTATE.dirty[k]}));
  try{
    let res,base=null;
    if(PSTATE.rtc){
      try{res=await linkCall('sync',{sinceRev:PSTATE.sinceRev||0,epoch:PSTATE.epoch||null,changes})}
      catch(e){if(e.code==='revoked'||e.code==='unknown'){PSTATE.revoked=true;await PHONE.saveState();__pStatus='revoked';phonePill();phoneRefresh();return}throw e}
    }else{
    base=await phoneFindMac();
    if(!base)throw new Error('Mac not found on this network');
    const ctrl=new AbortController();const to=setTimeout(()=>ctrl.abort(),25000);
    const r=await fetch(base+'/api/sync',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+PSTATE.token},body:JSON.stringify({sinceRev:PSTATE.sinceRev||0,epoch:PSTATE.epoch||null,changes}),signal:ctrl.signal,cache:'no-store'});
    clearTimeout(to);
    if(r.status===401){PSTATE.revoked=true;await PHONE.saveState();__pStatus='revoked';phonePill();phoneRefresh();return}
    res=await r.json();
    if(!r.ok)throw new Error(res.error||('HTTP '+r.status));
    }
    let changed=false;
    if(res.full){ // the Mac sent its whole copy: anything it no longer has (and we didn't just add) goes
      const has=new Set(res.changes.map(c=>c.key));
      Object.keys(__mem).forEach(k=>{if(k!=='__sync'&&!has.has(k)&&!PSTATE.dirty[k]&&!SYNC_LOCAL_KEYS.includes(k)){delete __mem[k];delete PSTATE.shadow[k];changed=true}});
    }
    res.changes.forEach(c=>{
      const sv=c.deleted?undefined:c.value;
      const sent=changes.find(x=>x.key===c.key);
      if(PSTATE.dirty[c.key]&&PSTATE.dirty[c.key]>sentAt){ // edited again while we were syncing: fold both together
        const merged=syncMerge3(sent?(sent.deleted?undefined:sent.value):PSTATE.shadow[c.key],sv,__mem[c.key],true);
        __applyRemote(c.key,merged);changed=true;
      }else{
        if(!__sEq(__mem[c.key],sv)){__applyRemote(c.key,sv);changed=true}
        delete PSTATE.dirty[c.key];
      }
      if(sv===undefined)delete PSTATE.shadow[c.key];else PSTATE.shadow[c.key]=__clone(sv);
    });
    keys.forEach(k=>{if(PSTATE.dirty[k]&&PSTATE.dirty[k]<=sentAt&&!res.changes.some(c=>c.key===k)){delete PSTATE.dirty[k];PSTATE.shadow[k]=__clone(__mem[k])}});
    PSTATE.sinceRev=res.rev;PSTATE.epoch=res.epoch;PSTATE.lastSync=Date.now();if(res.mac)PSTATE.mac=res.mac;if(res.macId)PSTATE.macId=res.macId;if(!PSTATE.rtc)phoneLearn(res,base);
    __dirty=true;await flushSave();await PHONE.saveState();
    __pFail=0;__pStatus='ok';__pErr='';
    if(changed)phoneRefresh();
    if(manual)showToast(changed?'Synced with '+(PSTATE.mac||'your Mac'):'Up to date with '+(PSTATE.mac||'your Mac'),null,null,2200);
  }catch(e){
    __pBaseOk=0;__pFail++;__pStatus='offline';__pErr=e.name==='AbortError'?'timed out':e.message;if(__lchan&&!__lchan.closed&&/timed out/.test(e.message))__lchan.close();
    if(manual)showToast(`Can’t reach ${PSTATE.mac||'your Mac'} right now. Your changes are saved on this phone and will sync later.`,null,null,4000);
  }finally{__pSyncing=false;phonePill()}
}
function phonePill(){
  if(!PHONE)return;
  let p=document.getElementById('phone-pill');
  if(!p){p=document.createElement('button');p.id='phone-pill';p.type='button';p.onclick=()=>phoneSync(true)}
  const host=document.querySelector('.main');if(host&&p.parentElement!==host)host.prepend(p);else if(!host&&!p.parentElement)document.body.appendChild(p);
  const n=phoneDirtyCount();
  const t=PSTATE.lastSync?new Date(PSTATE.lastSync).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}):'';
  const day=PSTATE.lastSync&&new Date(PSTATE.lastSync).toDateString()!==new Date().toDateString()?new Date(PSTATE.lastSync).toLocaleDateString('en-GB',{day:'numeric',month:'short'})+' ':'';
  const [cls,label]=__pStatus==='syncing'?['syncing','Syncing…']:__pStatus==='revoked'?['error','Disconnected']:__pStatus==='offline'?['off',n?`${n} change${n>1?'s':''} waiting`:`Offline${t?' · '+day+t:''}`]:[n?'off':'',n?`${n} to sync`:`Synced${t?' · '+day+t:''}`];
  p.className=cls;p.innerHTML=`<span class="dot"></span><span>${escapeHtml(label)}</span>`;
}
// keep trying: on open, when coming back to the app, when back online, shortly after edits, and every 20s
function phoneTick(){
  if(!PHONE||document.visibilityState!=='visible')return;
  const wait=__pFail?Math.min(60000,5000*__pFail):(phoneDirtyCount()?2500:20000);
  if(Date.now()-__pLastTry>=wait)phoneSync(false);else phonePill();
  if(__pPending&&!phoneBusy())phoneRefresh();
}
if(PHONE){
  setInterval(phoneTick,2500);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){__pLastTry=0;phoneTick()}else if(__lchan&&!__lchan.closed){__lchan.close();__lchan=null}});
  window.addEventListener('online',()=>{__pLastTry=0;__pFail=0;phoneTick()});
  setTimeout(()=>phoneSync(false),400);
}

// ---------- phone chrome: bottom tabs ----------
const PHONE_TABS=[['today','Today','sun'],['tasks','Tasks','checkSquare'],['__add','Add','plus'],['cashflow','Money','activity'],['__more','More','menu']];
function phoneTabs(){
  let bar=document.getElementById('phone-tabs');
  if(!bar){bar=document.createElement('nav');bar.id='phone-tabs';document.body.appendChild(bar)}
  bar.innerHTML=PHONE_TABS.map(([v,l,ic])=>{
    const on=v==='__more'?!!state.menuOpen:(v===state.view&&!state.menuOpen);
    const act=v==='__add'?'closePhoneMenu();openQuickCapture()':v==='__more'?(state.menuOpen?'closePhoneMenu()':'openPhoneMenu()'):`closePhoneMenu();navigate('${v}')`;
    return `<button type="button" class="${on?'on':''} ${v==='__add'?'add':''}" onclick="${act}" aria-label="${l}">${icon(ICONS[ic]?ic:'plus',v==='__add'?22:20)}<span>${l}</span></button>`;
  }).join('');
}
if(PHONE){
  const __renderDesk=render;
  render=function(){__renderDesk();phoneTabs();phonePill();phoneTables();
    if(PSTATE.revoked&&!document.getElementById('phone-revoked')){const b=document.createElement('div');b.id='phone-revoked';b.innerHTML=`This phone was disconnected from Atlas on your Mac, so it no longer syncs. <a href="#" onclick="phoneUnpair();return false;">Reconnect</a>`;document.body.appendChild(b)}};
  const __tog=toggleSidebar;toggleSidebar=function(){__tog();phoneTabs()};
  const __nav=navigate;navigate=function(...a){state.sidebarOpen=false;__nav(...a);const m=document.querySelector('.main');if(m)m.scrollTop=0};
}
function renderPhoneDataCard(){
  const n=phoneDirtyCount();
  return `<div class="card" style="padding:22px;margin-bottom:16px;">
    <div class="serif" style="font-size:18px;font-weight:500;margin-bottom:6px;">${icon('smartphone',16)} This phone</div>
    <div style="font-size:13px;color:var(--bone-dim);line-height:1.55;margin-bottom:12px;">Atlas keeps a full copy on this phone, so it works without a connection. ${PSTATE.rtc?`It syncs with <b>${escapeHtml(PSTATE.mac||'your computer')}</b> whenever Atlas is open there and both have an internet connection, wherever you are. Your data goes straight between the two, encrypted.`:`It syncs with <b>${escapeHtml(PSTATE.mac||'your Mac')}</b> whenever you’re on the same network (any Wi-Fi or your phone’s hotspot) and Atlas is open there. It finds your Mac again by itself after you move.`}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
      <div><div class="label">Last synced</div><div style="font-size:14px;margin-top:4px;">${PSTATE.lastSync?new Date(PSTATE.lastSync).toLocaleString('en-GB',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):'Never'}</div></div>
      <div><div class="label">Waiting to sync</div><div style="font-size:14px;margin-top:4px;">${n?`${n} change${n>1?'s':''}`:'Nothing'}</div></div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-primary" onclick="phoneSync(true)">${icon('refresh',14)} Sync now</button>
    <button class="btn btn-danger" onclick="phoneUnpair()">Disconnect this phone</button></div>
  </div>`;
}
async function phoneUnpair(){
  const n=phoneDirtyCount();
  if(!confirm(n?`${n} change${n>1?'s haven’t':' hasn’t'} reached your Mac yet and will be lost. Remove Atlas data from this phone anyway?`:'Remove Atlas data from this phone? Everything stays safe on your Mac. You can connect again from Settings on your computer.'))return;
  await PHONE.reset();location.replace(PSTATE.rtc?'./':'/');
}

// ---------- phone: tile menu (replaces the side drawer) ----------
function phoneMenuHtml(){
  const S=getSections();
  const live=store.get('profiles:list',[]).filter(p=>!p.archived);
  const activeProfile=state.profileId?store.get(`profile:${state.profileId}:meta`):null;
  const inProfile=!!activeProfile&&!PERSONAL_VIEWS.includes(state.view);
  const tile=(label,ic,act,on,color)=>`<button type="button" class="pm-tile ${on?'on':''}" onclick="closePhoneMenu();${act}"><span class="pm-ic" ${color?`style="color:${color};background:color-mix(in srgb,${color} 16%,transparent)"`:''}>${icon(ic,20)}</span><span class="pm-l">${label}</span></button>`;
  const nav=(v,l,ic)=>tile(l,ic,`navigate('${v}')`,state.view===v&&!inProfile);
  const grp=(t,items)=>{const h=items.filter(Boolean).join('');return h?`<div class="pm-g">${t}</div><div class="pm-grid">${h}</div>`:''};
  const mods=inProfile?getProfileModules(activeProfile):[];
  const pv=(v,l,ic)=>tile(l,ic,`navigate('${v}','${activeProfile.id}')`,state.view===v,activeProfile.color);
  return `<div class="pm-head">${atlasMark(38)}<div style="flex:1;min-width:0;"><div class="serif" style="font-size:20px;font-weight:600;">Atlas</div><div style="font-size:12px;color:var(--bone-mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${userName()?escapeHtml(userName())+' · ':''}synced with ${escapeHtml(PSTATE.mac||'your Mac')}</div></div><button type="button" class="pm-x" onclick="closePhoneMenu()" aria-label="Close">${icon('x',18)}</button></div>
    <button type="button" class="pm-search" onclick="closePhoneMenu();openGlobalSearch()">${icon('search',16)}<span>Search everything</span></button>
    ${inProfile?grp(`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${activeProfile.color};margin-right:6px;"></span>${escapeHtml(activeProfile.name)}`,[pv('dashboard','Dashboard','dashboard'),mods.includes('contacts')&&pv('contacts','Contacts','users'),mods.includes('inventory')&&pv('inventory','Inventory','package'),mods.includes('analytics')&&pv('analytics','Analytics','chart'),pv('transactions','Ledger','dollar'),pv('balance','Balance sheet','wallet')]):''}
    ${grp('Overview',[nav('today','Today','sun'),nav('command','Command Centre','dashboard'),nav('profiles','Businesses','building')])}
    ${grp('Life',[S.tasks&&nav('tasks','Tasks','checkSquare'),S.goals&&nav('goals','Goals','flag'),S.people&&nav('people','People','users'),S.renewals&&nav('renewals','Renewals','passport'),S.checkin&&nav('checkin','Check-in','smile')])}
    ${grp('Money',[S.money&&nav('cashflow','Cash flow','flow'),S.money&&nav('bills','Bills','receipt'),S.money&&nav('personalBalance','Net worth','wallet'),tile('Move money','transfer','openMoveModal()')])}
    ${grp('Health & habits',[S.routine&&nav('routine','Habits','calendar'),S.gym&&nav('daily','Gym log','dumbbell'),S.running&&nav('running','Running','run')])}
    <div class="pm-g">Businesses</div><div class="pm-list">${live.map(p=>`<button type="button" class="pm-row" onclick="closePhoneMenu();navigate('dashboard','${p.id}')"><span class="pm-dot" style="background:${p.color};box-shadow:0 0 10px ${p.color}"></span><span style="flex:1;min-width:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</span><span style="color:var(--bone-mute);font-size:12px;">${escapeHtml(p.type||'')}</span>${icon('chevron',14)}</button>`).join('')}<button type="button" class="pm-row pm-add" onclick="closePhoneMenu();openNewProfile()"><span class="pm-dot" style="background:transparent;box-shadow:none;display:grid;place-items:center;color:var(--ember);">${icon('plus',14)}</span><span style="flex:1;text-align:left;color:var(--ember);">New business</span></button></div>
    ${grp('Atlas',[nav('settings','Settings','settings'),tile(getTheme()==='light'?'Dark mode':'Light mode','sparkles','toggleTheme()'),tile('Sync now','refresh','phoneSync(true)')])}`;
}
function openPhoneMenu(){
  let m=document.getElementById('phone-menu');
  if(!m){m=document.createElement('div');m.id='phone-menu';document.body.appendChild(m)}
  m.innerHTML=`<div class="pm-sheet">${phoneMenuHtml()}</div>`;
  requestAnimationFrame(()=>m.classList.add('show'));state.menuOpen=true;phoneTabs();
}
function closePhoneMenu(){const m=document.getElementById('phone-menu');if(m)m.classList.remove('show');state.menuOpen=false;if(PHONE)phoneTabs()}

// ---------- phone: tables become tidy list rows (no sideways scrolling) ----------
function phoneTables(){
  if(!PHONE)return;
  document.querySelectorAll('.page table:not([data-m])').forEach(t=>{
    t.dataset.m='1';t.classList.add('m-table');
    const heads=[...t.querySelectorAll('thead th')].map(th=>th.textContent.trim());
    let ti=heads.findIndex(h=>/^(description|name|what|item|venture|contact|title|bill|habit|exercise|note|person|goal)/i.test(h));
    t.querySelectorAll('tbody tr').forEach(tr=>{
      const tds=[...tr.children].filter(x=>x.tagName==='TD');
      if(tds.length<2||tr.querySelector('td[colspan]'))return;
      tr.classList.add('m-row');
      let title=ti>=0?tds[ti]:null,amt=null;
      if(!title)title=tds.find(td=>!td.querySelector('input[type=checkbox]')&&td.textContent.trim().length>2&&!/^\d{1,2} \w{3}( \d{4})?$/.test(td.textContent.trim()))||tds[0];
      tds.forEach((td,i)=>{
        const txt=td.textContent.trim();const h=heads[i]||'';
        if(td.querySelector('input[type=checkbox]')&&txt.length<2)td.classList.add('m-check');
        else if(td.querySelector('button')&&!txt.replace(/[\s×✕]/g,''))td.classList.add('m-act');
        else if(td===title)td.classList.add('m-title');
        else if(!amt&&(/(amount|total|value|cost|price|balance|revenue|paid)/i.test(h)||/^[−\-+]?\s?[£$€฿¥₹]\s?[\d,.]+/.test(txt))){amt=td;td.classList.add('m-amt')}
        else if(/^[—–\-]?$/.test(txt)&&!td.querySelector('input,select,button'))td.classList.add('m-empty');
        else{td.classList.add('m-meta');if(h&&txt&&!/date|when|expires|stage|status|type|category/i.test(h)&&txt.length<14)td.dataset.l=h}
      });
      const br=document.createElement('td');br.className='m-br';
      (amt||title).after(br);
      if(amt&&title.nextElementSibling!==amt){title.after(amt);amt.after(br)}
    });
  });
}
if(PHONE){
  let __mt=null;new MutationObserver(()=>{clearTimeout(__mt);__mt=setTimeout(phoneTables,30)}).observe(document.getElementById('app'),{childList:true,subtree:true});
}
// Brand assets: app/mark-tile.png (emblem) and app/logo-full.png (emblem + wordmark).
function atlasMark(size){
  return `<img src="mark-tile.png" width="${size}" height="${size}" alt="Atlas" style="flex-shrink:0;border-radius:50%;box-shadow:0 0 22px -6px rgba(63,180,255,.7);display:block">`;
}
function atlasLogoFull(width){
  return `<img src="logo-full.png" width="${width}" height="${Math.round(width*1.1)}" alt="Atlas" style="display:block;border-radius:14px;">`;
}

// ============ INIT ============
applyTheme();
processRecurring();
autoSnapshotIfNeeded();
setupKeyboardShortcuts();
setupPrivacyBlur();
render();
if(DESKTOP){
  setSavePill('saved');
  DESKTOP.onMenu(a=>{if(a==='backup')desktopBackupNow();if(a==='quick'&&!document.getElementById('lock-screen'))openQuickCapture()});
  setTimeout(maybeShowWelcome,250);
}
startReminders();
setupLock();
