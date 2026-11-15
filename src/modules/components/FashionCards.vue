<!-- src/modules/home/components/FashionCards.vue -->
<template>
  <section ref="elementRef" class="fashion-cards-section py-5 bg-white border-0 m-0" aria-labelledby="services-heading">
    <div class="container py-4">
      
      <!-- Cabeçalho Centralizado: Título e Subtítulo -->
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8" :class="{ 'fade-in-up': isVisible }">
          <h2 id="services-heading" class="fw-normal text-uppercase tracking-widest fs-4 mb-3 text-dark">
            {{ sectionData?.sectionTitle }}
          </h2>
          <p class="text-muted fs-6 lh-base px-lg-4">
            {{ sectionData?.sectionSubtitle }}
          </p>
        </div>
      </div>

      <!-- Grelha de Cards (Desktop: 3 colunas / Mobile: Carrossel Touch com Setas) -->
      <div 
        class="cards-viewport position-relative overflow-hidden"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div class="row g-4 cards-slider-track" :style="sliderTransformStyle">
          
          <div 
            v-for="card in sectionData?.cards" 
            :key="card.id" 
            class="col-12 col-md-4 card-item-wrapper"
            :class="{ 'fade-in-up': isVisible }"
          >
            <div class="service-card d-flex flex-column h-100 bg-white border-0">
              
              <!-- Mídia Dinâmica (Vídeo ou Imagem) -->
              <div class="service-media-wrapper position-relative overflow-hidden mb-3">
                <video 
                  v-if="card.mediaType === 'video'"
                  :src="card.videoUrl"
                  class="w-100 h-100 object-fit-cover service-media"
                  autoplay
                  muted
                 controls
                  playsinline
                  :aria-label="card.alt"
                ></video>
                <img 
                  v-else
                  :src="card.mediaUrl" 
                  :alt="card.alt" 
                  class="w-100 h-100 object-fit-cover service-media"
                  loading="lazy"
                />
              </div>

              <!-- Conteúdo e Links com Acessibilidade -->
              <div class="service-content text-start pt-2 px-1">
                <h3 class="fw-semibold text-dark fs-6 text-uppercase mb-2" style="letter-spacing: 1px;">
                  {{ card.title }}
                </h3>
                <p class="text-muted small mb-3">
                  {{ card.description }}
                </p>

                <!-- Link com efeito de HR Hover Padrão -->
                <div class="link-container position-relative d-inline-block w-100">
                  <router-link 
                    :to="card.linkUrl" 
                    class="service-link text-dark text-uppercase text-decoration-none fw-semibold d-inline-block pb-1"
                    :aria-label="card.ariaLabel"
                  >
                    {{ card.linkText }}
                  </router-link>
                  <hr class="custom-hr m-0 bg-dark" />
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Setas de Navegação para Mobile -->
        <div class="d-flex d-md-none justify-content-center align-items-center gap-3 mt-4">
          <button @click="prevCard" class="carousel-nav-btn rounded-circle border d-flex align-items-center justify-content-center bg-white shadow-sm" aria-label="Anterior">
            <i class="bi bi-chevron-left text-dark"></i>
          </button>
          <div class="carousel-dots d-flex gap-2">
            <span 
              v-for="(card, idx) in sectionData?.cards" 
              :key="idx" 
              class="dot"
              :class="{ active: currentMobileIndex === idx }"
            ></span>
          </div>
          <button @click="nextCard" class="carousel-nav-btn rounded-circle border d-flex align-items-center justify-content-center bg-white shadow-sm" aria-label="Seguinte">
            <i class="bi bi-chevron-right text-dark"></i>
          </button>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useFashionCards } from '../composable/useFashionCards'

const { 
  sectionData, 
  isVisible, 
  elementRef, 
  currentMobileIndex, 
  nextCard, 
  prevCard, 
  handleTouchStart, 
  handleTouchEnd 
} = useFashionCards()

const sliderTransformStyle = computed(() => {
  if (window.innerWidth < 768) {
    return {
      transform: `translateX(-${currentMobileIndex.value * 100}%)`,
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexWrap: 'nowrap'
    }
  }
  return {}
})
</script>

<style scoped>
.fashion-cards-section {
  overflow: hidden;
  border-top: none !important;
  margin-top: 0 !important;
}

.col-12, .col-lg-8 {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.service-media-wrapper {
  height: 420px;
  background-color: #f1f1f1;
}

.service-media {
  object-position: center center;
  transition: transform 0.5s ease;
}

.service-card:hover .service-media {
  transform: scale(1.03);
}

.service-link {
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  transition: opacity 0.3s ease;
}

.service-link:hover {
  opacity: 0.6;
}

.custom-hr {
  height: 2px;
  border: none;
  opacity: 0;
  width: 100%;
  background-color: #000000;
  transform: scaleX(0);
  transform-origin: left;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .custom-hr {
  opacity: 1;
  transform: scaleX(1);
}

.carousel-nav-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-color: #ddd !important;
}

.carousel-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d1d1d1;
  transition: background-color 0.3s ease;
}

.carousel-dots .dot.active {
  background-color: #000000;
  width: 20px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .cards-slider-track {
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
  }
  .card-item-wrapper {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .service-media-wrapper {
    height: 380px;
  }
}
</style>