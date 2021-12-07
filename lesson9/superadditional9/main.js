// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив
let addressUsers = [];
for (const user of users) {
   addressUsers.push(user.address);
}
console.log(addressUsers);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (const user of users) {
    let div = document.createElement('div');
    div.innerText = `${user.name} ${user.age} ${user.status}`;
    let address = document.createElement('ul');
        let city = document.createElement('li');
        city.innerText = user.address.city;
        let country = document.createElement('li');
        country.innerText = user.address.country;
        let street = document.createElement('li');
        street.innerText = user.address.street;
        let houseNumber = document.createElement('li');
        houseNumber.innerText = user.address.houseNumber;
        address.appendChild(city);
        address.appendChild(country);
        address.appendChild(street)
        address.appendChild(houseNumber);
    div.appendChild(address);
    document.body.appendChild(div);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const user of users) {
    let wrap = document.createElement('div');
    wrap.classList.add('wrapper');
    let name = document.createElement('div');
    name.innerText = user.name;
    let age = document.createElement('age');
    age.innerText = user.age;
    let status = document.createElement('div');
    status.innerText = user.status;
    let address = document.createElement('div');
    address.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}` ;
    wrap.appendChild(name);
    wrap.appendChild(age);
    wrap.appendChild(status);
    wrap.appendChild(address);
    document.body.appendChild(wrap);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    let wrap = document.createElement('div');
    wrap.classList.add('wrappper_1');
    let name = document.createElement('div');
    name.innerText = user.name;
    let age = document.createElement('div');
    age.innerText = user.age
    let status = document.createElement('div');
    status.innerText = user.status;
    let address = document.createElement('ul');
        let city = document.createElement('li');
        city.innerText = user.address.city;
        let country = document.createElement('li');
        country.innerText = user.address.country;
        let street = document.createElement('li');
        street.innerText = user.address.street;
        let houseNumber = document.createElement('li');
        houseNumber.innerText = user.address.houseNumber;
        address.appendChild(city);
        address.appendChild(country);
        address.appendChild(street);
        address.appendChild(houseNumber);
    wrap.appendChild(name);
    wrap.appendChild(age);
    wrap.appendChild(status);
    wrap.appendChild(address)
    document.body.appendChild(wrap);
}