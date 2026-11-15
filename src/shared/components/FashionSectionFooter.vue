<!-- src/shared/components/FashionSectionFooter.vue -->
<template>
  <footer class="fashion-footer bg-black text-white py-5 border-top border-dark" v-if="footerData">
    <div class="container py-4">
      
      <!-- Grelha Principal em 3 colunas (col-md-4) -->
      <div class="row g-5">
        
        <!-- COLUNA 1: Podemos Ajudar-te? -->
        <div class="col-12 col-md-4">
          <h4 class="footer-heading text-uppercase mb-4 fw-semibold">
            {{ footerData.column1.title }}
          </h4>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-for="(link, index) in footerData.column1.links" :key="index">
              <div class="footer-link-wrapper position-relative d-inline-block">
                <router-link :to="link.url" class="footer-link text-white text-decoration-none d-inline-block pb-1">
                  {{ link.name }}
                </router-link>
                <hr class="custom-hr m-0 bg-white" />
              </div>
            </li>
          </ul>
        </div>

        <!-- COLUNA 2: A Empresa -->
        <div class="col-12 col-md-4">
          <h4 class="footer-heading text-uppercase mb-4 fw-semibold">
            {{ footerData.column2.title }}
          </h4>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-for="(link, index) in footerData.column2.links" :key="index">
              <div class="footer-link-wrapper position-relative d-inline-block">
                <router-link :to="link.url" class="footer-link text-white text-decoration-none d-inline-block pb-1">
                  {{ link.name }}
                </router-link>
                <hr class="custom-hr m-0 bg-white" />
              </div>
            </li>
          </ul>
        </div>

        <!-- COLUNA 3: Pesquisa de Loja, Newsletter e Localização -->
        <div class="col-12 col-md-4">
          
          <!-- Pesquisa de Loja -->
          <div class="mb-4 pb-2">
            <h4 class="footer-heading text-uppercase mb-3 fw-semibold">
              {{ footerData.column3.storeSearch.title }}
            </h4>
            <router-link :to="footerData.column3.storeSearch.url" class="store-search-box d-flex align-items-center justify-content-between text-white text-decoration-none pb-2 border-bottom border-secondary">
              <span class="small tracking-widest text-muted">{{ footerData.column3.storeSearch.placeholder }}</span>
              <i class="bi bi-chevron-right small text-white"></i>
            </router-link>
          </div>

          <!-- Subscrever Newsletter -->
          <div class="mb-4 pb-2">
            <h4 class="footer-heading text-uppercase mb-2 fw-semibold">
              {{ footerData.column3.newsletter.title }}
            </h4>
            <p class="text-muted small mb-3 lh-base">
              {{ footerData.column3.newsletter.description }}
            </p>
            <div class="newsletter-input-box d-flex align-items-center justify-content-between pb-2 border-bottom border-secondary">
              <input type="email" :placeholder="footerData.column3.newsletter.placeholder" class="bg-transparent border-0 text-white w-100 shadow-none small" />
              <i class="bi bi-chevron-right small text-white"></i>
            </div>
          </div>

          <!-- Língua -->
          <div class="mb-4">
            <span class="footer-label d-block text-uppercase text-muted mb-1" style="font-size: 0.7rem; letter-spacing: 1.5px;">
              {{ footerData.column3.language.label }}
            </span>
            <div class="dropdown-select d-flex align-items-center justify-content-between text-white py-1">
              <span class="small fw-semibold">{{ footerData.column3.language.selected }}</span>
              <i class="bi bi-chevron-down small"></i>
            </div>
          </div>

          <!-- Terra / Região -->
          <div>
            <span class="footer-label d-block text-uppercase text-muted mb-1" style="font-size: 0.7rem; letter-spacing: 1.5px;">
              {{ footerData.column3.region.label }}
            </span>
            <div class="footer-link-wrapper position-relative d-inline-block">
              <router-link :to="footerData.column3.region.url" class="footer-link text-white text-decoration-none d-inline-block fw-semibold pb-1">
                {{ footerData.column3.region.current }}
              </router-link>
              <hr class="custom-hr m-0 bg-white" />
            </div>
          </div>

        </div>

      </div>

      <!-- SEÇÃO INFERIOR: Serviços da Gucci -->
      <div class="row mt-5 pt-4 border-top border-secondary">
        <div class="col-12">
          <h4 class="footer-heading text-uppercase mb-3 fw-semibold">
            {{ footerData.servicesSection.title }}
          </h4>
          <ul class="list-unstyled d-flex flex-column flex-md-row gap-4">
            <li v-for="(link, index) in footerData.servicesSection.links" :key="index">
              <div class="footer-link-wrapper position-relative d-inline-block">
                <router-link :to="link.url" class="footer-link text-white text-decoration-none d-inline-block pb-1">
                  {{ link.name }}
                </router-link>
                <hr class="custom-hr m-0 bg-white" />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useFooter } from '../composable/useFooter'

const { footerData } = useFooter()
</script>

<style scoped>
.fashion-footer {
  background-color: #000000 !important;
  color: #ffffff;
  font-size: 0.85rem;
  border-top: none !important;
  margin-top: 0 !important;

}

.footer-heading {
  font-size: 0.8rem;
  letter-spacing: 2px;
}

.footer-link {
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.7;
}

/* Efeito de HR Hover Padrão */
.custom-hr {
  height: 1px;
  border: none;
  opacity: 0;
  width: 100%;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: left;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-link-wrapper:hover .custom-hr {
  opacity: 1;
  transform: scaleX(1);
}

.store-search-box input::placeholder,
.newsletter-input-box input::placeholder {
  color: #adb5bd;
}

@media (max-width: 768px) {
  .fashion-footer {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>