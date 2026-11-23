<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MenuIcon from './MenuIcon.vue';
import * as tsu from '../themeSwitcherUtils.js';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: 'Nos services', dest: 'services' },
  { name: "L’équipe", dest: 'team' },
  { name: 'À propos', dest: 'about' },
];

const menuIcon = ref();
const navbar = ref();
const mobileNav = ref();
const isMobileNavOpen = ref(false);

const emit = defineEmits(['scroll-to-section']);

const scrollToSection = (target) => {
  if (isMobileNavOpen.value) toggleMobileNav();
  emit('scroll-to-section', target);
};

const toggleMobileNav = () => {
  menuIcon.value.toggleAnimation();
  isMobileNavOpen.value = !isMobileNavOpen.value;
  if (isMobileNavOpen.value) {
    gsap.to(mobileNav.value, { duration: 0.5, marginTop: 0, ease: 'easeInOut' });
    document.documentElement.style.overflowY = 'hidden';
  } else {
    gsap.to(mobileNav.value, { duration: 0.5, marginTop: '-100vh', ease: 'easeInOut' });
    document.documentElement.style.overflowY = 'auto';
  }
};

const checkWindowSize = () => {
  if (window.innerWidth < 768 && isMobileNavOpen.value) document.documentElement.style.overflowY = 'hidden';
  else document.documentElement.style.overflowY = 'auto';
};

window.addEventListener('resize', checkWindowSize);

let lastScrollTop = 0;

onMounted(() => {
  window.addEventListener(
    'scroll',
    function () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) gsap.to(navbar.value, { duration: 0.5, top: 0, ease: 'easeInOut' });
      else gsap.to(navbar.value, { duration: 0.5, top: -navbar.value.clientHeight, ease: 'easeInOut' });
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});
</script>

<template>
  <div ref="navbar" class="fixed z-20 w-screen border-b border-gray-300 bg-background py-3">
    <nav class="mx-auto flex w-11/12 max-w-screen-xl flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <button @click="scrollToSection('top')">
          <img src="../assets/logos/round_logo_eirbware.svg" alt="Logo Eirbware" class="toReloadCoco h-12" />
        </button>
        <button @click="scrollToSection('top')">
            <!-- Technically, EIRB is yellow and WARE is black but it looks weird on the website -->
          <strong><span id="text-navbar-eirb" class="bg-eirbcolor bg-clip-text text-transparent">EIRB</span><span id="text-navbar-ware" class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WARE</span></strong>
        </button>
        <ul class="hidden flex-row md:flex">
          <li v-for="l in links" class="pl-12 text-xl duration-200 hover:opacity-80 lg:pl-20">
            <button @click="scrollToSection(l.dest)">{{ l.name }}</button>
          </li>
        </ul>
      </div>
      <a href="https://eirb.fr">
        <ul class="hidden rounded-full bg-primary px-4 py-1 text-base font-medium md:block">
          <li class="duration-200 hover:opacity-80">eirb.fr</li>
        </ul>
      </a>
      <div @click="toggleMobileNav" class="md:hidden">
        <MenuIcon ref="menuIcon" />
      </div>
        <!-- From Uiverse.io by andrew-demchenk0 --> 
        <label class="switch">
          <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
          <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
          <input id=themeToggle @click="tsu.changeTheme()" type="checkbox" class="input">
          <span class="slider"></span>
        </label>
    </nav>
  </div>
  <div ref="mobileNav" class="fixed z-10 -mt-[100vh] flex h-screen w-screen flex-col bg-background pt-16 md:hidden">
    <ul class="my-auto flex h-4/5 flex-col items-center justify-around">
      <li v-for="l in links" class="text-2xl duration-200 hover:opacity-80">
        <button @click="scrollToSection(l.dest)">{{ l.name }}</button>
      </li>
      <a href="https://eirb.fr">
        <ul class="block rounded-full bg-primary px-4 py-1 text-xl font-medium">
          <li class="duration-200 hover:opacity-80">eirb.fr</li>
        </ul>
      </a>
    </ul>
  </div>
</template>
