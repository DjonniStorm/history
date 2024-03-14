let centArr = document.querySelectorAll('.century')
let timeline = document.querySelectorAll('.timeline-hover')
document.querySelector('.timeline').addEventListener('mouseover', function(event) {
    switch (event.target) {
        case centArr[0]:
            for (let i = 0; i < timeline.length; i++) {
                timeline[i].classList.add('none')
            }
            timeline[0].classList.remove('none')
            break
        case centArr[1]:
            for (let i = 0; i < timeline.length; i++) {
                timeline[i].classList.add('none')
            }
            timeline[1].classList.remove('none')
            break
        case centArr[2]:
            for (let i = 0; i < timeline.length; i++) {
                timeline[i].classList.add('none')
            }
            timeline[2].classList.remove('none')
            break

    }
})