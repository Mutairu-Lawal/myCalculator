'use strict';
var _a;
let display = document.querySelector('.showDisplay');
const switchBtn = document.querySelector('.js-onBtn');
let calculation = '';
renderCalculation();
function getCalculation(value) {
  if (value === '00' && calculation === '0') {
    return;
  } else if (value === '00' && calculation === '') {
    return;
  } else if (value === '0' && calculation === '0') {
    return;
  } else if (value === '0' && calculation + value === '00') {
    return;
  }
  calculation += value;
  checkZero();
  checkOperators(value);
  renderCalculation();
}
function checkOperators(value) {
  if (
    value === '*' ||
    value === '+' ||
    value === '-' ||
    value === '/' ||
    value === '.'
  ) {
    if (calculation.includes(`${value + value}`)) {
      calculation = removeLastIndex(calculation);
    }
  }
}
function updateCalculation() {
  try {
    if (display) {
      calculation = eval(display.value);
      filterResult();
      renderCalculation();
    }
  } catch (error) {
    renderCalculation();
  }
}
function resetBtn() {
  calculation = '';
  renderCalculation();
}
function renderCalculation() {
  if (display) {
    display.value = calculation;
  }
}
function checkZero() {
  if (calculation.includes('.')) {
    calculation = calculation;
    return;
  } else if (calculation) {
    for (let i = 0; i < calculation.length; i++) {
      let index = calculation[i];
      if (index !== '0') {
        calculation = calculation.slice(i);
        break;
      }
    }
  }
}
function filterResult() {
  calculation = String(calculation);
  if (calculation.length > 8) {
    calculation = Number(calculation).toFixed(2);
  }
}
function removeLastIndex(input) {
  let newString = [...input].slice(0, -1).join('');
  return newString;
}
(_a = document.querySelector('.js-delete-button')) === null || _a === void 0
  ? void 0
  : _a.addEventListener('click', () => {
      calculation = removeLastIndex(calculation);
      renderCalculation();
    });
function percentageBtn() {
  calculation = String(Number(calculation) / 100);
  renderCalculation();
}
