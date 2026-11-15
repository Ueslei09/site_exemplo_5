// src/shared/services/footerService.js
export const footerService = {
  getFooterData() {
    return {
      column1: {
        title: "PODEMOS AJUDAR-TE?",
        links: [
          { name: "Contacte-Nos", url: "/contact" },
          { name: "A minha ordem", url: "/account/orders" },
          { name: "Perguntas Frequentes", url: "/faq" },
          { name: "Cancelar a inscrição da newsletter", url: "/newsletter/unsubscribe" },
          { name: "Mapa do site", url: "/sitemap" },
          { name: "Contrato revogado", url: "/contract-revocation" }
        ]
      },
      column2: {
        title: "A EMPRESA",
        links: [
          { name: "Sobre a Fashion", url: "/about" },
          { name: "Gucci Equilíbrio", url: "/equilibrium" },
          { name: "Código de Ética", url: "/ethics" },
          { name: "Carreira", url: "/careers" },
          { name: "Termos e Condições de Negócios e Uso", url: "/terms" },
          { name: "Proteção de dados", url: "/privacy" },
          { name: "Cookie-instellings", url: "/cookies" },
          { name: "Informações da Empresa e Impressão", url: "/company-info" },
          { name: "Política de Divulgação de Vulnerabilidades", url: "/vulnerabilities" }
        ]
      },
      column3: {
        storeSearch: {
          title: "PESQUISA DE LOJA",
          placeholder: "PAÍS/REGIÃO, CIDADE",
          url: "/stores"
        },
        newsletter: {
          title: "SUBSCREVER AS ATUALIZAÇÕES DA Fashion",
          description: "Erhalten Sie exklusive Informationen zum Start der Kollektion, persönliche Mitteilungen und weitere spannende Neuigkeiten aus der Welt von Fashion.",
          placeholder: "E-mail"
        },
        language: {
          label: "LÍNGUA",
          selected: "Inglês",
          options: ["Inglês", "Português", "Espanhol", "Alemão"]
        },
        region: {
          label: "TERRA/REGIÃO",
          current: "Áustria",
          url: "/region-select"
        }
      },
      servicesSection: {
        title: "SERVIÇOS DA Fashion",
        links: [
          { name: "Descubra nossos serviços", url: "/services" },
          { name: "Concordar em uma data", url: "/services/appointment" }
        ]
      }
    }
  }
}