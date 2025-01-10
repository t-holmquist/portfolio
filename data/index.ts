export const funFacts = [
  'Climbing',
  'Next.js-15',
  'Playgrounds',
  'Ramen',
  'CPH-Half',
  'Morocco',
  'Pour-Over',
];


export const floatingItems = [
  { id: 1, imagePath: "/floatingillustrations/diamond.svg", className: "absolute left-20 top-60 opacity-50"},
  { id: 2, imagePath: "/floatingillustrations/diamond.svg", className: "absolute right-20 top-80 opacity-50"},
  { id: 3, imagePath: "/floatingillustrations/star.svg", className: "absolute right-40 top-20 opacity-50"},
  { id: 4, imagePath: "/floatingillustrations/star.svg", className: "absolute left-40 top-10 opacity-50"},
  { id: 6, imagePath: "/floatingillustrations/line.svg", className: "absolute left-40 top-96 opacity-50"},
  { id: 7, imagePath: "/floatingillustrations/line.svg", className: "absolute right-60 top-60 opacity-50"},
];

export const pinkFloatingItems = [
  { id: 1, imagePath: "/floatingillustrations/blackdiamond.svg", className: "absolute right-20 top-32 lg:right-20 lg:top-40 opacity-100"},
  { id: 2, imagePath: "/floatingillustrations/blackdiamond.svg", className: "absolute right-8 top-20 lg:right-20 lg:top-80 opacity-100"},
  { id: 3, imagePath: "/floatingillustrations/blackstar.svg", className: "absolute right-10 top-4 lg:right-40 lg:top-20 opacity-100"},
  { id: 4, imagePath: "/floatingillustrations/blackstar.svg", className: "absolute left-10 top-4 lg:left-40 lg:top-10 opacity-100"},
  { id: 6, imagePath: "/floatingillustrations/blackline.svg", className: "absolute right-20 top-10 opacity-100"},
  { id: 7, imagePath: "/floatingillustrations/blackline.svg", className: "absolute left-14 top-20 opacity-100"},
  { id: 8, imagePath: "/floatingillustrations/blackdiamond.svg", className: "absolute left-20 top-60 opacity-100"},
  { id: 9, imagePath: "/floatingillustrations/blackstar.svg", className: "absolute lg:left-14 lg:top-80 opacity-100"},
  { id: 10, imagePath: "/floatingillustrations/blackline.svg", className: "hidden lg:absolute right-40 top-60 opacity-100"},
];



export const navItems = [
    { name: "Cases", link: "/cases" },
    { name: "Experience", link: "/#experience" },
    { name: "Contact", link: "/#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[25vh] md:min-h-[40vh] lg:min-h-[60vh]",
      imgClassName: "w-full h-full object-top",
      titleClassName: "justify-end",
      img: "/tjalfe_heroImage.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "Here's my search history",
      description: "Who am I?",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "h-full w-full opacity-70",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Technologies",
      description: "I have a good time with these",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "SOLA",
      des: "Coffee shop and co-working space - simple design",
      img: "/sola.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/figma-icon.svg"],
      link: "https://www.solacph.dk/",
    },
    {
      id: 2,
      title: "Portfolio",
      des: "The creation of this portfolio",
      img: "/caseImages/portfolio/hero.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/figma-icon.svg"],
      link: "/cases",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Multimedia Design, CPH Business Academy",
      desc: "Front-end development, React, UI/UX design, Figma, Project management",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "Current",
      hasCertificate: false,
      certificate: '',
    },
    {
      id: 2,
      title: "Founder - Creative Agency",
      desc: "As a founder of my own creative agency, focusing on video production, I have gained valuable business knowledge and learned how to facilitate and work in a creative team",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "2021-2024",
      hasCertificate: false,
      certificate: '',
    },
    {
      id: 3,
      title: "Front-end",
      desc: "React, Web Design, Animations (Framer), State Management, Web Security, Deployment, DSA",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "2023-2024",
      hasCertificate: true,
      certificate: '/frontend-certificate.webp',
    },
    {
      id: 4,
      title: "Next.js (React)",
      desc: "SSR, Server Actions, Routing, Data fetching, Optimization & Deployment",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "2024",
      hasCertificate: true,
      certificate: '/nextjs_certificate.webp',
    },
    {
      id: 5,
      title: "TypeScript",
      desc: "Interface, Custom types, Union types, Type Narrowing, Functions & Generics ",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/b4.svg",
      year: "2024",
      hasCertificate: true,
      certificate: '/typescript_certificate.webp',
    },
    {
      id: 6,
      title: "Computer Science",
      desc: "Databases, Data Structures, Algorithms, SQL, PostgreSQL, Computer Architecture, Discrete Math",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/b4.svg",
      year: "2023-2024",
      hasCertificate: true,
      certificate: '/cs_certificate.webp',
    },
    
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      alt: 'GitHub',
      link: 'https://github.com/t-holmquist'
    },
    {
      id: 2,
      img: "/link.svg",
      alt: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tjalfe-villads-holmquist-85019315b'
    },
  ];