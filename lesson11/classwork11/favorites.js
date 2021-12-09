let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites);
for (const item of favorites) {
    let favoriteUser = document.createElement('div');
    favoriteUser.innerText = `${item.name} ${item.age} ${item.status}`;
    document.body.appendChild(favoriteUser);
}