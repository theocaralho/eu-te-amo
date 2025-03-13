function mostrarCarta() {
    const carta = document.getElementById("textoCarta");
    if (carta.style.display === "none") {
      carta.style.display = "block";
      carta.style.opacity = 0;
      setTimeout(() => carta.style.opacity = 1, 100);
    } else {
      carta.style.opacity = 0;
      setTimeout(() => carta.style.display = "none", 500);
    }
  }
  
  function tocarMusica() {
    const audio = document.getElementById("audio");
    audio.play();
  }
  function tocarMusica() {
    const audio = document.getElementById("audio");
    audio.play();
  }
  
  function pausarMusica() {
    const audio = document.getElementById("audio");
    audio.pause();
  }
  