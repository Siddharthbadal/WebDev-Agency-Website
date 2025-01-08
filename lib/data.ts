import React from "react";
import { LuShieldCheck } from "react-icons/lu";
import { LuAnvil } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";


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
    name: "Services",
    hash: "#services",
  },
  {
    name: "Tech",
    hash: "#techs",
  },
  {
    name: "Process",
    hash: "#process",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const processData = [
  {
    title: "Understaning business needs",
    location: "Find Call",
    description:
      "In the first phase, we try to undesratnd business needs and goals with products of the company.",
    icon: React.createElement(LuPhone),
    date: "Let's talk",
  },
  {
    title: "Project requirements",
    location: "Market Needs",
    description:
      "In the second phase, we analyze your market conditions, online possibilities and present the techs options for the project.",
    icon: React.createElement(LuShieldCheck),
    date: "Let's Diccuss",
  },
  {
    title: "Start the Project ",
    location: "Set Up",
    description:
      "After requirements gathering, in the final phase of out meeting we start the project and create a continus feedback system. ",
    icon: React.createElement(LuAnvil),
    date: "Let's Start",
  },
] as const;

export const projectsData = [
  {
    title: "Web Development",
    description:
      "Building web apps from scratch. Design to Development. A mobile friendly app for your business.",
    tags: ["Next.js","React", "Tailwind", "Bootstrap", "SEO", "Farmer Motion"],
    imageUrl: image1,
  },
  {
    title: "Backend Developments",
    description:
      "Developing apps with backend. Rest APIs. Admin Panel. Permissions and authentications. Hosting on cloud.",
    tags: ["Django", "Python", "Laravel", "PHP", "javaScript", "AWS"],
    imageUrl: image2,
  },
  {
    title: "Data Driven Apps",
    description:
      "Building data driven apps. Dashboards. Analytics apps. Automations. and Performance tracking projects.",
    tags: ["Python", "Next.js", "FastAPI", "Streamlit",  "Cloud", "Linux"],
    imageUrl: image3,
  },
] as const;

export const techsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;