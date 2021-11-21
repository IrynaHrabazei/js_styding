<!--        template 3.1-->
// <div>
//     <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="" alt="" class="product-image">
//     </div>
//     <!--

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// */

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="product__style">');
for (const product of products){
    document.write('<div "product-card">')
    document.write(`<h2>${product.title}. Price - ${product.price}</h2>`)
    document.write(`<div> <img src="${product.image}" alt="product picture" class="product-image"> </div>`)
    document.write('</div>')
}
document.write('</div>');