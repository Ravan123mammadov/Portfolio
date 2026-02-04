
AOS.init();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + '  ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-click has been disabled.');
});
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Text copying has been disabled.');
});

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "Images/moon2.png.png";
    }else{
        icon.src = "Images/sun.png.png";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const heartCheckbox = document.querySelector(".checkbox");
    const svgOutline = document.querySelector(".svg-outline");
    const svgFilled = document.querySelector(".svg-filled");
    const svgCelebrate = document.querySelector(".svg-celebrate");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    heartCheckbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            svgOutline.style.display = "none";
            svgFilled.style.display = "block";
            svgCelebrate.style.display = "block";
        } else {
            svgOutline.style.display = "block";
            svgFilled.style.display = "none";
            svgCelebrate.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
            navbar.classList.remove("active");
        }
    });
});
