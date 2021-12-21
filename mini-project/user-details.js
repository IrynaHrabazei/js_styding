let user = JSON.parse(sessionStorage.getItem('viewUser'));
console.log(user);
let wrap = document.createElement('div');
wrap.classList.add('user__wraper');
for (const item of user) {
    let userId = document.createElement('div');
    userId.classList.add('user__id');
    userId.innerHTML = `<span>ID:</span> ${item.id}`;
    let userName = document.createElement('div');
    userName.classList.add('user__name');
    userName.innerHTML = `<span>Name:</span> ${item.name}`;
    let UserUsername = document.createElement('div');
    UserUsername.classList.add('user__name');
    UserUsername.innerHTML = `<span>UserName:</span> ${item.username}`;
    let UserEmail = document.createElement('div');
    UserEmail.classList.add('user__name');
    UserEmail.innerHTML = `<span>Email:</span> ${item.email}`;
    let userAddress = document.createElement('div');
    userAddress.classList.add('user__address');
    userAddress.innerHTML = '<span>Address:</span>';
    let userAddInfo = document.createElement('ul');
    userAddInfo.classList.add('user__Address__info');
    userAddInfo.innerHTML = `
                                <li><span>Street:</span> ${item.address.street}</li>
                                <li><span>Suite:</span> ${item.address.suite}</li>
                                <li><span>City:</span> ${item.address.city}</li>
                                <li><span>Zipcode:</span> ${item.address.zipcode}</li>
                                <li><span>Geo:
                                            <div><span>lat:</span>${item.address.geo.lat}</div>
                                            <div><span>lng:</span>${item.address.geo.lng}</div>
                                </li>`;
    userAddress.append(userAddInfo);
    let userPhone = document.createElement('div');
    userPhone.classList.add('user__name');
    userPhone.innerHTML = `<span>Phone:</span> ${item.phone}`;
    let userWebsite = document.createElement('div');
    userWebsite.classList.add('user__name');
    userWebsite.innerHTML = `<span>Website:</span> ${item.website}`;
    let userCompany = document.createElement('div');
    userCompany.classList.add('user__address');
    userCompany.innerHTML = '<span>Company:</span>';
    let userComapanyInfo = document.createElement('ul');
    userComapanyInfo.classList.add('user__Address__info');
    userComapanyInfo.innerHTML = `
                                <li><span>Nama:</span> ${item.company.name}</li>
                                <li><span>CatchPhrase:</span> ${item.company.catchPhrase}</li>
                                <li><span>BS:</span> ${item.company.bs}</li>`;
    userCompany.append(userComapanyInfo);
    let btnTitle = document.createElement('button');
    btnTitle.innerText = 'posts of current user';
    btnTitle.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
            .then(response => response.json())
            .then(posts => {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post__container');
                for (const post of posts) {
                    let postWrap = document.createElement('div');
                    postWrap.classList.add('post__wrap');
                    let postTitle = document.createElement('div');
                    postTitle.classList.add('post__title');
                    postTitle.innerHTML = `<span>Title:</span> ${post.title}`;
                    let btnPost = document.createElement('button');
                    btnPost.innerHTML = '<a href="post-details.html">Дивитись інформацію про пост</a>';
                    btnPost.onclick = function () {
                        let currentPost = {userId: post.userId, id: post.id, title: post.title, body: post.body}
                        let viewPost = JSON.parse(sessionStorage.getItem('viewPost')) || [];
                        viewPost.push (currentPost);
                        sessionStorage.setItem('viewPost',JSON.stringify(viewPost));
                    };
                    postWrap.append(postTitle, btnPost);
                    postContainer.appendChild(postWrap);
                }
                wrap.appendChild(postContainer);
            });
    }
    wrap.append(userId, userName, UserUsername, UserEmail, userAddress, userPhone, userWebsite, userCompany, btnTitle);
}
document.body.appendChild(wrap);

let btnToUsers = document.getElementById('back_to_users');
btnToUsers.onclick = function (){
    sessionStorage.removeItem('viewUser');
    history.back();
}