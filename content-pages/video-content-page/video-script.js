let switchMode = document.getElementById("switchMode");
const darkmode = localStorage.getItem('darkmode');
const theme = document.getElementById("theme");

if (darkmode !== undefined) {
    theme.href = darkmode ? "../main-page/dark-mode-styles.css" : 'video-style.css';
    switchMode.setAttribute('checked', darkmode);
}

switchMode.addEventListener('click', function () { 

    let theme = document.getElementById("theme");
    
    if (theme.getAttribute("href") == "video-style.css") {
        theme.href = "../main-page/dark-mode-styles.css";
        localStorage.setItem('darkmode', true);
    }else{
        theme.href = "video-style.css";
        localStorage.setItem('darkmode', false);
    }
})