// src/modules/bolsas-mulheres/services/bolsasMulheresLinksService.js
export const bolsasMulheresLinksService = {
  getLinksData() {
    return {
      categoryMain: "SACOS",
      links: [
        { id: 1, name: "Bolsas de inverno", path: "/bolsas-femininas/inverno", active: false },
        { id: 2, name: "Bolsas de ombro", path: "/bolsas-femininas/ombro", active: false },
        { id: 3, name: "Mini sacos", path: "/bolsas-femininas/mini", active: false },
        { id: 4, name: "Bolsas Crossbody", path: "/bolsas-femininas/crossbody", active: false },
        { id: 5, name: "Sacos de compradores", path: "/bolsas-femininas/compradores", active: false },
        { id: 6, name: "Bolsas", path: "/bolsas-femininas/geral", active: false },
        { id: 7, name: "Mochilas & sacos de cinto", path: "/bolsas-femininas/mochilas", active: false },
        { id: 8, name: "Embreagens e sacos de noite", path: "/bolsas-femininas/noite", active: false },
        { id: 9, name: "Bolsas Personalizadas", path: "/bolsas-femininas/personalizadas", active: false }
      ]
    }
  }
}