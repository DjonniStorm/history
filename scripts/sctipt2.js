const $refLi = document.querySelectorAll('#menu li')
const $refArticles = document.querySelectorAll('#content article')

function addListener() {
    for (let i = 0; i < $refLi.length; i++) {
        $refLi[i].addEventListener('click', () => {
            $refArticles[i].scrollIntoView({ block: "center", behavior: "smooth" })
        })
    }
}
addListener()