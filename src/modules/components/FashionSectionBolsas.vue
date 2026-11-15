<!-- src/modules/home/components/FashionSectionBolsas.vue -->
<template>
  <section ref="elementRef" class="fashion-bags-section py-5 bg-white" aria-labelledby="bags-heading">
    <div class="container-fluid px-0">
      <div class="row g-0">
        
        <!-- Loop para os Cards de Bolsas -->
        <div 
          v-for="card in bagsData?.cards" 
          :key="card.id" 
          class="col-12 col-md-6 p-2 p-lg-3"
          :class="{ 'fade-in-up': isVisible }"
        >
          <div class="bag-card position-relative d-flex flex-column h-100 bg-white shadow-sm overflow-hidden">
            
            <!-- Mídia Dinâmica (Suporta Vídeo ou Imagem centrada sem cortes) -->
            <div class="image-wrapper overflow-hidden position-relative d-flex align-items-center justify-content-center">
              
              <!-- Caso o mediaType seja vídeo -->
              <video 
                v-if="card.mediaType === 'video'"
                :src="card.videoUrl"
                class="card-img w-100 h-100 object-fit-contain parallax-img"
                :style="{ transform: `translateY(${offsetY}px) scale(1.03)` }"
                autoplay
                muted
                loop
                playsinline
                aria-hidden="true"
              ></video>

              <!-- Caso contrário, renderiza a imagem centrada -->
              <img 
                v-else
                :src="card.mediaUrl" 
                :alt="card.alt" 
                class="card-img w-100 h-100 object-fit-contain parallax-img"
                :style="{ transform: `translateY(${offsetY}px) scale(1.03)` }"
                loading="lazy"
              />

            </div>

            <!-- Rodapé do Card (Fundo Branco, Links Pretos e HR com Transição no Hover) -->
            <div class="card-footer-custom bg-white py-4 px-3 text-start">
              <router-link :to="card.linkUrl" class="bag-link text-dark text-uppercase text-decoration-none fw-semibold d-inline-block">
                {{ card.linkText }}
              </router-link>
              <hr class="custom-hr m-0 mt-2 bg-dark" />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useFashionSectionBolsa } from '../composable/useFashionSectionBolsa'
import { useParallax } from '@/shared/composable/useParallax'

const { bagsData } = useFashionSectionBolsa()
const { elementRef, isVisible, offsetY } = useParallax(0.08)
</script>

<style scoped>
.fashion-bags-section {
  overflow: hidden;
}

.col-12 {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.col-12.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.image-wrapper {
  height: 550px;
  background-color: #f8f9fa; /* Fundo neutro elegante ao redor se necessário */
}

/* Imagem e Vídeo perfeitamente centrados, sem cortes (contain) */
.card-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center center !important;
  will-change: transform;
  transition: transform 0.2s ease-out;
}

/* Zoom subtil no hover do card mantendo o alinhamento */
.bag-card:hover .card-img {
  transform: scale(1.05);
}

.bag-link {
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: #000000 !important;
  transition: opacity 0.3s ease;
}

.bag-link:hover {
  opacity: 0.6;
}

/* Divisória Preta: começa invisível e expande apenas quando o card recebe hover */
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

.bag-card:hover .custom-hr {
  opacity: 1;
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .image-wrapper {
    height: 400px;
  }
}
</style>