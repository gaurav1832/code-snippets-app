import React, { useState } from "react";
import axios from "axios";

const CodeSnippetForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: "",
    code_language: "",
    stdin: "",
    source_code: "",
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to submit code snippet
      await axios.post("http://localhost:5000/submit", formData);
      // Reset form data after successful submission
      setFormData({
        username: "",
        code_language: "",
        stdin: "",
        source_code: "",
      });
      alert("Code snippet submitted successfully!");
    } catch (error) {
      console.error("Error submitting code snippet:", error);
      alert("Error submitting code snippet. Please try again later.");
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-8">Submit Code Snippet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-800"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="code_language"
            className="block text-sm font-medium text-gray-800"
          >
            Code Language
          </label>
          <select
            id="code_language"
            name="code_language"
            value={formData.code_language}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a language</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="stdin"
            className="block text-sm font-medium text-gray-800"
          >
            Standard Input
          </label>
          <textarea
            id="stdin"
            name="stdin"
            value={formData.stdin}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="source_code"
            className="block text-sm font-medium text-gray-800"
          >
            Source Code
          </label>
          <textarea
            id="source_code"
            name="source_code"
            value={formData.source_code}
            onChange={handleChange}
            rows="6"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-500 border text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CodeSnippetForm;
