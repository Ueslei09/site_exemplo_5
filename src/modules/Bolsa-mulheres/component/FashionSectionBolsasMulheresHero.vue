<!-- src/modules/bolsas-mulheres/components/FashionSectionBolsasMulheresHero.vue -->
<template>
  <section 
    ref="elementRef" 
    class="bolsas-hero-section position-relative w-100 overflow-hidden"
    aria-label="Destaque da Coleção de Bolsas Femininas"
  >
    <!-- Contentor de Imagem com Paralaxe Global -->
    <div class="media-container position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
      <img 
        :src="heroData.imageUrl" 
        :alt="heroData.imageAlt" 
        class="w-100 h-115 object-fit-cover parallax-img"
        :style="{ transform: `translateY(${offsetY}px) scale(1.05)` }"
        loading="eager"
      />
      <!-- Gradiente escuro suave na base para garantir leitura perfeita do texto -->
      <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <!-- Conteúdo Posicionado na Base (conforme o exemplo de referência) -->
    <div class="container-fluid h-100 d-flex flex-column justify-content-end position-relative z-2 pb-5 px-4 px-md-5">
      <div class="row" :class="{ 'fade-in-up': isVisible }">
        <div class="col-12 col-lg-8">
          
          <!-- Título Principal -->
          <h1 class="hero-title text-white fw-light text-uppercase m-0 mb-2">
            {{ heroData.title }}
          </h1>

          <!-- Subtítulo Descritivo -->
          <p class="hero-subtitle text-white m-0">
            {{ heroData.subtitle }}
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBolsasMulheresHero } from '../composable/useBolsasMulheresHero'
import { useParallax } from '@/shared/composable/useParallax'

const { heroData } = useBolsasMulheresHero()
const { elementRef, isVisible, offsetY } = useParallax(0.06)
</script>

<style scoped>
.bolsas-hero-section {
  height: 100vh;
  min-height: 600px;
  background-color: #0b131f;
}

/* Imagem ligeiramente maior para o efeito de paralaxe sem margens */
.parallax-img {
  height: 115% !important;
  will-change: transform;
  transition: transform 0.1s ease-out;
  object-position: center center;
}

/* Gradiente de contraste inferior */
.hero-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
  pointer-events: none;
}

/* Animação inicial de revelação */
.row {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.row.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-family: Georgia, serif;
  font-size: 1.6rem;
  letter-spacing: 3px;
}

.hero-subtitle {
  font-size: 0.85rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  max-width: 850px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .bolsas-hero-section {
    height: 75vh;
    min-height: 480px;
  }
  .hero-title {
    font-size: 1.3rem;
  }
  .hero-subtitle {
    font-size: 0.75rem;
  }
}
</style>