import React from "react";
// import Image from 'next/image';
// import javascriptt from '../public/javascript.png';
// import tailwindcsss from '../public/tailwindcss.png';
// import reactjs from '../public/react.png';
// import nextjs from '../public/nextjs.png';
// import bootstrap from '../public/bootstrap.png';
// import  csss from '../public/css.png';
// import  htmll from '../public/html.png';
// import  githubb from '../public/github.png';
// import  mongodbb from '../public/mongodb.png';
// import  nodejs from '../public/nodejs.png';
// import  reduxx from '../public/redux.png';

const Skills = () => {
  return (
    <div className="h-[100vh] flex flex-col align-middle justify-center">
      <div className="wraper">
        <div className="title text-slate-400 text-center text-lg mb-3">
          Skills
        </div>
        <div className="skills-icons grid grid-cols-4 justify-items-center w-96 mx-auto gap-3">
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={javascriptt} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              JavaScript
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={reactjs} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              ReactJS
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={reduxx} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              Redux
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={nextjs} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              NextJS
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={tailwindcsss} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              TailwindCSS
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={bootstrap} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              Bootstrap
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={csss} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              CSS
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={htmll} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              HTML
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={nodejs} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              NodeJS
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={mongodbb} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              MongoDB
            </span>
          </div>
          <div className="logo-icon bg-white text-center rounded-md">
            <Image src={githubb} alt="JavaScript" width={100} />
            <span className="text-black text-sm font-semibold text-center">
              Git
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
