// header scroll color change

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0); 
});


// Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   

   }

// remove Menu on Scroll 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}