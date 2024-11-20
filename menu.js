// Obtener los elementos del DOM
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('contact-modal');
const closeBtn = document.getElementById('close-btn');

// Cuando se hace clic en el botón "Enviar Mensaje", mostrar el modal
contactBtn.onclick = function() {
    modal.style.display = "block";
}

// Cuando se hace clic en el botón de cerrar, ocultar el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, también se cierra
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
