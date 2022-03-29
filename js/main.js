let title = prompt('Как называется ваш проект?');
let screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, сложные, интерактивные'
);
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let rollback = 11;
let adaptive = !!prompt('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(fullPrice - rollback);

if (fullPrice > 30000) {
  alert('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  alert('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
  alert('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  alert('Что-то пошло не так');
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  'Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани'
);
console.log(
  'Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани'
);
console.log(screens.toLowerCase());
console.log(screens.split());

console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);

console.log('I want to learn JavaScript');
