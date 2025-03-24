import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={` text-white py-2 px-4 rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;