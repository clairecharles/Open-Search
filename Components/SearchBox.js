import { dictionary } from "./Words";
import React, { useState } from "react";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [popupContent, setPopupContent] = useState(false);
  const [popupDefinition, setPopupDefinition] = useState("");

  const handleSearch = (event) => {
      const term = event.target.value.toLowerCase();
      setSearchTerm(term);

      if (term === "") {
        setSearchResults([]);
        return;
      }

      const results = dictionary
        .filter((entry) => entry.word.toLowerCase().startsWith(term))
        .slice(0, 6);

      setSearchResults(results);
  };
  
const handleSearchButtonClick = () => {
  if (searchTerm.length < 3) {
    setPopupDefinition("");
    return;
  }

  const results = dictionary.filter((entry) =>
    entry.word.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  if (results.length > 0) {
    setPopupDefinition(
      <div className="">
        <h2 className="text-2xl text-center font-bold mb-2">{results[0].word}</h2>
        <p className="text-center">{results[0].definition}</p>
      </div>
    );
  } else {
    setPopupDefinition("");
  }
};


  const handlePopup = (definition, word) => {
    setPopupDefinition(
      <div>
        <h2 className="text-xl text-center font-medium mb-2">{word}</h2>
        <p className="text-lg text-center font-medium mb-2">{definition}</p>
      </div>
    );
  };

  const handlePopupClose = () => {
    setPopupDefinition("");
  };


 const handleKeyDown = (event) => {
   if (event.key === "Enter") {
     handleSearchButtonClick();
   }
 };

  return (
    <div className="flex items-center h-screen">
      <div className="mx-auto mt-10 h-64 ">
        <div></div>
        <div className="">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search terms..."
              value={searchTerm}
              // onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="text-white right-2.5 ml-2 bottom-2.5 bg-black font-medium rounded-lg text-sm px-4 py-2"
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </div>
          <ul className="mt-2 dark:bg-[#1a1b29] rounded-lg bg-white shadow-md border-[#e5e7eb] border-1">
            {searchResults.map((entry) => (
              <li
                key={entry.word}
                className="cursor-pointer dark:hover:bg-[#323233]  hover:bg-gray-300 "
                onClick={() => handlePopup(entry.definition, entry.word)}
              >
                <h2 className=" p-2 ">{entry.word}</h2>
              </li>
            ))}
            <div></div>
          </ul>
          {popupDefinition && (
            <div className="fixed top-0 left-0 w-full h-full pt-3 bg-gray-500 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white dark:bg-[#12131d] rounded-lg p-4">
                <p className="font-medium mb-2 w-64">{popupDefinition}</p>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-black font-medium px-4 py-2 rounded-lg"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
