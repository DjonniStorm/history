const $reforms = document.querySelectorAll('.take')
const $reformsMenu = document.querySelectorAll('#menu li')
console.log($reformsMenu)
const $reformsUl = document.querySelector('#reforms')
$reformsUl.addEventListener('click', (event) => {
    $reforms.forEach((i) => {i.addEventListener('click', () => {
        i.classList.remove('js-hover')
    })})
    let i = event.target.id
    document.querySelector(`#${i}`).classList.add('js-hover')
})