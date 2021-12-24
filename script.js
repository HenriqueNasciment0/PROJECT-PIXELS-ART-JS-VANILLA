const board = document.getElementById('pixel-board');
const paletas = document.querySelector('.paletas');
const paleta = document.getElementsByClassName('selected');
const pixel = document.getElementsByClassName('pixel');

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

function criaPaleta() {
  const coresPaleta = document.createElement('div');
  coresPaleta.className = 'color';
  coresPaleta.classList.add('selected');
  coresPaleta.style.backgroundColor = 'black';
  paletas.appendChild(coresPaleta);
  for (let i = 1; i < 4; i += 1) {
    let coresPaletaRandom = document.createElement('div');
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
