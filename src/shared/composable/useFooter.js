// src/shared/composables/useFooter.js
import { ref, onMounted } from 'vue'
import { footerService } from '../services/footerService'

export function useFooter() {
  const footerData = ref(null)

  onMounted(() => {
    footerData.value = footerService.getFooterData()
  })

  return {
    footerData
  }
}