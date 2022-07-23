const header = document.querySelector('header')
const toggleMenu = document.querySelector('.menuToggle')
toggleMenu.addEventListener('click', () => {
    header.classList.contains('on') === false ? header.classList.add('on') : header.classList.remove('on')
    document.body.classList.contains('on') === false ? document.body.classList.add('on') : document.body.classList.remove('on')
})