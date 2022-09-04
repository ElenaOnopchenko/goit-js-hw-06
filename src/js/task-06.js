const textInput = document.querySelector('#validation-input');
const amount = textInput.getAttribute('data-length');

textInput.addEventListener('blur', event => {
  if (event.target.value.length == amount) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else if (event.target.value.length !== amount && event.target.value.length !== 0) {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  } else if (event.target.value.length === 0) {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
  }
});
