let tablero = ['', '', '', '', '', '', '', '', ''];
let jugador = 'X';
const cuadrados = document.querySelectorAll('.cuadrado');
const resetButton = document.querySelector('#reset');

// Agregar un manejador de eventos para cada casilla
cuadrados.forEach((cuadrado) => {
  cuadrado.addEventListener('click', handleClick);
});

// Agregar un manejador de eventos para el botón de reinicio
resetButton.addEventListener('click', nuevoJuego);

// Función para manejar los clics del usuario
function handleClick(event) {
  const cuadrado = event.target;
  const index = cuadrado.id;
  
  // Si la casilla ya está marcada, salimos de la función
  if (tablero[index] !== '') return;
  
  // Marcamos la casilla con el símbolo del jugador actual
  tablero[index] = jugador;
  cuadrado.textContent = jugador;
  
  // Verificar si hay un ganador
  const ganador = hayGanador();
  if (ganador) {
    alert(`¡${ganador} ha ganado!`);
    reinicio();
    return;
  }
  
  // Si no hay ganador, verificamos si hay empate
  if (empate()) return;
  
  // Si no hay ganador ni empate, cambiamos al siguiente jugador
  jugador = jugador === 'X' ? 'O' : 'X';
}

// Función para reiniciar el tablero
function reinicio() {
  tablero = ['', '', '', '', '', '', '', '', ''];
  cuadrados.forEach((cuadrado) => {
    cuadrado.textContent = '';
  });
  jugador = 'X';
}

// Función para reiniciar el juego completo
function nuevoJuego() {
  reinicio();
  alert('¡Juego reiniciado!');
}

// Función para verificar si el tablero está lleno
function tableroLLeno() {
  return tablero.every((cuadrado) => cuadrado !== '');
}

// Función para verificar si hay un empate
function empate() {
  if (tableroLLeno()) {
    alert('¡Empate!');
    reinicio();
    return true;
  }
  return false;
}

// Función para verificar si hay un ganador
function hayGanador() {
  const arrayCombinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < arrayCombinaciones.length; i++) {
    const [a, b, c] = arrayCombinaciones[i];
    if (tablero[a] === tablero[b] && tablero[b] === tablero[c] && tablero[a] !== '') {
      return tablero[a];
    }
  }
  return null;
}
