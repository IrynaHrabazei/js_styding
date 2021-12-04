// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let textById = document.getElementById('content')
console.log(textById);

// -- отримує текст з блоку з id "rules"
let textById2 = document.getElementById('rules')
console.log(textById2);

// -- замініть текст параграфа з id 'content' на будь-який інший
textById.innerText = 'Hello world';

// -- замініть текст параграфа з id 'rules' на будь-який інший
textById2.innerText = 'A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences.';

// -- змініть кожному елементу колір фону на червоний
let childrenColor = document.body.children;
for (const childrenColorElement of childrenColor) {
    childrenColorElement.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const childrenColorElement of childrenColor) {
    childrenColorElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let listOfClass = document.getElementById('rules');
console.log(listOfClass.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeColor = document.getElementsByClassName('fc_rules')
for (const changeColorElement of changeColor) {
    changeColorElement.style.color = 'red';
}