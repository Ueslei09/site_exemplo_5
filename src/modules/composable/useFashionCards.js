// src/modules/home/composables/useFashionCards.js
import { ref, onMounted, onUnmounted } from 'vue'
import { fashionCardsService } from '../services/fashionCardsService'

export function useFashionCards() {
  const sectionData = ref(null)
  const isVisible = ref(false)
  const elementRef = ref(null)
  const currentMobileIndex = ref(0)

  // Variáveis para suporte a Touch / Swipe no mobile
  const touchStartX = ref(0)
  const touchEndX = ref(0)

  const handleScroll = () => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top <= windowHeight * 0.85) {
      isVisible.value = true
    }
  }

  onMounted(() => {
    sectionData.value = fashionCardsService.getCardsSectionData()
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // Funções de navegação do carrossel para mobile
  const nextCard = () => {
    if (sectionData.value && sectionData.value.cards) {
      if (currentMobileIndex.value < sectionData.value.cards.length - 1) {
        currentMobileIndex.value++
      } else {
        currentMobileIndex.value = 0
      }
    }
  }

  const prevCard = () => {
    if (sectionData.value && sectionData.value.cards) {
      if (currentMobileIndex.value > 0) {
        currentMobileIndex.value--
      } else {
        currentMobileIndex.value = sectionData.value.cards.length - 1
      }
    }
  }

  const handleTouchStart = (e) => {
    touchStartX.value = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.value = e.changedTouches[0].screenX
    if (touchStartX.value - touchEndX.value > 50) {
      nextCard() // Swipe para a esquerda
    }
    if (touchEndX.value - touchStartX.value > 50) {
      prevCard() // Swipe para a direita
    }
  }

  return {
    sectionData,
    isVisible,
    elementRef,
    currentMobileIndex,
    nextCard,
    prevCard,
    handleTouchStart,
    handleTouchEnd
  }
}