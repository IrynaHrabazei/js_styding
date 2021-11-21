// --створити масив з:
    // - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
 let number =[1,2,3,4,5];
console.log(number);

 let string = ['aa','bb', 'cc','dd','ff'];
console.log(string);

 let mix =[1,'fb',true,false,2];
console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
 let arr = [];
 arr[0] = 1;
 arr[1] = 2;
 arr[2] = true;
 arr[3] = false;
 arr[4] = 'free';
 arr[5] = 987;
console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i=0; i<10;i++){
 document.write('<div>Free template</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i=0; i<10; i++){
 document.write(`<div>Free template with index ${i}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20){
 document.write('<h1>empty field</h1>')
 i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k=0;
while (k<20){
 document.write(`<h1>empty field with index ${k+1}</h1>`)
 k++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 let num = [0,1,2,3,5,8,13,21,44,65];
for (let  numb of num){
 console.log(numb);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let text = ['world','work','move','life','university','better','technologies','case','cake','finish'];
for (let i=0; i<text.length; i=i+1){
 console.log(text[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixarr = [1,3,'face',true, 'connect',3, false, 'hope', 2,3];
for (let mixnum of mixarr){
 console.log(mixnum);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixedarray = [true, 1,4,'number',false, 'create',true, 5, 'done', 7];
for (let mixedarr of mixedarray){
 if (typeof mixedarr === 'boolean'){
  console.log(mixedarr);
 }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mixedarray1 = [true, 1,4,'number',false, 'create',true, 5, 'done', 7];
for (let i = 0; i< mixedarray1.length; i= i+1){
 if (typeof mixedarray1[i] === 'number'){
  console.log(mixedarray1[i]);
 }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mixedarray2 = [true, 1,4,'number',false, 'create',true, 5, 'done', 7];
for (let i=0; i<mixedarray2.length; i++){
 if (typeof mixedarray2[i] ==='string'){
  console.log(mixedarray2[i]);
 }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrayemp = [];
arrayemp[0] = 'name';
arrayemp[1] = 'surname;'
arrayemp[2] = true;
arrayemp[3] = 2;
arrayemp[4] = 'age';
arrayemp[5] = 4;
arrayemp[6] = false;
arrayemp[7] = 7;
arrayemp[8] = 8;
arrayemp[9] = 'abc';

for (let i = 0; i< arrayemp.length; i++){
 console.log(arrayemp[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<10; i++){
 console.log(`Крок ${i+1}`);
 document.write(`Крок ${i+1}`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i++){
 console.log(`Крок ${i+1}`);
 document.write(`<h2>Крок ${i+1}</h2>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=0; i<100; i=i+2){
 console.log(`Крок ${i+1}`);
 document.write(`Крок ${i+1}`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i=0; i<100; i++){
 if (i !== 0 && i%2 === 0) {
  console.log(`Крок ${i}`);
  document.write(`<p>Крок ${i}</p>`);
 }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=0; i<100; i++){
 if (i%2 !== 0){
  console.log(`Крок ${i}`);
  document.write(`<p>Крок ${i}</p>`);
 }
}