// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let emptyArray = [
    new User (14,'vasya', 'pupkin', 'vasya.pupkin@gmail.com', '3809352437'),
    new User (15,'olya','pupkin','olia.pupkin@gmail.com', '380935678231'),
    new User (16, 'kolia','kovalyk', 'kolia.kovalyk@gmail.com', '380936231154'),
    new User (17, 'victoria', 'bobyk', 'victoria.bobyk@gmail.com','380506345123'),
    new User (18, 'oksana','byk', 'oksana.byk@gmail.com', '380936745512'),
    new User (19, 'taras', 'bukliv', 'taras.bukliv@gmail.com', '380936723499'),
    new User (20, 'zoriana', 'petrovska','zoriana.petrovska@gmail.com', '3969872341'),
    new User (21, 'dmitro', 'vinikov', 'dmitro.vinikov@gmail.com', '3967245631'),
    new User (22, 'lilia', 'sarvas', 'lilia.sarvas@gmail.com', '3967549934'),
    new User (23, 'zoriana', 'first', 'zoriana.f@gmail.com', '3950985341')
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(emptyArray.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = emptyArray.sort((a, b) => a - b);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
emptyClientArray = [
    new Client(10,'vitalik', 'fedak', 'vit.fed@gmail.com','39798723411', ['juice', 'water','sause']),
    new Client (42, 'tanya', 'sokolova', 'tanya.sokolova@gmail.com', '380505543213', ['butter', 'milk', 'cheese', 'cream']),
    new Client (13, 'dmitro', 'vinikov', 'dmitro.vinikov@gmail.com', '3967245631', ['tomatos', 'cucumber']),
    new Client ( 76, 'zoriana', 'first', 'zoriana.f@gmail.com', '3950985341', ['bread', 'milk', 'cheesecake', 'water']),
    new Client (77, 'elena', 'bunkovska', 'bunkovska@gmail.com', '3805645531', ['wine']),
    new Client (55, 'zoriana', 'petrovska','zoriana.petrovska@gmail.com', '3969872341', ['beer', 'water']),
    new Client (52, 'lilia', 'sarvas', 'lilia.sarvas@gmail.com', '3967549934', ['meat', 'fish', 'chicken', 'cheese', 'snaks']),
    new Client (23, 'oksana','byk', 'oksana.byk@gmail.com', '380936745512', ['meat']),
    new Client (34, 'victoria', 'bobyk', 'victoria.bobyk@gmail.com','380506345123', ['icecream', 'cookies', 'candies', 'tarts', 'wafels', 'cheesecakes']),
    new Client (27, 'olya','pupkin','olia.pupkin@gmail.com', '380935678231', ['juice', 'soda'])
]
    // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = emptyClientArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);