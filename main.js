var navbar = document.querySelector("#navbar-main"); 
window.onscroll = function() {
    let navbar_brand = document.querySelector(".navbar-brand"); 
    let nav_link = document.querySelector(".nav-link"); 
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled")
        navbar_brand.classList.add("text-black")
    } else {
        navbar.classList.remove("navbar-scrolled")
    }
}