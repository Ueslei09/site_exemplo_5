// src/shared/composables/useCookieConsent.js
import { ref, onMounted } from 'vue'
import { cookieService } from '../services/cookieService'

export function useCookieConsent() {
  const config = ref(null)
  const isVisible = ref(false)

  onMounted(() => {
    config.value = cookieService.getCookieConfig()
    const consent = localStorage.getItem(config.value.storageKey)
    
    // Se ainda não deu consentimento, exibe o banner após um breve delay elegante
    if (!consent) {
      setTimeout(() => {
        isVisible.value = true
      }, 1000)
    }
  })

  const acceptCookies = () => {
    if (!config.value) return
    localStorage.setItem(config.value.storageKey, 'accepted')
    isVisible.value = false
  }

  const rejectCookies = () => {
    if (!config.value) return
    localStorage.setItem(config.value.storageKey, 'rejected')
    isVisible.value = false
  }

  return {
    config,
    isVisible,
    acceptCookies,
    rejectCookies
  }
}