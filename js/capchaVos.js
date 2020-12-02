/**
 * 
 * Texto a voz con JavaScript usando speechSynthesis
 * [TTS con JS]
 * @author parzibyte
 * 
 * Visita: parzibyte.me/blog
 */

        



     
    
/**
 * 
 * Texto a voz con JavaScript usando speechSynthesis
 * [TTS con JS]
 * @author parzibyte
 * 
 * Visita: parzibyte.me/blog
 */
// Seleccionar estos idiomas por defecto, en caso de que existan
const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {

     
    document.querySelector("#rangoActual").addEventListener('change',function(e){
        function escuchar(){
            
            
            if(e.target.value==2 ){
                setTimeout(function(){ document.getElementById('formulario').submit() }, 6000);
                    
                return ` estas en 2, has resuelto el captcha, espera unos segundos para la redireccion`
            }else if(e.target.value==1){
                return ` estas en 1, sumale 1`
            }
            else if(e.target.value==3){
                return `estas en 3, restale 1`
            }

            else{
                return `${e.target.value}`
            } 
            
        }

        let textoAEscuchar = escuchar();
/*     console.log(textoAEscuchar)
 */    if (!textoAEscuchar) return alert("Escribe el texto");
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.voice = vocesDisponibles[$voces.value];
    mensaje.volume = 1;
    mensaje.rate = 1;
    mensaje.text = textoAEscuchar;
    mensaje.pitch = 1;
    // ¡Parla!
    speechSynthesis.speak(mensaje);
        
        document.querySelector("#numero").innerHTML=`${e.target.value}`
             if(e.target.value==63){
                 
                arary ="has resuelto el captcha"
                console.log(arary)
            }else{
                arary =""
            } 
            
        console.log (e.target.value) 
        })
 
    const $voces = document.querySelector("#voces"),
    $boton = document.querySelector("#btnEscuchar"),
    $mensaje = document.querySelector("#numero").textContent.toString();
    
    console.log($mensaje)
    let posibleIndice = 0, vocesDisponibles = [];

  // Función que pone las voces dentro del select
  const cargarVoces = () => {
    if (vocesDisponibles.length > 0) {
      console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
      return;
    }
    vocesDisponibles = speechSynthesis.getVoices();
    console.log({ vocesDisponibles })
    posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
    if (posibleIndice === -1) posibleIndice = 0;
    vocesDisponibles.forEach((voz, indice) => {
      const opcion = document.createElement("option");
      opcion.value = indice;
      opcion.innerHTML = voz.name;
      opcion.selected = indice === posibleIndice ;
      $voces.appendChild(opcion);
      
      
      
    });
  };

  // Si no existe la API, lo indicamos
  if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

  // No preguntes por qué pongo esto que se ejecuta dos veces
  // en determinados casos, solo así funciona en algunos casos
  cargarVoces();
  // Si hay evento, entonces lo esperamos
  if ('onvoiceschanged' in speechSynthesis) {
    speechSynthesis.onvoiceschanged = function () {
      cargarVoces();
    };
  }
 
})

;