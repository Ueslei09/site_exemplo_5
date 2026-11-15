// src/shared/composable/useWhatsApp.js
import { ref, onMounted } from 'vue'
import { whatsappService } from '../services/whatsappService'

export function useWhatsApp() {
  const config = ref(null)

  onMounted(() => {
    config.value = whatsappService.getWhatsAppConfig()
  })

  const openWhatsApp = () => {
    if (!config.value) return
    const url = `https://wa.me/${config.value.phoneNumber}?text=${encodeURIComponent(config.value.message)}`
    window.open(url, '_blank')
  }

  return {
    config,
    openWhatsApp
  }
}