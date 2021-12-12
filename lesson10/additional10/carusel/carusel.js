let slides = document.getElementsByClassName('picture__wrap');
let index = 1;
showSlide(index);

function changeSlide (n){
    showSlide(index += n);
}
function showSlide (n){
    if (n>slides.length){
        index = 1}
    if (n<1){
        index = slides.length}
    for (let i =0; i<slides.length; i++){
        slides[i].style.display = 'none'
        slides[index-1].style.display = 'block';
    }
}
let next = document.getElementsByClassName('next')[0];
let prev = document.getElementsByClassName('prev')[0];
prev.onclick = function (){
    changeSlide(-1);
}
next.onclick = function (){
    changeSlide(1);
}