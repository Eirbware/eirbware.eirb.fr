<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const logos = [
  { name: 'BAE', url: 'bae.png', link: 'https://bae.eirb.fr' },
  { name: 'BDA', url: 'bda.png', link: 'https://bda.eirb.fr' },
  { name: 'BDE', url: 'bde.png', link: 'https://bde.eirb.fr' },
  { name: 'BDS', url: 'bds.png', link: 'https://bds.eirb.fr' },
  { name: 'Essaim', url: 'essaim.png', link: 'https://essaim.eirb.fr' },
  // { name: 'EirSport', url: 'eirsport.png', link: 'https://eirsport.eirb.fr' }, // site très peu à jour
  // { name: "Gala Mos'fête", url: 'gala.png', link: 'https://gala.eirb.fr' }, // site inexistant
  { name: 'Le Bar', url: 'bar.png', link: 'https://bar.eirb.fr' },
  { name: 'Eirbot', url: 'eirbot.png', link: 'https://eirbot.eirb.fr' },
  // Eirlab, Eirspace, F6KQH et AEI sont indépendants sur leurs sites, on ne les héberge pas donc on ne les mets pas sur notre page
  // { name: "Bill'eirb", url: 'billeirb.png', link: 'https://bill.eirb.fr' }, // site inexistant
  // { name: "Cook'eirb", url: 'cookeirb.png', link: 'https://cook.eirb.fr' }, // site inexistant
  // { name: "CherieF'eirb", url: 'cheriefeirb.png', link: 'https://radio.eirb.fr' }, // club inactif
  // { name: 'EMK', url: 'emk.png', link: 'https://emk.eirb.fr' },
  { name: 'Game Creation Club', url: 'gcc.png', link: 'https://gcc.eirb.fr' }, // site très peu à jour
  { name: "Coutur'eirb", url: 'coutureirb.png', link: 'https://coutur.eirb.fr' },
  { name: "Apicult'eirb", url: 'apiculteirb.png', link: 'https://apicult.eirb.fr' }, // site plutôt à jour
  { name: 'Œno', url: 'oeno.png', link: 'https://oeno.eirb.fr' }, // site presque à jour
  { name: "Pix'eirb", url: 'pixeirb.png', link: 'https://pix.eirb.fr' },
  // { name: 'Club Théâtre', url: 'theatre.png', link: 'https://theatre.eirb.fr' }, // site très peu à jour
  { name: 'Unlock', url: 'unlock.png', link: 'https://unlock.eirb.fr' },
  { name: 'Zik', url: 'zik.png', link: 'https://zik.eirb.fr' }, // site totalement pété, je crois que c'est prévu de l'update
].sort(() => Math.random() - 0.5); // marrant de les mettre en ordre aléatoire, c'est une bonne idée

const [lw1, lw2] = [ref(null), ref(null)];

const getImageUrl = (name) => new URL(`../assets/logos/${name}`, import.meta.url).href;
const imageUrl = (url) => getImageUrl(url);

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.fromTo([lw1.value, lw2.value], { x: 0 }, { x: '-100%', duration: 30, ease: 'linear' });
});
</script>

<template>
  <div class="flex h-36 w-full flex-row overflow-hidden lg:h-48">
    <div ref="lw1" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <a v-for="l in logos" :href="l.link" target="_blank">
        <img :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-6 h-20 rounded-full lg:h-28" />
      </a>
    </div>
    <div ref="lw2" class="flex min-w-full shrink-0 flex-row items-center justify-around">
      <a v-for="l in logos" :href="l.link" target="_blank">
        <img :src="imageUrl(l.url)" :alt="'Logo ' + l.name" class="mx-6 h-20 rounded-full lg:h-28" />
      </a>
    </div>
  </div>
</template>
