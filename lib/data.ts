import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tkproject from "@/public/tkproject.webp";
import campingwarriors from "@/public/campingwarriors.webp";
import equipesst from "@/public/equipesst.webp";
import renovationcapital from "@/public/renovationcapital.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Learning & Freelancing",
    location: "Cebu, PH",
    description:
      "I started learning WordPress, HTML5 & CSS3 for 6 months. I immediately found a job as a WordPress developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "WordPress Developer & SEO Specialist",
    location: "New York, USA",
    description:
      "I worked as a WordPress developer and SEO specialist for a year. I also upskilled to React and becoming a full stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Junior Full-Stack Developer",
    location: "Cebu, PH",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
  {
    title: "Senior WordPress Developer",
    location: "Cebu, PH",
    description:
      "I've become a senior WordPress developer working as a freelancer. I've developed and supervised 15-plus WordPress sites, including the SEO. I'm open to full-time opportunities.",
    icon: React.createElement(FaWordpress),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Équipe SST",
    description:
      "[www.equipesst.com] Co-developed the front-end and the backend of the site using Webflow CMS.",
    tags: ["Webflow", "CSS", "HTML", "Webflow CMS"],
    imageUrl: equipesst,
  },
  {
    title: "The Camping Warriors",
    description:
      "[www.thecampingwarriors.com] Worked as a WordPress developer. Optimized loading speed and tighten its security.",
    tags: ["WordPress", "HTML", "CSS", "Javascript", "PHP"],
    imageUrl: campingwarriors,
  },
  {
    title: "Renovation Capital",
    description:
      "[www.renovationcapital.com] Worked as a full-stack WP developer, implementing investor login and property listing features.",
    tags: ["WordPress", "HTML", "CSS", "Javascript", "PHP"],
    imageUrl: renovationcapital,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "WordPress",
  "Google Sites",
  "Figma",
  "Webflow",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Java",
  "PHP",
  "Framer Motion",
  "ReactNative",
] as const;
