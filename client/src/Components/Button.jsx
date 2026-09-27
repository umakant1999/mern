import React from "react";

const Button = ({ children, className=""  }) => {
   
  return (
    <button
    className={className ? className :"bg-[#3B82F6] transition-all  hover:bg-[#60A5FA]"}
    >
      {children}
    </button>
  );
};

export default Button;