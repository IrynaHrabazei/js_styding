// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив
// масив вивести в консоль

let arr = [];
let i = 0;
function recursion (arg){
    arr.push(arg[i].className);
    i++
    if (i< arg.length){
        recursion (arg);
    }
    return arr;
}

console.log(recursion(document.body.getElementsByClassName('rules')));
