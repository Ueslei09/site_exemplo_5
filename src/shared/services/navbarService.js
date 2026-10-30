// src/shared/services/navbarService.js
export const navbarService = {
  getNavbarData() {
    return {
      brandName: "ROCK ROLL",
      showLogoImage: false,
      logoImage: "/assets/logo.svg", // Caminho para sua imagem de logo (em public/ ou assets/)
      logoAlt: "Rock Roll Logo",
      contactText: "Contact Us",
      contactUrl: "/contact",
      searchLabel: "Search",
      menuLabel: "Menu",
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
      contactInfo: {
        title: "CONTACT US",
        subtitle: "Do you need further assistance?",
        actionText: "Get in Contact with Us",
        actionUrl: "/contact"
      }
    }
  }
}