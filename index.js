document.querySelector('a').addEventListener('click', (event) => event.preventDefault())
const $slides   = document.querySelectorAll('.js-slide')
let nowSlide    = 0
function direction(direction) {
    switch(direction) {
        case '+1':
            nowSlide++
            if (nowSlide >= $slides.length) {
                nowSlide = $slides.length - 1
            }
            slider()
            break
        case '-1':
            nowSlide--
            if (nowSlide < 0) {
                nowSlide = 0
            }
            slider()
            break
        default:
            break
    }
}
function slider() {
    const $btnLeft  = document.getElementById('left')
    const $btnRight = document.getElementById('right')
    for (let i = 0, length = $slides.length; i < length; i++) {
        $slides[i].classList.add('none')
    }
    $slides[nowSlide].classList.remove('none')
    if (nowSlide === 0 && !$btnLeft.classList.contains('none')) $btnLeft.classList.add('none')
    else if ($btnLeft.classList.contains('none') && nowSlide !== 0) $btnLeft.classList.remove('none')
    if (nowSlide === $slides.length - 1 && !$btnRight.classList.contains('none')) $btnRight.classList.add('none')
    else if ($btnRight.classList.contains('none') && nowSlide !== $slides.length - 1) $btnRight.classList.remove('none')
}