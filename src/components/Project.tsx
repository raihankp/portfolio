"use client";

import React from "react";
import CarouselComponent from "./Carousel";
import projectData from "../../public/project/project.json";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="flex flex-col border-0 border-gray-600 items-center gap-12 lg:gap-20 py-8 md:px-16 rounded-2xl" id="project">
      <motion.h1 className="text-4xl font-bold" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        Best Projects
      </motion.h1>
      {projectData.map((project, index) => (
        <div key={index} className={`flex ${index / 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} border-0 border-green-500 gap-4 md:gap-16`}>
          <motion.div className="flex flex-1 flex-col gap-2" initial={index / 2 === 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-medium">{project.name}</h2>
            <h3 className="text-2xl text-blue-400 font-medium">{project.company}</h3>
            <h4 className="text-lg">{project.detail}</h4>
            <h4 className="text-gray-400 text-base">Tech Stack: {project["tech-stack"].join(", ")}</h4>
          </motion.div>
          <motion.div className="flex flex-1" initial={index / 2 === 0 ? { x: 50, opacity: 0 } : { x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <CarouselComponent images={project.images} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Project;
