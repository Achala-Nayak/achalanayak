import { GitHubIcon, LinkedInIcon, CodeIcon } from "@/components/icons";
import { projects } from "./projects";

export const RESUME_DATA = {
  name: "Achala Nayak",
  initials: "AN",
  location: "Bangalore, India",
about: "Analyst at Deloitte, Working with AI Solutions",
summary:
  "I'm Achala Nayak, a computer science engineer passionate about building AI-powered applications and innovative software solutions. Currently an Analyst at Deloitte, I explore how technology can drive impact by blending logic with creativity. My journey includes presenting research on multi-agent AI systems at an international conference, volunteering to teach underprivileged students, and pursuing creative outlets like reading, painting, and traveling. Driven by curiosity and growth, I aim to keep learning, building, and creating meaningful impact through technology.",
avatarUrl: "/achalanayak.png",
personalWebsiteUrl: "https://achalanayak.com",
resumeUrl: "/Achala_Nayak.pdf",
extendedBio: `
## My Journey in Technology

My fascination with technology began at a young age—I was always curious about how things work and how they are built. This curiosity naturally evolved into a passion for solving problems and creating impactful solutions through software and AI.

### From Student to Professional

During my undergraduate studies, I built a strong foundation in computer science with a particular interest in cloud computing, linear algebra, machine learning, statistics, data science, DBMS, and data structures. These subjects helped me understand both the theoretical and practical sides of technology.

At Hewlett Packard Enterprise, I worked on streamlining application deployment using a metadata-driven approach, improving the logic for selecting required application layers during cluster deployments. This experience taught me how large-scale systems are designed and optimized for real-world impact.

### Current Role at Deloitte

Currently, at Deloitte, I’m expanding my expertise by working with SAP Data Factory, gaining valuable exposure to enterprise data ecosystems and their role in digital transformation.

## Technical Expertise

I feel most confident in:

Python & Software Development – writing clean, efficient code for end-to-end applications  
Data Science & AI – applying ML/statistics to solve meaningful problems  
Cloud Technologies – leveraging scalable infrastructures for deployments  

One of my most exciting projects is HirePilot, a platform that automates the job application process by tailoring resumes, parsing job descriptions, and generating customized responses. This project reflects my passion for combining AI with practical applications that save time and create real-world value.

## What I'm Learning Now

I'm currently focusing on enhancing my expertise in:

- Data Science and AI (ML, LLMs, applied AI systems)  
- Enterprise Data Systems (SAP, data integration)  
- Scalable Cloud Solutions  

## Beyond Technology

Outside of work, I love building personal projects that challenge me to learn new skills and explore emerging technologies. I believe continuous learning, curiosity, and experimentation are the best ways to grow in tech.

## Let's Connect

I’m always open to meaningful conversations about technology, career growth, and emerging trends in AI and data science.  
Whether you’d like to discuss ideas, share insights, or simply connect, feel free to reach out!
`
,
  contact: {
    email: "achala.nayak2@gmail.com",
   
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Achala-Nayak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/achalanayak/",
        icon: LinkedInIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/achalanayak/",
        icon: CodeIcon, 
      },
    ],
  },
  education: [
    {
      school: "PES University",
      degree: "Bachelor of Technology in Computer Science",
      specialization: "Machine Intelligence and Data Science",
      grade: "8.13 CGPA",
      start: "2021",
      end: "2025",
    },
    {
      school: "Deeksha Center For Learning",
      degree: "Karnataka State Board",
      grade: "100% (PCMC)",
      start: "2019",
      end: "2021",
    },
    {
      school: "BGS National Public School",
      degree: "CBSE",
      grade: "95.3%",
      start: "2011",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Deloitte",
      link: "https://www2.deloitte.com/",
      badges: ["On Site"],
      title: "Analyst",
      start: "2025",
      end: "present",
      description: "Working as an Analyst focusing on AI solutions and data-driven insights. Leading projects in automation and digital transformation initiatives.",
    },
    {
      company: "Hewlett Packard Enterprise (HPE)",
      link: "https://www.hpe.com/",
      badges: ["Intern"],
      title: "Cloud Developer Intern",
      start: "February 2025",
      end: "July 2025",
      description: "Worked on software development projects focusing on cloud technologies and enterprise solutions. Gained experience in large-scale software architecture and agile development methodologies.",
    },
  ],
  skills: [
    "Languages: C++, Python, JavaScript, TypeScript, HTML, CSS, MySQL",
    "Web Development: React, Node.js, Next.js, Bootstrap, FastAPI",
    "Tools: Git/GitHub, Unix Shell, Matlab",
    "Big Data: Kafka, AWS, Docker", 
    "Databases: MongoDB, MySQL, PostgreSQL, Prisma",
    "AI/ML: Machine Learning fundamentals, Data Analysis, AI solution development",
  ],
  projects,
  extraCurricular: [
    {
      title: "Coding Challenges Enthusiast", 
      description:
        "Active participant on LeetCode and other competitive programming platforms, consistently solving algorithmic problems and improving problem-solving skills.",
    },
    {
      title: "Open Source Contributor",
      description:
        "Contributing to various open-source projects on GitHub, focusing on web development and AI-related repositories to give back to the developer community.",
    },
    {
      title: "Technology Meetups & Conferences",
      description:
        "Regular attendee of local technology meetups and conferences, staying updated with latest industry trends and networking with fellow developers.",
    },
  ],
  publications: [
    {
      title:
        "A Multi-Agent Approach for Iterative Refinement in Visual Content Generation",
      description:
        "This work introduces a multi-agent system that enhances foundational image generation models like Stable Diffusion by adding iterative refinement and post-editing capabilities. Traditional models produce high-quality visuals from text prompts but lack fine control for tasks such as text alignment, layout adjustments, and object replacement—limitations that restrict their usefulness in industries like advertising, where precision and consistency are crucial.Our approach begins with generating an initial image from text prompts and specified objects, then applies a refinement loop using LLM and VLM-based agents. These agents analyze visual cues, detect issues (such as misalignment or inaccuracies), and iteratively apply corrections—closely simulating the way humans edit images. This system allows users to quickly generate consistent, customizable visuals like posters, banners, and flyers, while still offering the flexibility of manual editing.By bridging creativity with control, the proposed framework not only accelerates content creation but also reduces cost and repetition, making it particularly impactful for industries that rely heavily on visual storytelling and brand consistency.",
      publisher: "AAAI 2025 | WMAC ",
      date: "2025",
      status: "Accepted",
      websiteUrl: "https://multiagents.org/workshop",
      resourceUrl: "https://multiagents.org/2025_artifacts/a_multi_agent_approach_for_iterative_refinement_in_visual_content_generation.pdf",
      citation: "_",
      tags: [
        "Artificial Intelligence",
        "Multi Agent System", 
        "Visual Editing",
        "LLM",
        "VLM",
      ],
      showLinks: true,
    },
  ],
} as const;
