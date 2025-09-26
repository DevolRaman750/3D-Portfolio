const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Vision", imgPath: "/images/vision.svg" },
  { text: "Innovation", imgPath: "/images/innovation.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Vision", imgPath: "/images/vision.svg" },
  { text: "Innovation", imgPath: "/images/innovation.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 250, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 5, suffix: "+", label: "Tech Stacks Mastered" }
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Strong DSA skills, applying logic to build efficient solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Time-Managment",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Machine Learning",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Building projects with React enhanced my front-end development skills, giving me hands-on knowledge of modern UI design. It helped me grow into a more confident full-stack developer by bridging my front-end and backend expertise.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/react.svg",
    title: "E-Commerce React App",
    date: "November 2023 - December 2023",
      responsibilities: [
          "Developed and deployed a full-featured E-commerce web app using React.js.",
          "Implemented product catalog, cart, and checkout functionalities for seamless shopping.",
          "Integrated responsive UI components to ensure smooth experiences across devices.",
          "Optimized application performance and state management for scalability.",

      ],
  },
  {
    review: "Working with Kubernetes,Docker and AWS strengthened my understanding of container orchestration and scalable deployments. It helped me grow by mastering how to manage applications efficiently in real-world cloud environments.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo2.svg",
    title: "Kubernetes Voting App",
    date: "June 2024 - December 2024",
      responsibilities: [
          "Deployed and scaled a Voting App using Docker and Kubernetes on AWS EC2.",
          "Implemented containerized microservices for seamless deployment and management.",
          "Ensured high availability and smooth performance for 500+ concurrent users during testing.",
      ],
  },
  {
    review: "Building projects with Spring Boot deepened my backend development skills and knowledge of RESTful APIs. It helped me grow by learning how to design scalable, secure, and efficient server-side applications.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo3.svg",
    title: "Spring Boot E-Commerce App",
    date: "March 2025 - June 2025",
      responsibilities: [
          "Developed a scalable backend for an E-commerce application using Spring Boot.",
          "Implemented secure authentication, product management, and order processing APIs.",
          "Optimized database queries with MySQL/Postgres for faster performance and reliability.",
      ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,

  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
