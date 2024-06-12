// Crear un objeto Date que representa la fecha y hora actuales
let fecha = new Date();

// Definir una función que se ejecuta cuando la ventana del navegador ha terminado de cargarse
window.onload = function () {
    // Agregar un evento 'click' al botón con el id "fechaHoy" para que ejecute la función mostrarFecha cuando se haga clic
    document.querySelector("#fechaHoy").addEventListener("click", mostrarFecha);
    // Agregar un evento 'click' al botón con el id "diaHoy" para que ejecute la función mostrarDia cuando se haga clic
    document.querySelector("#diaHoy").addEventListener("click", mostrarDia);
    // Agregar un evento 'click' al botón con el id "mesActual" para que ejecute la función mostrarMes cuando se haga clic
    document.querySelector("#mesActual").addEventListener("click", mostrarMes);
    // Agregar un evento 'click' al botón con el id "anioActual" para que ejecute la función mostrarAnio cuando se haga clic
    document.querySelector("#anioActual").addEventListener("click", mostrarAnio);
    // Agregar un evento 'click' al botón con el id "fechaCompleta" para que ejecute la función mostrarFullDate cuando se haga clic
    document.querySelector("#fechaCompleta").addEventListener("click", mostrarFullDate);
    // Agregar un evento 'click' al botón con el id "hora" para que ejecute la función mostrarHora cuando se haga clic
    document.querySelector("#hora").addEventListener("click", mostrarHora);
}

// Definir una función que muestra la fecha actual en formato local
function mostrarFecha() {
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto a la fecha actual en formato local
    document.querySelector("#salida").textContent = fecha.toLocaleDateString();
}

// Definir una función que muestra el día actual del mes
function mostrarDia() {
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto al día actual del mes
    document.querySelector("#salida").textContent = "Hoy es " + fecha.getDate();
}

// Definir una función que muestra el mes actual (0-11)
function mostrarMes() {
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto al mes actual (sumando 1 para mostrarlo como 1-12)
    document.querySelector("#salida").textContent = "El mes es " + (parseInt(fecha.getMonth()) + 1);
}

// Definir una función que muestra el año actual
function mostrarAnio() {
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto al año actual
    document.querySelector("#salida").textContent = "El año es " + fecha.getFullYear();
}

// Definir una función que muestra la fecha completa en formato local
function mostrarFullDate() {
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto a la fecha completa en formato local con formato específico
    document.querySelector("#salida").textContent = "Hoy es " + fecha.toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).toUpperCase();
}

// Definir una función que muestra la hora actual
function mostrarHora() {
    // Actualizar el objeto fecha a la fecha y hora actuales
    fecha = new Date();
    // Seleccionar el elemento con el id "salida" y establecer su contenido de texto a la hora actual en formato local
    document.querySelector("#salida").textContent = "La hora es " + fecha.toLocaleTimeString();

}
