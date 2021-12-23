// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 0; i < 100; i=i+2) {
    arr.push(i);
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let arr1 =[];
for (let i = 0; i < 100; i=i+2) {
    arr1.push(i+1);
}
console.log(arr1);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr2 = [];
for (let i = 0; i < 20; i++) {
    let random = Math.round(Math.random()*100);
    arr2.push(random);
}
console.log(arr2);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let min = 8;
let max = 732;
let arr3 = [];
for (let i = 0; i < 20; i++) {
    let random = Math.round(Math.random()*(max-min)+min);
    arr3.push(random);
}
console.log(arr3);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr3.length; i++) {
    if (i!==0 && i%3 === 0){
        console.log(arr3[i-1]);
    }
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr3.length; i++) {
    if (i!==0 && i%3 === 0){
        if (arr3[i-1]%2 === 0){
            console.log(arr3[i - 1]);
        }
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
let newArray = [];
for (let i = 0; i < arr3.length; i++) {
    if (i!== 0 && i%3 ===0){
        if(arr3[i-1]%2 === 0){
            newArray.push(arr3[i-1]);
        }
    }
}
console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i+1]% 2===0){
        console.log(arr3[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let bills = [100,250,50,168,120,345,188];
let sum = 0
for (let i = 0; i < bills.length; i++) {
    sum = sum+bills[i];
}
let Middle = sum / bills.length;
console.log(Middle);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr = [];
for (let i = 0; i < 5; i++) {
    let random=Math.round(Math.random()*100);
    randomArr.push(random);
}
let newRandomArray = [];
for (let i = 0; i < randomArr.length; i++) {
    let value = randomArr[i]*5;
    newRandomArray.push(value);
}
console.log(newRandomArray);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let mixedArr = [1,'hello', 'world', 45, 25, 'hi', 8, 'new', 64];
let clearArr=[];
for (const item of mixedArr) {
    if (typeof item === 'number'){
        clearArr.push(item);
    }
}
console.log(clearArr);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (const city of citiesWithId) {
        if (city.user_id === user.id){
            user.city = city;
        }
    }
}
console.log(usersWithId);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let someNumbers = [1,4,6,3,7,9,5,2,42,53];
for (let i = 0; i < someNumbers.length; i++) {
    if (someNumbers[i] % 2 === 0){
        console.log(someNumbers[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let emptyarr = [];
for (let i = 0; i < someNumbers.length; i++) {
    emptyarr.push(someNumbers[i]);
    console.log(emptyarr[i]);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let wordArr = [ 'a', 'b', 'c'];
let someWord1 = '';
for (const item of wordArr) {
    someWord1 = someWord1.concat(item)
}
console.log(someWord1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let someWord2 = '';
let i =0;
while (i<wordArr.length){
    someWord2 = someWord2.concat(wordArr[i]);
    i++;
}
console.log(someWord2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let someWord3 = '';
for (i=0; i<wordArr.length; i++){
    someWord3 = someWord3.concat(wordArr[i]);
}
console.log(someWord3);