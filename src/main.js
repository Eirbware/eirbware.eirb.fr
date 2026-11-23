import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as tsu from './themeSwitcherUtils.js';
import * as k from './konami.js';

createApp(App).mount('#app')
tsu.setUserTheme();
k.konamiSetup()
