import React from "react";
import CarouselComponent from "./Carousel";
import projectData from "../../public/project/project.json";

const Project = () => {
  return (
    <div className="flex flex-col border-0 border-gray-600 items-center gap-20 py-8 px-16 rounded-2xl" id="project">
      <h1 className="text-4xl font-bold">Best Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} className={`flex ${index / 2 === 0 ? "flex-row" : "flex-row-reverse"} border-0 border-green-500 gap-16`}>
          <div className="flex flex-1 flex-col gap-2">
            <h2 className="text-3xl font-medium">
              {project.name} | {project.company}
            </h2>
            <h3 className="text-lg">{project.detail}</h3>
            <h4 className="text-gray-400 text-base">Tech Stack: {project["tech-stack"].join(", ")}</h4>
          </div>
          <div className="flex flex-1">
            <CarouselComponent images={project.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
