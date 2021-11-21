// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a,b,c){
    if (a<b && a<c){
        document.write(`<div>Мінімальне число ${a}</div>`)
    } else if (b<a && b<c){
        document.write(`<div>Мінімальне число ${b}</div>`)
    } else if (c<a && c<b){
        document.write(`<div>Мінімальне число ${c}</div>`);
    }
}

min (1,2,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max (a,b,c){
    if (a>b && a>c){
        document.write(`<div>Максимальне число ${a}</div>`)
    } else  if (b>a && b>c){
        document.write(`<div>Максимальне число ${b}</div>`)
    } else if (c>a && c>b){
        document.write(`<div>Максимальне число ${c}</div>`);
    }
}
max (1,2,3);

// - створити функцію яка повертає найбільше число з масиву
function maxArr (someArray){
    let maxNumber = someArray[0];
    for (const someArr of someArray){
        if (someArr > maxNumber){
            maxNumber = someArr;
        }
    }
    document.write(`<div>Максимальне число масиву - ${maxNumber}</div>`);
}

orderNumber = [1,22,44,5,23,34,56,2,5,99];
maxArr (orderNumber);

// - створити функцію яка повертає найменьше число з масиву
function minArr (someArray){
    let minNumber = someArray[0];
    for (const someArr of someArray){
        if (someArr < minNumber){
            minNumber = someArr;
        }
    }
    document.write(`<div>Мінімальне число масиву - ${minNumber}</div>`);
}
minArr (orderNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summingArray(arrayForSum){
    let sum = 0;
    for (const arrSum of arrayForSum){
        sum = sum + arrSum;
    }
    return sum;
}
arrayForSumming = [1,3,4];
document.write(`<div>Сума вхідного масиву ${summingArray(arrayForSumming)}</div>`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticMean (inputArray){
    let total = 0;
    for (const tempArray of inputArray){
        total = total + tempArray;
    }
    return Math.round(total / inputArray.length);
}

ArrayForCaltulationArithmeticMean = [1,4,11,5,99,5];
document.write(`<div>Середнє арифметичне вхідного масиву ${arithmeticMean(ArrayForCaltulationArithmeticMean)}</div>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function randomArray (arrayOfNumbers){
    let minNumb = arrayOfNumbers[0];
    let maxNumb = arrayOfNumbers[0];
    for (const arrOfNumb of arrayOfNumbers){
        if (arrOfNumb < minNumb){
            minNumb = arrOfNumb
        }
    }
    for (const arrOfNumbs of arrayOfNumbers){
        if (arrOfNumbs > maxNumb){
            maxNumb = arrOfNumbs
        }
    }
    document.write(`<p>Найбільше число з набору чисел - ${maxNumb}</p>`);
    return minNumb;
}

randomNumbers = [1,3,6,8,2,3];
randomArray (randomNumbers);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomizer (){
    for (i=0; i< 100; i++){
        let rand = Math.round(Math.random()*100)
        document.write(`<div>${rand}</div>`);
    }
}
randomizer ();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
document.write('<hr>');
function randomizerLimit(limit){
    for (i=0; i<limit; i++){
        let random = Math.round(Math.random()*100)
        document.write(`<div>${random}</div>`);
    }
}
randomizerLimit (10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse (reverseArray){
    let arr = [];
    for (let i = reverseArray.length-1, ri =0; i>=0; i= i-1, ri++){
        arr[ri]=reverseArray[i];
    }
    document.write(`<div>${arr}</div>`);
}
NormalArray = [1,2,3,4,5,6];
reverse (NormalArray);

