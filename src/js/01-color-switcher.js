const buttonStart = document.querySelector('button.button-start');
const buttonStop = document.querySelector('button.button-stop');

let timerId = null

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');
 timerId = setInterval(() => {
  const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
}, 1000);
});

buttonStop.addEventListener("click", () => {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', true);
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
