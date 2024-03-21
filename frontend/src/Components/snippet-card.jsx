import React from "react";
import { FaUserCircle, FaCopy } from "react-icons/fa";

const SnippetCard = ({ snippet }) => {
  // Function to format timestamp into a readable date string
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleCppy = () => {
    navigator.clipboard.writeText(snippet.source_code);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-1">
            <FaUserCircle className="text-2xl" />

            <h3 className="text-xl font-semibold">{snippet.username}</h3>
          </div>

          <span className="bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded text-sm">
            {snippet.code_language}
          </span>
        </div>

        <div className="py-2">
          <span className="font-semibold">Standard Input: </span>
          <span>{snippet.stdin}</span>
        </div>

        <p className="text-gray-700 font-semibold py-2">Source code:</p>
        <pre className="bg-zinc-900 text-white p-4 rounded-lg overflow-x-auto max-h-[400px]">
          <code className="whitespace-pre-wrap">{snippet.source_code}</code>
        </pre>
        <div className="flex items-center justify-between mt-4 p-2 text-md text-gray-500 font-semibold">
          <p>Submitted at: {formatTimestamp(snippet.timestamp)}</p>
          <p>
            <FaCopy
              onClick={handleCppy}
              className="text-xl text-gray-700 cursor-pointer"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default SnippetCard;
