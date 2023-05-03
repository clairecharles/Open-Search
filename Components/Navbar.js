import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [words, setWords] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;


  return (
    <nav className="">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Open Search
              </h2>
            </a>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 text-white dark:text-gray-800 rounded-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-7 h-6"
            >
              <path
                fill="rgba(45, 55, 72, 1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className=" bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 text-white dark:text-gray-800 rounded-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-6"
            >
              <path
                fill="rgba(45, 55, 72, 1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
