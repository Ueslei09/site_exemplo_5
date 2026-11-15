

<template>
  <div id="app" class="min-vh-100 bg-white text-white">
    <!-- Navbar Global fixa no topo -->
    <GlobalNavbar />

    <!-- Visualização das Páginas via Router -->
    <router-view />

    <!-- Botão Flutuante Global do WhatsApp -->
    <FashionWhatsApp />
    <FashionCookieBanner />
  </div>
</template>

<script setup>
import GlobalNavbar from './shared/components/GlobalNavbar.vue'
import FashionWhatsApp from '@/shared/components/FashionWhatsApp.vue'
import FashionCookieBanner from '@/shared/components/FashionCookieBanner.vue'
</script>


<style scoped>

</style>
