<!-- src/modules/home/components/FashionBanner1.vue -->
<template>
  <section class="fashion-banner-section position-relative w-100 overflow-hidden" v-if="bannerData" aria-labelledby="banner-heading">
    <div class="container-fluid px-0">
      <div class="banner-wrapper position-relative w-100 d-flex align-items-end justify-content-center pb-5">
        
        <!-- Fundo de Mídia Dinâmico (Vídeo ou Imagem) -->
        <div class="media-container position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <video 
            v-if="bannerData.mediaType === 'video'"
            :src="bannerData.videoUrl"
            class="w-100 h-100 object-fit-cover"
            autoplay
            muted
            loop
            playsinline
            aria-hidden="true"
          ></video>
          <img 
            v-else
            :src="bannerData.mediaUrl" 
            :alt="bannerData.alt" 
            class="w-100 h-100 object-fit-cover banner-img"
            loading="lazy"
          />
          <!-- Overlay escuro suave para garantir legibilidade perfeita do texto -->
          <div class="banner-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        <!-- Conteúdo Centralizado na Base (Título acima do Botão) -->
        <div class="banner-content position-relative z-2 text-center text-white px-3 pb-4">
          <h2 id="banner-heading" class="banner-title text-uppercase fw-normal mb-3">
            {{ bannerData.title }}
          </h2>
          <router-link 
            :to="bannerData.buttonUrl" 
            class="btn banner-btn text-uppercase text-white text-decoration-none d-inline-block px-4 py-2"
            role="button"
          >
            {{ bannerData.buttonText }}
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useFashionBanner1 } from '../composable/useFashionBanner1'

const { bannerData } = useFashionBanner1()
</script>

<style scoped>
.fashion-banner-section {
  background-color: #0b2545;
}

.banner-wrapper {
  height: 85vh; /* Altura imersiva estilo campanha de moda */
  min-height: 500px;
}

.banner-img {
  object-position: center center;
}

/* Overlay escuro subtil na parte inferior para contraste */
.banner-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%);
  pointer-events: none;
}

.banner-title {
  font-family: Georgia, serif;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Botão Padrão Elegante com Borda e Hover */
.banner-btn {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
}

.banner-btn:hover {
  background-color: #ffffff;
  color: #000000 !important;
  border-color: #ffffff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .banner-wrapper {
    height: 60vh;
  }
  .banner-title {
    font-size: 1.2rem;
  }
}
</style>