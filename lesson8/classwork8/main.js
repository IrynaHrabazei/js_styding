// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHeaderId = document.getElementById('main_header');
mainHeaderId.classList.add('sept_2021');

// b) робить шириниу елементу ul 400px
let fixedWidth = document.getElementsByTagName('ul')
for (const fixedWidthElement of fixedWidth) {
    fixedWidthElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let fixedWidthForClass = document.getElementsByClassName('linkList')
for (const item of fixedWidthForClass) {
    item.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let getSomeText = document.getElementsByClassName('listElement2')
console.log(getSomeText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let getListElements = document.getElementsByTagName('li')
for (const listElement of getListElements) {
    listElement.style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let additionClass = document.getElementsByTagName('a')
for (const item of additionClass) {
    item.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const item of additionClass) {
    if (item.innerText === 'link3'){
        item.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const item of additionClass) {
    let xxx = item.innerText
    item.classList.add(`element_${xxx}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let changeColor = document.getElementsByClassName('sub-header')
// let color = prompt('Введіть колір');
// for (const item of changeColor) {
//     item.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let changeColor2 = document.getElementsByClassName('sub-header')
// let colorText = prompt ('Введіть колір')
// for (const item of changeColor2) {
//     if (item.innerText === 'content 2 segment'){
//         item.style.backgroundColor = colorText;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let changeSomeText = document.getElementsByClassName('content_1')
// let someText = prompt ('Введіть деякий текст');
// changeSomeText[0].innerText = someText;

// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p')
for (const pListElement of pList) {
    pListElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let changeContent = document.getElementsByClassName('text2')
for (const item of changeContent) {
    item.innerText = 'sep-2021';
}