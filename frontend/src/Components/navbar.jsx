import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex w-full bg-gray-200 justify-around items-center">
      <p
        onClick={() => navigate("/")}
        className="text-3xl text-red-600 font-bold cursor-pointer"
      >
        Snippy
      </p>
      <div className="flex py-6">
        <div className="flex space-x-6 text-gray-800 font-semibold items-center">
          <p
            onClick={() => navigate("/snippets")}
            className="text-lg cursor-pointer"
          >
            Snippets
          </p>
          <button className="bg-red-500 p-3 text-white rounded-full">
            Submit Snippet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
