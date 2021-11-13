
//FASE DOS INSTALACION DEL SW


//let self =this;    
const _CACHE_NAME = "mascotas2";


 self.addEventListener('install', (event) =>{
    console.log('SW instalado');
    const_FILES = [ "style.css", "index.js", "reset.css"];


    const _APP_SHELL = caches
    .open(_CACHE_NAME)
    .then((cache) => cache.addAll(_FILES));


    event.waitUntill(_APP_SHELL);

    /*
    caches.keys().then(cacheName =>{
            console.log(cacheName)
    })
*/
});


//ACTIVACION DEL SW

 self.addEventListener('activate', () =>{
    console.log('SW Activado');
})


let cacheName = 'mascotas-v1'; 

//static guarda los archivos locales
let staticCache = 'staticmascotas-v1'

// Dynamic guarda archivos que no estaban comtemplados como estaticos
let dynamicCache = 'dynamicmascotas-v1'

// Inmutable guarda archivos que nunca van a cambiar (versiones)
let inmutableCache = 'inmutablemascotas-v1'

let files_appShell = [
    "/", 
    "/style.css", 
    "/index.js", 
    "/reset.css"
]


self.addEventListener('install', result =>{
    // abrir el cache con base al nombre y si no existe lo crea

    const static_cache = caches.open(staticCache).then( cacheStatic => {
        cacheStatic.addAll(files_appshell);
    });

    const inmutable_cache = caches.open(inmutableCache).then( cacheInmutable => {
        cacheInmutable.addAll(inmutableFiles)
    });


      result.waitUntil(
         Promise.all(static_cache, inmutable_cache)
      );




    Self.addEventListener('activate', event => {
        event.waitUntil(
            caches.keys().then(cachesList => - Promise.all(
                cachesList.map(cacheName =>{
                if (staticCache != cacheName && inmutableCache != cacheName) {
                    return caches.delete(cacheName);
                }
             })         
            )).then(() => {
            console.log('V2 now ready to handle fetches!');
        })
    );
});


var nameChache = "mascotas";
var files = [
    "/", 
    "/style.css", 
    "/index.js", 
    "/reset.css"
];

self.addEventListener("install", function (event) {
  event.waitUntil(

    caches.open(nameChache).then(function (cache) {
      console.log("Cache Opened");
      return cache.addAll(files);
    })
  );
});

self.addEventListener( "fetch", (event) =>{


       // estrategias cache
//1.  cache only :la aplicacion solo va a responder lo que se encuentre en cache
// es cuando quiero que los datos esten listos en uh sitio estatico.

//    eventFecth.respondWith(
//        caches.match(eventFetch.request)
//   

/*2 Network only: Las aplicacion solamente va a responder la misma peticion
// sirve cuando  

    eventFetch.respondWith
    (fetch(eventFetch.request));
}) */

// 3. Cache first: Primero se va a buscar las peticiones al cache y e caso de que no esten
// se va a la red.

/*
const res = caches.match(eventFetch.request)
        .then(cacheResponse => {

                if (cacheResponse){
                    return cacheResponse;
                } else {
                    return fetch(eventFetch.request)
                } 

                return cacheResponse ? cacheResponse : fetch(eventFetch.resquest)
            })
        .cath(cacheError => {
            console.error('catch Error', cacheError);
        });

eventFetch.respondWith(res); */

// 4. Network firts: Primero hace un fetch a buscar ebn al red, si nolos encuentgra
// los buscara en el cache

/*
const _res = fetch(event.request)
        .then((networkResponse) => {

         //       if (networkResponse){
         //           return networkResponse;
         //     } else {
         //       return caches.match(eventFetch.request)
         // } 

                return networkResponse || caches.match(event.request);
            })
        .catch(networkError => {
            console.error('Networ Error', networkError);
        })

event.respondWith(_res);
*/

    const _RESULT = caches.match(event.request)
    .then((cacheResponse) => {
        return cacheResponse || fetch(event.request);
    })
        event.respondWith(_RESULT);


event.respondWhith(caches.match(event.request).then(
    cacheResponse =>{
        // si estuvo en cache, lo va a regresar
        if(cacheResponse) return cacheResponse;
        //si no estuvo en cache, lo va a buscar en la red
        return fetch(event.request). then(
            networkResponse => {
                caches.open(dynamic_cache).then(cache => {
                    cache.put(event.request, networkResponse)
                    // limpiar el cache
                })
            }
        )
    }
)
)


// 5 network first with fallback
/*event.respondWhith(
    fetch(event.request).then(
        networkResponse => {
            return networkResponse || caches.match(event.request).then(
                cacheResponse => {
                    
                }
            )
        }
    )
)
*/


//6 cache firts withj fallback

event.respondWhith(caches.match(event.request).then(
    cacheResponse =>{
               return cacheResponse || fetch(event.request).then(
                   networkResponse => {
                      caches.open(inmutableCache).then(cache => {
                          cache.put(evente.request, networkResponse)
                          return networkResponse.clone()
                      })
                   }
               )
        }
))
})

function limpiarCache(){
// identificar al cache - keys
//borrarlo -delete
// actualizarlo

}

self.addEventListener('message', Object => {
//revisar si el msj tiene el mensaje 'skipWaiting'
    if (object.data.action === 'skipWaiting') {
//ejecutar el skipWaiting
      self.skipWaiting();
    }
})


self.addEventListener('install', result =>{

let nameCache ='mascotas'
let files = [
'index.html',
'style.css', 
'reset.css',

]
caches.open('nameCache')
.then(cache =>{
return cache.addAll(files)
})
.catch(()=>{
console.log('algo salio mal')
})
})

self.addEventListener("fetch", (event)=>{
event.respondWith(
caches.match(event.request).then((param)=>{
    if(param){
        return param
    }
    return fetch(event.request)
})
)
})


});
