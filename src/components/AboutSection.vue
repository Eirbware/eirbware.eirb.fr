<script setup>
import GradientTitle from './GradientTitle.vue';
</script>

<template>
  <section class="m-auto w-11/12 min-w-[300px] md:max-w-[44rem] xl:md:max-w-[67rem] 2xl:max-w-[80rem]">
    <GradientTitle text="À" coloredText="propos" />
    <div class="flex flex-wrap justify-center gap-8 font-poppins md:justify-between 2xl:gap-14">
      <div
        class="flex w-[100%] max-w-[24rem] flex-col items-center gap-9 rounded-3xl bg-secondary bg-opacity-20 px-10 py-14 md:w-[21rem] xl:max-w-none xl:basis-full"
      >
        <h3 class="text-3xl font-medium">Qui sommes-nous ?</h3>
        <p class="text-xl">
          <span class="font-raleway font-semibold">Eirbware</span>
          est une association loi de 1901 regroupant depuis 2009, des étudiants passionnés, tournés vers le partage et
          l’apprentissage.
        </p>
      </div>
      <div
        class="order-1 flex h-[28rem] w-[100%] max-w-[24rem] flex-col items-center gap-9 rounded-3xl bg-secondary bg-opacity-20 px-10 py-14 md:w-[21rem] xl:order-3 2xl:w-[23rem]"
      >
        <img src="/src/assets/icons/location_on_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="Icon" class="h-20" />
        <h3 class="text-3xl font-medium">Nous trouver</h3>
        <p class="text-center">
          Local P038
          <br />
          1, avenue du Docteur
          <br />
          Schweitzer
          <br />
          33400, Talence
        </p>
      </div>
      <div
        class="order-2 flex min-h-[28rem] w-[100%] max-w-[24rem] flex-col items-center gap-9 rounded-3xl bg-secondary bg-opacity-20 px-10 py-14 md:min-h-0 md:w-[21rem] md:max-w-none md:grow xl:h-[28rem] 2xl:w-[23rem]"
      >
        <h3 class="text-3xl font-medium">Nos engagements en matière de confidentialité des données</h3>
        <p>
          Nous nommons chaque année un délégué à la protection des données (DPO) chargé d’assurer le respect des
          obligations légales en matière de traitement des données.
        </p>
        <p>
          À tout moment, vous pouvez demander la suppression ou la modification de vos informations en nous envoyant un
          mail à <a href="mailto:eirbware@enseirb-matmeca.fr" class="hover:opacity-80 duration-200 underline">eirbware@enseirb-matmeca.fr</a>.
        </p>
      </div>
    </div>
  </section>
</template>
