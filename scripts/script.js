const $reforms = document.querySelectorAll('.take')
const $reformsMenu = document.querySelectorAll('#menu li')
console.log($reformsMenu)
console.log($reforms)
const $reformsUl = document.querySelector('#reforms')
$reformsUl.addEventListener('click', (event) => {
    let i = event.target.id
    for (let j = 0; j < $reforms.length; j++) {
        $reforms[j].classList.remove('js-hover')
    }
    document.querySelector(`#${i}`).classList.add('js-hover')
    switch (i) {
        case 'allreforms' :
            $reformsMenu
            break
        case 'pravo':
            break
        case 'social':
            break
        case 'politics':
            break
        case 'millitary':
            break
        case 'economics':
            break
        case 'education':
            break
        case 'agrar':
            break
        default: break
    }
})