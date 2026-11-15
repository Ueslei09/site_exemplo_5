<!-- src/modules/bolsas-mulheres/components/FashionProdutosBolsamulheres.vue -->
<template>
  <section 
    ref="elementRef"
    class="fashion-products-section bg-white text-dark py-5 position-relative"
    aria-label="Catálogo de Bolsas Femininas em Destaque"
  >
    <div class="container-fluid px-4 px-md-5">
      
      <!-- Grelha Row com 4 Cards (col-lg-3) -->
      <div class="row g-4" :class="{ 'fade-in-up': isVisible }">
        <div 
          v-for="(product, pIndex) in produtosData.produtos" 
          :key="product.id"
          class="col-12 col-md-6 col-lg-3"
        >
          <!-- Card do Produto -->
          <div class="product-card d-flex flex-column h-100 bg-white position-relative">
            
            <!-- Carrossel / Imagem de Capa do Produto -->
            <div 
              class="product-carousel-container position-relative w-100 overflow-hidden bg-light"
              @mouseenter="hoveredIndex = pIndex"
              @mouseleave="hoveredIndex = null"
            >
              
              <!-- Imagem de Capa -->
              <div class="cover-image-wrapper position-absolute top-0 start-0 w-100 h-100" :class="{ 'is-hidden': hoveredIndex === pIndex }">
                <img 
                  :src="product.capaUrl || product.slides[0].url" 
                  :alt="product.nome" 
                  class="w-100 h-100 cover-img"
                  loading="lazy"
                />
              </div>

              <!-- Carrossel de Slides -->
              <div class="slides-track h-100 w-100 position-absolute top-0 start-0" :class="{ 'is-visible': hoveredIndex === pIndex }">
                <template v-for="(slide, sIndex) in product.slides" :key="sIndex">
                  <div 
                    v-show="activeSlides[pIndex] === sIndex"
                    class="slide-item position-absolute top-0 start-0 w-100 h-100"
                  >
                    <img 
                      :src="slide.url" 
                      :alt="slide.alt" 
                      class="w-100 h-100 slide-img"
                    />
                  </div>
                </template>

                <!-- Botões de Navegação -->
                <button 
                  class="carousel-control-btn prev-btn position-absolute top-50 start-0 translate-middle-y border-0 bg-white text-dark rounded-circle d-flex align-items-center justify-content-center p-2 ms-2 shadow-sm"
                  @click.stop="prevSlide(pIndex, product.slides.length)"
                  aria-label="Imagem anterior"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                <button 
                  class="carousel-control-btn next-btn position-absolute top-50 end-0 translate-middle-y border-0 bg-white text-dark rounded-circle d-flex align-items-center justify-content-center p-2 me-2 shadow-sm"
                  @click.stop="nextSlide(pIndex, product.slides.length)"
                  aria-label="Próxima imagem"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

                <!-- Indicadores (Dots) -->
                <div class="carousel-indicators-custom position-absolute bottom-0 start-50 translate-middle-x d-flex gap-1 mb-3 z-2">
                  <button 
                    v-for="(slide, sIndex) in product.slides" 
                    :key="sIndex"
                    class="indicator-dot border-0 rounded-pill p-0"
                    :class="{ active: activeSlides[pIndex] === sIndex }"
                    @click.stop="setSlide(pIndex, sIndex)"
                    :aria-label="`Slide ${sIndex + 1}`"
                  ></button>
                </div>
              </div>

            </div>

            <!-- Informações do Produto -->
            <div class="product-info pt-3 pb-2 px-1 d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <h3 class="product-title text-uppercase fw-semibold m-0 mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">
                  {{ product.nome }}
                </h3>
                <p class="product-desc text-muted m-0 mb-2" style="font-size: 0.75rem; line-height: 1.4;">
                  {{ product.descricao }}
                </p>
              </div>

              <div class="d-flex align-items-center justify-content-between mt-auto pt-2">
                <span class="product-price fw-bold text-dark" style="font-size: 0.85rem; letter-spacing: 0.5px;">
                  {{ product.preco }}
                </span>

                <button 
                  class="btn-buy text-uppercase border border-dark bg-transparent text-dark px-3 py-1 transition-all"
                  style="font-size: 0.7rem; letter-spacing: 1px;"
                  @click="comprarProduto(product)"
                >
                  Comprar
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useBolsasProdutos } from '../composable/useBolsasProdutos'
import { useParallax } from '@/shared/composable/useParallax'

const { produtosData, activeSlides, nextSlide, prevSlide, setSlide } = useBolsasProdutos()
const { elementRef, isVisible } = useParallax(0.04)

const hoveredIndex = ref(null)

const comprarProduto = (product) => {
  alert(`Produto selecionado: ${product.nome}\n${product.preco}`)
}
</script>

<style scoped>
.fashion-products-section {
  background-color: #ffffff !important;
}

/* Moldura do carrossel (Desktop) */
.product-carousel-container {
  height: 480px;
  border-radius: 0 !important;
  overflow: hidden;
  background-color: #fcfcfc;
  position: relative;
}

/* 1. Imagem de Capa */
.cover-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center center !important;
}

.cover-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  transition: opacity 1.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 1.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  z-index: 2;
  will-change: opacity, transform;
}

.cover-image-wrapper.is-hidden {
  opacity: 0;
  transform: scale(1.02);
  visibility: hidden;
  pointer-events: none;
}

/* 2. Slides do Carrossel */
.slide-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center center !important;
}

.slides-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  z-index: 1;
  will-change: opacity;
  background-color: #ffffff;
}

.slides-track.is-visible {
  opacity: 1;
  visibility: visible;
  z-index: 3;
}

.slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s ease-in-out;
}

/* ==========================================
   AJUSTES EXCLUSIVOS PARA MOBILE
   ========================================== */
@media (max-width: 992px) {
  .product-carousel-container {
    height: 380px !important;
  }
  
  .cover-img,
  .slide-img {
    object-fit: contain !important; /* Mostra a bolsa por inteiro no mobile sem cortes */
    object-position: center -50px !important;
    padding: 10px;
    background-color: #ffffff;
    transform: scale(2) !important;
    
  }
}

/* Botões de navegação */
.carousel-control-btn {
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.6s ease, background-color 0.2s ease, color 0.2s ease;
}

.product-carousel-container:hover .carousel-control-btn {
  opacity: 1;
}

.carousel-control-btn:hover {
  background-color: #000000 !important;
  color: #ffffff !important;
}

.indicator-dot {
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: width 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
}

.indicator-dot.active {
  width: 15px;
  background-color: #000000;
}

/* Botão de compra */
.btn-buy {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-buy:hover {
  background-color: #000000 !important;
  color: #ffffff !important;
}

.row {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.row.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.product-title {
  color: #111111;
}

.product-desc {
  color: #666666 !important;
}
</style>