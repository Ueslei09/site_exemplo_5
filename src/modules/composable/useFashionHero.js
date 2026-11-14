// src/modules/fashion/composables/useFashionHero.js
import { ref, onMounted } from 'vue';
import { fashionHeroService } from '../services/fashionHeroService';

export function useFashionHero() {
  const heroData = ref({
    mediaType: 'image',
    mediaUrl: '',
    videoUrl: '',
    subtitle: '',
    buttons: []
  });

  onMounted(() => {
    heroData.value = fashionHeroService.getHeroData();
  });

  return {
    heroData
  };
}