let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* ScrollReveal */

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
function topScroll(){
    const topScrollCont = document.getElementById('top-scroll-content')
    if (this.scrollY >= 470){
        topScrollCont.classList.add('top-scroll-up')
    }
    else{
        topScrollCont.classList.remove('top-scroll-up')
    }
}
window.addEventListener('scroll', topScroll)
const topScrollContClick = document.querySelector('.top-scroll-content')
topScrollContClick.addEventListener('click', function(){
    scrollBy(0,0)
})
