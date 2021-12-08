// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let divBlock = document.getElementById('main_block');
divBlock.onclick = function(){
    console.log('Назва тегу', divBlock.tagName);
    console.log('Назва класу', divBlock.className);
    console.log('Назва id', divBlock.id);
    console.log('Розміри', divBlock.clientHeight,'*', divBlock.clientWidth);
}

    // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    // При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
    // Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let popup = document.getElementById('popup_block');
popup.innerText = `Назва тегу ${divBlock.tagName}
Назва клас ${divBlock.className}
Назва id ${divBlock.id}
Розміри ${divBlock.clientHeight}*${divBlock.clientWidth}`;

divBlock.onclick = function(){
    document.getElementsByClassName('popup_hidden')[0].classList.toggle('popup_showed');
}

// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let checkbox1 = document.getElementById('check1');
let checkbox2 = document.getElementById('check2');
let checkbox3 = document.getElementById('check3');
let checkform = document.getElementById('checkform');

let divCheckbox1;
let checkbox1Filter
checkform.onclick = function () {
    if (checkbox1.checked) {
        checkbox1Filter = usersWithAddress.filter(value => {
            return value.status
        })
        checkbox1Filter.forEach(value => {
            divCheckbox1 = document.createElement('div');
            divCheckbox1.classList.add('general_block');
            divCheckbox1.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            document.body.append(divCheckbox1);
        });
    } else if (checkbox2.checked) {
        let checkbox2Filter = usersWithAddress.filter(value => {
            return value.age >= 29
        })
        checkbox2Filter.forEach(value => {
            let divCheckbox2 = document.createElement('div');
            divCheckbox2.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            document.body.append(divCheckbox2);
        })
    }
    else if (checkbox3.checked){
        let checkbox3Filter = usersWithAddress.filter (value => {
            return value.address.city === 'Kyiv'})
        checkbox3Filter.forEach(value => {
            let divCheckbox3 = document.createElement('div');
            divCheckbox3.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            document.body.append(divCheckbox3);
        });
    }
    else if (checkbox1.checked && checkbox2.checked){
        let checkbox12Filter = usersWithAddress.filter (value => {
            return value.status === true && value.age >= 29})
        checkbox12Filter.forEach(value => {
            let divCheckbox12 = document.createElement('div');
            divCheckbox12.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            document.body.append(divCheckbox12);
        })
    }
}


// let divCheckbox1
// let checkbox1Filter
// checkform.onclick = function (){
//     if (checkbox1.checked){
//         checkbox1Filter = usersWithAddress.filter (value => {
//             return value.status})
//         checkbox1Filter.forEach(value => {
//             divCheckbox1 = document.createElement('div');
//             divCheckbox1.classList.add('general_block');
//             divCheckbox1.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.append(divCheckbox1)
//         })
//     } else if (checkbox1.checked === false){
//         for (let i=0; i<checkbox1Filter.length; i++){
//         let general_block = document.getElementsByClassName('general_block')[i]
//         general_block.style.display = 'none'}
//     }
// }


