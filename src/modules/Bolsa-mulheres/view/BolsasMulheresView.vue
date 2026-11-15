<!-- src/modules/bolsas-mulheres/views/BolsasMulheresView.vue -->
<template>
  <div class="bolsas-mulheres-page bg-black text-white m-0 p-0 overflow-hidden">
    <!-- Secção Hero de Bolsas Femininas -->
    <FashionSectionBolsasMulheresHero />
    <!-- Barra de Subcategorias com Links e HR Hover -->
    <FashionBolsamulheresLinks />

    <!-- Grelha de 4 Cards de Produtos com Carrossel Individual -->
    <FashionProdutosBolsamulheres />
  </div>
</template>

<script setup>
import FashionSectionBolsasMulheresHero from '../component/FashionSectionBolsasMulheresHero.vue'
import FashionBolsamulheresLinks from '../component/FashionBolsamulheresLinks.vue'
import FashionProdutosBolsamulheres from '../component/FashionProdutosBolsamulheres.vue'
</script>

<style scoped>
.bolsas-mulheres-page {
  background-color: #000000;
}
</style>