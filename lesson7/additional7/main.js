// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

user = new User(1, 'Leanne Graham', 'Bret', 'sincere@april.biz', new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')), '1-770-736 - 8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту

class Tag {
    constructor(nameOfTag, action, arrayOfAttributes,arrayOfAttributes1,arrayOfAttributes2) {
        this.nameOfTag = nameOfTag;
        this.action = action;
        this.arrayOfAttributes = [arrayOfAttributes,arrayOfAttributes1,arrayOfAttributes2];
    }
    }
class ArrayOfAttributes {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}
let a = new Tag('a', 'предназначен для создания ссылок', new ArrayOfAttributes('accesskey', 'Активация ссылки с помощью комбинации клавиш'),new ArrayOfAttributes('name', 'Устанавливает имя якоря внутри документа'), new ArrayOfAttributes('href', 'Задает адрес документа, на который следует перейти.'));
console.log(a);

let div = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', new ArrayOfAttributes('align', 'Задает выравнивание содержимого тега <div>.'),  new ArrayOfAttributes('title', 'Добавляет всплывающую подсказку к содержимому.'), new ArrayOfAttributes('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'));
console.log(div);

let h1 = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня',new ArrayOfAttributes('align', 'Определяет выравнивание заголовка'), new ArrayOfAttributes('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),new ArrayOfAttributes('hidden', 'Скрывает содержимое элемента от просмотра'));
console.log(h1);

let span = new Tag('span', 'можно выделить часть информации внутри других тегов и установить для нее свой стиль', new ArrayOfAttributes('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'), new ArrayOfAttributes('id', 'Указывает имя стилевого идентификатора.'),new ArrayOfAttributes('hidden', 'Скрывает содержимое элемента от просмотра'));
console.log(span);

let input = new Tag('input', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', new ArrayOfAttributes('align', 'Определяет выравнивание изображения.'), new ArrayOfAttributes('form', 'Связывает поле с формой по её идентификатору.'),new ArrayOfAttributes('disabled', 'Блокирует доступ и изменение элемента.'));
console.log(input);

let form = new Tag('form', 'Форма предназначена для обмена данными между пользователем и сервером.', new ArrayOfAttributes('action', 'Адрес программы или документа, который обрабатывает данные формы'), new ArrayOfAttributes('method', 'Метод протокола HTTP.'), new ArrayOfAttributes('name', 'Имя формы.'));
console.log(form);

let option = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', new ArrayOfAttributes('disabled', 'Заблокировать для доступа элемент списка.'),new ArrayOfAttributes('label', 'Указание метки пункта списка.'), new ArrayOfAttributes('selected', 'Заранее устанавливает определенный пункт списка выделенным.'));
console.log(option);

let select = new Tag ('select', 'озволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', new ArrayOfAttributes('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'), new ArrayOfAttributes('disabled', 'Блокирует доступ и изменение элемента.'), new ArrayOfAttributes('size', 'Количество отображаемых строк списка.'));
console.log(select);

