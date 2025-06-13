  const matrixContainer = document.getElementById('matrix');
  const characters = 'ВЕБ-ДИЗАЙНСПБWEBDESIGNSPB78'.split('');
  const columnCount = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement('div');
    column.classList.add('matrix-column');
    column.style.animationDuration = `${3 + Math.random() * 5}s`;
    column.style.animationDelay = `${Math.random() * -5}s`;
    column.style.marginLeft = `${Math.random() * 5}px`;

    for (let j = 0; j < 30; j++) {
      const char = document.createElement('span');
      char.classList.add('matrix-char');
      char.textContent = characters[Math.floor(Math.random() * characters.length)];
      column.appendChild(char);
    }

    matrixContainer.appendChild(column);
  }