let products = JSON.parse(localStorage.getItem('products'));
console.log(products);
let generalWrap = document.createElement('div');
generalWrap.classList.add('general__wrap');
for (const product of products) {
    let wrapContainer = document.createElement('div');
    wrapContainer.classList.add('wrap__container');
    let divProduct = document.createElement('div');
    divProduct.classList.add('wrap');
    let productName = document.createElement('div');
    productName.classList.add('cover');
    productName.innerText = `Назва товару ${product.name}`;
    let productAmount = document.createElement('div');
    productAmount.classList.add('cover');
    productAmount.innerText = `Кількість товару ${product.amount}`;
    let productPrice = document.createElement('div');
    productPrice.classList.add('cover');
    productPrice.innerText = `Ціна товару ${product.price}`;
    let productLink = document.createElement('img');
    productLink.classList.add('cover');
    productLink.src = product.link;
    productLink.style.width = '150px';
    productLink.style.height = '150px';
    let productButton = document.createElement('button');
    productButton.innerText = 'Видалити із LocalStorage';
    productButton.addEventListener('click', function (){
        let itemId = product.time;
        console.log(itemId);
        let key = products.findIndex(x => x.time === itemId);
        console.log(key);
        products.splice(key,1);
        localStorage.setItem('products',JSON.stringify(products));
    });
    divProduct.append(productName,productAmount,productPrice,productLink,productButton);
    wrapContainer.append(divProduct);
    generalWrap.appendChild(wrapContainer);
}
document.body.appendChild(generalWrap);


let btn1 = document.getElementById('btn1');
let deleteAll = document.getElementsByClassName('general__wrap')[0];
console.log(deleteAll);
btn1.addEventListener('click', function (){
    localStorage.clear();
});
btn1.addEventListener('click', function (){
    deleteAll.remove();
});
