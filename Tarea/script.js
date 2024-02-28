// script.js

// Acceder al elemento de video
const video = document.getElementById('videoElement');

// Función para solicitar acceso a la cámara
async function getMedia() {
    try {
        // Obtener el stream de la webcam
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Asignar el stream al elemento de video
        video.srcObject = stream;
    } catch (error) {
        console.error('Error al obtener acceso a la cámara:', error);
    }
}

// Llamar a la función para obtener acceso a la cámara cuando la ventana se haya cargado completamente
window.onload = getMedia;
