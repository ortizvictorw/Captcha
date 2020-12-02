window.addEventListener('load', function() { 

    

    document.querySelector('.nombres-Contact').addEventListener ('change', () => {
    
        const nombre = document.getElementById('nombres');
        
         if (nombre.value.length < 3 || !isNaN(nombre.value) || nombre.value ==='' ) {
             
             document.getElementById('errorNombre')
            .innerHTML = `<button class="errorForm" id="error-nombre-li" role="alert">Formato incorrecto para nombre a ingresado: ${nombre.value} </button>`
            document.getElementById('error-nombre-li').focus()
         }else{
            document.getElementById('errorNombre').innerHTML = ``
         } 
        })
    
    document.querySelector('.email-Contact').addEventListener ('change', () => {
        
    
        const email = document.querySelector('.email-Contact');
        const regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
        if (regular.test(email.value) === false || email.value ==='') {
        
        document.getElementById('errorEmail')
        .innerHTML =`<button class="errorForm" id="error-email-li" role="alert">Formato incorrecto para email a ingresado: ${email.value} </button>`
        
        document.getElementById('error-email-li').focus()
    
        }else{
            document.getElementById('errorEmail').innerHTML = ``
            } 
        })
    
    
     /*    document.querySelector('.suscribite-Contact').addEventListener ('change', () => {
        
    
            const email = document.querySelector('.suscribite-Contact');
            const regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
            if (regular.test(email.value) === false || email.value ==='') {
            
            document.getElementById('errorSuscribite')
            .innerHTML =`<button class="errorForm" id="error-suscribite-li" role="alert">Formato incorrecto para email a ingresado: ${email.value} </button>`
            
            document.getElementById('error-suscribite-li').focus()
        
            }else{
                document.getElementById('errorSuscribite').innerHTML = ``
                } 
            }) */
       
    
    document.querySelector('.mensaje-Contact').addEventListener ('change', () => {
    
        const mensaje = document.querySelector('.mensaje-Contact');
        
            if (mensaje.value.length < 3 ) {
                document.getElementById('errorMensaje')
            .innerHTML = `<button class="errorForm" id="error-mensaje-li" role="alert">Por favor comuniquenos el motivo de su contacto, Gracias !!</button>`
            document.getElementById('error-mensaje-li').focus()
            }else{
            document.getElementById('errorMensaje').innerHTML = ``
            } 
        })

        document.querySelector('#enviar').addEventListener ('click', () => {
           
            const nombre = document.getElementById('nombres')
            const email = document.getElementById('email')
            const regular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            const mensaje = document.getElementById('mensaje')
           

            if(mensaje.value.length < 3){
                console.log('mensaje')
                document.getElementById('errorMensaje')
                .innerHTML = `<button class="errorForm" id="error-mensaje-li" role="alert">Por favor comuniquenos el motivo de su contacto, Gracias !!</button>`
                document.querySelector('#enviar').getAttribute("data-target")
                document.querySelector('#enviar').setAttribute("data-target", "#")

            }else if(regular.test(email.value) === false ){
                console.log('email')
                document.getElementById('errorEmail')
            .innerHTML =`<button class="errorForm" id="error-email-li" role="alert">Formato incorrecto para email a ingresado: ${email.value} </button>`
            document.querySelector('#enviar').getAttribute("data-target")
            document.querySelector('#enviar').setAttribute("data-target", "")

            }else if(nombre.value.length < 3 ){
                console.log('nombre')
                document.getElementById('errorNombre')
            .innerHTML = `<button class="errorForm" id="error-nombre-li" role="alert">Formato incorrecto para nombre a ingresado: ${nombre.value} </button>`
                document.querySelector('#enviar').getAttribute("data-target")
                document.querySelector('#enviar').setAttribute("data-target", "")
            }else
            {
                console.log('todo ok')
                document.querySelector('#enviar').getAttribute("data-target")
                document.querySelector('#enviar').setAttribute("data-target", "#exampleModal")
            }

        })

    
     })