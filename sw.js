const CACHE_NAME='bantubet-cache-v1.0.1',OFFLINE_URL='/offline.html',ASSETS=['/','/index.html','/style.min.css','/script.min.js','/images/logo-bantubet.png','/images/isj-angola.png','/images/qrcode.png',OFFLINE_URL];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(n=>n!==CACHE_NAME&&caches.delete(n))))),self.clients.claim()});
self.addEventListener('fetch',e=>{if('GET'!==e.request.method)return;e.respondWith(fetch(e.request).then(r=>{const n=r.clone();return caches.open(CACHE_NAME).then(c=>c.put(e.request,n)),r}).catch(()=>caches.match(e.request).then(r=>r||caches.match(OFFLINE_URL))))});
