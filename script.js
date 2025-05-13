window.onload = () => {
  const bubbles = document.querySelector('.background-bubbles');
  for (let i = 0; i < 25; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 40 + 20;
    bubble.style.width = bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDelay = (Math.random() * 20) + 's';
    bubble.style.animationDuration = (15 + Math.random() * 10) + 's';
    bubbles.appendChild(bubble);
  }
};

const imagenes = [
  { src: "/storage/emulated/0/Download/djldcv1wi7o81.jpg", msg: "¡Nos vemos tan lindos juntos!" },
  { src: "/storage/emulated/0/Download/IMG-20240923-WA0046~2.jpg", msg: "Siempre a tu lado, mi amor." },
];
let idx = 0;

function abrirRegalo() {
  const box = document.querySelector('.gift-box');
  box.classList.add('open');
  setTimeout(() => {
    document.querySelector('.gift-scene').style.display = 'none';
    document.getElementById('contenido').classList.add('active');
    lanzarConfeti();
  }, 1500);
}

function cambiarImagen() {
  const imagen = document.getElementById("penguinImage");
  const mensaje = document.getElementById("mensajeImagen");
  imagen.classList.add("fade-out");
  setTimeout(() => {
    idx = (idx + 1) % imagenes.length;
    imagen.src = imagenes[idx].src;
    mensaje.textContent = imagenes[idx].msg;
    imagen.classList.remove("fade-out");
  }, 600);
}

function lanzarConfeti() {
  const canvas = document.getElementById('confetti');
  canvas.style.display = 'block';

  if (!window.confetti) {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => dispararConfeti();
    document.body.appendChild(script);
  } else {
    dispararConfeti();
  }

  function dispararConfeti() {
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 } });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        canvas.style.display = 'none';
      }
    })();
  }
}

