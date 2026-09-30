<script setup>
import GradientTitle from './GradientTitle.vue';
import ServiceItem from './ServiceItem.vue';

const services = [
  {
    icon: 'build_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Assistances',
    text: 'Tout au long de l’année, nous accompagnons les étudiants dans l’installation, la prise en main et la maintenance de leur environnement de travail.',
  },
  {
    icon: 'dns_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Hébergement',
    text: 'Nous mettons à disposition nos serveurs aux différents clubs et associations et fournissons des conseils dans la création de services web.',
  },
  {
    icon: 'school_FILL0_wght400_GRAD0_opsz24.svg',
    title: 'Formations',
    text: 'Nous dispensons chaque année des formations portant sur différents outils et languages comme Git, VSCode, ou gdb et valgrind.',
  },
];
</script>

<template>
  <section class="m-auto w-11/12 min-w-[300px] md:max-w-[44rem] xl:md:max-w-[67rem] 2xl:max-w-[80rem]">
    <GradientTitle text="Nos" coloredText="services" />
    <div class="flex flex-wrap justify-center gap-8 font-poppins md:justify-between 2xl:gap-14">
      <ServiceItem v-for="s in services" :icon="s.icon" :title="s.title" :text="s.text" />
      <img src="../assets/img/bee.svg" alt="Abeille" class="m-auto hidden h-44 -rotate-12 pl-5 xl:block" />
      <div
        class="flex h-[28rem] max-w-[24rem] flex-col items-center gap-9 overflow-hidden rounded-3xl bg-accent bg-opacity-20 px-10 py-14 md:w-[21rem] xl:h-auto xl:w-[50rem] xl:max-w-max xl:items-start 2xl:w-[60rem]"
      >
        <h3 class="text-3xl font-medium xl:text-4xl">
          Le portail
          <a href="https://eirb.fr" class="bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold italic text-transparent">
            eirb.fr
          </a>
        </h3>
        <p>
          À travers la page
          <a href="https://eirb.fr" class="italic">eirb.fr</a>, nous proposons un accès rapide à l’ensemble des ressources utilisées par les élèves au quotidien :
          ENT, syllabus, emploi du temps, Moodle, sites des clubs et assos ...
        </p>
        <img src="../assets/img/bee.svg" alt="Abeille" class="h-48 rotate-6 xl:hidden" />
      </div>
    </div>
  </section>
</template>
