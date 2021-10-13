import "../scss/main.scss";


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(function () {
        document.querySelector("body").classList.remove('stop-scrolling');
        document.querySelector(".loading").classList.add('hide');
    }, 2000);



    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    //     loop : true, // 슬라이드 반복 여부

        // navigation: {
        //     nextEl: document.querySelector(".swiper-button-next"),
        //     prevEl: document.querySelector(".swiper-button-prev"),
        // },
    // });

});