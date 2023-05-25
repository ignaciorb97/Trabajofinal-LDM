// script.js


function cambiarModo() {
    if (document.body.classList.contains('modo-noche')) {
        document.body.classList.remove('modo-noche');
        localStorage.setItem('modo', 'dia');
    } else {
        document.body.classList.add('modo-noche');
        localStorage.setItem('modo', 'noche');
    }
}


// Obtener el elemento de entrada de texto
const textoInput = document.getElementById('texto-input');


// Obtener el elemento para mostrar el texto
const textoMostrado = document.getElementById('texto-mostrado');




function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}


function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}




function mostrarTextoAlmacenado() {
    var textoAlmacenado = sessionStorage.getItem('texto') || 'sin identificar';
    var textoMostrado = document.getElementById('texto-mostrado');
    textoMostrado.textContent = textoAlmacenado;
    
    
}

function almacenarEnSessionStorage() {
    var textoInput = document.getElementById('texto-input').value;
    sessionStorage.setItem('texto', textoInput);
    alert('Bienvenido '+textoInput);
    
}
function cambiarFuente(){
    listValue=localStorage.getItem('fuente');
    document.body.style.fontFamily = listValue;
}

// Función para abrir la ventana modal
function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function decirHola(){
    var persona =sessionStorage.getItem('texto');
    console.log('hola '+persona);
}

