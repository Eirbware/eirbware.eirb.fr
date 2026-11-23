const page = document.getElementById('page');

// Check if the device is in dark mode
function userWantsDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export function setUserTheme() {
    if(userWantsDarkMode()){
        changeTheme();
        const button = document.getElementById('themeToggle');
        button.checked = true;
    }
}

const reloadItem = (mode) => (item) => {
    if(item.tagName.toLowerCase() == "img"){
        const image = item;
        if (mode == "dark") {
            image.src = image.src.replace('_light', '_dark');
        } else {
            image.src = image.src.replace('_dark', '_light');
        }
    }
}

export function reloadDarkItems(mode) {
  const items = document.getElementsByClassName("toReloadDark");
  [...items].forEach(reloadItem(mode));
}

export function changeTheme() {
    const current_theme = page.getAttribute('color-scheme');
    if(current_theme == "dark"){
        page.setAttribute('color-scheme', "light");
        reloadDarkItems("light");
    }
    if(current_theme == "light"){
        page.setAttribute('color-scheme', "dark");
        reloadDarkItems("dark");
    }
}
