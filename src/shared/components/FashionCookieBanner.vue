<!-- src/shared/components/FashionCookieBanner.vue -->
<template>
  <transition name="slide-up">
    <div v-if="isVisible && config" class="cookie-banner fixed-bottom bg-white border-top shadow-lg p-4 p-md-4">
      <div class="container-fluid d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        
        <!-- Texto explicativo -->
        <div class="cookie-text-wrapper pe-md-4">
          <h4 class="fw-semibold text-dark text-uppercase fs-6 mb-1" style="letter-spacing: 1.5px;">
            {{ config.title }}
          </h4>
          <p class="text-muted small mb-0 lh-base">
            {{ config.description }} 
            <router-link :to="config.policyUrl" class="text-dark text-decoration-underline ms-1">
              {{ config.policyLinkText }}
            </router-link>
          </p>
        </div>

        <!-- Botões de Ação -->
        <div class="cookie-actions d-flex align-items-center gap-3 flex-shrink-0">
          <button @click="rejectCookies" class="btn btn-outline-dark btn-sm text-uppercase px-3 py-2 cookie-btn">
            {{ config.rejectText }}
          </button>
          <button @click="acceptCookies" class="btn btn-dark btn-sm text-uppercase px-4 py-2 cookie-btn">
            {{ config.acceptText }}
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { useCookieConsent } from '../composable/useCookieConsent'

const { config, isVisible, acceptCookies, rejectCookies } = useCookieConsent()
</script>

<style scoped>
.cookie-banner {
  z-index: 1090; /* Fica acima de tudo, inclusive do WhatsApp */
  background-color: #ffffff !important;
  border-color: #eaeaea !important;
}

.cookie-btn {
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  font-weight: 500;
  border-radius: 0; /* Estilo reto e sofisticado de alta costura */
  transition: all 0.3s ease;
}

.btn-dark:hover {
  background-color: #333333;
  border-color: #333333;
}

/* Transição suave de entrada do banner */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>