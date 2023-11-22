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
    setTimeout(function() {window.location.href = '../index.html'}, 500)
}

function calculation() {
    let metricUnits = {
        "km": 1000.0,
        "m": 1.0,
        "cm": 0.01,
        "mm": 0.001,
    }
    let imperialUnits = {
        "mi": 63_360.0,
        "yd": 36.0,
        "ft": 12.0,
        "in": 1.0,
    }

    let meterToImperial = {
        "mi": 1609.344,
        "yd": 1.094,
        "ft": 3.281,
        "in": 39.37,
    }
    let inchToMetric = {
        "km": (1.0 / 39370.0),
        "m": (1.0 / 39.37),
        "cm": 2.54,
        "mm": 25.4,
    }

    let number = Number(document.getElementById('number').value)
    let from = document.querySelector("#convert_from").value
    let to = document.querySelector("#convert_to").value

    // Getting the result
    if (from in metricUnits && to in metricUnits) {
        let result = number * metricUnits[from] / metricUnits[to]
        return document.getElementById('result').innerHTML = result
    }
    else if (from in imperialUnits && to in imperialUnits) {
        let result = number * imperialUnits[from] / imperialUnits[to]
        return document.getElementById('result').innerHTML = result
    }
    else if (from in metricUnits && to in imperialUnits) {
        let result = number * metricUnits[from] * meterToImperial[to]
        return document.getElementById('result').innerHTML = result
    }
    else if (from in imperialUnits && to in metricUnits) {
        let result = number * imperialUnits[from] * inchToMetric[to]
        return document.getElementById('result').innerHTML = result
    }


}