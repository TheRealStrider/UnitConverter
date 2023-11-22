window.addEventListener('DOMContentLoaded', () => setTimeout(showMenu, 500));

function showMenu() {
    let content = document.getElementById('content')
    content.style.opacity = '1'
}

function hideMenu() {
    let content = document.getElementById('content')
    content.style.opacity = '0'
}

function backToStart() {
    hideMenu()
    setTimeout(function () { window.location.href = '../index.html' }, 500)
}

function calculation() {

    let number = Number(document.getElementById('number').value)
    let from = document.querySelector("#convert_from").value
    let to = document.querySelector("#convert_to").value

    // Getting the result
    if (from == to) {
        return document.getElementById('result').innerHTML = number;
    }
    else if (from == 'k') {
        if (to == 'c') {
            let result = number - 273.15
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
        else if (to == 'f') {
            let result = number * 9 / 5 - 459.67
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
    }
    else if (from == 'c') {
        if (to == 'k') {
            let result = number + 273.15
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
        else if (to == 'f') {
            let result = number * 9 / 5 + 32
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
    }
    else if (from == 'f') {
        if (to == 'k') {
            let result = (number - 32) * 5 / 9 + 273.15
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
        else if (to == 'c') {
            let result = (number - 32) * 5 / 9
            return document.getElementById('result').innerHTML = result.toFixed(3);
        }
    }


}