// src/modules/home/composables/useFashionSectionBolsa.js
import { ref, onMounted, onUnmounted } from 'vue'
import { fashionBagsService } from '../services/fashionBagsService'

export function useFashionSectionBolsa() {
  const bagsData = ref(null)
  const isVisible = ref(false)
  const elementRef = ref(null)

  const handleScroll = () => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    if (rect.top <= windowHeight * 0.85) {
      isVisible.value = true
    }
  }

  onMounted(() => {
    bagsData.value = fashionBagsService.getBagsData()
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    bagsData,
    isVisible,
    elementRef
  }
}