// src/modules/home/composables/useFashionBanner1.js
import { ref, onMounted } from 'vue'
import { fashionBanner1Service } from '../services/fashionBanner1Service'

export function useFashionBanner1() {
  const bannerData = ref(null)

  onMounted(() => {
    bannerData.value = fashionBanner1Service.getBannerData()
  })

  return {
    bannerData
  }
}