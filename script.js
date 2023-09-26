const { links } = require("express/lib/response");

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeigth;
        let id = sec.getAttribute('id');

        if(top >= offset && top <= offset + heigth){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });

    let header = document.querySelector('header');

        header.classList.toogle('sticky', window.scrollY > 100); 

        menuIcon.classList.remove('#menu-icon');
        navbar.classList.remove('active');

};

 ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.pagina-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.pitch-content, .heading', {origin: 'top'});
