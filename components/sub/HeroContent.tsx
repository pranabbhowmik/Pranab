"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { SiHackerearth } from "react-icons/si";
import {
  FaHackerrank,
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <motion.div className="w-full md:w-1/2 flex flex-col gap-10 items-center md:items-start text-center md:text-start">
        {/* Header Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-2 mt-5 px-3 border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Name Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-white text-4xl md:text-6xl font-bold max-w-[500px]"
        >
          <span>Pranab</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Bhowmik
          </span>
        </motion.div>

        {/* Social Icons with animation and rounded background */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="flex flex-wrap gap-4 justify-center md:justify-start text-white"
        >
          {[
            {
              icon: <FaHackerrank />,
              link: "https://www.hackerrank.com/profile/cse_tukai",
            },
            { icon: <FaXTwitter />, link: "https://x.com/PranabB17867819" },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/pranab-bhowmik-58812a231/",
            },
            { icon: <FaGithub />, link: "https://github.com/pranabbhowmik" },
            {
              icon: <SiHackerearth />,
              link: "https://www.codechef.com/users/pranab17",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">{item.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[500px]"
        >
          An explorer and a passionate <strong>Full-Stack Developer</strong> who
          loves JavaScript, crafting innovative solutions, and embracing new
          challenges.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="/Pranab-bhowmik-resume.pdf"
          download="Pranab-bhowmik-resume.pdf"
          className="button-primary py-2 px-5 text-white text-center cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:brightness-110"
        >
          <span className="flex items-center justify-center gap-2">
            Resume
            <IoCloudDownloadOutline className="h-5 w-5" />
          </span>
        </motion.a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 md:ml-12 flex justify-center items-center"
      >
        <Image
          src="/portfoliopic.png"
          alt="Portfolio Picture"
          height={500}
          width={500}
          className="md:-mt-12 mt-10 max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
