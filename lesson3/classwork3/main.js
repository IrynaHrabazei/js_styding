// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let numbersarr = [2,17,13,6,22,31,45,66,100,-18];
i = 0;
while (i < numbersarr.length){
    console.log(numbersarr[i]);
    i++;
}
// 2. перебрати його циклом for
let numbersarr1 = [2,17,13,6,22,31,45,66,100,-18];
for (let num of numbersarr1){
    console.log(num);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let numbersarr2 = [2,17,13,6,22,31,45,66,100,-18];
let k = 0;
while (k < numbersarr2.length){
    if (k%2 !== 0){
        console.log(numbersarr2[k]);
    }
        k++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
let numbersarr3 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<numbersarr3.length; i++){
    if (i%2 !== 0){
        console.log(numbersarr3[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let numbersarr4 = [2,17,13,6,22,31,45,66,100,-18];
let g =0;
while (g<numbersarr4.length){
    if (numbersarr4[g]%2 === 0 && numbersarr4[g]!==0){
        console.log(numbersarr4[g]);
    }
    g++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
let numbersarr5 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<numbersarr5.length; i++){
    if (numbersarr5[i]%2 === 0 && numbersarr5[i]!==0){
        console.log(numbersarr5[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
let numbersarr6 = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<numbersarr6.length; i++){
    if (numbersarr6[i]%3 === 0 && i!== 0) {
        numbersarr6[i] = "okten"
    }
    console.log(numbersarr6[i]);
}
// 8. вивести масив в зворотньому порядку.

let numbersarr7 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = numbersarr7.length-1; i>=0; i--){
    console.log(numbersarr7[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let numbersarrReverse = [2,17,13,6,22,31,45,66,100,-18];
// перебрати його циклом while
let ii = numbersarrReverse.length-1;
while (ii >=0){
    console.log(numbersarrReverse[ii]);
    ii--;
}
// перебрати його циклом for
for (let kk = numbersarrReverse.length-1; kk>=0; kk--){
    console.log(numbersarrReverse[kk]);
}

// перебрати циклом while та вивести  числа тільки з непарним індексом
let gg=numbersarrReverse.length-1;
while (gg>=0){
    if (gg%2!==0){
        console.log(numbersarrReverse[gg]);
    }
    gg--;
}

// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let kk = numbersarrReverse.length-1; kk>=0; kk--){
    if (kk%2 !==2){
        console.log(numbersarrReverse[kk]);
    }
}
// перебрати циклом while та вивести  числа тільки парні  значення
let ff = numbersarrReverse.length-1;
while (ff>=0){
    if (numbersarrReverse[ff]!== 0 && numbersarrReverse[ff]%2 === 0){
        console.log(numbersarrReverse[ff])
    }
    ff--;
}

// перебрати циклом for та вивести  числа тільки парні  значення
for (let kk = numbersarrReverse.length-1; kk>= 0; kk--){
    if (numbersarrReverse[kk] !== 0 && numbersarrReverse[kk]%2 === 0){
        console.log(numbersarrReverse[kk]);
    }
}

// замінити кожне число кратне 3 на слово "okten"
for (let kk = numbersarrReverse.length-1; kk>=0; kk--){
    if (numbersarrReverse[kk]%3 === 0 && numbersarrReverse[kk] !== 0){
        numbersarrReverse[kk] = 'okten'
    }
    console.log(numbersarrReverse[kk]);
}

