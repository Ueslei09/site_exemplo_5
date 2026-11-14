// src/modules/fashion/services/fashionHeroService.js
export const fashionHeroService = {
  getHeroData() {
    return {
      mediaType: 'image', // Altere para 'video' caso queira usar um vídeo de fundo (.mp4)
      mediaUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop',
      videoUrl: '', // URL do vídeo caso mediaType seja 'video'
      subtitle: ' Fashion with elegance',
      buttons: [
        { text: 'View collection for women', url: '#damen', ariaLabel: 'Ver coleção para mulheres' },
        { text: 'View collection for men', url: '#herren', ariaLabel: 'Ver coleção para homens' }
      ]
    };
  }
};