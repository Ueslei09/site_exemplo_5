// src/shared/composables/useParallax.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax(speed = 0.15) {
  const elementRef = ref(null)
  const isVisible = ref(false)
  const offsetY = ref(0)

  const handleScroll = () => {
    if (!elementRef.value) return
    
    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Verifica se o elemento entrou na área visível da janela para ativar animações de revelação
    if (rect.top <= windowHeight * 0.85) {
      isVisible.value = true
    }

    // Calcula o deslocamento do paralaxe com base na posição do scroll
    const scrollPosition = window.scrollY
    offsetY.value = (scrollPosition - elementRef.value.offsetTop) * speed
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    elementRef,
    isVisible,
    offsetY
  }
}