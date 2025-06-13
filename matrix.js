const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Функция установки размера канваса с учётом плотности пикселей
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  ctx.setTransform(1, 0, 0, 1, 0, 0); // сброс transform
  ctx.scale(dpr, dpr); // масштабируем контекст
}

resizeCanvas();

// Символы для эффекта матрицы
const letters = 'ВЕБ-ДИЗАЙН.СПБ, WEB-DESIGN.SPB-78'.split('');
const fontSize = 15;
let columns;
let drops;

function initMatrix() {
  columns = Math.floor(window.innerWidth / fontSize);
  drops = new Array(columns).fill(1);
}

initMatrix();

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

  ctx.fillStyle = '#666';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height / (window.devicePixelRatio || 1) && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 50);

// Переразмеривание окна
window.addEventListener('resize', () => {
  resizeCanvas();
  initMatrix();
});
