<!-- src/modules/bolsas-mulheres/components/FashionBolsamulheresLinks.vue -->
<template>
  <nav class="fashion-subnav-section bg-white text-dark py-4 position-relative border-bottom border-light" aria-label="Subcategorias de Bolsas Femininas">
    <div class="container-fluid px-4 px-md-5">
      
      <!-- Contentor Flexível com suporte a scroll horizontal elegante no mobile -->
      <div class="subnav-scroll-container d-flex align-items-center gap-4 gap-lg-5 overflow-x-auto pb-2">
        
        <!-- Título Principal da Categoria em Destaque (Preto) -->
        <span class="category-main fw-bold text-uppercase text-dark tracking-widest flex-shrink-0">
          {{ linksData.categoryMain }}
        </span>

        <!-- Lista de Subcategorias com Efeito Hover de Alta Costura -->
        <div class="d-flex align-items-center gap-4 gap-lg-5">
          <router-link 
            v-for="item in linksData.links" 
            :key="item.id"
            :to="item.path"
            class="subnav-link text-decoration-none text-uppercase position-relative py-1 flex-shrink-0"
            @click="selectLink(item.id)"
          >
            {{ item.name }}
          </router-link>
        </div>

      </div>

    </div>
  </nav>
</template>

<script setup>
import { useBolsasMulheresLinks } from '../composable/useBolsasMulheresLinks'

const { linksData } = useBolsasMulheresLinks()
</script>

<style scoped>
.fashion-subnav-section {
  background-color: #ffffff !important;
  border-color: #eaeaea !important;
}

/* Ocultar barra de scroll padrão mantendo a funcionalidade tátil no mobile */
.subnav-scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.subnav-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.category-main {
  font-size: 0.85rem;
  letter-spacing: 2.5px;
  color: #000000 !important;
}

/* Estilização dos links para fundo claro (cinza escuro elegante que fica preto no hover) */
.subnav-link {
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: #666666 !important;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.subnav-link:hover,
.subnav-link.router-link-active {
  color: #000000 !important;
}

/* Linha inferior animada (HR Hover) em preto idêntica à referência */
.subnav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background-color: #000000;
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.subnav-link:hover::after,
.subnav-link.router-link-active::after {
  width: 100%;
}
</style>