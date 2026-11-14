// src/shared/composable/useNavbar.js
import { ref, onMounted, onUnmounted } from 'vue'
import { navbarService } from '../services/navbarService'

const isMenuOpen = ref(false)
const activeTab = ref('menu') // Pode ser 'menu', 'contact' ou 'account'
const isScrolled = ref(false)

export function useNavbar() {
  const navbarData = navbarService.getNavbarData()

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 30
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

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
    isScrolled,
    toggleMenu,
    closeMenu
  }
}