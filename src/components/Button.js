import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-5 py-2 m-1 rounded-full border transition-colors ${
          isActive
            ? "bg-slate-900 text-white border-slate-900"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-300"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;