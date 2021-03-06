// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let newDiv = document.createElement('div');
newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
newDiv.style.backgroundColor = 'green';
newDiv.style.color = 'white';
newDiv.style.fontSize = '30px';
document.body.appendChild(newDiv);
let cloneDiv  = newDiv.cloneNode();
document.body.appendChild(cloneDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array =['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu');
for (const item of array) {
    let li = document.createElement('li');
    li.innerText = `${item}`
    menu[0].appendChild(li);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.innerText = `${element.title}- тривалість ${element.monthDuration} місяців`
//     document.body.appendChild(div);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.toggle('item');
    let h1 = document.createElement('h1');
    h1.classList.toggle('heading');
    h1.innerText = element.title;
    let p = document.createElement('p');
    p.classList.toggle('description');
    p.innerText = element.monthDuration;
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}
