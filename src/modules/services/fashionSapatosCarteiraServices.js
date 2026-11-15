// src/modules/home/services/fashionBagsService.js
export const fashionBagsService = {
  getBagsData() {
    return {
      sectionTitle: "Coleções de Bolsas",
      cards: [
        {
          id: 1,
          title: "Carteiras para Homens",
          mediaType: "image", // Altere para 'video' se necessário no futuro
          mediaUrl: "/Fashion5_imagem.jpg",
          videoUrl: "",
          alt: "Bolsa de luxo repousando sobre lençóis de seda acolchoados em tom champagne",
          linkText: "Carteiras para Homens",
          linkUrl: "/women/bags"
        },
        {
          id: 2,
          title: "Sapatos para homens",
          mediaType: "image", // Altere para 'video' se necessário no futuro
          mediaUrl: "/Fashion7_imagem.jpg",
          videoUrl: "",
          alt: "Homem vestindo calças de alfaiataria e sapatos pretos polidos segurando uma bolsa de viagem de luxo",
          linkText: "Sapatos para homens",
          linkUrl: "/men/bags"
        }
      ]
    }
  }
}