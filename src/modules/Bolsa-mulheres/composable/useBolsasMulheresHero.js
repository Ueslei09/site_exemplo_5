// src/modules/bolsas-mulheres/composables/useBolsasMulheresHero.js
import { ref } from 'vue'
import { bolsasMulheresHeroService } from '../services/bolsasMulheresHeroService'

export function useBolsasMulheresHero() {
  const heroData = ref(bolsasMulheresHeroService.getHeroData())

  return {
    heroData
  }
}