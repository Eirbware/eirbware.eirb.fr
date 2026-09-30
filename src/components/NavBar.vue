<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MenuIcon from './MenuIcon.vue';

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
          <img src="../assets/logos/round_logo_eirbware.svg" alt="Logo Eirbware" class="h-12" />
        </button>
        <button @click="scrollToSection('top')">
            <!-- Technically, EIRB is yellow and WARE is black but it looks weird on the website -->
          <strong>EIRB<span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WARE</span></strong>
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
