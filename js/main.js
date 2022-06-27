'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 11,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num) && num !== null);
  },

  asking: function () {
    do {
      appData.title = prompt(
        'Как называется ваш проект?',
        ' кАльКулятор Верстки'
      );
    } while (!isNaN(appData.title));

    do {
      appData.screens = prompt(
        'Какие типы экранов нужно разработать?',
        'Простые, сложные, интерактивные'
      );
    } while (!isNaN(appData.screens));

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      do {
        price = +prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      sum += +price;
    }

    return sum;
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%';
    } else if (price < 15000 && price >= 0) {
      return 'Скидка не предусмотрена';
    } else if (price < 0) {
      return 'Что-то пошло не так';
    }
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].charAt(0).toUpperCase() +
      appData.title.trim().slice(1).toLowerCase()
    );
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.title = appData.getTitle();
    appData.logger();
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePrecentPrice);
    for (let key in appData) {
      console.log(key);
    }
  },
};

appData.start();
