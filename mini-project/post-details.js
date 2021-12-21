let post = JSON.parse(sessionStorage.getItem('viewPost'));
console.log(post);
let wrap = document.createElement('div');
wrap.classList.add('post__wrapper');
for (const item of post) {
    let postUserId = document.createElement('div');
    postUserId.classList.add('post__userId');
    postUserId.innerHTML = `<span>UserId:</span> ${item.userId}`;
    let postId = document.createElement('div');
    postId.classList.add('post__userId');
    postId.innerHTML = `<span>ID:</span> ${item.id}`;
    let postTitle = document.createElement('div');
    postTitle.classList.add('post__title');
    postTitle.innerHTML = `<span>Title:</span> ${item.title}`;
    let postBody = document.createElement('div');
    postBody.classList.add('post__title');
    postBody.innerHTML = `<span>Post:</span> ${item.body}`;
    let btnComment = document.createElement('button');
    btnComment.innerText = 'Дивитись усі коментарі';
    btnComment.onclick = function (){
        fetch (`https://jsonplaceholder.typicode.com/posts/${item.userId}/comments`)
            .then (response => response.json())
            .then (comments => {
                let commentContainer = document.createElement('div');
                commentContainer.classList.add('comment__container');
                for (const comment of comments) {
                    console.log(comment);
                    let commentWrap = document.createElement('div');
                    commentWrap.classList.add('comment__wrap');
                    let commentPostId = document.createElement('div');
                    commentPostId.classList.add('post__userId');
                    commentPostId.innerHTML = `<span>PostID:</span> ${comment.postId}`;
                    let commentId = document.createElement('div');
                    commentId.classList.add('post__userId');
                    commentId.innerHTML = `<span>ID:</span> ${comment.id}`;
                    let commentName = document.createElement('div');
                    commentName.classList.add('comment__name');
                    commentName.innerHTML = `<span>Name:</span> ${comment.name}`;
                    let commentEmail = document.createElement('div');
                    commentEmail.classList.add('comment__name');
                    commentEmail.innerHTML = `<span>Email:</span> ${comment.email}`;
                    let commentBody = document.createElement('div');
                    commentBody.classList.add('comment__body');
                    commentBody.innerHTML = `<span>Comment:</span> ${comment.body}`;
                    commentWrap.append(commentPostId,commentId,commentName,commentEmail,commentBody);
                    commentContainer.appendChild(commentWrap);
                }
                wrap.appendChild(commentContainer);
            });
    }
    wrap.append(postUserId,postId,postTitle,postBody,btnComment);
}
document.body.appendChild(wrap);

let btnBackToUser = document.getElementById('back_to_user');
btnBackToUser.onclick = function (){
    sessionStorage.removeItem('viewPost');
    history.back();
}
