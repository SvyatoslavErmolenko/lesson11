'use strict';

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const textSpan = document.getElementById('text-span');

// обработчик события click

const color = function () {
    square.style.backgroundColor = text.value;
};
btn.addEventListener('click', color);

// уберает кнопку внутри кружка 

eBtn.style.display = 'none';

// обработчик события input

const inputHeightWidth = function () {
    rangeSpan.textContent = range.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
};
range.addEventListener('input', inputHeightWidth);






