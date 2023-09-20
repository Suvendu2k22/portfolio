let menuIcon = document.querySelector("#menu-icon" );
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Fixed the typo "scrolly" to "scrollY"
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Use 'classList' instead of 'classlist'
            document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", top > 100); 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal( '.home-img, .services-container, .portfolio-box,.contact-form', { origin:'bottom'});
ScrollReveal().reveal('.services, .portfolio, .contact', { origin: 'top' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });