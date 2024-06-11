import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row border-0 border-gray-500 gap-32 px-32" id="profile">
      <div className="profile-desc flex flex-col border-0 border-red-500 gap-8 items-center md:items-start">
        <h1 className="text-5xl font-semibold">Hello! I'm Raihan</h1>
        <p className="text-lg text-justify">
          A 21 years old undergraduate student majoring in Computer Science, University of Indonesia. Interested in Software Engineer and Website Developer. Skilled in developing website applications from past project.
        </p>
        <Button variant="light" href="#contact" className="font-semibold px-4 py-2">
          Contact Me!
        </Button>
      </div>
      <div className="profile-image border-0 border-green-500 flex flex-col items-center md:items-start">
        <div className="relative w-72 h-72">
          <Image src="/profile-pict.jpg" fill={true} className="rounded-full" alt="Profile Pict" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
