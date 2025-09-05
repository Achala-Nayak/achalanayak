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

My passion for technology began during my undergraduate years at PES University, where I discovered the fascinating intersection of artificial intelligence and software development. What started as curiosity about how machines can solve complex problems has evolved into a professional career focused on building innovative AI solutions.

### From Student to Professional

During my time at PES University, I developed a strong foundation in computer science fundamentals while exploring various domains including web development, database management, and artificial intelligence. This diverse exposure helped me understand how different technologies can work together to create meaningful solutions.

My internship experience at Hewlett Packard Enterprise provided valuable insights into enterprise-level software development, where I learned about large-scale system architecture and agile development methodologies that are crucial in professional environments.

### Current Role at Deloitte

As an Analyst at Deloitte, I'm working at the forefront of digital transformation, helping organizations leverage AI and data-driven insights to solve complex business challenges. This role allows me to bridge the gap between technical innovation and business value, ensuring that AI solutions are not just technically sound but also practically applicable.

## Technical Expertise

My technical approach focuses on:

1. **Full-Stack Development**: Building end-to-end solutions using modern web technologies
2. **AI Integration**: Incorporating artificial intelligence into practical applications  
3. **Data Management**: Working with various databases and big data technologies
4. **Cloud Technologies**: Leveraging cloud platforms for scalable solutions

## What I'm Learning Now

I'm currently exploring:

- Advanced AI techniques and their business applications
- Cloud-native development patterns
- Modern data engineering practices
- Emerging technologies in the AI space

## Beyond Technology

Outside of my professional work, I enjoy solving coding challenges on platforms like LeetCode, contributing to open-source projects, and staying updated with the latest trends in technology. I believe in continuous learning and sharing knowledge with the community.

## Let's Connect

I'm always interested in discussing:
- AI applications in business
- Full-stack development best practices  
- Career opportunities in tech
- Collaborative projects and learning opportunities

Feel free to reach out if you'd like to connect, discuss technology, or explore potential collaboration opportunities!
`,
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
