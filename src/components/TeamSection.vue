<script setup>
import GradientTitle from './GradientTitle.vue';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// add the new team at the beginning of this array
const teams = [
  { year: '2026-2027', url: 'team_2026-2027.jpg', addClass: 'toReloadCoco' },
  { year: '2025-2026', url: 'team_2025-2026.jpg' },
  { year: '2023-2024', url: 'team_2023-2024.jpg' },
].sort(() => 1); // sort from oldest to newest

const current_team = teams.at(-1); // make sure that the current team is the first in previous teams array.

// compute which class should be added for an image considering
const classForImg = (team) => {
    return `${team.addClass} mx-4 h-20 rounded-full lg:h-28`;
}

const [lw1, lw2] = [ref(null), ref(null)];

const imageUrl = (url) => new URL(`../assets/teams/${url}`, import.meta.url).href;

// setup the sliding banner
onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.fromTo([lw1.value, lw2.value], { x: 0 }, { x: '-100%', duration: 30, ease: 'linear' });
});
</script>

<template>
  <section class="m-auto w-11/12 min-w-[300px] max-w-screen-xl">
    <GradientTitle text="L'" coloredText="équipe" />
    <!-- here we do not use the classForImg function as we want a full size image for the current team -->
    <img :src="imageUrl(current_team.url)" alt="L’équipe" :class='current_team.addClass'/>
    <br />
    <!-- here starts the banner with every team since 2023-2024 -->
  <div class="flex h-67 w-full flex-row overflow-hidden lg:h-67">
    <div ref="lw1" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <!-- target="_blank" opens the link in new tab -->
      <a v-for="t in teams" :href="imageUrl(t.url)" target="_blank">
        <img :src="imageUrl(t.url)" :alt="'Équipe ' + t.year" :class="classForImg(t)" />
        <center>Équipe {{t.year}}</center>
      </a>
    </div>
    <div ref="lw2" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <!-- target="_blank" opens the link in new tab -->
      <a v-for="t in teams" :href="imageUrl(t.url)" target="_blank">
        <img :src="imageUrl(t.url)" :alt="'Équipe ' + t.year" :class="classForImg(t)" />
        <center>Équipe {{t.year}}</center>
      </a>
    </div>
  </div>
  </section>
</template>
