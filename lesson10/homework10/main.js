// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () { document.getElementById('text').style.display = 'none'});
btn1.addEventListener('click', function () { btn1.style.display = 'none'});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let age = document.getElementById('age');
let btn2 = document.getElementById('btn2');
// робочий код через alert
// btn2.onclick = function (){
//     if (+age.value>18){
//         alert('вік більше 18')
//     } else if (+age.value <=18){
//         alert('вік менше або рівне 18');
//     }
// }
// робочий код через pop-up
btn2.onclick = function(){
    if (+age.value > 18){
        document.getElementsByClassName('more18')[0].classList.toggle('showed_popup')
    } else if (+age.value <= 18){
        document.getElementsByClassName('less18')[0].classList.toggle('showed_popup');
    }
}

    // - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function (){
    menu.classList.toggle('hidden');
}

    // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    // Вывести список комментариев в документ, каждый в своем блоке.
    // Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title : 'ask somebody out', body:'invite on a date'},
    {title : 'ask around', body:'ask many people the same question'},
    {title : 'add up to something', body:'equal'},
    {title : 'back something up', body:'reverse'},
    {title : 'back somebody up', body:'support'},
    {title : 'blow up', body:'explode'},
]
for (const comment of comments) {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText = comment.title;
    let body = document.createElement('div');
    body.classList.add('body_style');
    body.innerText = comment.body;
    let button = document.createElement('button');
    button.innerText = 'hide body';
    button.onclick = function(){
        body.classList.toggle('hidden_body');
    }
    wrap.append(title,body,button);
    document.body.appendChild(wrap);
}