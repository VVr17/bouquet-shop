// to contain input number in min-max range
const inputs = document.querySelectorAll('input[type=number]');

Array.from(inputs).forEach(input => {
  const min = +input.min;
  const max = +input.max;

  input.addEventListener('input', e => {
    const value = +input.value;
    if (value > max) {
      input.value = max;
    } else if (value < min) {
      input.value = min;
    }
  });
});
