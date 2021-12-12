// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch ('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
.then (posts=>{
    let post__wrap = document.createElement('div');
    post__wrap.classList.add ('post__wrap');
    for (const post of posts) {
        let container = document.createElement('div');
        container.classList.add('conrainer');
        let userId =document.createElement('div');
        userId.classList.add('post__userId');
        userId.innerHTML =  `<span>UserID:</span> ${post.userId}`;
        let id = document.createElement('div');
        id.classList.add('post__userId');
        id.innerHTML = `<span>ID:</span> ${post.id}`;
        let title = document.createElement('div');
        title.classList.add('post__title');
        title.innerHTML = `<span>Title:</span> ${post.title}`;
        let body = document.createElement('div');
        body.classList.add('post__body');
        body.innerHTML = `<span>Body:</span> ${post.body}`;
        let btn1 = document.createElement('button');
        btn1.classList.add('btn1');
        btn1.innerHTML = 'Check comments';
        btn1.onclick = function (){
            fetch ('https://jsonplaceholder.typicode.com/comments')
                .then (response => response.json())
                .then (comments => {
                    for (const comment of comments) {
                        if (post.id === comment.postId){
                            let commentWrap = document.createElement('div');
                            commentWrap.classList.add('comment__wrap');
                            let commentPostId = document.createElement('div');
                            commentPostId.classList.add('comment__postId');
                            commentPostId.innerHTML = `<span>PostID:</span> ${comment.postId}`;
                            let commentId = document.createElement('div');
                            commentId.classList.add('comment__postId');
                            commentPostId.innerHTML = `<span>ID:</span> ${comment.id}`;
                            let commentName = document.createElement('div');
                            commentName.classList.add('comment__name');
                            commentName.innerHTML = `<span>Name:</span> ${comment.name}`;
                            let commentEmail = document.createElement('div');
                            commentEmail.classList.add('comment__name');
                            commentEmail.innerHTML = `<span>Email:</span> ${comment.email}`;
                            let commentBody = document.createElement('div');
                            commentBody.classList.add('comment__name');
                            commentBody.innerHTML = `<span>Comment:</span> ${comment.body}`;
                            commentWrap.append(commentPostId,commentId,commentName,commentEmail,commentBody);
                            container.appendChild(commentWrap);
                        }
                    }
                })
        }
        container.append(userId,id,title,body,btn1);
        post__wrap.appendChild(container);
    }
    document.body.appendChild(post__wrap);
})