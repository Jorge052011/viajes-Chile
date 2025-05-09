

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// ingresando código de js para dar mensaje de "mensaje enviado"
$(document).ready(function(){
    $("#enviar").on('click',
        function(event){ 
        alert("Mensaje Enviado Gracias por tu Comentario")
    });
});
