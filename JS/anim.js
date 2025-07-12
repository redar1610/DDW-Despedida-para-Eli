// Sincronizar las letras con la canción
const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
const lyricsData = [
  { text: "TU SONRISA TAN RESPLANDECIENTE", time: 0 },
  { text: "A MI CORAZÓN DEJA ENCANTADO", time: 7 },
  { text: "VEN, TOMA MI MANO", time: 11 },
  { text: "PARA HUIR DE ESTA TERRIBLE OSCURIDAD", time: 13 },

  { text: "EN EL INSTANTE EN QUE TE VOLVÍ A ENCONTRAR", time: 22 },
  { text: "MI MENTE TRAJO A MÍ AQUEL HERMOSO LUGAR", time: 28 },
  { text: "QUE CUANDO ERA NIÑO FUE TAN VALIOSO PARA MÍ", time: 34 },
  { text: "QUIERO SABER SI ACASO TÚ CONMIGO QUIERES BAILAR", time: 41 },
  { text: "SI ME DAS TU MANO TE LLEVARÉ", time: 47 },

  { text: "POR UN CAMINO CUBIERTO DE LUZ Y OSCURIDAD", time: 52 },
  { text: "TAL VEZ SIGUES PENSANDO EN ÉL", time: 58 },
  { text: "NO PUEDO YO SABERLO, PERO SÉ Y ENTIENDO", time: 62 },
  { text: "QUE AMOR NECESITAS TÚ", time: 67 },
  { text: "Y EL VALOR PARA PELEAR EN MÍ LO HALLARÁS", time: 70 },

  { text: "MI CORAZÓN ENCANTADO VIBRA", time: 76 },
  { text: "POR EL POLVO DE ESPERANZA Y MAGIA", time: 80 },
  { text: "DEL UNIVERSO QUE", time: 84 },
  { text: "AMBICIONAN TODOS POSEER", time: 86 },
  { text: "VOY A AMARTE PARA TODA LA VIDA", time: 91 },
  { text: "NO ME IMPORTA SI AÚN NO TE INTERESO", time: 96 },
  { text: "VEN, TOMA MI MANO", time: 101 },
  { text: "PARA HUIR DE ESTA INFINITA OSCURIDAD", time: 104 },

  { text: "EL UNIVERSO TE PUEDO DAR", time: 113 },
  { text: "SOLO POR UN INSTANTE DE TU MIRAR", time: 117 },
  { text: "PUEDO PARAR EL TIEMPO", time: 121 },
  { text: "CUANDO ESTÁS CERCA DE MÍ", time: 124 },
  { text: "QUIERO BORRAR TODAS LAS DUDAS QUE ME HACEN MAL", time: 128 },
  { text: "SABER EL CAMINO PARA ENCONTRAR", time: 133 },
  { text: "ESE DESTINO QUE SIEMPRE IMAGINO JUNTO A TI", time: 138 },

  { text: "TANTAS COSAS QUE QUIERO DECIRTE", time: 145 },
  { text: "SE QUEDAN EN SILENCIO, NO ENCUENTRO EL MOMENTO", time: 150 },
  { text: "EL RUIDO DE LA CIUDAD", time: 155 },
  { text: "NO ME PERMITE LLEGAR A TU CORAZÓN", time: 158 },

  { text: "Y AUNQUE TRATO DE OCULTAR LO QUE SIENTO", time: 165 },
  { text: "SIEMPRE OCUPAS TÚ MI PENSAMIENTO", time: 169 },
  { text: "YA NO PUEDO FINGIR", time: 173 },
  { text: "LO QUE EL CORAZÓN SIENTE POR TI", time: 176 },
  { text: "TÚ ME ATRAPAS CON ESA SONRISA", time: 181 },
  { text: "YA NO VIVO ESTA VIDA DE PRISA", time: 185 },
  { text: "VEN, DAME TU MANO", time: 189 },
  { text: "PARA HUIR DE ESTA TERRIBLE OSCURIDAD", time: 192 }
];

// Variable para llevar control de la línea actual
let currentIndex = 0;

// Función que actualiza las letras en tiempo real
function updateLyrics() {
  if (currentIndex >= lyricsData.length) return;

  const currentTime = audio.currentTime;
  const nextLine = lyricsData[currentIndex];

  if (currentTime >= nextLine.time) {
    lyrics.innerText = nextLine.text;
    lyrics.style.opacity = 1;

    // Opcional: efecto de fade-in
    lyrics.style.transition = "opacity 0.5s ease";
    currentIndex++;
  }

  requestAnimationFrame(updateLyrics);
}

// Esperar que el audio comience
audio.addEventListener("play", () => {
  currentIndex = 0;
  updateLyrics();
});

// Reiniciar si se vuelve a reproducir desde el principio
audio.addEventListener("seeked", () => {
  currentIndex = 0;
  lyrics.innerText = "";
});

// La letra
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  titulo.style.transition = "opacity 3s ease";
  titulo.style.opacity = 0;
  setTimeout(() => {
    titulo.style.display = "none";
  }, 3000);
}

// Oculta el título tras 216 segundos
setTimeout(ocultarTitulo, 216000);

  window.onload = function () {
    setTimeout(() => {
      document.getElementById("song").play();
    }, 1000); // 1000 milisegundos = 1 segundo
  };