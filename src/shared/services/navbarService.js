// src/shared/services/navbarService.js
export const navbarService = {
  getNavbarData() {
    return {
      brandName: "Fashion",
      showLogoImage: false,
      logoImage: "/assets/logo.svg",
      logoAlt: "Logo",
      contactText: "Contact",
      contactUrl: "/contact",
      searchLabel: "Search",
      menuLabel: "Menu",
      // Links do menu principal de navegação lateral (Hambúrguer)
      menuLinks: [
        { name: "Gifts", url: "/gifts" },
        { name: "Handbags", url: "/handbags" },
        { name: "Women", url: "/women" },
        { name: "Men", url: "/men" },
        { name: "New In", url: "/new-in" },
        { name: "Children", url: "/children" },
        { name: "Travel", url: "/travel" },
        { name: "Jewellery & Watches", url: "/jewellery" },
        { name: "Fragrances and Makeup", url: "/fragrances" },
        { name: "Décor & Lifestyle", url: "/decor" },
        { name: "Gucci Services", url: "/services" }
      ],
      // Opções do menu de Utilizador/Conta com os respetivos Bootstrap Icons
      accountLinks: [
        { name: "Entrar", url: "/login", icon: "bi-box-arrow-in-right" },
        { name: "As minhas ordens", url: "/orders", icon: "bi-bag-check" },
        { name: "Configurações da minha conta", url: "/account-settings", icon: "bi-gear" },
        { name: "O meu livro de endereços", url: "/addresses", icon: "bi-geo-alt" },
        { name: "A minha carteira", url: "/wallet", icon: "bi-wallet2" },
        { name: "Favoritos", url: "/favorites", icon: "bi-heart" },
        { name: "Os meus compromissos", url: "/appointments", icon: "bi-calendar-check" }
      ],
      contactInfo: {
        title: "CONTACT US",
        subtitle: "Do you need further assistance?",
        actionText: "Get in Contact with Us",
        actionUrl: "/contact"
      }
    }
  }
}