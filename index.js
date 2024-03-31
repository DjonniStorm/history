document.querySelector('a').addEventListener('click', (event) => event.preventDefault())
const $slides   = document.querySelectorAll('.js-slide')
let nowSlide    = 0
//а теперь двигаем блоки в таймлайне
const $timelineCentures = document.querySelectorAll('.century-content')
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
    $slides[nowSlide].style.opacity = '0'
    $slides[nowSlide].classList.remove('none')
    $timelineCentures[nowSlide].scrollIntoView({ block: "center", behavior: "smooth" })
    let counter = 1
    let interval1 = setInterval(() => {
        $slides[nowSlide].style.opacity = (0.2 * counter).toString()
        counter++
        if (counter >= 6) clearInterval(interval1)
    }, 100)
    if (nowSlide === 0 && !$btnLeft.classList.contains('none')) $btnLeft.classList.add('none')
    else if ($btnLeft.classList.contains('none') && nowSlide !== 0) $btnLeft.classList.remove('none')
    if (nowSlide === $slides.length - 1 && !$btnRight.classList.contains('none')) $btnRight.classList.add('none')
    else if ($btnRight.classList.contains('none') && nowSlide !== $slides.length - 1) $btnRight.classList.remove('none')
}