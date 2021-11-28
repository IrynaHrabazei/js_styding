// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
document.write(`<div>Довжина виразу 'hello world' - ${str1.length} символів </div>`);
document.write(`<div>Довжина виразу 'lorem ipsum' - ${str2.length} символів </div>`);
document.write(`<div>Довжина виразу 'javascript is cool' - ${str3.length} символів </div>`);

// Перевести до великого регістру наступні стрінгові значення
toUpperCase1 = str1.toUpperCase();
document.write(`<div>${toUpperCase1}</div>`);
toUpperCase2 = str2.toUpperCase();
document.write(`<div>${toUpperCase2}</div>`);
toUpperCase3 = str3.toUpperCase();
document.write(`<div>${toUpperCase3}</div>`);

// Перевести до нижнього регістру настипні стрінгові значення
toLowerCase1 = toUpperCase1.toLowerCase()
document.write(`<div>${toLowerCase1}</div>`);
toLowerCase2 = toUpperCase2.toLowerCase()
document.write(`<div>${toLowerCase2}</div>`);
toLowerCase3 = toUpperCase3.toLowerCase()
document.write(`<div>${toLowerCase3}</div>`);

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
trim = str.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let someStr = 'Каждый охотник желает знать';
let split = someStr.split(' ');
console.log(split);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters= (str, length) => {
    return str.substring(0, length);
}
console.log(delete_characters(someStr, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) =>{
    let replaceAll = str.replaceAll(' ','-');
    let toUpperCase = replaceAll.toUpperCase();
    document.write(`<div>${toUpperCase}</div>`);
}
let languages = "HTML JavaScript PHP";
insert_dash(languages);

// second method
let insert_dash1 = (str) =>{
    let replaceToUpperCase = str.replaceAll(' ','-').toUpperCase();
    document.write(`<div>${replaceToUpperCase}</div>`);
}
insert_dash1 (languages);
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let transform = (str) => {
    let changeFistrWord = str.charAt(0).toUpperCase()+str.slice(1);
    document.write(`<div>${changeFistrWord}</div>`);
}
someWord = 'hello world';
transform (someWord);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    let fixedStr = str.split(' ').map(value => value.charAt(0).toUpperCase()+value.slice(1)).join(' ')
    document.write(`<div>${fixedStr}</div>`);
}

capitalize(someWord);