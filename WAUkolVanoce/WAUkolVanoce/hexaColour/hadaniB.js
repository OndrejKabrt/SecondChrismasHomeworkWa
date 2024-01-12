let infoParagraph = document.getElementById('info');
let hledanaBarva;

function generatorBarevVHEX() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetHry() {
    infoParagraph.textContent = '';
    zacatekHry();
}

function removeColorButtons() {
    let seznamBarev = document.getElementById('barvy');
    while (seznamBarev.firstChild) {
        seznamBarev.removeChild(seznamBarev.firstChild);
    }
}

function zacatekHry() {
    let hledanaBarvaDiv = document.getElementById('hledanaBarvaVypis');
    let hexCodeDiv = document.getElementById('hex-code');
    let seznamBarev = document.getElementById('barvy');
    infoParagraph = document.getElementById('info');
    let obtiznost = document.getElementById('pocetBarev').value;

    removeColorButtons();

    hledanaBarva = generatorBarevVHEX();
    hledanaBarvaDiv.style.backgroundColor = 'white';
    hexCodeDiv.textContent = hledanaBarva;

    let find = Math.floor(Math.random() * obtiznost);

    for (let i = 0; i < obtiznost; i++) {
        let randomColor = generatorBarevVHEX();
        let button = document.createElement('button');
        button.className = 'color-button';
        button.id = "button" + i;

        if (i === find) {
            button.style.backgroundColor = hledanaBarva;
        } else {
            button.style.backgroundColor = randomColor;
        }

        button.addEventListener('click', function () {
            zkontrolujTip(this);
        });

        seznamBarev.appendChild(button);
    }
}

function hexNaRgb(hex) {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function zkontrolujTip(button) {
    let targetColorRgb = hexNaRgb(hledanaBarva);
    if (button.style.backgroundColor === targetColorRgb) {
        infoParagraph.textContent = "Gratuluji, vyhrál jsi";
    } else {
        infoParagraph.textContent = "Špatně";
        button.style.display = "none";
    }
}

window.addEventListener('load', function () {
    zacatekHry();
});