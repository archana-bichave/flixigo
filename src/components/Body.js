import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <>
      {/* overlay for mobile when sidebar is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden z-30"
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
