import React from "react";

const Button = ({ children, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default Button;
