//select DOM items
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menubrand = document.querySelector('.menu-branding');
const navitems  = document.querySelectorAll('.nav-item');

// Set initial state of menu

let showmenu = false;

menubtn.addEventListener('click',togglemenu);

function togglemenu() {
    if(!showmenu)
    {
        menubtn.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menubrand.classList.add('show');
        
        navitems.forEach(item => item.classList.add('show'));
    }
    else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menubrand.classList.remove('show');
        
        navitems.forEach(item => item.classList.remove('show'));
    }
}