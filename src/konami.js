import * as tsu from "./themeSwitcherUtils.js";

// just the "page" (<html> tag at top-level) element
const page = document.getElementById("page");

// useful variables to switch between coco theme and other themes
var is_coco = false;
var default_theme = page.getAttribute('color-scheme');

// reload "coco" images
const reloadImage = (image) => {
    const filetypes = ['svg', 'png', 'jpg', 'jpeg'];
    filetypes.forEach(ext => {
        if (image.src.includes('coco')) {
                image.src = image.src.replace('_coco.' + ext, '.' + ext);
        } else {
            image.src = image.src.replace('.' + ext, '_coco.' + ext);
        }
    });
}

// switch between EIRBWARE and EРБУEР
const reloadEirbwareText = () => {
    const eirb = document.getElementById("text-navbar-eirb");
    const ware = document.getElementById("text-navbar-ware");
    eirb.innerText = !is_coco ? "EIRB" : "EРБ";
    ware.innerText = !is_coco ? "WARE" : "УEР      "; // Because EIRBWARE is longer than EРБУEР so we need to pad
}

function activateCheats() {
  // the button theme toggle
  const button = document.getElementById('themeToggle');
  if(is_coco) { // if theme is already coco
      page.setAttribute('color-scheme', default_theme); // change to put the saved default user theme
      is_coco = false; // now theme is not coco
      tsu.reloadDarkItems(default_theme); // do not forget to reload dark items ! because if theme is light, it would visually break some things
      button.disabled = false;
  }
  else {
      default_theme = page.getAttribute('color-scheme'); // remember the theme the user has set
      page.setAttribute('color-scheme', 'coco'); // change theme to coco
      is_coco = true; // now theme is coco
      tsu.reloadDarkItems('dark'); // do not forget to reload dark items ! because if theme was light, it would visually break some things
      // disable the theme toggle button
      button.disabled = true;
  }

  const images = document.getElementsByClassName("toReloadCoco"); // get images (/!\ svg only !) that need a reload for coco theme
  [...images].forEach(reloadImage); // reload them all
  reloadEirbwareText(); // reload Eirbware text in NavBar
}

// Source - https://stackoverflow.com/a/31627191
// Posted by w.stoettinger, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-30, License - CC BY-SA 3.0
// Edited by Artémis

export function konamiSetup() {
    // a key map of allowed keys
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b',
        67: 'c'
    };

    // the 'official' Konami Code sequence
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    // var konamiCode = ['c'];

    // a variable to remember the 'position' the user has reached so far.
    var konamiCodePosition = 0;

    let process_konami = (e) => {
        // get the value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
        var requiredKey = konamiCode[konamiCodePosition];

        // compare the key with the required key
        if (key == requiredKey) {

            // move to the next key in the konami code sequence
            konamiCodePosition++;

            // if the last key is reached, activate cheats
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    }

    // add keydown event listener
    document.addEventListener('keydown', process_konami);
}
