// - Дано натуральное число n. Выведите все числа от 1 до n.
let n =10;
someArr = [];
for (let i = 0; i < n; i++) {
    someArr.push(i+1);
}
console.log(someArr);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let a = 15;
let b = 5;

let someArray = [];
if (a<b){
    for (let i = 0; i < (b-a+1); i++) {
       someArray.push(a+i)
    }
} else {
    for (let i = 0; i < (a-b+1); i++) {
        someArray.push(a-i);
    }
}
console.log(someArray);
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let someIndex = 2;
let array = [9,8,0,4];
//Method 1
let fn = (arr, index)=>{
    let a = arr[index];
    let b = arr[index+1];
    arr.splice(index,1,b);
    arr.splice(index+1, 1, a);
    return arr;
}
console.log(fn(array, someIndex));
//Method 2
let fnn = (arr, index) =>{
    let aa = arr[index];
    // let bb = arr[index+1];
    arr[index] = arr[index+1];
    console.log(arr[index + 1]);
    arr[index+1] = aa;
    return arr;
}
console.log(fnn(array, someIndex));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let someLongArr = [0,0,1,0,3,4,0,2];
//Method 1
let fn1 = (arr) =>{
    arr.filter(value =>{
        if (value === 0){
            let a= arr.indexOf(value);
            arr.splice(a,1)
            arr.push(0)
        }
    })
    return arr;
}
console.log(fn1(someLongArr));

