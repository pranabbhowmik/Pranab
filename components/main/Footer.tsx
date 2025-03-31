import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col text-white items-center py-6 px-4 sm:px-8"
    >
      {/* Contact Information Section */}
      <div className="w-full max-w-6xl flex flex-col gap-8 md:flex-row md:justify-between md:items-start py-4">
        {/* Find Us */}
        <div className="flex items-start gap-4 max-w-xs sm:max-w-sm">
          <FaMapMarkerAlt className="text-blue-500 text-2xl sm:text-3xl" />
          <div>
            <h3 className="font-semibold font-robotoMono text-lg sm:text-xl">
              Location
            </h3>
            <p className="text-base sm:text-lg">Tamluk, West Bengal, India</p>
          </div>
        </div>

        {/* Mail Us */}
        <div className="flex items-start gap-4 max-w-xs sm:max-w-sm">
          <a href="mailto:bhowmikpranab37@gmail.com">
            <FaEnvelope className="text-blue-500 text-2xl sm:text-3xl" />
          </a>
          <div>
            <h3 className="font-semibold font-robotoMono text-lg sm:text-xl">
              Mail Id
            </h3>
            <a
              href="mailto:bhowmikpranab37@gmail.com"
              className="text-base sm:text-lg break-all"
            >
              bhowmikpranab37@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Navigation Links */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          Copyright &copy; 2024, All Rights Reserved{" "}
          <span className="text-blue-500">Pranab Bhowmik</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/pranab-bhowmik-58812a231/"
            className="hover:text-blue-500 transition"
          >
            Social
          </a>
          <a
            href="https://github.com/pranabbhowmik"
            className="hover:text-blue-500 transition"
          >
            Source Code
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
