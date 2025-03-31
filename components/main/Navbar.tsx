import React from "react";

const Navbar = () => {
  return (
    <div className="w-auto fixed top-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-[#1E084D]/60 bg-[#030014cc] backdrop-blur-md z-50 px-6 py-3 rounded-full">
      <div className="flex items-center justify-between space-x-6 text-white">
        <a href="#about-me" className="cursor-pointer hover:text-[#8A5CFF]">
          About
        </a>
        <a href="#skills" className="cursor-pointer hover:text-[#8A5CFF]">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer hover:text-[#8A5CFF]">
          Projects
        </a>
        <a
          href="#my-experience"
          className="cursor-pointer hover:text-[#8A5CFF]"
        >
          Experience
        </a>
        {/* <a href="#contact" className="cursor-pointer hover:text-[#8A5CFF]">
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
