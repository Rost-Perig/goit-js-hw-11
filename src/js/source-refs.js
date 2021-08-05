export const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

export const invColors = [
  '#000000',
  '#de690c',
  '#b350af',
  '#0067ff',
  '#ff6977',
  '#86aab7',
];

export const refs = {
  FINAL_DATE: 'September 24,2021',
  body: document.querySelector('body'),
  changeColorStart: document.querySelector('button[data-action="start"]'),
  changeColorStop: document.querySelector('button[data-action="stop"]'),
  timeoutIdColor: null,
  COLOR_DELAY: 1000,
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  colons: document.querySelectorAll('[data-value="colon"]'),
  startCount: document.querySelector('button[data-action="start-count"]'),
  resetCount: document.querySelector('button[data-action="reset-count"]')
};

