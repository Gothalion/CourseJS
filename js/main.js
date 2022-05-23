'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 11;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num) && num !== null);
};

const asking = function () {
  do {
    title = prompt('Как называется ваш проект?', ' кАльКулятор Верстки');
  } while (!isNaN(title));

  do {
    screens = prompt(
      'Какие типы экранов нужно разработать?',
      'Простые, сложные, интерактивные'
    );
  } while (!isNaN(screens));

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      price = +prompt('Сколько это будет стоить?');
    } while (!isNumber(price));

    sum += +price;
  }

  return sum;
};

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
  return +screenPrice + allServicePrices;
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('AllServicePrices', allServicePrices);

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
