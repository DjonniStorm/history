const $reforms = document.querySelectorAll('.take')
const $reformsMenu = document.querySelectorAll('#menu li')

const $reformsUl = document.querySelector('#reforms')
//article с текстом реформ
const $reformsArticle = document.querySelectorAll('#content article')


$reformsUl.addEventListener('click', (event) => {
    let targerId = event.target.id
    console.log(event.target, targerId)
    for (let j = 0; j < $reforms.length; j++) {
        $reforms[j].classList.remove('js-hover')
    }
    document.querySelector(`#${targerId}`).classList.add('js-hover')
    switch (targerId) {
        case 'allreforms' :
            $reformsArticle.forEach((element) => element.classList.remove('js-opacity-effects'))
            $reformsMenu.forEach(element => element.classList.remove('js-li-overline'))
            break
        case 'pravo':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('legalReforms')
            removeLiStyle($reformsMenu)
            liStyle('legalReforms')
            break
        case 'social':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('socialReforms')
            removeLiStyle($reformsMenu)
            liStyle('socialReforms')
            break
        case 'politics':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('politicalReforms')
            removeLiStyle($reformsMenu)
            liStyle('politicalReforms')
            break
        case 'millitary':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('millitaryReforms')
            removeLiStyle($reformsMenu)
            liStyle('millitaryReforms')
            break
        case 'economics':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('economicsReforms')
            removeLiStyle($reformsMenu)
            liStyle('economicsReforms')
            break
        case 'education':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('educationAndCultureReforms')
            removeLiStyle($reformsMenu)
            liStyle('educationAndCultureReforms')
            break
        case 'agricultural':
            addEffectsArticles($reformsArticle)
            removeEffectsArticles('agriculturalReforms')
            removeLiStyle($reformsMenu)
            liStyle('agriculturalReforms')
            break
        default: break
    }
})

function addEffectsArticles(addElem) {
    addElem.forEach(element => element.classList.add('js-opacity-effects'))
}

function removeEffectsArticles(category) {
    const elements = document.querySelectorAll(`#content article.${category}`)
    elements.forEach(element => element.classList.remove('js-opacity-effects'))
    console.log(elements)
}
function liStyle(category) {
    const elements = document.querySelectorAll(`#menu li.${category}`)
    elements.forEach(element => element.classList.remove('js-li-overline'))
}
function removeLiStyle(removeElem) {
    removeElem.forEach(element => element.classList.add('js-li-overline'))
}