// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let checkbox1 = document.getElementById('check1');
let checkbox2 = document.getElementById('check2');
let checkbox3 = document.getElementById('check3');
let checkform = document.getElementById('checkform');



// checkform.onsubmit = function (e) {
//     e.preventDefault();
//     if (checkbox1.checked && checkbox2.checked && checkbox3.checked){
//         let checkbox123Filter = usersWithAddress.filter (value => {
//             return value.status === false && value.age >=29 && value.address.city === 'Kyiv'})
//         checkbox123Filter.forEach(value => {
//             let divCheckbox123 = document.createElement('div');
//             divCheckbox123.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox123);
//         })
//     } else if (checkbox1.checked && checkbox2.checked){
//         let checkbox12Filter = usersWithAddress.filter (value => {
//         return value.status === false && value.age >= 29})
//          checkbox12Filter.forEach(value => {
//         let divCheckbox12 = document.createElement('div');
//         divCheckbox12.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//         document.body.append(divCheckbox12);
//         })
//     } else if (checkbox1.checked && checkbox3.checked){
//         let checkboxFilter13 = usersWithAddress.filter (value => {
//             return value.status === false && value.address.city === 'Kyiv'})
//         checkboxFilter13.forEach(value => {
//             let divCheckbox13 = document.createElement('div');
//             divCheckbox13.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox13);
//         })
//     } else if (checkbox2.checked && checkbox3.checked){
//         let checkboxFilter23 = usersWithAddress.filter(value => {
//             return value.age>= 29 && value.address.city === 'Kyiv'})
//         checkboxFilter23.forEach(value => {
//             let divCheckbox23 = document.createElement('div');
//             divCheckbox23.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox23);
//         })
//     } else if (checkbox1.checked) {
//         let checkbox1Filter = usersWithAddress.filter(value => {
//             return !value.status
//         })
//         checkbox1Filter.forEach(value => {
//             let divCheckbox1 = document.createElement('div');
//             divCheckbox1.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox1);
//         });
//     }
//     else if (checkbox2.checked) {
//         let checkbox2Filter = usersWithAddress.filter(value => {
//             return value.age >= 29
//         })
//         checkbox2Filter.forEach(value => {
//             let divCheckbox2 = document.createElement('div');
//             divCheckbox2.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox2);
//         })
//     }
//     else if (checkbox3.checked){
//         let checkbox3Filter = usersWithAddress.filter (value => {
//             return value.address.city === 'Kyiv'})
//         checkbox3Filter.forEach(value => {
//             let divCheckbox3 = document.createElement('div');
//             divCheckbox3.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
//             document.body.appendChild(divCheckbox3);
//         });
//     }
// }

let wrap = document.getElementsByClassName('wrap')[0];
checkform.onsubmit = function (e) {
    e.preventDefault();
    if (checkbox1.checked && checkbox2.checked && checkbox3.checked){
        wrap.innerHTML = '';
        let checkbox123Filter = usersWithAddress.filter (value => {
            return value.status === false && value.age >=29 && value.address.city === 'Kyiv'})
        checkbox123Filter.forEach(value => {
            let divCheckbox123 = document.createElement('div');
            divCheckbox123.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox123);
        })
    } else if (checkbox1.checked && checkbox2.checked){
        wrap.innerHTML = '';
        let checkbox12Filter = usersWithAddress.filter (value => {
        return value.status === false && value.age >= 29})
         checkbox12Filter.forEach(value => {
        let divCheckbox12 = document.createElement('div');
        divCheckbox12.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
             wrap.append(divCheckbox12);
        })
    } else if (checkbox1.checked && checkbox3.checked){
        wrap.innerHTML = '';
        let checkboxFilter13 = usersWithAddress.filter (value => {
            return value.status === false && value.address.city === 'Kyiv'})
        checkboxFilter13.forEach(value => {
            let divCheckbox13 = document.createElement('div');
            divCheckbox13.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox13);
        })
    } else if (checkbox2.checked && checkbox3.checked){
        wrap.innerHTML = '';
        let checkboxFilter23 = usersWithAddress.filter(value => {
            return value.age>= 29 && value.address.city === 'Kyiv'})
        checkboxFilter23.forEach(value => {
            let divCheckbox23 = document.createElement('div');
            divCheckbox23.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox23);
        })
    } else if (checkbox1.checked) {
        wrap.innerHTML = '';
        let checkbox1Filter = usersWithAddress.filter(value => {
            return !value.status
        })
        checkbox1Filter.forEach(value => {
            let divCheckbox1 = document.createElement('div');
            divCheckbox1.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox1);
        });
    }
    else if (checkbox2.checked) {
        wrap.innerHTML = '';
        let checkbox2Filter = usersWithAddress.filter(value => {
            return value.age >= 29
        })
        checkbox2Filter.forEach(value => {
            let divCheckbox2 = document.createElement('div');
            divCheckbox2.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox2);
        })
    }
    else if (checkbox3.checked){
        wrap.innerHTML = '';
        let checkbox3Filter = usersWithAddress.filter (value => {
            return value.address.city === 'Kyiv'})
        checkbox3Filter.forEach(value => {
            let divCheckbox3 = document.createElement('div');
            divCheckbox3.innerText = `${value.id} ${value.name} ${value.age} ${value.status} ${value.address.city} ${value.address.street} ${value.address.number}`;
            wrap.appendChild(divCheckbox3);
        });
    }
}
