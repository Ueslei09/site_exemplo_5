// src/modules/bolsas-mulheres/services/bolsasProdutosService.js
export const bolsasProdutosService = {
  getProdutosData() {
    return {
      sectionTitle: "Coleção em Destaque",
      produtos: [
        {
          id: 1,
          nome: "Bolsa de ombro GG Marmont pequena",
          preco: "R$ 14.800",
          descricao: "Couro matelassê com detalhe GG e corrente dourada.",
          capaUrl: "/bolsa1produto.png", // Capa estática antes do hover
          slides: [
            {
              type: "image",
              url: "/modelobolsa1.png",
              alt: "Detalhe frontal da bolsa de ombro GG Marmont pequena"
            },
            {
              type: "image",
              url: "/modelobolsa3.png",
              alt: "Modelo vestindo look completo com bolsa GG Marmont pequena"
            },
            {
              type: "image",
              url: "/modelobolsa1.png",
              alt: "Vista lateral da bolsa de ombro em couro matelassê"
            },
            {
              type: "image",
              url: "/modelobolsa1.png",
              alt: "Interior e acabamento interno da bolsa de luxo"
            }
          ]
        },
        {
          id: 2,
          nome: "Bolsa tiracolo GG Matelassê",
          preco: "R$ 12.500",
          descricao: "Design estruturado com fecho flap e alça em corrente.",
          capaUrl: "/modelobolsa4.png",
          slides: [
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
              alt: "Bolsa tiracolo GG Matelassê em fundo branco estúdio"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
              alt: "Ângulo alternativo da bolsa tiracolo com ferragens douradas"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
              alt: "Textura do couro matelassê da bolsa tiracolo"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
              alt: "Fecho e detalhes metálicos da bolsa tiracolo"
            }
          ]
        },
        {
          id: 3,
          nome: "Bolsa Tote Diana pequena com bambu",
          preco: "R$ 21.900",
          descricao: "Alças superiores em bambu e faixa em couro removível.",
          capaUrl: "/modelobolsa5.png",
          slides: [
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
              alt: "Bolsa Tote Diana pequena com alças de bambu"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
              alt: "Detalhe das alças em bambu artesanal da bolsa Tote"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
              alt: "Bolsa Tote Diana em exibição de alta costura"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
              alt: "Interior espaçoso da bolsa Tote Diana"
            }
          ]
        },
        {
          id: 4,
          nome: "Clutch Ophidia em tecido GG Supreme",
          preco: "R$ 6.900",
          descricao: "Pequena bolsa de mão com detalhe Web e fecho em zíper.",
          capaUrl: "/modelobolsa6.png",
          slides: [
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
              alt: "Clutch Ophidia em tecido GG Supreme"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
              alt: "Detalhe do monograma e zíper da clutch Ophidia"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
              alt: "Vista lateral da clutch Ophidia compacta"
            },
            {
              type: "image",
              url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
              alt: "Apresentação de alta costura da clutch Ophidia"
            }
          ]
        }
      ]
    }
  }
}