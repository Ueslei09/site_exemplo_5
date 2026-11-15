// src/modules/home/services/fashionBanner1Service.js
export const fashionBanner1Service = {
  getBannerData() {
    return {
      title: "Unisex Styles",
      buttonText: "come and check it out",
      buttonUrl: "/collection/apres-ski",
      mediaType: "image", // Altere para 'video' se desejar reproduzir um vídeo de fundo
      mediaUrl: "/Fashion4_imagem.jpg", // Imagem gerada com alta qualidade (ou caminho local/URL)
      videoUrl: "",
      alt: "Mulher sorridente segurando esquis vintage em ambiente de madeira acolhedor, campanha de inverno de luxo"
    }
  }
}