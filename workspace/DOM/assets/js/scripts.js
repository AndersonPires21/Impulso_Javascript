let botao = document.getElementById("mode-selector")
let corpo = document.getElementsByTagName("body")
let footer = document.getElementsByTagName("footer")
let titulo = document.getElementById("page-title")

botao.addEventListener("click",funcToggleMode)


function funcToggleMode () {
    botao.classList.toggle("dark-mode")
    corpo[0].classList.toggle("dark-mode")
    footer[0].classList.toggle("dark-mode")
   
    if (botao.classList.contains("dark-mode")) {
        titulo.innerHTML = "Dark Mode ON"
        botao.innerHTML = "Light Mode"
    } else {
        titulo.innerHTML = "Light Mode ON"
        botao.innerHTML = "Dark Mode"
    }
}


