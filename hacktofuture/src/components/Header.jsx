import React from "react";

const Header = () => {
  return (
    <div
      className="bg-bg_color bg-opacity-90 backdrop-blur-sm h-16 flex items-center"
      id="grad"
    >
      <nav className="flex-grow flex justify-between items-center ">
        <div className="flex-shrink-0 ml-4">
          <img src="./vite.svg" alt="logo" className="w-10 h-10" />
        </div>
        <ul className="flex justify-center text-md">
          <li className="text-white px-8">
            <a href="#">About</a>
          </li>
          <li className="text-white px-8">
            <a href="#">Theme</a>
          </li>
          <li className="text-white px-8">
            <a href="#">Prizes</a>
          </li>
          <li className="text-white px-8">
            <a href="#">FAQ</a>
          </li>
        </ul>
        <button className=" bg-blue-700 hover:bg-blue-800 transition text-white font-semibold px-6 py-1 rounded-3xl mr-4">
          <a
            href="https://tw-elements.com/docs/standard/navigation/headers/#!"
            target="_blank"
          >
            Register
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Header;
