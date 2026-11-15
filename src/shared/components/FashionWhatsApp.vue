<!-- src/shared/components/FashionWhatsApp.vue -->
<template>
  <div v-if="config" class="whatsapp-float-container">
    <button 
      @click="openWhatsApp"
      class="whatsapp-btn d-flex align-items-center justify-content-center border-0 shadow-lg"
      :aria-label="config.ariaLabel"
    >
      <i :class="[config.iconClass, 'fs-4 text-white']"></i>
    </button>
  </div>
</template>

<script setup>
import { useWhatsApp } from '../composable/useWhatsApp'

const { config, openWhatsApp } = useWhatsApp()
</script>

<style scoped>
.whatsapp-float-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1080; /* Fica acima da navbar e de qualquer secção */
}

.whatsapp-btn {
  width: 55px;
  height: 55px;
  background-color: #000000; /* Fundo preto elegante conforme referência */
  border-radius: 4px; /* Formato de retângulo arredondado/quadrado idêntico ao print */
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;
}

.whatsapp-btn:hover {
  transform: translateY(-4px) scale(1.05);
  background-color: #1a1a1a;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) !important;
}

@media (max-width: 768px) {
  .whatsapp-float-container {
    bottom: 20px;
    right: 20px;
  }
  .whatsapp-btn {
    width: 50px;
    height: 50px;
  }
}
</style>