const botaoAbrir = document.querySelector(".HeaderMobile > button")
const botaoFechar = document.querySelector(".HeaderMobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".HeaderMobile > nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fechareMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("openMenu")
}

function fechareMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("openMenu")
}

