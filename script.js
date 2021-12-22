const board = document.getElementById('pixel-board');
const paletas = document.querySelector('.paletas');
const paleta = document.getElementsByClassName('selected');

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

function selecionaPaleta(e) {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}
paletas.addEventListener('click', selecionaPaleta);
