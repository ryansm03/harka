
// Burger menu toggle
const burger = document.querySelector('i')
const navLinks = document.querySelector('.nav-links')
let burger_number = 1

burger.addEventListener('click', function(){
    burger_number ++
    if(burger_number === 2){
        burger.classList.remove('fa-bars')
        burger.classList.add('fa-x')
        navLinks.classList.add('active')
        burger_number = 0
    }else if(burger_number === 1){
        burger.classList.remove('fa-x')
        burger.classList.add('fa-bars')
        navLinks.classList.remove('active')
    }
})