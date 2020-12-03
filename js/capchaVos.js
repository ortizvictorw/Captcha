
// Seleccionar estos idiomas por defecto, en caso de que existan
const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {

      /* selectores */
let inputRango=document.querySelector("#rangoActual")
let cardNumero=document.querySelector("#numero")
let formulario=document.getElementById('formulario') 
let $voces = document.querySelector("#voces") 
let $mensaje = document.querySelector("#numero")
    
    /* Captura el movimiento del Input-rango */
    inputRango.addEventListener('change',function(e){
        function escuchar(){

            /* Numero que usara para el Captcha */
            clock = new Date() 
            valorCaptchaString = (clock.getHours()/2).toString()
            //console.log(valorCaptchaString)
            valorCaptcha= (clock.getHours()/2).toString()
            valorCaptchaInt=parseInt(valorCaptcha, 10)

            valorcaptchaIntnMenos=valorCaptchaInt-1
            StringMeno=valorcaptchaIntnMenos.toString()

            valorcaptchaIntnMas=valorCaptchaInt+1
            StringMas=valorcaptchaIntnMas.toString()

            /*Controlador de dialogo ayuda a resolver  */
            if(e.target.value==valorCaptchaInt){
                
                setTimeout(function(){    
                    formulario.submit() 
                }, 6000);
                return ` estas en ${valorCaptchaString}, has resuelto el captcha, espera unos segundos para la redireccion`

            }else if(e.target.value==valorCaptchaInt-1){ 
                    return ` estas en ${StringMeno}, sumale 1` 
            }
            else if(e.target.value==valorCaptchaInt+1){
                return `estas en ${StringMas}, restale 1`
            }
            else{
                return `estas en, ${e.target.value} ,Debes llegar a, ${valorCaptchaString}`
            } 
            
        }/* Fin de funcion escuchar */


        let textoAEscuchar = escuchar();
        /*console.log(textoAEscuchar)*/  

        /* configuracion de Vos */
        if (!textoAEscuchar) return alert("Escribe el texto");
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.voice = vocesDisponibles[$voces.value];
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = textoAEscuchar;
        mensaje.pitch = 1;
        // ¡Parla!
            speechSynthesis.speak(mensaje);
        
        /* Card donde se visualiza el numero donde esta ubicado el input-Rango */
        cardNumero.innerHTML=`${e.target.value}`
             if(e.target.value==63){
                 
                arary ="has resuelto el captcha"
                console.log(arary)
            }else{
                arary =""
            } 
       
        })
 
    ,
    
    $mensaje.textContent.toString();

        /* console.log($mensaje) */
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