/* variables */

let textoCambiante = document.getElementById("texto_cambiante")

/* funciones */

document.addEventListener('DOMContentLoaded', function () {
    // los textos que queremos que se muestre
    let textos = ['¡Bienvenido a mi página web personal!','¡Welcome to my personal website!'];

    // Define la velocidad de escritura en milisegundos
    let velocidadEscritura = 50;

    // Variable para rastrear la posición actual en el texto
    let posicionActual = 0;
    let indiceTextoActual = 0;
    textoCambiante.innerHTML = "";
    function escribirTexto() {

        if (posicionActual < textos[indiceTextoActual].length) {
            // Agrega el siguiente carácter al texto en el elemento
            textoCambiante.innerHTML += textos[indiceTextoActual].charAt(posicionActual);

            // Incrementa la posición actual
            posicionActual++;

            // Espera un tiempo antes de agregar el siguiente carácter
            setTimeout(escribirTexto, velocidadEscritura);
        } else {
            // Si se ha completado un texto, espera un tiempo antes de mostrar el siguiente texto
            setTimeout(cambiarTexto, 2000);
        }
    }

    function cambiarTexto() {
        // Reinicia la posición actual
        posicionActual = 0;

        // Limpia el contenido del elemento de texto
        textoCambiante.innerHTML = '';

        // Incrementa el índice del texto actual
        indiceTextoActual++;

        // Verifica si se han mostrado todos los textos
        if (indiceTextoActual === textos.length) {
            // Reinicia el índice del texto actual
            indiceTextoActual = 0;
        }

        // Inicia la animación de escritura para el nuevo texto
        escribirTexto();
    }

    escribirTexto();
})

