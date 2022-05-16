'use strict';

let title = prompt('Как называется ваш проект?', ' кАльКулятор Верстки');
let screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, сложные, интерактивные'
);
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = !!prompt('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 11;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
  } else if (price < 15000 && price >= 0) {
    return 'Скидка не предусмотрена';
  } else if (price < 0) {
    return 'Что-то пошло не так';
  }
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return (
    title.trim()[0].charAt(0).toUpperCase() +
    title.trim().slice(1).toLowerCase()
  );
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log([screens]);
console.log(screens.length);

console.log(
  'Стоимость верстки экранов ' +
    screenPrice +
    ' рублей/долларов/гривен/юани' +
    ' и ' +
    'стоимость разработки сайта ' +
    fullPrice +
    ' рублей/долларов/гривен/юани'
);
