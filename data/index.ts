export const funFacts = [
  'Climbing',
  'Google-I/O',
  'Playgrounds',
  'Ramen',
  'CPH-Half',
  'Morocco',
];


export const floatingItems = [
  { id: 1, imagePath: "/floatingillustrations/diamond.svg", className: "absolute left-20 top-60 opacity-50"},
  { id: 2, imagePath: "/floatingillustrations/diamond.svg", className: "absolute right-20 top-80 opacity-50"},
  { id: 3, imagePath: "/floatingillustrations/star.svg", className: "absolute right-40 top-20 opacity-50"},
  { id: 4, imagePath: "/floatingillustrations/star.svg", className: "absolute left-40 top-10 opacity-50"},
  { id: 6, imagePath: "/floatingillustrations/line.svg", className: "absolute left-40 top-96 opacity-50"},
  { id: 7, imagePath: "/floatingillustrations/line.svg", className: "absolute right-60 top-60 opacity-50"},
];



export const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Here's my search history",
      description: "Who am I?",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "h-full w-full opacity-70",
      titleClassName: "justify-start",
      img: "/bg_stripes.svg",
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
    {
      id: 4,
      title: "Former founder of a creative agency startup",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Solves ambitious problems in a collaborative and positive environment",
      description: "I hope to join a team that",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 lg:w-80 md:w-60 w-40 rounded-tl-2xl",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/mockCode.webp",
      spareImg: "",
    },
    {
      id: 6,
      title: "Get my email",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full w-full text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "PodGen",
      des: "Podcast Platform with AI features",
      img: "/podGen.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "convex.svg", "openai.svg"],
      link: "https://podgen.vercel.app/",
    },
    {
      id: 2,
      title: "SOLA",
      des: "Coffee shop and co-working space - simple design",
      img: "/sola.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
      link: "https://solacph.dk/",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Multimedia Design, CPH Business Academy",
      desc: "UI/UX design, Figma, Front-end development, Project management, Brand Identity",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "Current",
      hasCertificate: false,
      certificate: '',
    },
    {
      id: 2,
      title: "Front-end Engineer",
      desc: "React, Web Design, Animations (Framer), State Management, Web Security, Deployment DSA",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "2023-2024",
      hasCertificate: true,
      certificate: '/frontend-certificate.webp',
    },
    {
      id: 3,
      title: "Founder - Creative Agency",
      desc: "I started my own company and gained valuable business knowledge and learned how to facilitate and work in a creative team.",
      className: "md:col-span-2",
      thumbnail: "/b4.svg",
      year: "2021-2024",
      hasCertificate: false,
      certificate: '',
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