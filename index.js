const $slides   = document.querySelectorAll('.js-slide')
let nowSlide    = 0
//а теперь двигаем блоки в таймлайне
const $timelineCentures = document.querySelectorAll('.century-content')
let lastUpdate
let lastUpdateMins
window.onload = () => {
    try {
        lastUpdate = localStorage.getItem('lastUpdate')
        lastUpdateMins = localStorage.getItem('lastUpdateMins')
        let date = new Date()
        if (Math.abs(parseInt(lastUpdate) * 60 + parseInt(lastUpdateMins) - date.getHours() * 60 + date.getMinutes()) < 60) {
            nowSlide = localStorage.getItem('slideNum')
            slider()
        }
    } catch(e) {}
}
function direction(direction) {
    switch(direction) {
        case '+1':
            nowSlide++
            if (nowSlide >= $slides.length) {
                nowSlide = $slides.length - 1
            }
            localStorage.setItem('slideNum', nowSlide)
            localStorage.setItem('lastUpdate', new Date().getHours())
            localStorage.setItem('lastUpdateMins', new Date().getMinutes())
            console.log(typeof(lastUpdate))
            slider()
            break
            case '-1':
            nowSlide--
            if (nowSlide < 0) {
                nowSlide = 0
            }
            localStorage.setItem('slideNum', nowSlide)
            localStorage.setItem('lastUpdate', new Date().getHours())
            localStorage.setItem('lastUpdateMins', new Date().getMinutes())
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
    $btnLeft.classList.remove('none')
    $btnRight.classList.remove('none')
    if (nowSlide == 0) $btnLeft.classList.add('none')
    if (nowSlide == $slides.length - 1) $btnRight.classList.add('none')
}