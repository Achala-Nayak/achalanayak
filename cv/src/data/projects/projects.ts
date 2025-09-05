import { Project } from './types';

export const projects: Project[] = [
  {
    title: "HirePilot",
    techStack: ["Next.js", "Tailwind CSS", "FastAPI", "Python", "Google Gemini AI", "SerpApi", "ReportLab", "PyPDF2", "Pydantic"],
    description:
      "HirePilot is an intelligent job search platform that combines advanced AI technology with automated resume tailoring to help job seekers find and apply for positions more effectively. The platform streamlines the job search process by automatically customizing resumes for specific job postings and providing comprehensive job search capabilities.",
    link: {
      label: "github.com",
      href: "https://github.com/Achala-Nayak/HirePilot",
    },
    category: "AI/ML",
    featured: true,
  },
  {
    title: "Multi-Agent Approach for Iterative Refinement in Visual Content Generation",
    techStack: ["Next.js", "Fabric.js", "PostgreSQL", "FastAPI", "LLaMA 2", "Pixtral", "GPT-4o-mini", "Stable Diffusion XL", "SAM", "Docker", "PyTorch", "Python"],
    description:
      "Engineered a full-stack system integrating a Canva-like editor with real-time agent interaction via REST APIs and Server-Sent Events, enabling users to monitor and influence AI decision-making live. Developed a multi-agent architecture orchestrated by a lightweight FastAPI control server, where specialized agents—Critic, Planning, Execution and Evaluation—iteratively refine AI-generated visual designs. Deployed state-of-the-art models including LLaMA 2, Pixtral and GPT-4o-mini, Stable Diffusion XL, and Florence, each containerized using Docker and served on a shared T4 GPU for memory-efficient parallel inference.",
    category: "AI/ML",
    featured: true,
  },
  {
    title: "Cuisine & Code Chronicles",
    techStack: ["Next.js", "HTML", "CSS", "MongoDB", "Prisma ORM", "Firebase", "NextAuth"],
    description:
      "Developed a dynamic blog website centered on travel, food, and tech using Next.js, delivering fast and SEO-optimized performance. Implemented a RESTful API to handle backend services, enabling efficient and scalable data interactions. Leveraged Prisma ORM with MongoDB to streamline database operations and ensure maintainable data architecture. Integrated Firebase for secure image storage and fast media retrieval across the platform. Employed NextAuth for robust and secure user authentication, protecting user data and managing sessions effectively.",
    category: "Web Development",
    featured: true,
  },
  {
    title: "AI Engineering Academy",
    techStack: ["Next.js", "HTML", "CSS", "MySQL", "Prisma", "Stripe", "UploadThing", "Mux"],
    description:
      "Designed an innovative e-learning platform focused on revolutionizing online education through personalized Generative AI content. Enabled tailored student experiences by integrating video lectures, summarized lessons, and downloadable documents. Developed features for educators including course creation, progress tracking, and real-time student communication. Aimed to redefine digital education by aligning with the evolving demands of AI-driven learning and modern technological challenges.",
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Yet Another KRaft",
    techStack: ["Python", "FastAPI", "Thunder Client", "RAFT Consensus"],
    description:
      "YAKt is an educational endeavor delving into the intricate workings of distributed systems and consensus algorithms, specifically emulating the mechanisms of Zookeeper and Kraft. Serving as a learning tool, it offers a detailed exploration of the Raft Consensus algorithm, ZAB Consensus algorithm, and Kafka's architecture. Implemented in Python with FastAPI, YAKt features a distributed node management system focusing on leader election, log replication, and fault tolerance. The project aims to demystify complex architectures and provide hands-on insights into the realm of distributed systems.",
    category: "Data Processing",
  },
];
