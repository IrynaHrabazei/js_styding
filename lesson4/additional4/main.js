// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

let someFn = (...xxx) =>{
    let sum = 0;
    for (const item of xxx) {
        sum = sum + item
    }
    return sum;
}
console.log(someFn(4,6,8));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];

let addFn = (a, b) =>{
    let newArr = [];
    for (i=0; i<a.length; i++){
        newArr.push(a[i]+b[i])
    }
    return newArr;
}
console.log(addFn(arr1, arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let objArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

let keyArr = (arr) => {
    let newArr = [];
    for (const item of arr){
        for (let key of Object.keys(item)){
            newArr.push(key);
        }
    }
    return newArr;
}
console.log(keyArr(objArr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let valArr = (arr) =>{
    let newArr = [];
    for (let item of arr){
        for (let val of Object.values(item)){
            newArr.push(val);
        }
    }
    return newArr;
}
console.log(valArr(objArr));





