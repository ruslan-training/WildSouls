// let burger = document.querySelector('.burger'),
//     adaptivemenu = document.querySelector('.adaptive-menu'),
//     lists = document.querySelectorAll('.list__item'),
//     body = document.body;

// burger.addEventListener('click', function(){
//     burger.classList.toggle('_active');
//     adaptivemenu.classList.toggle('_active');
//     body.classList.toggle('_lock');
//     for(list of lists) {
//         list.classList.toggle('_active');
//     }
// })

//  Slider shop

$('.slider-shop').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: 0,
    dots: true,
    Infinity: true, 
    pauseOnHover: true,
    // waitForAnimate: false,

    responsive: [   
    {    
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1, 
        }
    }]
});
$('.testimonials-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    autoplay: 0,
    Infinity: true, 
    pauseOnHover: true,
    // waitForAnimate: false,

    // responsive: [   
    // {    
    //     breakpoint: 500,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1, 
    //     }
    // }]
});


// // Scroll Animation

// const animItems = document.querySelectorAll(`._animated`)
// if (animItems.length > 0) {
//     window.addEventListener(`scroll`, animOnScroll)

//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index]
//             const animItemHeight = animItem.offsetHeight
//             const animItemOffSet = offset(animItem).top
//             const animStart = 4
//             let animItemPoint = window.innerHeight - animItemHeight / animStart
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart
//             }
//             if ((window.scrollY > animItemOffSet - animItemPoint) && window.scrollY < (animItemOffSet + animItemHeight)) {
//                 animItem.classList.add(`_active`)
//             } else {
//                 if (!(animItem.classList.contains(`_once-animated`))) {
//                     animItem.classList.remove(`_active`)
//                 }
//             }
//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect()
//         let scrollLeft = window.scrollY || document.documentElement.scrollLeft
//         let scrollTop = window.scrollY || document.documentElement.scrollTop
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }

//     setTimeout(() => {
//         animOnScroll()
//     }, 300)
// }
