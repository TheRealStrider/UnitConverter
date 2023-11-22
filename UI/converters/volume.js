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
    let metricUnits = {
        "cbm": 1.0,
        "l": 0.001,
        "ml": 0.000001,
    }
    let imperialUnits = {
        "gal": 1.0,
        "qt": 0.25,
        "pt": 0.125,
        "c": 0.0634013,
        "oz": (1.0 / 128.0),
    }

    let cumeterToImperial = {
        "gal": 264.172,
        "qt": 1056.69,
        "pt": 2113.38,
        "c": 4166.67,
        "oz": 33814.0,
    }
    let gallonToMetric = {
        "cbm": 0.00378541,
        "l": 3.78541,
        "ml": 3785.41,
    }

    let number = Number(document.getElementById('number').value)
    let from = document.querySelector("#convert_from").value
    let to = document.querySelector("#convert_to").value

    // Getting the result
    if (from in metricUnits && to in metricUnits) {
        let result = number * metricUnits[from] / metricUnits[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }
    else if (from in imperialUnits && to in imperialUnits) {
        let result = number * imperialUnits[from] / imperialUnits[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }
    else if (from in metricUnits && to in imperialUnits) {
        let result = number * metricUnits[from] * cumeterToImperial[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }
    else if (from in imperialUnits && to in metricUnits) {
        let result = number * imperialUnits[from] * gallonToMetric[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }
}