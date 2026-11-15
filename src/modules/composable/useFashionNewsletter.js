// src/modules/home/composables/useFashionNewsletter.js
import { ref, onMounted } from 'vue'
import { fashionNewsletterService } from '../services/fashionNewsletterService'

export function useFashionNewsletter() {
  const newsletterData = ref(null)
  const isDrawerOpen = ref(false)
  const emailInput = ref('')

  onMounted(() => {
    newsletterData.value = fashionNewsletterService.getNewsletterData()
  })

  const openDrawer = () => {
    isDrawerOpen.value = true
  }

  const closeDrawer = () => {
    isDrawerOpen.value = false
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!emailInput.value) return
    alert(`Obrigado por se inscrever com o e-mail: ${emailInput.value}`)
    emailInput.value = ''
    closeDrawer()
  }

  return {
    newsletterData,
    isDrawerOpen,
    emailInput,
    openDrawer,
    closeDrawer,
    handleSubscribe
  }
}