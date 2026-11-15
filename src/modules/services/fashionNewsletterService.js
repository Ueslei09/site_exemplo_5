// src/modules/home/services/fashionNewsletterService.js
export const fashionNewsletterService = {
  getNewsletterData() {
    return {
      topTitle: "SUBSCREVER AS ATUALIZAÇÕES DA Fashion",
      mainTitle: "Obtenha informações exclusivas sobre o lançamento da coleção, mensagens pessoais e outras notícias emocionantes do mundo da Fashion.",
      actionText: "Inscreva-se",
      drawer: {
        title: "MANENHA-SE ATUALIZADO COM A NEWSLETTER DA Fashion",
        subtitle: "Informe-se por e-mail sobre as últimas notícias e receba comunicações pessoais que correspondam aos seus interesses.",
        termsText: "Ao clicar em \"CRIAR MEU PERFIL\", você confirma que aceita nossa Política de Privacidade e Termos de Uso, e concorda em atualizar sobre a Fashion, novas atividades, produtos exclusivos e serviços personalizados, e uma experiência personalizada baseada, e cria seu perfil da Fashion.",
        policyLinkText: "Leia mais",
        policyUrl: "/privacy-policy",
        inputPlaceholder: "Endereço de e-mail",
        buttonText: "CRIAR PERFIL"
      }
    }
  }
}