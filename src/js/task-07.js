const controlInput = document.getElementById('font-size-control');
const controlOutput = document.getElementById('text');

controlInput.addEventListener('input', event => {
  const inptValue = controlInput.value;

  controlOutput.style.fontSize = inptValue + 'px';
});
