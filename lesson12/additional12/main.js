// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// fetch ('https://jsonplaceholder.typicode.com/users')
//     .then (responce => responce.json())
//     .then (users => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (const user of users) {
//             let userWrap = document.createElement('div');
//             userWrap.classList.add('user__wrap');
//             let userId = document.createElement('div');
//             userId.classList.add('user__id');
//             userId.innerHTML = `<span>ID:</span> ${user.id}`;
//             let userName = document.createElement('div');
//             userName.classList.add('user__name');
//             userName.innerHTML= `
//             <span>Name:</span> ${user.name}
//             <span>UserName:</span> ${user.username}
//             <span>Email:</span> ${user.email}`;
//             let userAddress = document.createElement('div');
//             userAddress.classList.add('user__address');
//             let userAddInfo = document.createElement('div');
//             userAddInfo.classList.add('user__Address__info');
//             userAddInfo.innerHTML = `
//                                 <li>Street: ${user.address.street}</li>
//                                 <li>Suite: ${user.address.suite}</li>
//                                 <li>City: ${user.address.city}</li>
//                                 <li>Zipcode: ${user.address.zipcode}</li>`;
//             let userGeo = document.createElement('li');
//             userGeo.classList.add('user__Address__info')
//             userGeo.innerHTML = `
//                             <li>Geo:</li>
//                             <li>lat:${user.address.geo.lat}</li>
//                             <li>lng:${user.address.geo.lng}</li>`;
//             userAddress.append(userAddInfo,userGeo)
//             userWrap.append(userId,userName,userAddress);
//             wrap.appendChild(userWrap);
//         }
//
//         document.body.appendChild(wrap);
//     })



fetch ('https://jsonplaceholder.typicode.com/users')
    .then (responce => responce.json())
    .then (users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const user of users) {
            let userWrap = document.createElement('div');
            userWrap.classList.add('user__wrap');
            let userId = document.createElement('div');
            userId.classList.add('user__id');
            userId.innerHTML = `<span>ID:</span> ${user.id}`;
            let userName = document.createElement('div');
            userName.classList.add('user__name');
            userName.innerHTML= `<span>Name:</span> ${user.name}`;
            let UserUsername = document.createElement('div');
            UserUsername.classList.add('user__name');
            UserUsername.innerHTML= `<span>UserName:</span> ${user.username}`;
            let UserEmail = document.createElement('div');
            UserEmail.classList.add('user__name');
            UserEmail.innerHTML= `<span>Email:</span> ${user.email}`;
            let userAddress = document.createElement('div');
            userAddress.classList.add('user__address');
            userAddress.innerHTML= '<span>Address:</span>';
            let userAddInfo = document.createElement('ul');
            userAddInfo.classList.add('user__Address__info');
            userAddInfo.innerHTML = `
                                <li><span>Street:</span> ${user.address.street}</li>
                                <li><span>Suite:</span> ${user.address.suite}</li>
                                <li><span>City:</span> ${user.address.city}</li>
                                <li><span>Zipcode:</span> ${user.address.zipcode}</li>
                                <li><span>Geo:
                                            <div><span>lat:</span>${user.address.geo.lat}</div>
                                            <div><span>lng:</span>${user.address.geo.lng}</div>
                                </li>`;
            userAddress.append(userAddInfo);
            let userPhone = document.createElement('div');
            userPhone.classList.add('user__name');
            userPhone.innerHTML =`<span>Phone:</span> ${user.phone}`;
            let userWebsite = document.createElement('div');
            userWebsite.classList.add('user__name');
            userWebsite.innerHTML =`<span>Website:</span> ${user.website}`;
            let userCompany = document.createElement('div');
            userCompany.classList.add('user__address');
            userCompany.innerHTML= '<span>Company:</span>';
            let userComapanyInfo = document.createElement('ul');
            userComapanyInfo.classList.add('user__Address__info');
            userComapanyInfo.innerHTML = `
                                <li><span>Nama:</span> ${user.company.name}</li>
                                <li><span>CatchPhrase:</span> ${user.company.catchPhrase}</li>
                                <li><span>BS:</span> ${user.company.bs}</li>`;
            userCompany.append(userComapanyInfo);
            let btn1 = document.createElement('button');
            btn1.innerText = 'view posts';
            btn1.onclick = function (){
                fetch ('https://jsonplaceholder.typicode.com/posts')
                    .then (responce => responce.json())
                    .then (posts =>{
                        for (const post of posts) {
                            if (user.id === post.userId){
                                let postWrap = document.createElement('div');
                                postWrap.classList.add('post__wrap');
                                let postUserId = document.createElement('div');
                                postUserId.classList.add('post__userId');
                                postUserId.innerHTML = `<span>UserId:</span> ${post.userId}`;
                                let postId = document.createElement('div');
                                postId.classList.add('post__userId');
                                postId.innerHTML = `<span>ID:</span> ${post.id}`;
                                let postTitle = document.createElement('div');
                                postTitle.classList.add('post__title');
                                postTitle.innerHTML = `<span>Title:</span> ${post.title}`;
                                let postBody = document.createElement('div');
                                postBody.classList.add('post__title');
                                postBody.innerHTML = `<span>Post:</span> ${post.body}`;
                                let btn2 = document.createElement('button');
                                btn2. innerText = 'view comments';
                                btn2.style.margin = '7px';
                                btn2.onclick = function (){
                                    fetch ('https://jsonplaceholder.typicode.com/comments')
                                        .then (responce => responce.json())
                                        .then (comments => {
                                            for (const comment of comments) {
                                                if (post.userId === comment.postId){
                                                    let commentWrap = document.createElement('div');
                                                    commentWrap.classList.add('comment__wrap');
                                                    let commentPostId = document.createElement('div');
                                                    commentPostId.classList.add('post__userId');
                                                    commentPostId.innerHTML = `<span>PostID:</span> ${comment.postId}`;
                                                    let commentId = document.createElement('div');
                                                    commentId.classList.add('post__userId');
                                                    commentId.innerHTML = `<span>ID:</span> ${comment.id}`;
                                                    let commentName = document.createElement('div');
                                                    commentName.classList.add('user__name');
                                                    commentName.innerHTML = `<span>Name:</span> ${comment.name}`;
                                                    let commentEmail = document.createElement('div');
                                                    commentEmail.classList.add('user__name');
                                                    commentEmail.innerHTML = `<span>Email:</span> ${comment.email}`;
                                                    let commentBody = document.createElement('div');
                                                    commentBody.classList.add('user__address');
                                                    commentBody.innerHTML = `<span>Comment:</span> ${comment.body}`;
                                                    commentWrap.append(commentPostId,commentId,commentName,commentEmail,commentBody);
                                                    postWrap.appendChild(commentWrap);
                                                }
                                            }
                                        })
                                }
                                postWrap.append(postUserId,postId,postTitle,postBody,btn2);
                                userWrap.appendChild(postWrap);
                            }
                        }
                    })
            }
            userWrap.append(userId,userName,UserUsername,UserEmail,userAddress,userPhone,userWebsite, userCompany,btn1);
            wrap.appendChild(userWrap);
        }

        document.body.appendChild(wrap);
    })

