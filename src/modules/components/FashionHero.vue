<!-- src/modules/fashion/components/FashionHero.vue -->
<template>
  <section 
    class="fashion-hero container-fluid p-0 position-relative overflow-hidden d-flex align-items-end justify-content-center"
    role="region"
    aria-label="Destaque da Coleção Fashion"
  >
    <!-- Mídia de Fundo (Imagem ou Vídeo) -->
    <div class="hero-media-container position-absolute top-0 start-0 w-100 h-100">
      <video 
        v-if="heroData.mediaType === 'video'"
        :src="heroData.videoUrl"
        class="w-100 h-100 object-fit-cover"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      ></video>
      <img 
        v-else
        :src="heroData.mediaUrl"
        alt="Modelo elegante vestindo peças exclusivas da nova coleção em um ambiente sofisticado com decoração natalina."
        class="w-100 h-100 object-fit-cover"
      />
      <!-- Overlay escuro para garantir contraste e legibilidade do texto -->
      <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <!-- Conteúdo Centralizado (Título e Botões na parte inferior) -->
    <div class="hero-content-wrapper container text-center position-relative z-2 pb-5 mb-4">
      <h2 class="hero-subtitle text-white fw-light tracking-wide mb-4">
        {{ heroData.subtitle }}
      </h2>

      <div class="d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap">
        <a 
          v-for="(btn, index) in heroData.buttons" 
          :key="index"
          :href="btn.url"
          class="btn fashion-cta-btn text-white fw-semibold rounded-0 text-uppercase px-4 py-3 shadow-sm"
          :aria-label="btn.ariaLabel"
        >
          {{ btn.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFashionHero } from '../composable/useFashionHero';

const { heroData } = useFashionHero();
</script>

<style scoped>
.fashion-hero {
  width: 100%;
  height: 100vh; /* 100% da altura da tela igual ao exemplo */
  min-height: 600px;
}

.hero-media-container {
  z-index: 1;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.25); /* Degradê suave para destaque dos textos */
  pointer-events: none;
}

.hero-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.tracking-wide {
  letter-spacing: 3px;
}

/* Estilo dos Botões minimalistas elegantes */
.fashion-cta-btn {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  min-width: 160px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.fashion-cta-btn:hover,
.fashion-cta-btn:focus {
  background-color: #ffffff;
  color: #000000 !important;
  border-color: #ffffff;
  transform: translateY(-2px);
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .fashion-hero {
    height: 90vh;
  }
  .fashion-cta-btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>