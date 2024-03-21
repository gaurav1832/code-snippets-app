import React, { useState, useEffect } from "react";
import axios from "axios";

const SnippetTable = () => {
  const [snippets, setSnippets] = useState([]);

  // Fetching the code snippets
  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/snippets");
        setSnippets(response.data);
      } catch (error) {
        console.error("Error fetching snippets:", error);
      }
    };
    fetchSnippets();
  }, []);

  // Function to format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  console.log(snippets);

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 px-20 py-8">
        Submitted Code Snippets
      </h2>
      <div className="container shadow-lg mx-auto">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <table className="table-auto w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Code Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Stdin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Source Code Preview
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {snippets.map((snippet, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {snippet.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {snippet.code_language}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {snippet.stdin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {snippet.source_code_preview}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {formatTimestamp(snippet.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnippetTable;
