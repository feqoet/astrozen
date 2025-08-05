import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Luis Cueto — Mobile & Web Developer",
  author: "Luis Cueto",
  description:
    "Técnico en Mecatrónica con base en Oaxaca, MX. Desarrollador Web y diseño de aplicaciones.",
  lang: "es",
  siteLogo: "/alfonso-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "" },
    { text: "LinkedIn", href: "" },
    { text: "Github", href: "" },
    { text: "Youtube", href: "" },
    { text: "Dribbble", href: "" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Luis Alfonso Cueto",
    specialty: "Desarrollador Web",
    summary:
      "Desarrollador web y programador de herramientas tecnológicas",
    email: "feqoet@email.com",
  },
  experience: [
    {
      company: "Ópticas América",
      position: "Soporte Técnico",
      startDate: "Junio 2018",
      endDate: "Febrero 2019",
      summary: [
        "Diseño de un sistema de seguridad con botón de pánico ble",
        "Desarrollo de una plataforma para la gestión de contraseñas para las camaras ip.",
        "Configuración y mantenimiento de cámaras ip",
      ],
    },
    {
      company: "Oaxhack",
      position: "Profe. de Robotica Educativa",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "Participación en concursos de robótica con un equipo previamiente preparado por un curso de robótica educativa",
        "Robótica educativa con lego EV3 MINDSTORMS",
      ],
    },
    {
      company: "Liblap",
      position: "Diseñador de aplicaciones web",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Maquetado, diseño, programación y mantenimiento de páginas web gratuitas para proyectos sociales",
    },
  ],
  projects: [
    {
      name: "C.V.E",
      summary: "Conciertos Vívidos: Plataforma de conciertos en vivo y pregrabados",
      linkPreview: "https://cve.club.rock",
      linkSource: "/",
      image: "/vveye_prototipe.png",
    },
    {
      name: "C.S.O.S",
      summary: "Robot didactico y funcional, para la comunicación, la seguridad y la autogestión de tareas",
      linkPreview: "/",
      linkSource: "https://csos.github.com",
      image: "/csos-img.jpg",
    },
    {
      name: "F.T",
      summary: "Feqoet es una red social de poetas y restaurantes, validamos criticos de comida",
      linkPreview: "https://feqoet.rest/",
      linkSource: "/",
      image: "/logo-ft.png",
    },
  ],
  about: {
    description: `
    Hola, soy Luis, me apasiona las nuevas tecnologías en especial las de diseño, desarrollo de aplicaciones web y las de cyberseguridad.
    Por más de 10 años mi enfoque autodidacta radica en el open source de software y hardware, el aprendizaje autodidacta y los sistemas de seguridad linux.`,
    image: "/alfonso-big.jpg",
  },
};

//
