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
    title: "SEO Specialist & WordPress Developer",
    location: "Temporary Kitchens 123 — Washington, DC",
    description:
      "Tasked on optimizing existing pages, creating dynamic pages in bulk, creating content using AI, fixing indexing issues from GSC, and fixing site speed performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Website Developer & Technical Support",
    location: "Tri-tech Digital Solution LTD — Newport, UK",
    description:
      "Tasked on developing / fixing websites for clients, setting up payment channels, providing SEO & technical support, and managing link building.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "WordPress Developer & SEO Specialist",
    location: "Site Ninjas Digital Design & Marketing — Sydney, UK",
    description:
      "Tasked on developing and designing websites for clients and building a foundational SEO. Also tasked to manage Google Business Profiles and social media channels.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "WordPress Developer & SEO Specialist",
    location: "DM Pro — Zagreb, HR",
    description:
      "Tasked on designing and publishing site pages, crafting SEO optimized content, link building, and fixing technical issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Équipe SST",
    description:
      "Co-developed the front-end and the backend of the site using Webflow CMS.",
    tags: ["Webflow", "CSS", "HTML", "Webflow CMS"],
    imageUrl: equipesst,
    websiteUrl: "https://www.equipesst.com",
  },
  {
    title: "The Camping Warriors",
    description:
      "Worked as a WordPress developer. Optimized loading speed and tighten its security.",
    tags: ["WordPress", "HTML", "CSS", "Javascript", "PHP"],
    imageUrl: campingwarriors,
    websiteUrl: "https://www.thecampingwarriors.com",
  },
  {
    title: "Renovation Capital",
    description:
      "Worked as a full-stack WP developer, implementing investor login and property listing features.",
    tags: ["WordPress", "HTML", "CSS", "Javascript", "PHP"],
    imageUrl: renovationcapital,
    websiteUrl: "https://www.renovationcapital.com",
  },
  {
  title: "Temporary Kitchens 123",
  description:
    "Worked as a WordPress Developer and SEO specialist, fixing site issues and indexing issues.",
  tags: ["WordPress", "HTML", "CSS", "Javascript", "PHP"],
  imageUrl: tkproject,
  websiteUrl: "https://www.temporarykitchens123.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "PhpMyAdmin",
  "SQL",
  "WordPress",
  "Google Sites",
  "Figma",
  "Webflow",
  "PHP",
] as const;
