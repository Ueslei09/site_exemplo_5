

<template>
  <div id="app" class="min-vh-100 bg-black text-white">
    <!-- Navbar Global fixa no topo -->
    <GlobalNavbar />

    <!-- Visualização das Páginas via Router -->
    <router-view />
  </div>
</template>

<script setup>
import GlobalNavbar from './shared/components/GlobalNavbar.vue'
</script>


<style scoped>

</style>
