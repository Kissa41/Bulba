const countryButton = document.getElementById('country-select')
const modal = document.getElementById('modal')
const phoneElement = document.getElementById('phone-code')
const inputPhoneElement = document.getElementById('phone')
const flagElement = document.getElementById('country-flag')

readTextFile('../bulba-additions/countries.json').then((res) => {
    const countries = JSON.parse(res)
    countries.forEach(country => {
        createCountry(country.number, country.name, country.flag)
    });
})

inputPhoneElement.addEventListener('input', (e) => {
    inputPhoneElement.value = e.target.value.slice(0, 12)
})

countryButton.addEventListener('click', (e) => {
    modal.classList.toggle('country-select__modal-open')
})

function createCountry(code, name, flagURL) {
    const country = document.createElement('div')
    country.classList.add('country-select__modal-item')
    country.innerHTML = `
    <div class="country-select__modal-item__name">
        ${name}
    </div>
    <div class="country-select__modal-item__phone">
        <div class="country-select__modal-item__phone-number">${code}</div>
        <img src="${flagURL}">
    </div>
    `
    modal.appendChild(country)
    country.addEventListener('click', (e) => {
        modal.classList.toggle('country-select__modal-open')
        phoneElement.innerText = code
        flagElement.setAttribute('src', flagURL)
    })
}

function readTextFile(file)
{
    return new Promise((res, rej) => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    res(rawFile.responseText);
                }
            }
        }
        rawFile.send(null);
    })
}

let switchMode = document.getElementById("switchMode");
const darkmode = localStorage.getItem('darkmode');
const theme = document.getElementById("theme");

if (darkmode !== undefined) {
    theme.href = darkmode ? "dark-mode-styles.css" : 'light-mode-styles.css';
    switchMode.setAttribute('checked', darkmode);
}

switchMode.addEventListener('click', function () { 

    let theme = document.getElementById("theme");
    
    if (theme.getAttribute("href") == "light-mode-styles.css") {
        theme.href = "dark-mode-styles.css";
        localStorage.setItem('darkmode', true);
    }else{
        theme.href = "light-mode-styles.css";
        localStorage.setItem('darkmode', false);
    }
})








