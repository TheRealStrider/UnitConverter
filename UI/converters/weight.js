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
        "kg": 1000.0,
        "g": 1.0,
        "mg": 0.001,
    }
    let imperialUnits = {
        "lbs": 16.0,
        "oz": 1.0,
    }

    let gramToImperial = {
        "lbs": (1.0 / 453.6),
        "oz": (1.0 / 28.35),
    }
    let ounceToMetric = {
        "kg": (1.0 / 35.274),
        "g": 28.35,
        "mg": 28350.0,
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
        let result = number * metricUnits[from] * gramToImperial[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }
    else if (from in imperialUnits && to in metricUnits) {
        let result = number * imperialUnits[from] * ounceToMetric[to]
        return document.getElementById('result').innerHTML = result.toFixed(3)
    }


}