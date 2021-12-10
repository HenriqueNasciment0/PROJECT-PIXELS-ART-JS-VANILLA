const board = document.getElementById('pixel-board');

function criandoGrade(quadro) {
  for (let index = 1; index <= quadro; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel';
    board.appendChild(linha);

    const pixel = document.createElement('div');
    linha.appendChild(pixel);
  }
}
criandoGrade(25);
