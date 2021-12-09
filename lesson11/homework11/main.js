// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let f1 = document.forms.form1;
f1.onsubmit = function (e){
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    let user = {name, age};
    localStorage.setItem('user details', JSON.stringify(user));
}

    // -створити форму з інпутами для model,type та volume автівки.
    // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let f2 = document.forms.form2;
f2.onsubmit = function (e){
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model,type,volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
    if (!cars){
        cars = [];
        cars.push(car);
        localStorage.setItem('cars',JSON.stringify(cars));
    } else if (cars) {
        cars.push(car);
        localStorage.setItem('cars',JSON.stringify(cars));
    }
};












// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let modelCar = document.forms.form2.model;
// let typeCar = document.forms.form2.type;
// let volumeCar = document.forms.form2.volume;







