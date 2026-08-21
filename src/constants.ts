import { Project, Experience, Skill, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Samuel Okpani Egwu",
  title: "Senior Full-Stack & Backend Developer",
  email: "dallintine@gmail.com",
  summary: "Experienced C#/.NET Backend Developer with over 10 years of experience designing and implementing scalable backend systems, RESTful APIs, and enterprise applications. Proven expertise in C#, .NET Core, ASP.NET, SQL Server, and cloud integration. Adept at optimizing database performance, leading cross-functional teams, and delivering secure, high-performance software solutions for banking, logistics, and ERP systems.",
  github: "https://github.com/dallintine",
  linkedin: "https://www.linkedin.com/in/sammy-egwu-8b879199/",
  twitter: "@Sawiitechservice",
  skype: "dallintine1",
  phone: "+234-803-948-4187"
};

export const SKILLS: Skill[] = [
  // Languages & Frameworks
  { name: "C#", level: 95, category: "Language" },
  { name: ".NET Core / ASP.NET", level: 95, category: "Backend" },
  { name: "ASP.NET MVC", level: 90, category: "Backend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 75, category: "Language" },
  { name: "JavaScript / TypeScript", level: 90, category: "Language" },
  { name: "React / React Native", level: 85, category: "Frontend" },
  { name: "AngularJS", level: 75, category: "Frontend" },
  { name: "Vue.js", level: 80, category: "Frontend" },
  
  // Databases
  { name: "SQL Server (MSSQL)", level: 90, category: "Database" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "MongoDB / NoSQL", level: 80, category: "Database" },
  { name: "Redis", level: 75, category: "Database" },

  // Cloud & Tools
  { name: "Azure", level: 85, category: "Cloud" },
  { name: "AWS (Lambda, S3, RDS)", level: 80, category: "Cloud" },
  { name: "Git / BitBucket", level: 95, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Swagger / REST APIs", level: 95, category: "Tools" },

  // Other
  { name: "TDD / Unit Testing (XUnit)", level: 90, category: "Other" },
  { name: "SOLID Principles", level: 95, category: "Other" },
  { name: "Machine Learning (ML.Net)", level: 65, category: "Other" },
  { name: "System Integration", level: 95, category: "Other" }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Sterling Bank",
    role: "Back-end Software Engineer",
    period: "Jul 2021 - Present",
    location: "Lagos, Nigeria (Remote)",
    description: [
      "Developed secure banking APIs using ASP.NET Core and C#, integrating NIBSS Nface Recognition for biometric authentication with 95% accuracy.",
      "Created and documented RESTful APIs for investment applications, results in 40% reduction in manual processing time.",
      "Designed and optimized SQL stored procedures (MSSQL/PostgreSQL), reducing transaction processing time by 35%.",
      "Collaborated with cross-functional teams to deliver dual banking applications with enhanced performance and security."
    ]
  },
  {
    company: "Visionspec Nigeria Ltd",
    role: "Full Stack Software Engineer",
    period: "Sep 2020 - Sep 2021",
    location: "Lagos, Nigeria",
    description: [
      "Built back-end services for ERP and courier systems using ASP.NET Core and C#, integrating SQL Server and MongoDB.",
      "Led back-end development for Vision Data Center API server using ASP.NET Core 5.0.",
      "Developed RESTful APIs for loan and payroll applications, improving financial operations for microfinance clients."
    ]
  },
  {
    company: "Ifecinachi Transport Ltd",
    role: "Front-end Software Engineer",
    period: "Jul 2018 - Sep 2020",
    location: "Lagos, Nigeria",
    description: [
      "Developed transport management system UI and back-end logic using ASP.NET Core and C#.",
      "Conducted over 20 UI/UX and SQL injection tests (MySQL/PostgreSQL) to ensure application security and performance.",
      "Contributed to the development of a Payroll and HR Management App with back-end integration."
    ]
  },
  {
    company: "Ifex Express Ltd",
    role: "Technical Project Manager",
    period: "Mar 2014 - Jul 2018",
    location: "Yaba, Lagos",
    description: [
      "Managed IT infrastructure and back-end systems for logistics operations, supporting over 70 devices.",
      "Led back-end development for logistics tracking systems using C#, .NET, and SQL.",
      "Configured network equipment and optimized IT systems for performance and reliability."
    ]
  },
  {
    company: "IAF SAWII Ltd",
    role: "Software Engineer",
    period: "Sep 2010 - Feb 2014",
    location: "Ayobo, Lagos",
    description: [
      "Developed school exam preparation software using C# and Xamarin. Forms.",
      "Maintained back-end systems and implemented version control using Git.",
      "Contributed to back-end development using Java, Spring, and MySQL."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Double Investment API",
    description: "Designed Sterling Bank's investment application enabling users to apply for packages and stocks, generating higher income.",
    tags: [".NET Core", "MSSQL", "PostgreSQL", "REST API"],
    link: "https://sterlingdoubbleapi-dev.sterlingapps.p.azurewebsites.net/swagger/index.html"
  },
  {
    title: "Nface Recognition Wrapper",
    description: "Nface Recognitions API Wrapper for biometric authentication in Sterling Bank applications.",
    tags: ["C#", "Biometrics", "API Wrapper", "NoSQL"],
    link: "https://pass.sterling.ng/nface/swagger/index.html"
  },
  {
    title: "Ikollect Payment Gateway",
    description: "Payment implementation services for renewable energy subscriptions with gateway integration.",
    tags: [".NET", "MySQL", "Payments", "Gateway"],
    link: "https://power-payment-solution-fe-dev.sterlingapps.p.azurewebsites.net/swagger/index.html"
  },
  {
    title: "Courier ERP Platform",
    description: "Cloud-based ERP platform for cargo and parcel collection and management.",
    tags: ["ASP.NET", "ERP", "PostgreSQL", "Logistics"],
    link: "https://ifexexpressnig.com/app/"
  },
  {
    title: "HealthBank API",
    description: "A health application providing users access to subscribe to health benefits and consult professionals.",
    tags: [".NET Core", "MongoDB", "Healthcare", "API"],
  },
  {
    title: "PIP Portal Application",
    description: "Implemented an API to support employee performance improvement when below expectations.",
    tags: ["C#", "MySQL", "HR Tech", "Enterprise"],
  },
  {
    title: "Onbuddy API",
    description: "Developed an on boarding API for new hires to manage recruitment and learning processes.",
    tags: [".NET Core", "PostgreSQL", "HR Management"],
  },
  {
    title: "Renewable Energy Application",
    description: "Built an interface between users and vendors with a payment gateway for renewable energy subscriptions.",
    tags: ["Full Stack", "MongoDB", "Payments", "Energy"],
    link: "https://power-payment-solution-fe-dev.sterlingapps.p.azurewebsites.net/swagger/index.html"
  },
  {
    title: "Mystery Shopping API",
    description: "Developed an API to document artisan work done within the bank to ensure quality and compliance.",
    tags: [".NET Core", "MySQL", "API"],
  },
  {
    title: "HC Redeployment API",
    description: "Built a streamline staff redeployment API, reducing expenses by 75% for the organization.",
    tags: ["C#", "PostgreSQL", "Automation"],
  },
  {
    title: "Centralized Access Request Portal",
    description: "Developed a secure portal to manage employee application access requests centrally.",
    tags: ["ASP.NET", "MSSQL", "Security"],
  },
  {
    title: "NAOWA Portal",
    description: "Developed a comprehensive application for the Nigeria Army Officers Wives Association with dedicated Member and Admin portals. Configured a Linux dedicated server for secure hosting.",
    tags: ["Node.js", "React.js", "PostgreSQL", "Linux"],
  },
  {
    title: "Sapper (Police Cooperation)",
    description: "Built a monthly contribution and cooperation platform for police officers, featuring admin and member sides. Developed using Node.js and React.js, hosted on a dedicated Linux server.",
    tags: ["Node.js", "React.js", "MongoDB", "FinTech"],
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "MCSD: Developing Microsoft Azure and Web Services", issuer: "Microsoft", date: "Feb 2020" },
  { name: "Advance ASP.NET Web API Certificate", issuer: "Microsoft", date: "Apr 2023" },
  { name: "Introducing Generative AI with AWS", issuer: "AWS", date: "2023" },
  { name: "Front End Developer with React", issuer: "Hong Kong University of Science and Technology", date: "Jan 2020", score: "95%" },
  { name: "Interactive with JavaScript", issuer: "University of Michigan", date: "Jan 2017", score: "97.9%" },
  { name: "Cisco Network Protocols and Architecture", issuer: "Cisco Networking Academy", date: "Jan 2017", score: "93.25%" }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the People",
    period: "Sep 2020 - Feb 2024",
    location: "California, USA (Online)"
  },
  {
    degree: "Ordinary National Diploma in Electrical & Electronics Engineering",
    institution: "Federal Polytechnic Oko",
    period: "Feb 2009 - Dec 2013",
    location: "Anambra, Nigeria"
  }
];
