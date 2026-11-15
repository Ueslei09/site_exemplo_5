// src/shared/composables/useCopyright.js
import { ref } from 'vue'
import { copyrightService } from '../services/copyrightService'

export function useCopyright() {
  const copyrightData = ref(copyrightService.getCopyrightData())

  return {
    copyrightData
  }
}