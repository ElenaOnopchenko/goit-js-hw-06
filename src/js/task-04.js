let counterValue = 0;

const visibleCounter = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');

const decHandleClick = event => {
  counterValue -= 1;
  visibleCounter.textContent = counterValue;
};

decrementButton.addEventListener('click', decHandleClick);

const incrementButton = document.querySelector('[data-action="increment"]');

const incHandleClick = event => {
  counterValue += 1;
  visibleCounter.textContent = counterValue;
};

incrementButton.addEventListener('click', incHandleClick);
