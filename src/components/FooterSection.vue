<script setup>
const getIcon = (name) => new URL(`../assets/icons/${name}`, import.meta.url).href;
const iconUrl = (url) => getIcon(url);

const links = [
  { name: 'Email', url: 'mailto:eirbware@enseirb-matmeca.fr', icon: 'mail.png' },
  { name: 'Telegram', url: 'https://t.me/eirbware', icon: 'telegram.png' },
  { name: 'Facebook', url: 'https://www.facebook.com/eirbware', icon: 'facebook.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/eirbware/', icon: 'linkedin.png' },
];
</script>

<template>
  <section class="border-t border-gray-300 bg-[#F3F2F2] mt-10">
    <div class="min-h-2/5 m-auto flex w-11/12 max-w-screen-xl flex-col items-center justify-around gap-5 p-6 lg:flex-row lg:p-10">
      <div class="flex w-64 flex-row justify-between">
        <a v-for="l in links" :href="l.url"><img :src="iconUrl(l.icon)" :alt="l.name" class="h-9" /></a>
      </div>
      <div class="text-center">
        <p class="font-poppins text-sm leading-6">
          <!-- <a href="" class="underline">Mentions légales</a>
          <br /> -->
          Placé sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> · Eirbware 2026
          <br />
          Réalisé par Luxel H · Mis à jour par Artémis et Noah
        </p>
      </div>
      <a href="https://enseirb-matmeca.bordeaux-inp.fr"><img src="../assets/logos/logo_em.svg" alt="ENSEIRB-MATMECA" class="w-64" /></a>
    </div>
  </section>
</template>
