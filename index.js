const $btnLeft  = document.querySelector('#left-div')
const $btnRight = document.querySelector('#right-div')
const $slides   = document.querySelectorAll('.js-slide')
let nowSlide = 0
function moveSlides(direction) {
    switch(direction) {
        case '+1':
            nowSlide++
            break
        case '-1':
            nowSlide--
            break
        default:
            break
    }
    if (nowSlide >= $slides.length) nowSlide = 0
    if (nowSlide < 0) nowSlide = $slides.length - 1
    for (let i = 0; i < $slides.length; i++) {
        $slides[i].classList.add('none')
    }
    $slides[nowSlide].classList.remove('none')
}
