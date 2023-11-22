const menu_open = document.querySelector(".mobile_icon")
const menu = document.querySelector(".mobile_navbar")
const menu_close = document.querySelector(".menu_close")
const navbar = document.querySelector(".navbar")
const container = document.querySelector(".container")

menu_open.addEventListener("click", () => {
    menu.style.display = 'block'
    navbar.style.display = 'none'
    container.classList.add('hide_in_menu')

});

menu_close.addEventListener("click", () => {
    menu.style.display = 'none'
    navbar.style.display = 'flex'
    container.classList.remove('hide_in_menu')

})

