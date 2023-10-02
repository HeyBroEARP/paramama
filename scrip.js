document.addEventListener("DOMContentLoaded", function () {
    const botonMostrarMensaje = document.getElementById("mostrarMensaje");
    const mensaje = document.getElementById("mensaje");

    botonMostrarMensaje.addEventListener("click", function () {
        mensaje.innerHTML = "<strong>¡Gracias por ser la mejor mamá del mundo!</strong>";
        mensaje.style.color = "#4CAF50";  // Cambia el color del mensaje
        mensaje.style.fontWeight = "bold"; // Hace el mensaje en negrita
        mensaje.style.fontSize = "20px";   // Cambia el tamaño del texto

        // Borra el mensaje después de 3 segundos (3000 milisegundos)
        setTimeout(function () {
            mensaje.innerHTML = "";
        }, 3000);
    });
});
