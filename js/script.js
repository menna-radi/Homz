document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navbar = document.getElementById('navbar');

    burgerIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
//-------------------details-chair----------------------------
let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}
