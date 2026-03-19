import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Q'Leal",
    category: "web",
    description:
      "Aplicacion web de fidelizacion para Q'Carne que digitaliza la experiencia del cliente con sistema de sellos y tarjetas de lealtad.",
    longDescription:
      "Aplicacion web de fidelizacion para Q'Carne que digitaliza la experiencia del cliente mediante un sistema de sellos y tarjetas de lealtad. Los clientes pueden consultar en tiempo real su progreso y beneficios acumulados, mientras que el panel administrativo permite a gerentes y cajeros gestionar clientes, validar sellos y generar reportes de manera eficiente.",
    imageUrl: "https://res.cloudinary.com/drec8g03e/image/upload/v1771191240/qcarne_x97g5t.png",
    imageAlt: "Logo Q'Leal",
    liveUrl: "https://qleal.com",
    tech: "Next.js · React · Node.js",
    duration: "8 semanas",
    client: "Q'Carne",
    result: "Fidelizacion digital para clientes recurrentes",
    badge: "Web App",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    title: "Sistema de inventario para Delci Zapatos",
    category: "web",
    description:
      "Sistema interno para gestion de inventario y clientes, con control de existencias, abonos, pagos e historial de compras.",
    longDescription:
      "Sistema interno para la gestion integral de inventario y clientes de Delci Zapatos. Permite controlar existencias de bolsos y zapatos, registrar abonos y pagos, y mantener un historial claro de compras. Disenado para optimizar la administracion y fortalecer la relacion con los clientes.",
    imageUrl: "https://res.cloudinary.com/drec8g03e/image/upload/v1768783244/delci_zapatos_er5sri.png",
    imageAlt: "Logo de negocio Delci Zapatos",
    tech: "React · Node.js · PostgreSQL",
    duration: "5 semanas",
    client: "Delci Zapatos",
    result: "Control interno centralizado de inventario",
    badge: "Sistema Interno",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "JyJ Essence",
    category: "web",
    description:
      "Plataforma de comercio electronico para gestion y venta de perfumeria con panel administrativo, inventario.",
    longDescription:
      "Plataforma de comercio electronico desarrollada a medida para la gestion y venta de perfumeria. Cuenta con un panel administrativo intuitivo, control de inventario.",
    imageUrl: "https://res.cloudinary.com/drec8g03e/image/upload/v1762655746/jyjessence_y75wqc.webp",
    imageAlt: "Logo de JyJ Essence",
    liveUrl: "https://jyjessence.business",
    tech: "React · Cloudinary · Node.js",
    duration: "4 semanas",
    client: "JyJ Essence",
    result: "Canal de ventas digital escalable",
    badge: "E-commerce",
    tags: ["Next.js", "Node.js", "Cloudinary"],
  },
  {
    title: "Lumen Match3",
    category: "web",
    description:
      "Juego de estrategia tipo Match-3 totalmente responsivo, rapido y accesible desde navegador sin descargas.",
    longDescription:
      "Juego de estrategia tipo Match-3 totalmente responsivo. Un ejemplo de como transformamos la logica clasica de los videojuegos en una aplicacion web moderna y rapida.",
    imageUrl: "https://res.cloudinary.com/drec8g03e/image/upload/v1765562524/logo_gaue6g.ico",
    imageAlt: "Logo de Lumen Match3",
    liveUrl: "https://lumenmatch3.vercel.app",
    tech: "React · TypeScript · Vercel",
    duration: "3 semanas",
    client: "Proyecto LumenTec",
    result: "Experiencia web gamificada multiplataforma",
    badge: "Web App",
    tags: ["React", "TypeScript", "Vercel"],
  },
  {
    title: "Portafolio Personal - Yosimar Montenegro",
    category: "web",
    description:
      "Portafolio personal para destacar habilidades tecnicas y proyectos con enfoque profesional y alto rendimiento.",
    longDescription:
      "Desarrollo del portafolio personal de Yosimar Montenegro, destacando sus habilidades y proyectos con un diseno limpio, rapido y optimizado.",
    imageUrl: "https://res.cloudinary.com/dbcbrgbyy/image/upload/v1765564927/SerafinoLogo_rjarip.png",
    imageAlt: "Logo del portafolio de Yosimar Montenegro",
    liveUrl: "https://front-portfolio-black.vercel.app",
    tech: "Next.js · Tailwind · Vercel",
    duration: "2 semanas",
    client: "Yosimar Montenegro",
    result: "Marca personal digital profesional",
    badge: "Web Personal",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
];
