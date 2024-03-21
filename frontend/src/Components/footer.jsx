import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-4 text-center">
      <div className="flex items-center justify-center space-x-2">
        Made with{" "}
        <span className="px-2 text-red-500">
          <FaHeart />{" "}
        </span>
        by{" "}
        <Link
          to="https://gauravgarwa.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 italic"
        >
          GauravGarwa
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
