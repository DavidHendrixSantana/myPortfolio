import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: "David Salvador Martinez Santoyo",
    title: "Fullstack Software Developer",
    introduction: "Innovative Software Engineering Lead with a 5-year track record of driving the full development lifecycle of enterprise-scale applications. Beyond full-stack mastery, I empower organizations by deploying AI-driven solutions, including custom-tuned Large Language Models and intelligent RAG systems. I specialize in leading technical teams to deliver high-performance, AI-augmented software that enhances user experience and operational efficiency.",
    contact: {
      email: "dasalvasuper@gmail.com",
      phone: "(52) 4433318932",
      location: "Morelia Michoacán",
      github: "https://github.com/DavidHendrixSantana"
    }
  },
  experience: [
    {
      id: 4,
      company: "Territorium",
      role: "Fullstack Software Developer",
      period: "Remote 2023-Present",
      description: "Architecting and scaling enterprise-level LMS platforms utilizing Laravel, PHP, and a modern frontend stack (Vue.js, React, React Native) for secure credentialing and exam administration. Orchestrating high-performance API design with Python (FastAPI) and deploying resilient serverless microservices on Azure and AWS. Spearheading AI initiatives by integrating LLMs and Autonomous Agents to automate complex workflows and drive system-wide intelligence."
    },
    {
      id: 3,
      company: "One Project",
      role: "Backend Development Lead",
      period: "Remote 2023-2024",
      description: "Led a high-performing backend engineering team, overseeing sprint planning, task delegation, and cross-functional client communication. Established rigorous engineering standards through automated unit testing and comprehensive code reviews for Django-based ecosystems. Engineered a scalable API architecture using Python and PostgreSQL, featuring real-time data synchronization via WebSockets, optimized cron jobs, and automated notification systems."
    },
    {
      id: 2,
      company: "Alkemy & Grupo Ontwice - Hyundai Motors",
      role: "Full Stack Web Developer",
      period: "CD. MX. 2023 - 2024",
      description: "Optimized Hyundai's digital infrastructure by providing high-availability support and seamless content integration. Conceptualized and deployed a dynamic, multi-bank vehicle financing estimator that streamlined the user purchasing journey. This tool bridged the gap between customer intent and financial approval, significantly increasing digital engagement for the brand."
    },
    {
      id: 1,
      company: "State Attorney's Office",
      role: "Full Stack Software Developer, Instructor & Team Lead",
      period: "Morelia Mich. 2020-2023",
      description: "Directed the end-to-end lifecycle of 10+ comprehensive systems, from requirements gathering and database design to UI/UX execution. Mentored junior developers in adopting industry-standard best practices and modernizing legacy architectures. Notable Achievement: Awarded 2nd Place in a National Competition hosted by the National Institute for Transparency (INAI) for developing innovative data protection and accessibility solutions."
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Technological University of Morelia",
    period: "2015-2019"
  },
  skills: {
    languages: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["Laravel", "Django", "Vue.js", "React", "React Native", "FastAPI"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "chroma"],
    tools: ["Git", "RAG", "Docker", "Azure Cloud", "AWS", "Jenkins", "Jira", "Redis", "Celery", "RabbitMQ"],
    methodologies: ["Agile", "Scrum", "Test-Driven Development", "Clean Code"]
  },
  certifications: [
    "Building Generative AI-Powered Applications with Python by IBM",
    "Generative AI: Foundation Models and Platforms By IBM",
    "ChatGPT Prompt Engineering for Developers By deeplearning.IA",
    "Django Web Framework By Meta",
    "Programming in Python By Meta",
    "Introduction to Databases for Back-End Development By Meta"
  ]
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {}
});

export default portfolioSlice.reducer;

export const selectProfile = (state) => state.portfolio.profile;
export const selectExperience = (state) => state.portfolio.experience;
export const selectEducation = (state) => state.portfolio.education;
export const selectSkills = (state) => state.portfolio.skills;
export const selectCertifications = (state) => state.portfolio.certifications;
