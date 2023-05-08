var darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "Modo Diurno";
  } else {
    darkModeButton.textContent = "Modo Nocturno";
  }
});

alert("Ignacio Rodriguez Blanco 1ºDAM");

