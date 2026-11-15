// src/modules/home/services/fashionCardsService.js
export const fashionCardsService = {
  getCardsSectionData() {
    return {
      sectionTitle: "Fashion SERVICES",
      sectionSubtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian .",
      cards: [
        {
          id: 1,
          mediaType: "video", // Padrão vídeo conforme solicitado
          mediaUrl: "",
          videoUrl: "Fashion1_video.mp4",
          alt: "Fachada de loja de luxo decorada com árvores de Natal iluminadas",
          title: "The standard Lorem Ipsum",
          description: "1914 translation by H. Rackham",
          linkText: "by H. Rackham",
          linkUrl: "/services/appointment",
          ariaLabel: "Einen Termin vereinbaren: Wählen Sie Ihr Erlebnis aus"
        },
        {
          id: 2,
          mediaType: "video", // Exemplo de imagem ou pode alterar para vídeo
          mediaUrl: "",
          videoUrl: "Fashion1_video.mp4",
          alt: "Blocos de letras douradas em relevo organizados em grade",
          title: "The standard Lorem Ipsum",
          description: " Finibus Bonorum et Malorum",
          linkText: "Section 1.10.33 of ",
          linkUrl: "/services/personalization",
          ariaLabel: "Personalisierung: Optionen Entdecken"
        },
        {
          id: 3,
          mediaType: "video",
          mediaUrl: "",
          videoUrl: "/Fashion1_video.mp4",
          alt: "Entrada principal de edifício arquitetónico clássico",
          title: "The standard Lorem Ipsum Store",
          description: "The standard Lorem Ipsum",
          linkText: "Details The standard",
          linkUrl: "/services/pickup",
          ariaLabel: "Abholung im Store: So geht es"
        }
      ]
    }
  }
}