// src/modules/bolsas-mulheres/composables/useBolsasMulheresLinks.js
import { ref } from 'vue'
import { bolsasMulheresLinksService } from '../services/bolsasMulheresLinksService'

export function useBolsasMulheresLinks() {
  const linksData = ref(bolsasMulheresLinksService.getLinksData())
  const activeLink = ref(null)

  const selectLink = (id) => {
    activeLink.value = id
  }

  return {
    linksData,
    activeLink,
    selectLink
  }
}