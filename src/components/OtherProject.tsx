"use client";

import React from "react";
import otherProjectData from "../../public/project/otherProject.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

const OtherProject = () => {
  const MotionCard = motion(Card);
  return (
    <div className="flex flex-col border-0 border-blue-500 items-center gap-8">
      <motion.h1 className="text-3xl font-bold" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        Other Project
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8">
        {otherProjectData.map((project, index) => (
          <MotionCard
            key={index}
            className="bg-gray-900 text-white rounded-2xl p-2 hover:!scale-105 ease-in-out duration-300"
            style={{ width: "20rem" }}
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
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
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default OtherProject;
