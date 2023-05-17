import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import javascript from "../public/skills/javascript.svg";
import typescript from "../public/skills/typescript.svg";
import react from "../public/skills/react.svg";
import next from "../public/skills/next.svg";
import redux from "../public/skills/redux.svg";
import tailwind from "../public/skills/tailwind.svg";
import bootstrap from "../public/skills/bootstrap.svg";
import css from "../public/skills/css.svg";
import sass from "../public/skills/sass.svg";
import html from "../public/skills/html.svg";
import node from "../public/skills/node.svg";
import express from "../public/skills/express.svg";
import mongodb from "../public/skills/mongodb.svg";

const skills = [
  {
    logo: javascript,
    name: "JavaScript",
  },
  {
    logo: typescript,
    name: "TypeScript",
  },
  {
    logo: react,
    name: "ReactJS",
  },
  {
    logo: next,
    name: "NextJS",
  },
  {
    logo: redux,
    name: "Redux",
  },
  {
    logo: tailwind,
    name: "TailwindCSS",
  },
  {
    logo: bootstrap,
    name: "Bootstrap",
  },
  {
    logo: css,
    name: "CSS",
  },
  {
    logo: sass,
    name: "Sass",
  },
  {
    logo: html,
    name: "HTML",
  },
  {
    logo: node,
    name: "NodeJS",
  },
  {
    logo: express,
    name: "ExpressJS",
  },
  {
    logo: mongodb,
    name: "MongoDB",
  },
];

const AboutUs = () => {
  const dragSkill = useRef(null);

  return (
    <div className="py-5">
      <div>
        <div>
          <h1 className="head_text text-center">About Me</h1>
        </div>
        <motion.div ref={dragSkill} className="sm:flex gap-5 justify-between">
          <div className="flex-1">
            <p className="p-5 text-slate-300 text-sm font-semibold leading-7 first-letter:uppercase first-letter:text-5xl first-letter:mr-2 break-all">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              numquam laudantium culpa rerum nemo explicabo labore nisi unde,
              error voluptatibus magnam ullam accusantium, et minus! Dolor optio
              exercitationem molestiae earum adipisci facere libero quam officia
              aspernatur illum reiciendis harum non, amet architecto,
              consequuntur ea atque praesentium sit dignissimos doloribus.
              Blanditiis harum beatae in, labore vitae veritatis itaque alias
              sapiente quas ullam dolores magni voluptatibus voluptate vel?
              Doloremque adipisci nostrum suscipit magni exercitationem quas
              quasi molestiae commodi voluptate explicabo similique, aperiam
              distinctio delectus at soluta! Corporis eveniet, illo at dicta
              quod laudantium tempora! Atque expedita est dignissimos autem
              earum possimus fuga ex ullam dicta! Nisi dolores ducimus
              architecto repellendus necessitatibus. Neque quaerat aliquam
              voluptate repellat harum illo quam minus, est reiciendis veritatis
              praesentium, quod omnis aliquid consequuntur dolorum voluptatem
              nobis odit quas fugit natus doloremque. Aut praesentium enim
              laborum eaque non. Culpa reprehenderit neque aliquam ducimus
              corrupti unde veritatis sapiente non.
            </p>
          </div>
          <div className="p-5 flex-1">
            <h2 className="text-center text-2xl font-bold">Skills</h2>
            <div className="skills flex gap-3 flex-wrap text-white font-semibold text-sm">
              {skills?.map((skills, index) => (
                <motion.span drag dragConstraints={dragSkill} key={index}>
                  <Image src={skills.logo} width={30} height={30} />
                  {skills.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
