import React from "react";
import { motion } from "framer-motion";
import { image } from "next";

const SliderSection = () => {
  return (
    <div>
      <div className="md:h-[100vh] sm:flex justify-around items-center slide py-5">
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -600 }}
          transition={{
            // duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="text-2xl font-semibold text-white">
            Full-Stack Revolutionary
          </h1>
          <h1 className="head_text">Hey! I'm Sairaj Aftab</h1>
          <p className="text-lg font-semibold text-white italic">
            Fusing Creativity and Technical Skill to Bring Ideas to Life
          </p>
          <button className="border rounded-md py-2 px-10 text-lg font-semibold">
            Contact Me
          </button>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 600 }}
          transition={{
            // duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex flex-col items-center sm:block mt-5 sm:mt-0"
        >
          <img
            className="rounded-md"
            src="https://plus.unsplash.com/premium_photo-1678935941839-e66f46191c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderSection;
