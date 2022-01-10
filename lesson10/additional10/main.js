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

// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let highlight = document.getElementById('highlight');
// highlight.onmousedown = function (){
//     highlight.onmousemove = function (e){
//         let start = e.clientX.toString();
//         let end = e.clientY.toString();
//
//     }
// }
// highlight.onmouseup = function (){
//     highlight.onmousemove = null;
// }







