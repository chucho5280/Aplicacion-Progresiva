//Configurar SW
let swLocation = "sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");


if("serviceWorker" in navigator){
  console.log("Si soporta")
  window.addEventListener("load",function(){
      navigator.serviceWorker.register("/serviceWorker.js")
      .then(res => console.log("Service Worker registrado"))
      .catch(err => console.log("Service worker no registrado: "+err))
  })
}