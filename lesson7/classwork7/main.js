// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxspeed, engineCapacity){
    this.model=model;
    this.year = year;
    this.producer = producer;
    this.maxspeed = maxspeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxspeed}на годину`);
    };
    this.info = function (){
        console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed){
       this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.year = newValue;
    };
    this.addDriver = function (driver){
        this.driver = driver;
    };
}

let car = new Car ('Toyota','Toyota Motor Corporation', 2018, 240,  4.0)
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver('Roman');
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, producer, year, maxspeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineCapacity = engineCapacity;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info (){
        console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxspeed}, об'єм двигуна - ${this.engineCapacity}`);
    }
    increaseMaxSpeed (newSpeed){
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let cars = new Cars ('Toyota','Toyota Motor Corporation', 2018, 240,  4.0)
console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(100);
cars.changeYear(2020);
cars.addDriver('Roman');
console.log(cars);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 class Cinderella {
     constructor(name, age, size) {
         this.name = name;
         this.age = age;
         this.size = size;
     }
 }

 let cinderellaArray = [
     new Cinderella('Olena',23, 36),
     new Cinderella('Olia',20,38),
     new Cinderella('Iryna',24,37),
     new Cinderella('Katya',27,35),
     new Cinderella('Tanya',25,38),
     new Cinderella('Sofia',26,40),
     new Cinderella('Maria',27,39),
     new Cinderella('Marta',30,40),
     new Cinderella('Victoria',29,41),
     new Cinderella('Anna',28,28),

 ]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class  Prints {
    constructor(name, aga, shoes) {
        this.name = name;
        this.aga = aga;
        this.shoes = shoes;
    }
}
let prints = new Prints('ivan', 24,37);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let girl of cinderellaArray){
    if (girl.size === prints.shoes){
        console.log(`Попелюшка по імені ${girl.name} повинна бути із принцом`);
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = cinderellaArray.find(value => value.size === prints.shoes);
console.log(findCinderella);