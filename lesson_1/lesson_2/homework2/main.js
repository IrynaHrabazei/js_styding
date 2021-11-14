// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;
if (time >= 0 && time < 15) {
    document.write('<h1>Перша чверть</h1>')
} else if (time >= 15 && time < 30) {
    document.write('<h1>Друга чверть</h1>')
} else if (time >= 30 && time < 45) {
    document.write('<h1>Третя чверть</h1>')
} else if (time >= 45 && time <= 59) {
    document.write('<h1>Четверта чверть</h1>')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада');
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('Введіть значення true або false');
if (test === 'true') {
    document.write('<h2>Неправильно</h2>')
} else if (test === 'false') {
    document.write('<h2>Вірно</h2>')
}

let result = test === 'true' ? 'Неправильно' : 'Вірно';
console.log(result);
let result_reverse = test !== 'true' ? 'Вірно' : 'Неправильно';
console.log(result_reverse);


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0;
let a_result = a === 0 ? 'Невірно' : 'Вірно';
console.log(a_result);

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let key = +prompt('Введіть порядковий день тижня');
switch (key) {
    case 1:
        document.write('<p>Go to work</p>');
        break;
    case 2:
        document.write('<p>Go to work</p>', '<p>Go to supermarket and buy some food</p>');
        break;
    case 3:
        document.write('<p>Go to work</p>', '<p>Cook something special for family</p>');
        break;
    case 4:
        document.write('<p>Go to work</p>', '<p>Go shopping</p>', '<p>Bake brauny for kids</p>');
        break;
    case 5:
        document.write('<p>Go to work</p>', '<p>Hang out with friends in the evening</p>');
        break;
    case 6:
        document.write('<p>Clean up the whole house</p>', '<p>Go to the supermarket and buy food for next week</p>', '<p>Buy gift for husband</p>');
        break;
    case 7:
        document.write('<p>Take a rest</p>', '<p>Prepare calendar for next week</p>');
        breake;
        default:
        document.write('<p>Введіть порядковий день тижня</p>');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = 2020;
let divition = year % 4;
if (divition === 0){
    console.log('Високосний рік');
} else console.log('Невисокосний рік');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript

let answer = prompt('Яка «офіційна» назва JavaScript?');
if (answer === 'ECMAScript'){
    document.write('<p>Правильно!</p>')
} else document.write('<p>Не знаєте? ECMAScript</p>');