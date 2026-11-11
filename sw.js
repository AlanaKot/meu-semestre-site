// Service worker: um programinha que o navegador roda em segundo plano.
// Ele guarda uma cópia do site para abrir mesmo sem internet.
// Ao mudar este arquivo ou os ícones, aumente a VERSAO para os aparelhos baixarem a cópia nova.
const VERSAO = "meu-semestre-v2";
const ARQUIVOS = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // a página: tenta a internet primeiro (para pegar a versão nova) e usa a cópia se estiver sem conexão
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => {
      if (r.ok) { const c = r.clone(); caches.open(VERSAO).then(k => k.put("index.html", c)); }
      return r;
    }).catch(() => caches.match("index.html").then(r => r || caches.match("./"))));
    return;
  }

  // fontes do Google: usa a cópia na hora e atualiza em segundo plano
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(VERSAO).then(async k => {
      const salvo = await k.match(req);
      const rede = fetch(req).then(r => { if (r.ok || r.type === "opaque") k.put(req, r.clone()); return r; }).catch(() => salvo);
      return salvo || rede;
    }));
    return;
  }

  // ícones e manifesto: cópia primeiro
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
  }
});

// toque na notificação de lembrete: abre o site (ou traz a aba aberta para frente)
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type:"window", includeUncontrolled:true }).then(cs => {
    const c = cs.find(c => "focus" in c);
    return c ? c.focus() : self.clients.openWindow("./");
  }));
});
