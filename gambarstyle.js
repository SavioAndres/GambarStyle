// Navbar
document.querySelector('.navbar-toggler').onclick = function() {
    let navbar = document.querySelector('.navbar');
    if (navbar.className === "navbar") {
        navbar.className += " nav-responsive";
    } else {
        navbar.className = "navbar";
    }
}