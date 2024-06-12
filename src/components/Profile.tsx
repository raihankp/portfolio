"use client";

import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

const Profile = () => {
  const MotionButton = motion(Button);
  const MotionImage = motion(Image);
  return (
    <div className="flex flex-col-reverse md:flex-row border-0 border-gray-500 gap-16 lg:px-32 lg:py-8" id="profile">
      <div className="profile-desc flex flex-col border-0 border-red-500 gap-8 items-center md:items-start">
        <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }} className="text-5xl font-semibold">
          Hello! I&apos;m Raihan
        </motion.h1>
        <motion.p className="text-lg" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          I&apos;m passionate about <span className="font-bold text-blue-400">software engineering</span> and <span className="font-bold text-blue-400">web development</span>. With a strong foundation in creating dynamic and responsive web applications, I bring past project experience and a keen eye for detail to every project.
        </motion.p>
        <MotionButton variant="light" href="#contact" className="font-semibold px-4 py-2" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          Contact Me!
        </MotionButton>
      </div>
      <div className="profile-image border-0 border-green-500 flex flex-col items-center md:items-start">
        <div className="relative w-72 h-72">
          <MotionImage src="/profile-pict.jpg" fill={true} className="rounded-full" alt="Profile Pict" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
