// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a,b,c) => {
    if (a< b && a<c){
        document.write(`<div>Найменше число ${a}</div>`)
    } else if (b<a && b<c){
        document.write(`<div>Найменше число ${b}</div>`)
    } else if (c<a && c<b){
        document.write(`<div>Найменше число ${c}</div>`);
    }
}
min (1,2,3);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (a,b,c) => {
    if (a>b && a>c){
        document.write(`<div>Максимальне число ${a}</div>`)
    } else if (b>a && b>c){
        document.write(`<div>Максимальне число ${b}</div>`)
    } else if (c>a && c>b){
        document.write(`<div>Максимальне число ${c}</div>`);
    }
}
max (3,2,1);

// - створити функцію яка повертає найбільше число з масиву
orderNumber = [1,22,44,5,23,34,56,2,5,99,-3];
let maxArray = (someArray) =>{
    let maxNum = someArray[0];
    for (let someArr of  someArray) {
        if (someArr > maxNum) {
            maxNum = someArr;
        }
    }
    document.write(`<div> Найбільше число з масиву ${maxNum}</div>`);
}
maxArray (orderNumber);

// - створити функцію яка повертає найменьше число з масиву
let minArray = (someArray) => {
    let minNum = someArray[0];
    for (let someArr of someArray){
        if (someArr < minNum){
            minNum = someArr;
        }
    }
    document.write(`<div> Мінімальне число з масиву ${minNum}</div>`);
}
minArray(orderNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let summingArray = (someArray) => {
    let sum = 0;
    for (let someArr of someArray){
        sum = sum +someArr;
    }
    document.write(`<div>Сума елементів масиву ${sum}</div>`);
}

summingArray (orderNumber);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let middleArray = (someArray) => {
    let sumM = 0;
    for (let someArr of someArray){
        sumM = sumM + someArr;
    }
    let middleArr = Math.round(sumM/someArray.length);
    document.write(`<div>Середнє арифметичне масиву ${middleArr}</div>`);
}
middleArray (orderNumber);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let randomArray = (someArray) =>{
    let minNumber = someArray[0];
    let maxNumber = someArray[0];
    for (let someArr of someArray){
        if (someArr < minNumber){
            minNumber = someArr;
        } else if (someArr > maxNumber){
            maxNumber = someArr;
        }
    } document.write(`<div>Максимальне число з масиву ${maxNumber}</div>`);
    return minNumber;
}
document.write(`<div>${randomArray(orderNumber)} - це повернуте найменше число з масиву </div>`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomazer = () =>{
    for (let i=0; i<100; i++){
        let rand = Math.round(Math.random()*100);
        document.write(`<div>${rand}</div>`);
    }
}
randomazer();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
document.write('<hr>');
let ramdomazer1 = (limit) => {
    for (let i=0; i<limit; i++){
        let rand = Math.round(Math.random()*100);
        document.write(`<div>${rand}</div>`);
    }
}
ramdomazer1 (5);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverseArray = (someArray) => {
    let arr = [];
    for (i=someArray.length-1, ri =0; i>=0; i--, ri++){
        arr[ri]=someArray[i];
    }
    document.write(`<div>${arr}</div>`);
}
reverseArray (orderNumber);