function animateOnScroll () {
    const windowTop = window.scrollY + (window.innerHeight * 0.75)
    console.log(windowTop)
    const cards = document.querySelectorAll('[data-animation]')
    cards.forEach((cards) => {
    cards.offsetTop < windowTop ? cards.classList.add('animate') : cards.classList.remove('animate')
    })
}

window.addEventListener('scroll', () => {
    animateOnScroll()
})





function assincLinks (){
document.querySelectorAll('[dinamic-nav]').forEach(link => {
    const conteudo = document.getElementById('dinamicContainer')

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('dinamic-nav'))
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
    }
})
}

assincLinks()