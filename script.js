const board = document.getElementById('pixel-board');
const paletas = document.querySelector('.paletas');
const paleta = document.getElementsByClassName('selected');
const pixel = document.getElementsByClassName('pixel');
const btnLimpar = document.getElementById('clear-board');
const inputBtn = document.getElementById('board-size');
const btnCriarPixel = document.getElementById('generate-board');

function criandoGrade(num) {
  for (let i = 0; i < num; i += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel';
    board.appendChild(linha);
  }
}
criandoGrade(25);

function criaPaleta() {
  const coresPaleta = document.createElement('div');
  coresPaleta.className = 'color';
  coresPaleta.classList.add('selected');
  coresPaleta.style.backgroundColor = 'black';
  paletas.appendChild(coresPaleta);
  for (let i = 1; i < 4; i += 1) {
    const coresPaletaRandom = document.createElement('div');
    coresPaletaRandom.className = 'color';
    paletas.appendChild(coresPaletaRandom);
    coresPaletaRandom.style.backgroundColor = coresAleatorias();
  }
}

criaPaleta();

function coresAleatorias() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const abc = `rgb(${a}, ${b}, ${c})`;
  return abc;
}

function selecionaPaleta(e) {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
}
paletas.addEventListener('click', selecionaPaleta);

function pintaPixel(e) {
  const recebeCor = paleta[0].style.backgroundColor;
  e.target.style.backgroundColor = recebeCor;
}

board.addEventListener('click', pintaPixel);

function botaoLimpar() {
  for (let i = 0; i < board.children.length; i += 1) {
    const limpar = board.children[i];
    limpar.style.backgroundColor = 'white';
  }
}

btnLimpar.addEventListener('click', botaoLimpar);

function criarGradeComBotao() {
  board.innerHTML = ' ';
  const quantosPixels = inputBtn.value;
  if (inputBtn.value.length < [1]) {
    alert('Board inválido!');
  }
  criandoGrade(quantosPixels * quantosPixels);
}

btnCriarPixel.addEventListener('click', criarGradeComBotao);

function limitadorDePixel() {
  if (inputBtn.value < 5) {
    inputBtn.value = 5;
  }
  if (inputBtn.value > 50) {
    inputBtn.value = 50;
  }
}

inputBtn.addEventListener('mouseout', limitadorDePixel);
