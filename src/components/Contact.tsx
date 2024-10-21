"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const MotionLink = motion(Link);

  return (
    <div id="contact" className="flex flex-col border-0 border-blue-500 items-center gap-8">
      <motion.h1 className="text-3xl font-bold" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
        Contact Me
      </motion.h1>
      <div className="flex flex-row gap-16 items-center">
        <MotionLink href="https://github.com/raihankp" target="_blank" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          <Image src="/contact/github.png" alt="Github" width={100} height={100} className="h-8 w-8 d-block rounded-full hover:scale-125 ease-in-out duration-300" />
        </MotionLink>
        <MotionLink href="https://gitlab.cs.ui.ac.id/raihan.kus" target="_blank" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
          <Image src="/contact/gitlab.jpg" alt="Gitlab" width={100} height={100} className="h-8 w-8 d-block rounded-full hover:scale-125 ease-in-out duration-300" />
        </MotionLink>
        <MotionLink href="http://www.linkedin.com/in/raihankusputranto" target="_blank" initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
          <Image src="/contact/linkedin.png" alt="Linkedin" width={100} height={100} className="h-8 w-8 d-block rounded-full bg-white hover:scale-125 ease-in-out duration-300" />
        </MotionLink>
      </div>
    </div>
  );
};

export default Contact;
