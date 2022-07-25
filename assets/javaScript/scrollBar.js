let progress = document.getElementById('scrollBar')
window.onscroll = function () {
    let totalHeight = document.body.scrollHeight - window.innerHeight
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = `${progressHeight}%`
}