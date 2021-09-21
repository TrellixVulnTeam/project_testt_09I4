import "../scss/main.scss";
import Swiper from 'swiper';


window.addEventListener('DOMContentLoaded', () => {
    // setTimeout(function (){
    //     document.querySelector('.visual__container').classList.add('out');
    // },2500);

    // setInterval(function (){
    //     document.querySelector('.down-bar span').classList.add('active');
    // },2500);

    document.querySelector('.up-button').addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    let visualOffsetTop = document.querySelector("#visual").offsetTop;
    let workOffsetTop = document.querySelector("#work").offsetTop;
    let introduceOffsetTop = document.querySelector("#introduce").offsetTop;
    const menus = document.querySelectorAll('.header__item a');

    console.log(menus);

    // for (var i = 0 ; i < menus.length; i++) {
    //     menus[i].addEventListener('click' , (event,button) =>{
    //         console.log(menus[i]);
    //         // event.preventDefault();
    //
    //     }) ;
    // }

    var swiper = new Swiper(".swiper", {});

});