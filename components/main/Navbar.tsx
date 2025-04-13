"use client";

import React from "react";
import {
  Home,
  Plus,
  Code,
  BadgeCheck,
  Sparkles,
  Briefcase,
  FolderOpenDot,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar (visible on md and above) */}
      <div className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-[#1E084D]/60 bg-[#030014cc] backdrop-blur-md z-50 px-5 py-3 rounded-full">
        <div className="flex items-center justify-between space-x-8 text-white text-sm font-medium">
          <a
            href="#about-me"
            className="cursor-pointer hover:text-[#8A5CFF] flex items-center gap-1"
          >
            <BadgeCheck className="w-4 h-4" /> About
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:text-[#8A5CFF] flex items-center gap-1"
          >
            <Sparkles className="w-4 h-4" /> Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-[#8A5CFF] flex items-center gap-1"
          >
            <Code className="w-4 h-4" /> Projects
          </a>
          <a
            href="#my-experience"
            className="cursor-pointer hover:text-[#8A5CFF] flex items-center gap-1"
          >
            <Briefcase className="w-4 h-4" /> Experience
          </a>
          <a
            href="#code"
            className="cursor-pointer hover:text-[#8A5CFF] flex items-center gap-1"
          >
            <Code className="w-4 h-4" /> Code
          </a>
        </div>
      </div>

      {/* Mobile Bottom Navbar (visible only on small screens) */}
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-[#110F0E] border border-gray-200 rounded-full bottom-4 left-1/2 md:hidden px-4">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto py-5 ">
          <Link href="#about-me">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group"
            >
              <Home className="w-5 h-5 text-white group-hover:text-blue-600" />
            </button>
          </Link>

          <Link href="#skills">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5  group"
            >
              <Sparkles className="w-5 h-5 text-white group-hover:text-blue-600" />
            </button>
          </Link>

          <Link href="#projects">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5  group"
            >
              <FolderOpenDot className="w-5 h-5 text-white group-hover:text-blue-600" />
            </button>
          </Link>

          <Link href="#my-experience">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5  group"
            >
              <Briefcase className="w-5 h-5 text-white group-hover:text-blue-600" />
            </button>
          </Link>

          <Link href="#code">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 rounded-e-full  group"
            >
              <Code className="w-5 h-5 text-white group-hover:text-blue-600" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
