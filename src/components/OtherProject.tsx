"use client";

import React from "react";
import otherProjectData from "../../public/project/otherProject.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OtherProject = () => {
  return (
    <div className="flex flex-col border-0 border-blue-500 items-center gap-8">
      <h1 className="text-3xl font-bold">Small Project</h1>
      <div className="flex flex-row gap-8">
        {otherProjectData.map((project, index) => (
          <Card key={index} className="bg-gray-900 text-white rounded-2xl p-2" style={{ width: "20rem" }}>
            <Card.Body className="flex flex-col flex-grow">
              <Card.Title className="text-xl font-semibold">{project.name}</Card.Title>
              <Card.Subtitle className="text-gray-400">{project.company}</Card.Subtitle>
              <hr className="my-3" />
              <Card.Text className="font-normal">{project.detail}</Card.Text>

              <Card.Text className="text-gray-400 text-sm mt-2 mb-3">{project["tech-stack"].map((tech) => tech + " ")}</Card.Text>
              <Button href={project.link} className="mt-auto text-black font-semibold bg-slate-50 hover:bg-slate-300 border-0">
                See Repo
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
