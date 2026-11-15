<!-- src/shared/components/FashionCopyright.vue -->
<template>
  <section 
    ref="elementRef" 
    class="fashion-copyright-section bg-black text-white pt-5 position-relative overflow-hidden border-0 m-0"
    role="contentinfo"
    aria-label="Informações legais e rodapé da marca"
  >
    <div class="container py-4">
      
      <!-- Cabeçalho: Logotipos e Texto Legal -->
      <div class="row mb-5" :class="{ 'fade-in-up': isVisible }">
        <div class="col-12">
          
          <!-- Logos / Marcas Associadas -->
          <div class="footer-logos d-flex flex-wrap align-items-center gap-4 gap-md-5 mb-4">
            <router-link 
              v-for="logo in copyrightData.logos" 
              :key="logo.id" 
              :to="logo.url"
              class="brand-logo-link text-white text-decoration-none d-flex align-items-center"
              :aria-label="logo.alt"
            >
              <!-- Suporte a Imagem Real (ex: logoipsum-424.png) -->
              <img 
                v-if="logo.image" 
                :src="logo.image" 
                :alt="logo.alt" 
                class="brand-logo-img" 
              />
              
              <!-- Ícone de Texto Estilizado -->
              <span v-else-if="logo.type === 'icon'" class="brand-monogram fs-4 fw-bold font-serif">{{ logo.text }}</span>
              
              <!-- Texto Comum / Subtítulo -->
              <div v-else class="d-flex flex-column">
                <span class="brand-title text-uppercase tracking-widest fw-semibold" style="font-size: 0.75rem; letter-spacing: 2px;">{{ logo.text }}</span>
                <span v-if="logo.subtitle" class="brand-subtitle text-muted" style="font-size: 0.5rem; letter-spacing: 1px;">{{ logo.subtitle }}</span>
              </div>
            </router-link>
          </div>

          <!-- Texto de Copyright / Informações Legais -->
          <p class="copyright-text m-0" style="font-size: 0.75rem; letter-spacing: 0.5px; line-height: 1.6;">
            {{ copyrightData.copyrightText }}
          </p>

        </div>
      </div>

    </div>

    <!-- Imagem ou Vídeo Final em 100% de Largura com Paralaxe -->
    <div class="bottom-media-wrapper container-fluid px-0 position-relative overflow-hidden">
      <video 
        v-if="copyrightData.mediaType === 'video'"
        :src="copyrightData.videoUrl"
        class="w-100 h-115 object-fit-cover parallax-img"
        :style="{ transform: `translateY(${offsetY}px) scale(1.05)` }"
        autoplay
        muted
        loop
        playsinline
        :aria-label="copyrightData.mediaAlt"
      ></video>
      <img 
        v-else
        :src="copyrightData.mediaUrl" 
        :alt="copyrightData.mediaAlt" 
        class="w-100 h-115 object-fit-cover parallax-img"
        :style="{ transform: `translateY(${offsetY}px) scale(1.05)` }"
        loading="lazy"
      />
    </div>

  </section>
</template>

<script setup>
import { useCopyright } from '@/shared/composable/useCopyright'
import { useParallax } from '@/shared/composable/useParallax'

const { copyrightData } = useCopyright()
const { elementRef, isVisible, offsetY } = useParallax(0.06)
</script>

<style scoped>
.fashion-copyright-section {
  background-color: #000000 !important;
  border-top: none !important;
}

.row {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.row.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.brand-logo-link {
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.brand-logo-link:hover {
  opacity: 1;
}

/* Estilização para o logotipo em formato de imagem */
.brand-logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.brand-monogram {
  font-family: Georgia, serif;
  letter-spacing: 2px;
}

.bottom-media-wrapper {
  height: 60vh;
  min-height: 400px;
  max-height: 700px;
}

.parallax-img {
  height: 115% !important;
  will-change: transform;
  transition: transform 0.1s ease-out;
  object-position: center center;
}

.copyright-text {
  color: #f7f5f5 !important;
}

/* ==========================================
   AJUSTE EXCLUSIVO MOBILE PARA O COPYRIGHT
   ========================================== */
@media (max-width: 768px) {
  .bottom-media-wrapper {
    height: 35vh;
    min-height: 220px;
  }
  
  /* Se no telemóvel a imagem do rodapé estiver a cortar nas pontas, 
     mudamos para contain apenas no mobile sem mexer no desktop */
  .parallax-img {
    object-fit: contain !important;
    height: 100% !important;
  }
}
</style>