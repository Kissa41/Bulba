const countryButton = document.getElementById('country-select')
const modal = document.getElementById('modal')
const phoneElement = document.getElementById('phone-code')
const inputPhoneElement = document.getElementById('phone')
const flagElement = document.getElementById('country-flag')

readTextFile('/assets/countries.json').then((res) => {
    const countries = JSON.parse(res)
    countries.forEach(country => {
        createCountry(country.number, country.name, country.flag)
    });
})

inputPhoneElement.addEventListener('input', (e) => {
    inputPhoneElement.value = e.target.value.slice(0, 12)
})

inputPhoneElement.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(inputPhoneElement.value))
    inputPhoneElement.value = '';
});

inputPhoneElement.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});

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
        phoneElement.innerText = code;
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

const th = document.getElementById("switchMode");
const darkmode = localStorage.getItem('theme');
const theme = document.getElementById("theme");

if (darkmode) {
    theme.href = darkmode === 'dark' ? "/styles/dark-mode-styles.css" : '/styles/light-mode-styles.css';
}

const changeTheme = () => { 
  let theme = document.getElementById("theme");
  const themeState = localStorage.getItem('theme');
  console.log(themeState);
  if (themeState === 'light') {
    theme.href = "/styles/dark-mode-styles.css";
    localStorage.setItem('theme', 'dark');
  } else {
    theme.href = "/styles/light-mode-styles.css";
    localStorage.setItem('theme', 'light');
  }
}

th.addEventListener('click', changeTheme);