//Статичный навбар
window.onscroll = function() {fixedTop()};

let header = document.getElementById("fixedNavbar");

let sticky = header.offsetTop;

function fixedTop() {
    if (window.pageYOffset > sticky) {
        header.classList.add("_low");
    } else {
        header.classList.remove("_low");
    }
}

//Навигация по кнопке
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//Коллапс меню
// let collapse = document.querySelectorAll('.collapse__title');
let collapse = document.getElementsByClassName('collapse__title');
for (let i = 0; i < collapse.length; i++) {
    // collapse[i].classList.remove('_active');
    collapse[i].addEventListener('click', function () {
        this.classList.add('_active');

    })
}

//Прокрутка миксера
var animData = {
    container: document.getElementById('lottie-three'),
    path: 'MixerAnimation.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "animScroll",
}, animScroll, tl;

animScroll = bodymovin.loadAnimation(animData)

animScroll.addEventListener('DOMLoaded', function () {
    tl = new TimelineMax({repeat: 0})
    tl.to({frame: 0}, 1, {
        frame: animScroll.totalFrames-1,
        onUpdate: function() {
            animScroll.goToAndStop(Math.round(this.target.frame), true)
        },
        Ease:Linear.easeNone
    })

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: ".mixer",
        offset: 500,
        duration: 5000 }).setTween(tl).setPin("#lottie-three").addTo(controller);

})

//Модальное окно
let modal = document.getElementsByClassName('main__button');

let wrapper = document.getElementsByClassName('wrapper');

for (let i = 0; i < collapse.length; i++) {
    // collapse[i].classList.remove('_active');
    modal[i].addEventListener('click', function () {
        this.classList.add('_rgba');

    })
}
