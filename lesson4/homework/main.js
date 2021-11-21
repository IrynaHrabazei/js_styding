// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare(a, b) {
    let result = a * b;
    return result;
}

let rectangleSquareResult = rectangleSquare(2, 4);
console.log(rectangleSquareResult);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const pi = 3.14;

function circleSquare(r) {
    let result = pi * Math.pow(r, 2);
    return result;
}

let circleSquareResult = circleSquare(3);
console.log(circleSquareResult);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(R, H) {
    let result = 2 * pi * R * H;
    return result;
}

let cylinderSquareResult = cylinderSquare(2, 4);
console.log(cylinderSquareResult);

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<p>${arr[i]}</p>`);
    }
}

array1 = [1, 4, 'hello', true, 'world', false, 66, 'hhh'];
arrayDisplay(array1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragrafDisplay(content) {
    document.write(`<p>${content}</p>`);
}

paragrafDisplay('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function itemDisplay (itemText){
    document.write('<ul>')
    for (let i=0; i<3; i++){
        document.write(`<li>${itemText}</li>`);
    }
    document.write('</ul>');
}
itemDisplay('componet one');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function itemDisplay2 (itemContent,number){
    document.write('<ul>')
    for (let i=0; i<number; i++){
        document.write(`<li>${itemContent}</li>`);
    }
    document.write('</ul>');
}
itemDisplay2 ('componet two', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayReturn (arraySimple){
    document.write('<ol>')
    for (const arraySimp of arraySimple){
        document.write(`<li>${arraySimp}</li>`);
    }
    document.write('</ol>');
}
dataSet = [1,'turn on', false, 'hello', 66, 'name'];
arrayReturn (dataSet);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let complicatedArray = [{id : 123876, name: 'Freddie Mercury', age: 27}, {id : 123846, name: 'Jackie Chan', age: 54}, {id : 123555, name: 'Whitney Houston', age: 60}];
function difficultArray (arrayInput){
    for (const diffArr of arrayInput){
        document.write(`<div>ID -${diffArr.id}. Name - ${diffArr.name}. Age -  ${diffArr.age}.</div>`);
    }
}
difficultArray (complicatedArray);
