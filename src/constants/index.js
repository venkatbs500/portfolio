export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Education",
    href:"#education"
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "UniHelp",
    desc: "A platform for teachers to manage assignments and detect plagiarism.",
    subdesc:
      "Used by 50+ students in pilot testing. Backend built with Node.js & MongoDB achieving 500+ requests/sec throughput.",
    spotlight: "/assets/projects/unihelp.jpg", // replace with screenshot
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    href: "https://github.com/venkatbs500/unihelp",
  },
  {
    title: "Travel Planner App",
    desc: "A full-stack travel planning app with an AI-powered recommendation engine.",
    subdesc:
      "Built with React, Node.js, and MongoDB. Integrated APIs for weather, transport, and location insights with <200ms response time.",

    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
    href: "https://github.com/venkatbs500/travel_planner",
  },
  {
    title: "E-Waste Management Platform",
    desc: "A user-friendly website with modules for Login, Reviews, Prediction Models, and Registration.",
    subdesc:
      "Deployed on AWS with Docker, Kubernetes, Jenkins, and Terraform ensuring 99.9% uptime. Integrated Prometheus & Grafana for monitoring, cutting downtime detection by 70%.",
    spotlight: "/assets/projects/ewaste.jpg", // replace with your screenshot
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    logoStyle: { backgroundColor: "rgba(0,0,0,0.6)" },
    tags: [
      { name: "React", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Docker", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
    href: "https://github.com/venkatbs500/e-waste",
  },
];


export const calculateSizes = (isMobile) => {
  return {
    deskScale: isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4.5, 0],
    cubePosition: isMobile ? [4.5, -7.5, -2] : [5, -8.0, -2],
    reactLogoPosition: isMobile ? [5, 4, 0] : [5, 4, 0],
    ringPosition: isMobile ? [-10, 10, 0] : [-12, 10, 0],
    targetPosition: isMobile ? [-9, -10, -10] : [-12, -7, -10],
  };
};
export const workExperiences = [
  {
    id: 1,
    name: "LRDE (DRDO - Electronics & Radar Development Establishment)",
    pos: "Radar Systems Trainee",
    duration: "Jul 2024 – Dec 2024",
    title: [
      "During my radar research project, I focused on improving how objects in orbit are tracked and classified. I designed and implemented algorithms that increased target identification accuracy by ~15%, making detection more reliable. To support this, I also coordinated the conversion of data from spherical coordinates to an Earth-Centered Earth-Fixed (ECEF) system, which reduced transformation errors by ~10%. This not only improved data consistency but also enhanced the overall precision of orbit determination — a key step in applications like satellite tracking and space situational awareness."
    ],
    icon: "/assets/drdo.png", // DRDO logo
    animation: "radar",
  },
  {
    id: 2,
    name: "XenVeda Technologies",
    pos: "Backend Development Intern",
    duration: "Jan 2025 – Apr 2025",
    title: [
      "As part of my backend development work, I designed and implemented scalable REST APIs that served both internal teams and external clients, cutting response times by nearly 30%. I also managed backend logic, server configurations, and integrated MongoDB to reliably handle 5,000+ daily transactions. By debugging and streamlining hybrid workflows, I optimized server performance and improved overall system uptime from 92% to 98%, ensuring smoother operations and a better user experience."
    ],
    icon: "/assets/xv.png", // XenVeda LinkedIn logo
    animation: "coding",
  },
];

export const education = [
  {
    school: "University of Central Florida",
    degree: "M.S. in Computer Science",
    logo: "/assets/ucf.jpeg",
    duration: "2025 – 2027 (expected)",
    highlights: [
      "Specialization in Cybersecurity and Algorithms",
    ],
    subjects: [
      "CIS 6395 - Incident Response Technologies",
      "CIS 6614 - Advanced Software Systems Security",
      "COT 5405 - Design and Analysis of Algorithms",
    ],
    animation: "clapping"
  },
  {
    school: "Dayananda Sagar University",
    degree: "B.Tech. in Computer Science (AI and ML)",
    duration: "2021 – 2025",
    logo: "/assets/dsu.png",
    highlights: [
      "Graduated with Distinction",
      "Completed projects in AI, Cloud, and Full-Stack Development",
    ],
    semesters: [
      {
        semester: "I Semester",
        subjects: [
          "Linear Algebra and Calculus",
          "Engineering Chemistry",
          "Basic Electrical Engineering",
          "Elements of Mechanical Engineering",
          "Fundamentals of Programming",
          "Environmental Sciences",
          "Kannada",
        ],
      },
      {
        semester: "II Semester",
        subjects: [
          "Probability and Statistics",
          "Discrete Mathematical Structures",
          "Data Structures",
          "Digital Electronics and Logic Design",
          "Full Stack Development",
          "Computational Thinking with Python",
          "Data Structures Lab",
          "Digital Electronics and Logic Design Lab",
          "Placement and Entrepreneurship",
          "Liberal Studies - I",
        ],
      },
      {
        semester: "III Semester",
        subjects: [
          "Transforms and Differential Equations",
          "Engineering Physics",
          "Basic Electronics",
          "Engineering Graphics and Design",
          "Engineering Mechanics",
          "Biological Sciences",
          "Technical Communication",
          "Design Thinking",
          "Constitution of India and Ethics",
        ],
      },
      {
        semester: "IV Semester",
        subjects: [
          "Artificial Intelligence",
          "Foundation of Data Science",
          "Artificial Intelligence Laboratory",
          "Design and Analysis of Algorithms",
          "Principles of Microprocessors and Computer Organization",
          "Finite Automata and Formal Languages",
          "Software Engineering and Project Management",
          "Design and Analysis of Algorithms Lab",
          "Special Topics - I",
          "Liberal Studies - II",
        ],
      },
      {
        semester: "V Semester",
        subjects: [
          "Database Management Systems",
          "Introduction to Networks and Cybersecurity",
          "Object Oriented Programming with Java",
          "Machine Learning",
          "Special Topics",
          "Database Management Systems Laboratory",
          "OOP with Java Lab",
          "Machine Learning for Pattern Recognition",
          "Fundamentals of Cloud Computing",
        ],
      },
      {
        semester: "VI Semester",
        subjects: [
          "Capstone Project (Phase II)",
          "Skill Enhancement Course (Advanced Java)",
          "Speech Processing and Game Technology",
          "Big Data Analytics",
          "Technology Strategy",
          "Compiler Design and System Software",
          "Natural Language Models",
          "Deep Learning & Computer Vision",
          "Compiler Design and System Software Lab",
          "Deep Learning and Computer Vision Lab",
          "Explainable AI",
          "Advanced Data Science",
          "Social Networks and Analytics",
        ],
      },
      {
        semester: "VII Semester",
        subjects: [
          "Capstone Project (Phase I)",
          "Financial Technology (FinTech)",
        ],
      },
    ],
    animation: "victory",
  },
];

