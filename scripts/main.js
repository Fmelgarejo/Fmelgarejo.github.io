var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/imagenPrueba.jpg') {
      miImage.setAttribute('src','images/imagen1.jpg');
    } else {
      miImage.setAttribute('src', 'images/imagenPrueba.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'En Dios todo es posible!!! Si lo lograremos ' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'En Dios todo es posible!!! Si lo lograremos ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
