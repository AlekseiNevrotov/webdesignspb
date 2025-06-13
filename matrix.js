const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    const fontSize = 15;
    const letters = 'ВЕБ-ДИЗАЙН.СПБ, WEB-DESIGN.SPB-78'.split('');
    let columns, drops;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      columns = Math.floor(window.innerWidth / fontSize);
      drops = new Array(columns).fill(1);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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

    let lastTime = 0;
    const frameInterval = 50;

    function animate(time) {
      if (time - lastTime > frameInterval) {
        draw();
        lastTime = time;
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);