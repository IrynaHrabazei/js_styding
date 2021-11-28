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
        console.log(`Їдемо зі швидкістю ${maxspeed}на годину`);
    };
    this.info = function (){
        console.log(`Модель - ${model}, виробник - ${producer}, рік випуску - ${year}, максимальна швидкість - ${maxspeed}, об'єм двигуна - ${engineCapacity}`);
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




