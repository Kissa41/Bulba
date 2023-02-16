const th = document.getElementById("switchMode");
const darkmode = localStorage.getItem('theme');
const theme = document.getElementById("theme");

if (darkmode) {
    theme.href = darkmode === 'dark' ? "../main-page/dark-mode-styles.css" : './styles/audio-style.css';
}

const changeTheme = () => { 
  let theme = document.getElementById("theme");
  const themeState = localStorage.getItem('theme');
  console.log(themeState);
  if (themeState === 'light') {
    theme.href = "../main-page/dark-mode-styles.css";
    localStorage.setItem('theme', 'dark');
  } else {
    theme.href = "./styles/audio-style.css";
    localStorage.setItem('theme', 'light');
  }
}

th.addEventListener('click', changeTheme);