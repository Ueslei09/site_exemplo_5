<!-- src/modules/fashion/views/HomeView.vue -->
<template>
  <main class="home-view w-100 min-vh-100">
      <FashionHero />
      
  <FashionSectionBolsas/>
  <FashionBanner1/>
  <FashionSectionSapatosCarteira/>
  <FashionCards/>


 </main>
</template>

<script setup>
// Importação dos componentes modulares do domínio Fashion

import FashionHero from '../components/FashionHero.vue'
import FashionSectionBolsas from '../components/FashionSectionBolsas.vue'
import FashionBanner1 from '../components/FashionBanner1.vue'
import FashionSectionSapatosCarteira from '../components/FashionSectionSapatosCarteira.vue';
import FashionCards from '../components/FashionCards.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
  background-color: #000000; /* Fundo padrão elegante para o projeto Fashion */
}
</style>