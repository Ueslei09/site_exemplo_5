// src/modules/home/services/copyrightService.js
export const copyrightService = {
  getCopyrightData() {
    return {
      logos: [
        {
          id: 1,
          type: "image", // Mudado para image para suportar o logo gráfico
          text: "Fashion",
          image: "/logoipsum-424.png", // Certifique-se de que este ficheiro está na pasta public/
          url: "/", // Rota para onde o clique do logo redireciona
          alt: "Logotipo principal da marca"
        },
        {
          id: 2,
          type: "image",
          text: "Fashion OSTERIA",
          image:"/logoipsum-413.png",
          subtitle: "DA MASSA BOTTURA",
          url: "/osteria",
          alt: "Fashion Osteria da Massimo Bottura"
        },
        {
          id: 3,
          type: "text",
          text: "PALAZZO Fashion",
          url: "/palazzo",
          alt: "Palazzo Fashion"
        }
      ],
      copyrightText: "© 2016 - 2026 Fashion Fashion S.p.A. - Alle Rechte vorbehalten. G Commerce Brazil S.p.A.",
      mediaType: "image",
      mediaUrl: "/Fashion.png", // Certifique-se de que este ficheiro está na pasta public/
      videoUrl: "",
      mediaAlt: "Letreiro monumental da marca em fundo preto com acabamento clássico de alta-costura"
    }
  }
}