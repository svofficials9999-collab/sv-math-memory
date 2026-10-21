const PREFIX='svmm-shell-',CACHE=PREFIX+'v52-classfirst';
const ROOT=new URL('./',self.location.href),FILES=['./','index.html','manifest.webmanifest'],WARM=['concept.html','learn.html','CURRICULUM_SOURCES.md'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(p=>fetch(new URL(p,ROOT),{cache:'reload'}).then(r=>{if(!r.ok)throw Error(p);return c.put(new URL(p,ROOT),r)})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
 // Warm big files after activation, never blocking install, activate or a launch.
 caches.open(CACHE).then(c=>Promise.allSettled(WARM.map(p=>c.add(new URL(p,ROOT))))).catch(()=>{})});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==ROOT.origin||!u.pathname.startsWith(ROOT.pathname))return;
 const network=(async()=>{const r=await fetch(e.request,{cache:'no-store'});if(r.ok){const c=await caches.open(CACHE);await c.put(e.request,r.clone())}return r})();
 e.waitUntil(network.then(()=>{},()=>{}));
 e.respondWith((async()=>{const c=await caches.open(CACHE);let hit=await c.match(e.request);if(!hit&&e.request.mode==='navigate'&&(u.pathname===ROOT.pathname||u.pathname===new URL('index.html',ROOT).pathname))hit=await c.match(ROOT.href)||await c.match(new URL('index.html',ROOT).href);
 // Fast online responses stay fresh; a stalled connection must not hide a saved app.
 if(hit){let timer;try{return await Promise.race([network.catch(()=>hit),new Promise(r=>{timer=setTimeout(()=>r(hit),1200)})])}finally{clearTimeout(timer)}}
 try{return await network}catch{return Response.error()}})());
});
