import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AmazonProject from "@/public/AmazonProject.png";
import DogVision from "@/public/DogVision.png";
import Pokedex from "@/public/Pokedex.png";

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


export const projectsData = [
  {
    title: "DogVision" as string,
    description:
      "A Machine Learning based image processing tool for detecting different breed of the dogs." as string,
    tags: ["Google Colab", "Python", "TensorFlow","Numpy","Data Visualization"],
    imageUrl: DogVision,
    gitUrl:"https://github.com/Shre233/DogVision",
  },
  {
    title: "AmazonClone" as string,
    description:
      "Developed a fully functional e-commerce web application closely resembling Amazon’s user interface and functionalities." as string,
    tags: [ "NodeJs", "Firebase", "Stripe API", "ReactJs","Material UI" ],
    imageUrl: AmazonProject,
    gitUrl:"https://github.com/Shre233/amazon-clone",
  },
  {
    title: "Pokedex" as string,
    description:
      "Created a digital Pokedex utilizing the PokeAPI to provide users with comprehensive information about Pokemon species, abilities and types" as string,
    tags: ["React", "API","Node.js","CSS","JavaScript"],
    imageUrl: Pokedex,
    gitUrl:"https://github.com/Shre233/PokedexApp",
  },
] as const;

export const projectval=[
  {
    title:"DogVision",
    description:"A Machine Learning Based Image Processing tool for detecting different breed of dogs.",
    tags:["Google Colab","Python","TenserFlow","Numpy","Data Visualization"],
    imageUrl:DogVision,
    gitUrl:"https://github.com/Shre233/DogVision"
  },
  {
    title: "AmazonClone" as string,
    description:
      "Developed a fully functional e-commerce web application closely resembling Amazon’s user interface and functionalities." as string,
    tags: [ "NodeJs", "Firebase", "Stripe API", "ReactJs","Material UI" ],
    imageUrl: AmazonProject,
    gitUrl:"https://github.com/Shre233/amazon-clone",
  },
  {
    title: "Pokedex" as string,
    description:
      "Created a digital Pokedex utilizing the PokeAPI to provide users with comprehensive information about Pokemon species, abilities and types" as string,
    tags: ["React", "API","Node.js","CSS","JavaScript"],
    imageUrl: Pokedex,
    gitUrl:"https://github.com/Shre233/PokedexApp",
  },
]

export const expData=[
  {
    role:"Editorial Lead",
    club:"IIIT Kernel",
    description:{
      point1: "Invited Alumni and Industry Professionals for Career Guidance Sessions for over 200+ students.",
      point2: "Enhanced communication skills and broadened professional networks."
    },
  },
  {
    role:"Technical Team",
    club:"Sports Club",
    description:{
      point1: "Developed the Official Website for Sports Club of IIIT Kota",
      point2: "Collaborate with other talented individuals, fostering creativity and innovation through shared ideas."
    },
  },
  {
    role:"Student Representative",
    club:"DUGC Committee",
    description:{
      point1: "Represents the interests, concerns, and suggestions of fellow students within the Department Undergraduate Committee (DUGC).",
      point2: "Developed leadership, communication, and negotiation skills through active participation in committee meetings.",
    },
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TensorFlow",
  "Data Visualization",
  "Data Preprocessing",
  "Machine Learning",
  "Deep Learning",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "C/C++",
  "MySQL",
  "Firebase",
  "Tableau",
  "Mongoose",
  "Framer Motion",
  "Leadership",
  "Creativity",
  "Public Speaking",
  "Strategic Planner",
] as const;