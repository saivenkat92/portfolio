let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
} 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset * height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id + ']').classList.add('active');
            })
        }
    })
    
    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


ScrollReveal({
   distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right' });

const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Developer','Web Designer', 'Curious Learner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})
