// - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangle = (a, b) => {
    return a*b;
}
document.write(`Площа прямокутника:` + rectangle (2,4));

// створити функцію яка обчислює та повертає площу круга
const pi =3.14;
let circus = (r) => pi* Math.pow(r,2);
console.log(`Площа круга:` + circus(3));

// - створити функцію яка обчислює та повертає площу циліндру
let cylinder = (R,H) => 2*pi*R*H;
console.log(`Площа циліндра:` + cylinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let displayArray = (enterArray) => {
    for (let arr of enterArray){
        console.log (`${arr}`);
    }
}
array1 = [1, 4, 'hello', true, 'world', false, 66, 'hhh'];
displayArray (array1);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraf = (someContent) => document.write(`<p> ${someContent}</p>`);
paragraf("Hello world");

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let itemDisplay = (item) =>{
    document.write(`<ul>`)
    for (let i = 0; i<3; i++){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
itemDisplay ('Hello my pretty world');

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let itemDisplay2 = (item, numbers) => {
    document.write(`<ul>`)
    for (let i=0; i<numbers; i++){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
itemDisplay2 ('How are you doing', 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
dataSet = [1,'turn on', false, 'hello', 66, 'name'];
let somePrimitiveArray = (primitiveArray) => {
    for (let primArray of primitiveArray){
        document.write(`<li>${primArray}</li>`);
    }
}
somePrimitiveArray (dataSet);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
complicatedArray = [{id : 123876, name: 'Freddie Mercury', age: 27}, {id : 123846, name: 'Jackie Chan', age: 54}, {id : 123555, name: 'Whitney Houston', age: 60}];

let objectArray = (someTrickyArray) => {
    for (let trickyArr of someTrickyArray){
        document.write(`<div>ID: ${trickyArr.id}, Name: ${trickyArr.name}, Age: ${trickyArr.age}</div>`);
    }
}
objectArray(complicatedArray);