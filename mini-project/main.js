// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//


fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        let mainWrap = document.createElement('div');
        mainWrap.classList.add('main__wrap');
        for (const user of users) {
            let userWrap = document.createElement('div');
            userWrap.classList.add('user__wrap');
            let userContent = document.createElement('div');
            userContent.classList.add('user__content');
            userContent.innerHTML = `
                            <h4>ID: ${user.id}</h4>
                            <h4>Name: ${user.name}</h4>`;
            let btn1 = document.createElement('button');
            btn1.innerHTML = '<a href="user-details.html">Дивитись інформацію про користувача</a>';
            btn1.onclick = function () {
                let currentUser = {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: {
                        street: user.address.street,
                        suite: user.address.suite,
                        city: user.address.city,
                        zipcode: user.address.zipcode,
                        geo: {lat: user.address.geo.lat, lng: user.address.geo.lng}
                    },
                    phone: user.phone,
                    website: user.website,
                    company: {name:user.company.name, catchPhrase: user.company.catchPhrase, bs: user.company.bs}
                }
                let viewUser = JSON.parse(sessionStorage.getItem('viewUser')) || [];
                viewUser.push (currentUser);
                sessionStorage.setItem('viewUser',JSON.stringify(viewUser));
            }
            userWrap.append(userContent, btn1);
            mainWrap.appendChild(userWrap);
        }

        document.body.appendChild(mainWrap);
    });
