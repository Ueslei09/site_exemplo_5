// src/shared/services/cookieService.js
export const cookieService = {
  getCookieConfig() {
    return {
      storageKey: 'fashion_cookie_consent',
      title: 'Política de Cookies',
      description: 'Utilizamos cookies próprios e de terceiros para melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar conteúdos de luxo.',
      acceptText: 'Aceitar Todos',
      rejectText: 'Apenas Necessários',
      policyLinkText: 'Saiba mais',
      policyUrl: '/privacy-policy'
    }
  }
}