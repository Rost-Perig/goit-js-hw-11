import {
  colors,
  invColors,
  refs,
} from './source-refs';

export function onStartColorChange() {
  refs.timeoutIdColor = setInterval(() => {
  let randomNumb = Math.round(Math.random() * (colors.length - 1));
  refs.body.style.backgroundColor = `${colors[randomNumb]}`;
  refs.body.style.color = `${invColors[randomNumb]}`; 
  refs.changeColorStart.style.borderColor = `${invColors[randomNumb]}`;
  refs.changeColorStop.style.borderColor = `${invColors[randomNumb]}`;
  refs.startCount.style.borderColor = `${invColors[randomNumb]}`;
  refs.resetCount.style.borderColor = `${invColors[randomNumb]}`;
  }, refs.COLOR_DELAY);

  refs.changeColorStart.disabled = true;
};

export function onStopColorChange() {
  clearInterval(refs.timeoutIdColor);

  refs.changeColorStart.disabled = false;
}
