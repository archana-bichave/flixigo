import React from "react";
import { BiUser } from "react-icons/bi";
import { FaMagnifyingGlass, FaYoutube } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-50 text-sky-400 flex items-center px-4">
      {/* left group: menu icon + logo */}
      <div className="flex items-center space-x-2">
        <GiHamburgerMenu
          className="h-8 w-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <FaYoutube className="h-8 w-8" />
        <span className="font-bold text-2xl sm:text-3xl cursor-pointer">
          Flixigo
        </span>
      </div>

      {/* search bar */}
      <div className="flex flex-1 justify-center px-4">
        <input
          type="text"
          className="border-lightgray border rounded-l-full w-full sm:w-1/2 p-2"
        />
        <button className="rounded-r-full border border-full p-3 w-14">
          <FaMagnifyingGlass className="m-auto" />
        </button>
      </div>

      {/* user icon */}
      <div className="flex items-center">
        <BiUser />
      </div>
    </header>
  );
};

export default Header;
