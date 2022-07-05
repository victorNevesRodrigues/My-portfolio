console.log('deu bom')
document.querySelectorAll('[dinamic-nav]').forEach(link => {
    const conteudo = document.getElementById('dinamicContent')

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('dinamic-nav'))
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
    }
})