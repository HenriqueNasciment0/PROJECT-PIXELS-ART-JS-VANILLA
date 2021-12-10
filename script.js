const board = document.getElementById('pixel-board');

function criandoGrade(quadro) {

  for (let index = 1; index <= quadro; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel';
    board.appendChild(linha);

    for (let index2 = 1; index2 <= quadro; index2 += 1) {
      const pixel = document.createElement('div');
      linha.appendChild(pixel);
    }
  }
}
criandoGrade(25);
