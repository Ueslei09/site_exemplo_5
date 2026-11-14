<!-- src/modules/fashion/views/HomeView.vue -->
<template>
  <main class="home-view w-100 min-vh-100">
      <FashionHero />

   

  </main>
</template>

<script setup>
// Importação dos componentes modulares do domínio Fashion

import FashionHero from '../components/FashionHero.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
  background-color: #000000; /* Fundo padrão elegante para o projeto Fashion */
}
</style>