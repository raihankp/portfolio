"use client";

import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="bg-black border-0 border-white py-4 sticky">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-row justify-between items-center">
        <div id="navbar-brand" className="">
          <a href="" className="text-3xl">
            RKP
          </a>
        </div>
        <div id="navbar-link" className="flex flex-row gap-14">
          <a href="#profile" className="text-xl">
            Profile
          </a>
          <a href="#project" className="text-xl">
            Project
          </a>
          <a href="#contact" className="text-xl">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
