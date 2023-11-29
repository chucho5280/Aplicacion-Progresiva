const STATIC_CACHE = "dev-auto-site-v1";

const APP_SHELL = [
    "/",
    "/index.html",
    "/css/style.css",
    "/css/normalize.css",
    "js/main.js",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/12.jpg",
    "/img/13.jpg",
    "/img/14.jpg",
    "/img/icono_1.png",
    "/img/icono_2.png",
    "/img/icono_3.png",
    "/img/icono_4.png",
    "/img/logo.png",
    "/img/nosotros.jpg",
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res || fetch(e.request);
      })
      .catch(console.log)
  );
  //   e.waitUntil(response);
});

//Cache mejorado y culminado
