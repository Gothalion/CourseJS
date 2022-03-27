let title = 'Калькулятор верстки';
let screens = 'Простые, сложные, интерактивные';
let screenPrice = 2300;
let rollback = 11;
let fullPrice = 7500;
let adaptive = true;

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

alert('Hello, world!');
console.log('I want to learn JavaScript');
