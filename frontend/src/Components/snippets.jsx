import React, { useState, useEffect } from "react";
import axios from "axios";
import SnippetCard from "./snippet-card";

const AllSnippets = () => {
  const [snippets, setSnippets] = useState([]);

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

  console.log(snippets);

  return (
    <>
      <h1 className="flex justify-center p-8 font-semibold text-2xl">
        Submitted Code Snippets
      </h1>
      <div className="container mx-auto flex flex-wrap justify-normal">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="m-4">
            <SnippetCard snippet={snippet} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllSnippets;
