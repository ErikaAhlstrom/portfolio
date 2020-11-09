/* ======MENU SHOW OR HIDE=====*/

// whole menu bar + x icon
let navMenu = document.getElementById("nav-menu")
// hamburger icon
let toggleMenu = document.getElementById("nav-toggle")
// x icon
let closeMenu = document.getElementById("nav-close")

// show whole manu bar
toggleMenu.addEventListener("click", (e) => {
    navMenu.classList.add("show")
})      

// hide whole manu bar
closeMenu.addEventListener("click", (e) => {
    navMenu.classList.remove("show")
})   

/* ======REMOVE MENU=====*/
// link item
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/* ======SCROLL ACTIVE LINK=====*/
let sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.add("active")
        } else {
            document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.remove("active")

        }


    })
}
