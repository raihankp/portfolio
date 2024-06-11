import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col border-0 border-blue-500 items-center gap-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <div className="flex flex-row gap-16 items-center">
        <Link href="https://github.com/raihankp" target="_blank">
          <img src="/contact/github.png" alt="Github" className="h-8 w-8 d-block rounded-full hover:scale-125 ease-in-out duration-300" />
        </Link>
        <Link href="https://gitlab.cs.ui.ac.id/raihan.kus" target="_blank">
          <img src="/contact/gitlab.jpg" alt="Gitlab" className="h-8 w-8 d-block rounded-full hover:scale-125 ease-in-out duration-300" />
        </Link>
        <Link href="http://www.linkedin.com/in/raihankusputranto" target="_blank">
          <img src="/contact/linkedin.png" alt="Linkedin" className="h-8 w-8 d-block rounded-full bg-white hover:scale-125 ease-in-out duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
