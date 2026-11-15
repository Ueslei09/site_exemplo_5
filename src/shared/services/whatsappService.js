// src/shared/services/whatsappService.js
export const whatsappService = {
  getWhatsAppConfig() {
    return {
      phoneNumber: "5562999999999", // Substitua pelo número real da loja
      message: "Olá! Gostaria de tirar dúvidas sobre os produtos da Fashion.",
      ariaLabel: "Abrir chat de atendimento via WhatsApp",
      iconClass: "bi bi-chat-left-dots", // Ícone de balão de chat elegante idêntico ao modelo
      position: "bottom-right"
    }
  }
}