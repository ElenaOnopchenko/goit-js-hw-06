function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const newColor = document.querySelector('span.color');

changeColorBtn.addEventListener('click', event => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  newColor.textContent = randomColor;
});
