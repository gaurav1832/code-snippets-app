import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => (
  <div className="flex flex-col space-y-8 min-h-[760px] items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-semibold text-gray-700 pt-6 px-8">
      Submit your code sippets{" "}
      <span className="font-bold text-red-500 italic">#hasslefree</span>
    </h2>
    <Link
      to={"/submit"}
      className="text-xl bg-red-500 text-white rounded-full p-4 font-semibold cursor-pointer"
    >
      Submit Snippet
    </Link>
  </div>
);

export default Landing;
