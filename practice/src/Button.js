import React from "react";

const Button = ({ children, color, onClick, className, styles }) => {
  return (
    <button
      style={{ backgroundColor: color, ...styles }}
      onClick={onClick ? onClick : null}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
