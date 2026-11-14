<!-- src/shared/components/GlobalNavbar.vue -->
<template>
  <header class="global-navbar-container fixed-top w-100" :class="{ 'navbar-scrolled': isScrolled }">
    <nav class="navbar navbar-expand-lg px-4 px-xl-5 py-3 align-items-center justify-content-between position-relative">
      
      <!-- Esquerda (Desktop): Contact Us (Abre o drawer sem mudar de rota) -->
      <div class="navbar-left d-none d-lg-flex align-items-center">
        <button class="contact-btn text-white text-uppercase bg-transparent border-0 d-flex align-items-center gap-1 p-0" @click="toggleMenu('contact')">
          <span class="plus-icon">+</span> {{ navbarData.contactText }}
        </button>
      </div>

      <!-- Logo Mobile (Visível apenas em telas menores) -->
      <div class="d-flex d-lg-none">
        <router-link to="/" class="navbar-brand-wrapper text-decoration-none">
          <img v-if="navbarData.showLogoImage" :src="navbarData.logoImage" :alt="navbarData.logoAlt" class="nav-logo-img img-fluid" />
          <span v-else class="navbar-brand text-white fw-bold tracking-widest text-uppercase m-0 fs-4">
            {{ navbarData.brandName }}
          </span>
        </router-link>
      </div>

      <!-- Centro (Desktop): Logo Centralizada -->
      <div class="navbar-center position-absolute start-50 translate-middle-x d-none d-lg-flex">
        <router-link to="/" class="navbar-brand-wrapper text-decoration-none">
          <img v-if="navbarData.showLogoImage" :src="navbarData.logoImage" :alt="navbarData.logoAlt" class="nav-logo-img img-fluid" />
          <span v-else class="navbar-brand text-white fw-bold tracking-widest text-uppercase m-0">
            {{ navbarData.brandName }}
          </span>
        </router-link>
      </div>

      <!-- Direita: Ícones de Sacola, Conta, Pesquisa e Menu Hambúrguer -->
      <div class="navbar-right ms-auto d-flex align-items-center gap-3 gap-md-4">
        
        <!-- Ícone da Sacola/Carrinho -->
        <router-link to="/cart" class="icon-btn text-white text-decoration-none d-flex align-items-center" aria-label="Cart">
          <i class="bi bi-bag fs-5"></i>
        </router-link>

        <!-- Ícone de Conta / Utilizador (Abre o Drawer de Conta com os links do service) -->
        <button class="icon-btn text-white bg-transparent border-0 d-flex align-items-center p-0" @click="toggleMenu('account')" aria-label="Account">
          <i class="bi bi-person fs-5"></i>
        </button>

        <!-- Ícone de Pesquisa -->
        <button class="icon-btn text-white bg-transparent border-0 d-flex align-items-center p-0" aria-label="Search">
          <i class="bi bi-search fs-5"></i>
        </button>
        
        <!-- Botão Menu Hambúrguer -->
        <button class="menu-btn text-white bg-transparent border-0 d-flex align-items-center gap-2 text-uppercase p-0" @click="toggleMenu('menu')" aria-label="Menu">
          <i class="bi bi-list fs-3"></i>
          <span class="d-none d-md-inline menu-text">Menu</span>
        </button>
      </div>

    </nav>

    <!-- SIDEBAR / GAVETA LATERAL (Estilo Drawer) -->
    <div class="menu-backdrop" :class="{ 'show': isMenuOpen }" @click="closeMenu"></div>
    
    <div class="side-drawer bg-white text-dark shadow-lg" :class="{ 'open': isMenuOpen }">
      <div class="drawer-header d-flex justify-content-end p-4">
        <button class="close-btn rounded-circle bg-dark text-white border-0 d-flex align-items-center justify-content-center" @click="closeMenu" aria-label="Close">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="drawer-body px-4 px-md-5 pb-5">
        
        <!-- Opção de Contato no topo do menu mobile -->
        <div class="mobile-contact-trigger d-block d-lg-none mb-4 pb-3 border-bottom">
          <button class="text-dark fw-bold text-uppercase bg-transparent border-0 text-start d-flex align-items-center gap-2 p-0 w-100" @click="toggleMenu('contact')">
            <span class="text-warning fs-5">+</span> {{ navbarData.contactText }}
          </button>
        </div>

        <!-- Conteúdo 1: Menu Principal de Navegação (Hambúrguer) -->
        <div v-if="activeTab === 'menu'" class="menu-links-wrapper">
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-for="(link, index) in navbarData.menuLinks" :key="index">
              <router-link :to="link.url" class="drawer-link text-dark text-decoration-none" @click="closeMenu">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Conteúdo 2: Menu de Conta / Utilizador (Renderiza ícone e nome vindos do service) -->
        <div v-else-if="activeTab === 'account'" class="account-links-wrapper">
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-for="(link, index) in navbarData.accountLinks" :key="index">
              <router-link :to="link.url" class="drawer-link text-dark text-decoration-none d-flex align-items-center gap-3" @click="closeMenu">
                <i :class="['bi', link.icon, 'fs-5 text-secondary']"></i>
                <span>{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Conteúdo 3: Aba Contact -->
        <div v-else class="contact-drawer-content">
          <h3 class="fw-bold text-uppercase mb-3" style="letter-spacing: 1px;">{{ navbarData.contactInfo.title }}</h3>
          <p class="text-muted mb-4">{{ navbarData.contactInfo.subtitle }}</p>
          <router-link :to="navbarData.contactInfo.actionUrl" class="text-dark fw-semibold text-decoration-underline" @click="closeMenu">
            {{ navbarData.contactInfo.actionText }}
          </router-link>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useNavbar } from '../composable/useNavbar'

const { navbarData, isMenuOpen, activeTab, isScrolled, toggleMenu, closeMenu } = useNavbar()
</script>

<style scoped>
.global-navbar-container {
  z-index: 1050;
  background: transparent; /* 100% transparente quando no topo */
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Fundo sólido e com efeito blur assim que o utilizador faz scroll */
.global-navbar-container.navbar-scrolled {
  background: rgba(11, 37, 69, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar-left {
  flex: 1;
  justify-content: flex-start;
}

.navbar-right {
  flex: 1;
  justify-content: flex-end;
}

.contact-btn, .menu-text {
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.2s;
}

.contact-btn:hover {
  opacity: 0.75;
}

.plus-icon {
  font-size: 1rem;
  line-height: 1;
}

.navbar-brand {
  font-family: Georgia, serif;
  font-size: 1.4rem;
  letter-spacing: 3px;
}

.nav-logo-img {
  max-height: 35px;
  object-fit: contain;
}

.icon-btn, .menu-btn {
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.icon-btn:hover, .menu-btn:hover {
  opacity: 1;
}

/* SIDEBAR DRAWER */
.side-drawer {
  position: fixed;
  top: 0;
  right: -450px;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  z-index: 1060;
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1055;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.contact-drawer-content a {
  font-size: 1rem;
  font-weight: 600;
  text-decoration: underline;
  color: #000000;
}

.contact-drawer-content h3 {
  font-weight: 700;
  letter-spacing: 1px;
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

.drawer-link {
  font-size: 1.05rem;
  font-weight: 400;
  transition: color 0.2s, padding-left 0.2s;
  display: inline-block;
}

.drawer-link:hover {
  color: #666 !important;
  padding-left: 5px;
}

@media (max-width: 992px) {
  .navbar-center {
    display: none !important;
  }
}

@media (max-width: 576px) {
  .side-drawer {
    max-width: 100%;
    right: -100%;
  }
}
</style>