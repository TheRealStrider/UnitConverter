window.addEventListener('DOMContentLoaded', () => setTimeout(showMenu, 500));

function showMenu() {
    let content = document.getElementById('content')
    content.style.opacity = '1'
}

function hideMenu() {
    let content = document.getElementById('content')
    content.style.opacity = '0'
}

function destination(element) {
    hideMenu()
    let location = './converters/' + element.id + '.html'
    setTimeout(function() {window.location.href = location}, 500)
}