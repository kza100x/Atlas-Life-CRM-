// Atlas phone service worker (web edition): keeps the app on the phone so it opens with no connection.
const CACHE='atlas-web-00c1a2be0f95';
const ASSETS=["./", "apple-touch-icon.png", "atlas.js", "icon-192.png", "icon-512.png", "icon.png", "inter-latin-wght-normal.woff2", "jetbrains-mono-latin-400-normal.woff2", "jetbrains-mono-latin-500-normal.woff2", "jspdf.plugin.autotable.min.js", "jspdf.umd.min.js", "jsqr.js", "link.js", "loader.js", "logo-full.png", "manifest-ios.webmanifest", "manifest.webmanifest", "mark-tile.png", "space-grotesk-latin-wght-normal.woff2", "style.css"];
const SCOPE=self.registration.scope;
const abs=a=>new URL(a,SCOPE).href;
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(abs))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('atlas-web-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||!u.href.startsWith(SCOPE))return;
  const key=e.request.mode==='navigate'?abs('./'):u.origin+u.pathname;
  const fresh=e.request.mode==='navigate'||/\.(js|css|webmanifest)$/.test(u.pathname);
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(key,{ignoreSearch:true});
    if(!fresh&&hit)return hit;
    try{
      const r=await Promise.race([fetch(e.request.mode==='navigate'?key:e.request,{cache:'no-store'}),new Promise((_,rej)=>setTimeout(()=>rej(new Error('slow')),hit?3000:20000))]);
      if(r.ok&&ASSETS.map(abs).includes(key))c.put(key,r.clone());
      return r;
    }catch(err){if(hit)return hit;throw err}
  }));
});
