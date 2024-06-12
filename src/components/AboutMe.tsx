"use client";

import { motion } from "framer-motion";
import React from "react";
import technologies from "../../public/technologies/technologies.json";

const AboutMe = () => {
  return (
    <div className="flex flex-col border-0 border-gray-600 items-center gap-12 py-8 md:px-16 rounded-2xl" id="aboutme">
      <motion.h1 className="text-4xl font-bold" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        About Me
      </motion.h1>
      <div className="flex flex-col gap-8 px-32">
        <div className="flex flex-col">
          <motion.h2 className="text-lg text-center" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            A 21 years old undergraduate student majoring in Computer Science, University of Indonesia. Interested in Software Engineer and Website Developer. Have the ability to be an honest, trustworthy, and reliable leader in a team,
            often helps other people at solving problems and have a critical thinking from past experience. Skilled in developing website applications from past project
          </motion.h2>
        </div>
        <div className="flex flex-col gap-8">
          <motion.h2 className="text-2xl text-center font-semibold" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            Technologies i&apos;ve been working with
          </motion.h2>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            {technologies.map((technology, index) => (
              <motion.div
                key={index}
                className="flex flex-row border-0 w-40 p-2 bg-slate-800 rounded-lg items-center gap-2 hover:!scale-110 ease-in-out duration-300"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={technology.image} alt={technology.name} className="w-10 h-10 bg-cover" />
                <h3 className="text-slate-300 font-semibold">{technology.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
