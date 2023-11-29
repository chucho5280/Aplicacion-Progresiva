const STATIC_CACHE = "dev-padload-site-v2";

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


self.addEventListener("install",installEvent =>{
  installEvent.waitUntil(
      caches.open(STATIC_CACHE).then(cache =>{
          cache.addAll(APP_SHELL);
      })
  );
});

self.addEventListener("fetch",fetchEvent =>{
  fetchEvent.repondWith( //Le ponemos el respondWith por que no queremos la respuesta que nos da el navegador
  //Nosotros queremos el catche
      catches.match(fetchEvent.request)
          .then(res => {
              return res || fetch(fetchEvent.request)
          })
  );
});
