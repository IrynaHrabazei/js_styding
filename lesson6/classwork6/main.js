// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalizeName = (str) =>{
    let replaceAll = str.replaceAll('..',' ')
                        .replaceAll('---',` `)
                        .replaceAll('__',` `);
    document.write(`<div>${replaceAll}</div>`);
}
normalizeName(n1);
normalizeName(n2);
normalizeName(n3);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomizer = (size) =>{
    let arr = [];
    for (i=0; i<size; i++){
        arr.push(Math.round(Math.random()*100));
    }
    document.write(`<div>${arr}</div>`);
}
randomizer(10);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let random = (size) =>{
    let array = [];
    for (i=0; i<size; i++){
        array.push(Math.round(Math.random()*100));
    }
    // array.sort((a, b) => a-b);
    document.write(`<div>${array.sort((a, b) => a-b)}</div>`);
}

random(10);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomFilter = (size) =>{
    let array = [];
    for (i =0; i<size; i++){
        array.push(Math.round(Math.random()*100));
    }
    document.write(`<div>${array.filter(value => value%2===0)}</div>`);
}
randomFilter(10);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randomString = (size) =>{
    let array = [];
    for (i=0; i<size; i++){
        array.push(Math.round(Math.random()*100))
    }
    document.write(`<div>${array.map(value => value.toString())}</div>`);
}
randomString(5);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (num,direction) =>{
    if (direction === 'ascending'){
        document.write(`<div>Спадання ${num.sort((a, b) => b-a)}</div>`)
    } else if (direction ==='descending') {
        document.write(`<div>Зростання ${num.sort((a, b) => a-b)}</div>`);
    }
}
let nums = [11,21,3];

sortNums(nums, 'ascending');
sortNums(nums, 'descending');

// - є масив
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesSort = coursesAndDurationArray.sort((a, b) => b.coursesAndDurationArray - a.coursesAndDurationArray);
document.write(`<div>${coursesSort}</div>`);
console.log(coursesSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(coursesFilter);