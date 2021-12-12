// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then(responce => responce.json())
.then (posts =>{
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    for (const post of posts) {
        let container = document.createElement('div');
        container.classList.add('container');
        let userId = document.createElement('h2');
        userId.innerText = `userId: ${post.userId}`;
        let id = document.createElement('h3');
        id.innerText = `id: ${post.id}`;
        let title = document.createElement('div');
        title.innerText = `title: ${post.title}`;
        let body = document.createElement('p');
        body.innerText = `body: ${post.body}`;
        container.append(userId,id,title,body);
        wrap.appendChild(container);
    }
    document.body.appendChild(wrap);
})


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then (responce => responce.json())
    .then (comments =>{
        for (const comment of comments) {
            let commentContaiter= document.createElement('div');
            commentContaiter.classList.add('wrap__comment');
            let postId = document.createElement('div');
            postId.classList.add('comment__postId');
            postId.innerText = `postId: ${comment.postId}`;
            let id = document.createElement('div');
            id.classList.add('comment__id');
            id.innerText = `id: ${comment.id}`;
            let name = document.createElement('div');
            name.classList.add('comment__name');
            name.innerText = `Name: ${comment.name}`;
            let email = document.createElement('div');
            email.classList.add('comment__email');
            email.innerText = `email: ${comment.email}`;
            let body = document.createElement('div');
            body.classList.add('comment__body');
            body.innerText = `Comment: ${comment.body}`;
            commentContaiter.append(postId,id,name,email,body);
            document.body.appendChild(commentContaiter);
        }
    })


