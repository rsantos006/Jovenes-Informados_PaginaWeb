// Referencias a los elementos del Popover
const popoverTrigger = document.getElementById('popover-trigger');
const simplePopover = document.getElementById('simple-popover');
const popoverCloseBtn = document.getElementById('popover-close');

// Funcionalidad para mostrar/ocultar el Popover con un toggle 
function togglePopover() {
    simplePopover.classList.toggle('show');
}

// Event Listeners para el Popover 
if (popoverTrigger && simplePopover) {
    popoverTrigger.addEventListener('click', togglePopover);
    
    // Cerrar el popover con el botón de cerrar
    popoverCloseBtn.addEventListener('click', togglePopover);

    // Cerrar el popover haciendo click fuera de él
    document.addEventListener('click', function(event) {
        // Si el click no es en el Popover ni en el botón, y el Popover está visible
        if (!popoverTrigger.contains(event.target) && !simplePopover.contains(event.target) && simplePopover.classList.contains('show')) {
            simplePopover.classList.remove('show');
        }
    });
}


// Funcionalidad para el botón "Regresar al Inicio" (del Cód. 1)
document.getElementById('btnRegresar').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

// Funcionalidad para abrir el menú lateral (del Cód. 3)
function w3_open() {
  document.getElementById("mySidebar").style.width = "300px"; 
}

// Funcionalidad para cerrar el menú lateral (del Cód. 3)
function w3_close() {
  document.getElementById("mySidebar").style.width = "0"; 
}

// Cierra el menú lateral al hacer click en un enlace interno
document.querySelectorAll('#mySidebar a').forEach(link => {
    link.addEventListener('click', w3_close);
});