const $reforms = document.querySelectorAll('.take')
const $reformsMenu = document.querySelectorAll('#menu li')
console.log($reformsMenu)
console.log($reforms)
const $reformsUl = document.querySelector('#reforms')
//article с текстом реформ
const $reformsArticle = document.querySelectorAll('#content article')


$reformsUl.addEventListener('click', (event) => {
    let i = event.target.id
    for (let j = 0; j < $reforms.length; j++) {
        $reforms[j].classList.remove('js-hover')
    }
    document.querySelector(`#${i}`).classList.add('js-hover')
    switch (i) {
        case 'allreforms' :
            $reformsArticle.forEach((element) => element.classList.remove('js-opacity-effects'))
            break
        case 'pravo':
            removeEffectsArticles()
            addEffectsArticles('legalReforms')
            break
        case 'social':
            removeEffectsArticles()
            addEffectsArticles('socialReforms')
            break
        case 'politics':
            removeEffectsArticles()
            addEffectsArticles('politicalReforms')
            break
        case 'millitary':
            removeEffectsArticles()
            addEffectsArticles('millitaryReforms')
            break
        case 'economics':
            removeEffectsArticles()
            addEffectsArticles('economicsReforms')
            break
        case 'education':
            removeEffectsArticles()
            addEffectsArticles('educationAndCultureReforms')
            break
        case 'agricultural':
            removeEffectsArticles()
            addEffectsArticles('agriculturalReforms')
            break
        default: break
    }
})

function removeEffectsArticles() {
    $reformsArticle.forEach(element => element.classList.add('js-opacity-effects'))
}

function addEffectsArticles(effectsClass) {
    const elements = document.querySelectorAll(`.${effectsClass}`)
    elements.forEach(element => element.classList.remove('js-opacity-effects'))
}