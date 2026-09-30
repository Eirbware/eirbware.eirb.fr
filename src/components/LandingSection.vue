<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import LandingButton from './LandingButton.vue';
import LogoBanner from './LogoBanner.vue';

const emit = defineEmits(['scroll-to-section']);
const bee = ref(null);
let tl;

const scrollToSection = (target) => {
  emit('scroll-to-section', target);
};

onMounted(() => {
  tl = gsap.timeline({ repeat: -1 });
  tl.to(bee.value, { duration: 2, x: 25, y: -2, rotate: 22, delay: 2, ease: 'power3.inOut' });
  tl.to(bee.value, { duration: 2, x: -70, y: -25, rotate: 5, delay: 2, ease: 'power3.inOut' });
  tl.to(bee.value, { duration: 2, x: -20, y: -40, rotate: 10, delay: 2, ease: 'power3.inOut' });
  tl.to(bee.value, { duration: 2, x: 0, y: 0, rotate: 18, delay: 2, ease: 'power3.inOut' });
});
</script>

<template>
  <section
    class="flex h-screen max-h-[900px] min-h-[750px] min-w-[350px] flex-col justify-end bg-background pt-20 font-poppins sm:max-h-[850px] lg:max-h-[1000px]"
  >
    <div
      class="min-h-2/5 mx-auto flex h-full w-11/12 max-w-screen-xl flex-col justify-end gap-y-[4%] pb-3 lg:justify-center lg:gap-y-[7%] lg:pb-20"
    >
      <div class="-mb-3 ml-[50%] sm:ml-[50%]">
        <img
          src="../assets/img/core_1.svg"
          class="top-[13%] h-14 sm:h-16 lg:absolute lg:right-[20%] lg:h-24 xl:right-[30%] xl:h-28 2xl:left-[calc(50%+200px)] 2tall:lg:top-[120px]"
        />
      </div>
      <div class="-mb-48 ml-[5%] sm:ml-[10%] lg:mb-0">
        <img
          src="../assets/img/core_2.svg"
          class="top-[30%] h-20 rotate-12 sm:h-28 lg:absolute lg:right-[5%] lg:h-40 xl:right-[10%] xl:h-44 2xl:left-[calc(50%+450px)] 2tall:lg:top-[290px]"
        />
      </div>
      <div class="-mb-3 ml-[50%] sm:ml-[55%]">
        <div
          class="top-[30%] flex h-72 flex-col items-start justify-end lg:absolute lg:right-[20%] lg:h-96 lg:w-72 xl:right-[30%] 2xl:left-[calc(50%+10px)] tall:lg:top-[35%] 2tall:lg:top-[400px]"
        >
          <img
            ref="bee"
            src="../assets/img/bee.svg"
            class="-mb-12 ml-16 h-24 rotate-18 sm:-mb-16 sm:ml-16 sm:h-32 lg:-mb-24 lg:ml-28 lg:h-44"
          />
          <img src="../assets/img/core_3.svg" class="h-36 -rotate-18 sm:h-44 lg:h-56 xl:h-64" />
        </div>
      </div>
      <h1
        class="xs:text-4xl xs:leading-relaxed max-w-96 sm:max-w-3xl text-3xl font-bold leading-relaxed lg:-mt-20 lg:text-5xl lg:leading-normal"
      >
        L’association
        <span class="whitespace-nowrap">
          d’
          <span class="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold text-transparent">
            informatique
          </span>
        </span>
        de l’ENSEIRB-MATMECA
      </h1>
      <p class="xs:text-xl w-10/12 pb-2 text-lg">Le numérique au service des étudiants et de l’associatif</p>
      <div class="xs:text-base flex flex-row flex-wrap gap-5 text-sm">
        <a @click="scrollToSection('services')">
          <LandingButton text="Nous découvrir" color="bg-primary" />
        </a>
        <a href="https://t.me/+lcdk0VLOER1mMWNk">
          <LandingButton @click="scrollToSection('footer')" text="Assistance" color="bg-secondary" />
        </a>
      </div>
    </div>
    <LogoBanner class="min-h-36" />
  </section>
</template>
