import { Education, Experience, Project, Certification, SkillCategory, LeadershipItem } from "./types";

export const personalInfo = {
  name: "Pothu Ankhith",
  title: "MS Computer Science | Cloud & AI Enthusiast",
  email: "ankhith.pothu@gmail.com",
  phone: "+1 979-324-6252",
  linkedIn: "https://www.linkedin.com/in/pothu-ankhith-099275254/",
  location: "Oklahoma City, OK",
  github: "https://github.com/", // Add placeholder link matching profile
  tagline: "Building scalable cloud systems, intelligent machine learning solutions, and responsive web applications.",
  summary: "Highly motivated Master of Science in Computer Science student at Oklahoma City University (GPA 3.70) with a strong foundation in Object-Oriented Programming (OOP), database managment, and full-stack software development. Passionate about Cloud Infrastructure (GCP and AWS), Deep Learning, and interactive web technologies. Proven skill in delivering robust technical solutions both independently and within collaborative, high-speed environments.",
};

export const educationData: Education[] = [
  {
    institution: "Oklahoma City University",
    degree: "MS Computer Science",
    duration: "2024 – 2026",
    gpa: "3.70",
    honors: "Graduate with High Honors",
    coursework: ["OOP", "DBMS", "Software Engineering", "Algorithm Design", "Cloud Security", "Data Science", "SDLC"]
  },
  {
    institution: "Malla Reddy Institute of Engineering & Technology",
    degree: "B.Tech Computer Science & Information Technology",
    duration: "2020 – 2024",
    gpa: "3.55 (Equivalent)",
    honors: "First Class with Distinction",
    coursework: ["Data Structures", "OS", "Computer Networks", "Java", "Web Technologies"]
  }
];

export const experienceData: Experience[] = [
  {
    company: "Brain-O-Vision",
    role: "Web Development Bootcamp Participant",
    duration: "Oct – Nov 2022",
    highlights: [
      "Engineered frontend pages utilizing HTML5, CSS3, and AngularJS frameworks for smooth user interfaces",
      "Constructed custom backend services using Node.js for processing logic and mock endpoint delivery",
      "Applied strict Git and GitHub version controls with descriptive branch management workflows",
      "Successfully built and uploaded a complete end-to-end web deployment working round-the-clock during an intense 24-hour sprint"
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Chest X-Ray Disease Detection using CNNs",
    category: "AI & Deep Learning",
    techStack: ["Python", "GoogLeNet", "Deep Learning", "TensorFlow", "Keras"],
    description: "Developed and optimized an end-to-end convolution neural network (CNN) classifier using the GoogLeNet architecture to pinpoint multiple pathology classifications from complex chest X-ray imagery. Achieved high test accuracy via rigorous hyperparameters tuning and normalized image augmentation."
  },
  {
    title: "Generative AI & LLMs Experiments",
    category: "Generative AI",
    techStack: ["Python", "HuggingFace", "Transformers", "GenAI", "API Proxy"],
    description: "Built custom text exploration playgrounds implementing HuggingFace transformers models. Explored generative LLM frameworks, testing prompt templates, text summarizers, and parameter-efficient state queries to unlock structured semantic insights."
  },
  {
    title: "OU Hacklahoma 2025 Hackathon",
    category: "Hackathon Project",
    techStack: ["React", "AI Platform", "Node.js", "Motion", "Git"],
    description: "Participated in an intensive 48-hour collaborative engineering battle. Co-developed and formatted an innovative technical product solving key community accessibility challenges, incorporating modern web animations and interactive telemetry inputs."
  },
  {
    title: "Dynamic Corporate Website",
    category: "Full-Stack Web",
    techStack: ["Java Servlets", "SQL", "JavaScript", "HTML/CSS", "Relational DB"],
    description: "Constructed a multi-role corporate database web app. Designed custom physical schema layouts to host clean transactions, query indexing, and interactive client validations with solid session authentication models."
  },
  {
    title: "Personal Portfolio Website",
    category: "Front-End",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    description: "Engineered and structured a custom digital resume showcasing research credentials, academic GPA, and technology stacks. Pre-configured clean responsive margins and deployed using secure automated GitHub Actions pipelines."
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Baseline: Infrastructure",
    issuer: "Google Cloud",
    logoType: "gcp",
    bgColor: "from-blue-500/10 to-blue-600/5"
  },
  {
    name: "Perform Foundational Infrastructure Tasks in Google Cloud",
    issuer: "Google Cloud",
    logoType: "gcp",
    bgColor: "from-teal-500/10 to-teal-600/5"
  },
  {
    name: "Managing Resources and Data in the Cloud",
    issuer: "Google Cloud",
    logoType: "gcp",
    bgColor: "from-indigo-500/10 to-indigo-600/5"
  },
  {
    name: "Monitor and Manage Google Cloud Resources",
    issuer: "Google Cloud",
    logoType: "gcp",
    bgColor: "from-sky-500/10 to-sky-600/5"
  },
  {
    name: "Store, Process, and Manage Data on Google Cloud (Command Line)",
    issuer: "Google Cloud",
    logoType: "gcp",
    bgColor: "from-cyan-500/10 to-cyan-600/5"
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    logoType: "cisco",
    bgColor: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    logoType: "cisco",
    bgColor: "from-green-500/10 to-green-600/5"
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    logoType: "cisco",
    bgColor: "from-yellow-500/10 to-yellow-600/5"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    skills: ["Java", "Python", "SQL", "JavaScript", "C"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "GCP", "Git", "Postman", "Streamlit", "Eclipse"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "Relational DB Design", "Query Optimization"]
  },
  {
    title: "Testing & QA",
    skills: ["Functional Testing", "Regression Testing", "API Testing", "Unit Testing"]
  },
  {
    title: "Software Engineering",
    skills: ["SDLC", "Agile/Scrum", "OOP", "UI/UX Design"]
  },
  {
    title: "Domains",
    skills: ["ML", "AI", "Data Science", "IoT", "Web Development"]
  },
  {
    title: "Operating Systems",
    skills: ["Linux/UNIX", "Windows"]
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    role: "CMC Member (4 years)",
    duration: "2020 – 2024",
    description: "Appointed as student-faculty liaison representative to coordinate feedback loops, resolve resource constraints, and advise department leaders on academic scheduling changes."
  },
  {
    role: "Lead, Peer Mentoring Program",
    duration: "2024 – Present",
    description: "Mentoring first-semester graduate students in foundational Object-Oriented paradigms (OOP), active data structures, and optimization logic."
  },
  {
    role: "Technical Workshop Coordinator",
    duration: "2022 – 2024",
    description: "Organized educational coding Bootcamps on Git version control systems, remote repository handling, and introduction to modern scripting languages."
  },
  {
    role: "Community STEM Tutor",
    duration: "2021 – 2023",
    description: "Volunteered weekly to tutor underprivileged K-12 students, teaching essential mathematics and basic algorithm blocks to foster passion for technological careers."
  }
];
