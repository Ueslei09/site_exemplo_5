// src/modules/home/services/fashionBagsService.js
export const fashionBagsService = {
  getBagsData() {
    return {
      sectionTitle: "Coleções de Bolsas",
      cards: [
        {
          id: 1,
          title: "Bolsas para mulheres",
          mediaType: "image", // Altere para 'video' se necessário no futuro
          mediaUrl: "/Fashion3_imagem.jpg",
          videoUrl: "",
          alt: "Bolsa de luxo repousando sobre lençóis de seda acolchoados em tom champagne",
          linkText: "Bolsas para mulheres",
          linkUrl: "/women/bags"
        },
        {
          id: 2,
          title: "Sacos para homens",
          mediaType: "image", // Altere para 'video' se necessário no futuro
          mediaUrl: "/Fashion1_imagem.jpg",
          videoUrl: "",
          alt: "Homem vestindo calças de alfaiataria e sapatos pretos polidos segurando uma bolsa de viagem de luxo",
          linkText: "Bolsas para homens",
          linkUrl: "/men/bags"
        }
      ]
    }
  }
}