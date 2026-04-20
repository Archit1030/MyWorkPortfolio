export const personalInfo = {
  name: 'Archit Badoni',
  title: 'AI/ML Engineer & Full-Stack Developer',
  tagline: 'Building intelligent, production-ready solutions',
  email: 'archit.badoni1015@gmail.com',
  phone: '+91-9997294048',
  location: 'Manipal University Jaipur',
  photo: 'https://customer-assets.emergentagent.com/job_893046fd-c079-4735-9d41-0a1911fa8a15/artifacts/07pf4ftc_knjnjjnjnjnjn.jpeg',
  resume: '/Resume_ArchitBadoni.pdf',
  links: {
    portfolio: 'https://jazzy-swan-29a4be.netlify.app/',
    linkedin: 'https://www.linkedin.com/in/archit-badoni/',
    github: 'https://github.com/Archit1030'
  }
};

export const about = {
  shortBio: "AI Engineering Intern with expertise in building FastAPI-based microservices, computer vision applications, and full-stack AI platforms. Passionate about creating practical, production-ready solutions that bridge cutting-edge AI research with real-world applications.",
  education: {
    institution: 'Manipal University Jaipur',
    degree: 'B.Tech in Computer Science Engineering (AI & ML)',
    duration: 'Aug 2023 - May 2027',
    cgpa: '7.4'
  }
};

export const experience = [
  {
    company: 'EnterLeap Enterprises',
    role: 'AI Engineering Intern',
    location: 'Mumbai, India (Remote)',
    duration: 'Oct 2025 - Nov 2025',
    highlights: [
      'Built a FastAPI-based document summarization service for PDF, DOCX, PPTX, and TXT with API key authentication, rate limiting, PostgreSQL storage, and async background jobs',
      'Created a custom Manim-based video generation pipeline, removing third-party video APIs and cutting cost while adding a unique automation layer',
      'Implemented LLM fallback across Groq LLaMA 3.1, Ollama, and Google Gemini, and deployed the system with Docker, logging, async tests, and cleanup workflows'
    ]
  }
];

export const skills = {
  'Programming Languages': ['Python', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
  'AI & ML': ['PyTorch', 'OpenCV', 'YOLOv8', 'Hugging Face', 'MediaPipe', 'NumPy', 'Pandas'],
  'Development': ['FastAPI', 'PostgreSQL', 'Docker', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'REST APIs', 'WebSockets']
};

export const projects = [
  {
    title: 'Interview Mirror',
    subtitle: 'AI-Powered Interview Coaching Platform',
    description: 'Built a real-time coaching system using MediaPipe Holistic to track 543 body landmarks for posture, stress, gesture, and gaze analysis. Used One Euro Filter smoothing to reach ~15 FPS with <100ms latency, and integrated Google Gemini for feedback scoring.',
    tech: ['Python', 'MediaPipe Holistic', 'OpenCV', 'FastAPI', 'WebSockets', 'React', 'TypeScript', 'Google Gemini'],
    date: 'Jan 2025',
    links: {
      demo: '#',
      github: 'https://github.com/Archit1030'
    },
    highlights: [
      '543 body landmark tracking',
      '~15 FPS with <100ms latency',
      'Real-time AI feedback'
    ]
  },
  {
    title: 'Float Chat AI',
    subtitle: 'Oceanographic Data Intelligence Platform',
    description: 'Built a platform processing 122,000+ ARGO measurements for interactive visualizations and NLP-based scientific queries. Developed a FastAPI + PostgreSQL backend and Streamlit dashboard with Plotly visualizations; deployed on Railway and Streamlit Cloud.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas', 'Streamlit', 'Plotly', 'Hugging Face'],
    date: 'Dec 2024',
    links: {
      demo: 'https://flowchat-ai.streamlit.app',
      github: 'https://github.com/Archit1030/FloatChat-AI'
    },
    highlights: [
      '122,000+ data points processed',
      'Interactive visualizations',
      'NLP-based queries'
    ]
  },
  {
    title: 'HairStyleAI',
    subtitle: 'AI-Powered Hairstyle Transfer Platform',
    description: 'Built an AI hairstyle-transfer platform with a Next.js, React, TypeScript, Tailwind CSS frontend and FastAPI backend. Integrated HairFastGAN, StyleGAN2, and face_recognition for hairstyle transfer and celebrity matching while preserving identity.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PyTorch', 'HairFastGAN', 'StyleGAN2'],
    date: 'Nov 2024',
    links: {
      demo: '#',
      github: 'https://github.com/Archit1030/HairStyleAI'
    },
    highlights: [
      'Identity preservation',
      'Celebrity matching',
      'Real-time transfer'
    ]
  }
];

export const certifications = [
  'ServiceNow Administration Fundamentals On-Demand - ServiceNow (2026)',
  'Database Design - Oracle Academy (Nov 2024)',
  'Database Programming with SQL - Oracle Academy (Nov 2024)',
  'Data Structures and Algorithms - Cisco Academy (Oct 2024)',
  'Python Essentials 1 & 2 - CodeChef (Nov 2024)'
];

export const socialLinks = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Archit1030' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/archit-badoni/' },
  { name: 'Email', icon: 'email', url: 'mailto:archit.badoni1015@gmail.com' },
  { name: 'Resume', icon: 'file', url: '/Resume_ArchitBadoni.pdf' }
];