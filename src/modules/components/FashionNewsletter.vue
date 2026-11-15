<!-- src/modules/home/components/FashionNewsletter.vue -->
<template>
  <section ref="elementRef" class="fashion-newsletter-section bg-black text-white py-5 position-relative overflow-hidden" v-if="newsletterData">
    <div class="container py-5 text-center">
      <div class="row justify-content-center">
        
        <!-- Aplicação da classe de animação e paralaxe controlada pelo composable -->
        <div class="col-lg-9 newsletter-content-wrapper" :class="{ 'fade-in-up': isVisible }">
          
          <!-- Título Superior -->
          <h4 class="newsletter-top-title text-uppercase mb-4 fw-light">
            {{ newsletterData.topTitle }}
          </h4>

          <!-- Texto Descritivo Principal -->
          <h2 class="newsletter-main-title fw-normal mb-5 lh-base">
            {{ newsletterData.mainTitle }}
          </h2>

          <!-- Botão de Abertura da Gaveta -->
          <div class="newsletter-action-wrapper">
            <button 
              @click="openDrawer" 
              class="newsletter-trigger-btn bg-transparent border-0 text-white text-uppercase d-inline-flex align-items-center gap-2 p-0"
            >
              <span class="plus-sign">+</span> {{ newsletterData.actionText }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- BACKDROP DA GAVETA -->
    <div class="menu-backdrop" :class="{ 'show': isDrawerOpen }" @click="closeDrawer"></div>

    <!-- SIDEBAR / GAVETA LATERAL BRANCA -->
    <div class="side-drawer bg-white text-dark shadow-lg" :class="{ 'open': isDrawerOpen }">
      <div class="drawer-header d-flex justify-content-end p-4">
        <button class="close-btn rounded-circle bg-dark text-white border-0 d-flex align-items-center justify-content-center" @click="closeDrawer" aria-label="Close">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="drawer-body px-4 px-md-5 pb-5">
        <h3 class="fw-bold text-uppercase mb-3 fs-5" style="letter-spacing: 0.5px;">
          {{ newsletterData.drawer.title }}
        </h3>
        <p class="text-muted small mb-4 lh-base">
          {{ newsletterData.drawer.subtitle }}
        </p>
        <p class="terms-text text-muted mb-4" style="font-size: 0.75rem; line-height: 1.5;">
          {{ newsletterData.drawer.termsText }}
          <router-link :to="newsletterData.drawer.policyUrl" class="text-dark text-decoration-underline ms-1">
            {{ newsletterData.drawer.policyLinkText }}
          </router-link>
        </p>

        <!-- Formulário de Inscrição -->
        <form @submit="handleSubscribe" class="newsletter-form mt-4">
          <div class="mb-4">
            <input 
              type="email" 
              v-model="emailInput" 
              :placeholder="newsletterData.drawer.inputPlaceholder" 
              class="form-control custom-email-input rounded-0 border-0 border-bottom px-0 shadow-none"
              required 
            />
          </div>
          <button type="submit" class="btn btn-dark w-100 rounded-0 text-uppercase py-3 fw-semibold submit-btn">
            {{ newsletterData.drawer.buttonText }}
          </button>
        </form>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useFashionNewsletter } from '../composable/useFashionNewsletter'
import { useParallax } from '@/shared/composable/useParallax'

const { 
  newsletterData, 
  isDrawerOpen, 
  emailInput, 
  openDrawer, 
  closeDrawer, 
  handleSubscribe 
} = useFashionNewsletter()

// Integrando o hook de paralaxe e revelação
const { elementRef, isVisible } = useParallax(0.05)
</script>

<style scoped>
.fashion-newsletter-section {
  background-color: #000000 !important;
  min-height: 450px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Transição suave de fade-in-up ao entrar no scroll */
.newsletter-content-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.newsletter-content-wrapper.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.newsletter-top-title {
  font-size: 0.8rem;
  letter-spacing: 3px;
  opacity: 0.9;
}

.newsletter-main-title {
  font-family: Georgia, serif;
  font-size: 1.6rem;
  letter-spacing: 1px;
  max-width: 800px;
  margin: 0 auto;
}

.newsletter-trigger-btn {
  font-size: 0.85rem;
  letter-spacing: 2px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.newsletter-trigger-btn:hover {
  opacity: 0.7;
}

.plus-sign {
  font-size: 1.1rem;
  line-height: 1;
}

/* SIDEBAR DRAWER (Estilo Gaveta Lateral Branca) */
.side-drawer {
  position: fixed;
  top: 0;
  right: -500px;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  z-index: 1070;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

.side-drawer.open {
  right: 0;
}

.menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 1065;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.menu-backdrop.show {
  opacity: 1;
  visibility: visible;
}

.close-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.05);
}

.custom-email-input {
  border-bottom: 1px solid #ced4da !important;
  font-size: 0.9rem;
}

.custom-email-input:focus {
  border-color: #000000 !important;
}

.submit-btn {
  font-size: 0.8rem;
  letter-spacing: 2px;
  background-color: #000000;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #333333;
}

@media (max-width: 768px) {
  .newsletter-main-title {
    font-size: 1.2rem;
  }
  .side-drawer {
    max-width: 100%;
    right: -100%;
  }
}
</style>