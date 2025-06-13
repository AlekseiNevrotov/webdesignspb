  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  // Устанавливаем размер канваса равным размеру окна
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Символы для эффекта матрицы (можно изменить или добавить свои)
  const letters = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789'.split('');

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);

  // Массив для отслеживания y-позиции каждой колонки
  const drops = new Array(columns).fill(1);

  function draw() {
    // Чёрный полупрозрачный фон для затухания следов
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(91, 112, 81, 1)'; // ярко-зелёный цвет
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      // Если символ вышел за экран — сбросить
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);

  // Обновляем размер канваса при изменении окна
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });