import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Luis Cueto — Mobile & Web Developer",
  author: "Luis Cueto",
  description:
    "Ingeniero en Mecatrónica con base en Oaxaca, MX. Desarrollador Web y diseño de aplicaciones.",
  lang: "es",
  siteLogo: "/alfonso-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/feqoet" },
    { text: "LinkedIn", href: "https://github.com/feqoet" },
    { text: "Github", href: "https://github.com/feqoet" },
    { text: "Youtube", href: "https://github.com/feqoet },
    { text: "Dribbble", href: "https://github.com/feqoet" },
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
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Oaxhack",
      position: "Profe. de Robotica Educativa",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Liblap",
      position: "Diseñador de aplicaciones web",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "C.V.E",
      summary: "Conciertos Vívidos: Plataforma de conciertos en vivo y pregrabados",
      linkPreview: "/",
      linkSource: "https://cve.club.rock",
      image: "/spotifu.png",
    },
    {
      name: "C.S.O.S",
      summary: "Robótica para la comunicación y la seguridad.",
      linkPreview: "/",
      linkSource: "https://csos.github.com",
      image: "/shopify-clon.png",
    },
    {
      name: "F.T",
      summary: "Feqoet es una red social de poetas y restaurantes, validamos criticos de comida",
      linkPreview: "/",
      linkSource: "https://feqoet.rest/",
      image: "/logo-ft.png",
    },
  ],
  about: {
    description: `
    Hola, soy Luis, me apasiona las nuevas tecnologías en especial las de diseño, desarrollo de aplicaciones web y las de cyberseguridad.
    Por más de 10 años mi enfoque radica en el open source en software y hardware, el aprendizaje autodidacta y los sistemas de seguridad linux.`,
    image: "/alejandro-big.jpg",
  },
};

// #FFFFFF
