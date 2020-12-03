window.addEventListener('load', function() { 
/* selectores */

let inputNombre=document.querySelector('.nombres-Contact')
let inputEmail=document.querySelector('.email-Contact')
let inputMensaje=document.querySelector('.mensaje-Contact')
let buttonForm=document.querySelector('#enviar')
let errorNombre=document.getElementById('errorNombre')
let errorEmail=document.getElementById('errorEmail')
let errorMensaje=document.getElementById('errorMensaje')
let regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   

   /* Validador Nombre */
inputNombre.addEventListener ('change', () => {
    
         if (inputNombre.value.length < 3 || 
                !isNaN(inputNombre.value) || 
                inputNombre.value ==='' ) {
            
            errorNombre.innerHTML = 
            `<button class="errorForm" id="error-nombre-li" role="alert">
                Formato incorrecto para nombre a ingresado: ${inputNombre.value} 
            </button>`
            errorNombre.focus()

         }else{
            errorNombre.innerHTML = ``
         } 
        })
    
     /*Validar Email  */   
inputEmail.addEventListener ('change', () => {
            
        if (regular.test(inputEmail.value) === false || inputEmail.value ==='') {
        
        
        errorEmail.innerHTML =
        `<button class="errorForm" id="error-email-li" role="alert">
            Formato incorrecto para email a ingresado: ${inputEmail.value} 
        </button>`
        
        errorEmail.focus()
    
        }else{
            errorEmail.innerHTML = ``
            } 
        })

     /* Validar TextArea Mensaje */  
inputMensaje.addEventListener ('change', () => {
            if (inputMensaje.value.length < 3 ) {

            errorMensaje.innerHTML = 
            `<button class="errorForm" id="error-mensaje-li" role="alert">
                Por favor comuniquenos el motivo de su contacto, Gracias !!
            </button>`
            errorMensaje.focus()
            
            }else{
            errorMensaje.innerHTML = ``
            } 
        })

        /* Validar Datos para ingresar al modal */
buttonForm.addEventListener ('click', () => {

            if(inputMensaje.value.length < 3){
                
            errorMensaje.innerHTML = 
                `<button class="errorForm" id="error-mensaje-li" role="alert">
                    Por favor comuniquenos el motivo de su contacto, Gracias !!
                </button>`
            buttonForm.getAttribute("data-target")
            buttonForm.setAttribute("data-target", "")

            }else if(regular.test(inputEmail.value) === false ){

            errorEmail.innerHTML =
                `<button class="errorForm" id="error-email-li" role="alert">
                    Formato incorrecto para email a ingresado: ${inputEmail.value} 
                </button>`
            buttonForm.getAttribute("data-target")
            buttonForm.setAttribute("data-target", "")

            }else if(inputNombre.value.length < 3 ){
             
            errorNombre.innerHTML = 
                `<button class="errorForm" id="error-nombre-li" role="alert">
                    Formato incorrecto para nombre a ingresado: ${inputNombre.value} 
                </button>`
            buttonForm.getAttribute("data-target")
            buttonForm.setAttribute("data-target", "")

            }else
            {
                
                buttonForm.getAttribute("data-target")
                buttonForm.setAttribute("data-target", "#exampleModal")
            }

        })

    
     })