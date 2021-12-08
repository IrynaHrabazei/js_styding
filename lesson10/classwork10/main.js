// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let btn1 = document.getElementsByClassName('btn1')[0];
btn1.onclick = function (){
    let name1 = document.forms.form1.name1.value;
    let age1 = document.forms.form1.age1.value;
    let name2 = document.forms.form2.name2.value;
    let age2 = document.forms.form2.age2.value;
    console.log(name1, age1, name2, age2);
}

//     - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let table_button = document.getElementById('table');
table_button.onclick = function (){
    let td = +document.forms.form3.columns.value;
    let tr = +document.forms.form3.rows.value;
    let content = document.forms.form3.content.value;
    console.log(td, tr, content);

    let table = document.createElement('table');
    for (let i =0; i<tr; i++){
        let row = document.createElement('tr');
        row.style.border = 'solid 1px black';
        for (let j = 0; j < td; j++) {
            let col = document.createElement('td');
            col.style.border = 'solid 1px black';
            col.innerText = content;
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.body.append(table);
}

//     - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let badWords = ['hi', 'hello', 'hey', 'GM'];
let btn2 = document.getElementById('bad_word');
btn2.onclick = function (){
    let word = document.getElementById('someWord').value;
    for (const badWord of badWords) {
        if (word === badWord){
            alert ('So bad');
        }
    }
}

    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку

let btn3 = document.getElementById('bad_word2');
btn3.onclick = function (){
    let word = document.getElementById('someWord2').value;
    for (const badWord of badWords) {
        if (word.includes(badWord)){
            alert ('So bad');
        }
    }
}