// src/shared/composables/useNavbar.js
import { ref } from 'vue'
import { navbarService } from '../services/navbarService'

const isMenuOpen = ref(false)
const activeTab = ref('menu') // 'menu' ou 'contact'

export function useNavbar() {
  const navbarData = navbarService.getNavbarData()

  const toggleMenu = (tab = 'menu') => {
    activeTab.value = tab
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  return {
    navbarData,
    isMenuOpen,
    activeTab,
    toggleMenu,
    closeMenu
  }
}