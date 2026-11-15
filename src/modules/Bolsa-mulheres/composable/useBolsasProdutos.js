// src/modules/bolsas-mulheres/composables/useBolsasProdutos.js
import { ref } from 'vue'
import { bolsasProdutosService } from '../services/bolsasProdutosService'

export function useBolsasProdutos() {
  const produtosData = ref(bolsasProdutosService.getProdutosData())
  // Mapeia o índice do slide ativo para cada produto (ex: { 0: 0, 1: 2, ... })
  const activeSlides = ref({})

  // Inicializa o índice 0 para cada card
  produtosData.value.produtos.forEach((prod, index) => {
    activeSlides.value[index] = 0
  })

  const nextSlide = (productIndex, totalSlides) => {
    const current = activeSlides.value[productIndex] || 0
    activeSlides.value[productIndex] = (current + 1) % totalSlides
  }

  const prevSlide = (productIndex, totalSlides) => {
    const current = activeSlides.value[productIndex] || 0
    activeSlides.value[productIndex] = (current - 1 + totalSlides) % totalSlides
  }

  const setSlide = (productIndex, slideIndex) => {
    activeSlides.value[productIndex] = slideIndex
  }

  return {
    produtosData,
    activeSlides,
    nextSlide,
    prevSlide,
    setSlide
  }
}