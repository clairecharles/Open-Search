import React from "react";
import Data from "../pages/api/wordList";

function Words() {
  return (
    <div className=" flex flex-wrap text-white justify-center items-center ">
      {Data.map((word) => (
        <div
          key={word.id}
          className=" flex flex-wrap text-white justify-center items-center"
        >
          <div className=" max-w-sm flex-row p-2 ">
            <div className="w-30 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 shadow p-2">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {word.anime}
              </p>
              <i className="text-white">{word.character}</i>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {word.quote}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Words;
