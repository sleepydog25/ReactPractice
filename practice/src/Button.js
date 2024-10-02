import React from "react";

const Button = ({text, color, onClick}) => {
  return (
   
      <button style={{backgroundColor: color}} 
      onClick={onClick ? onClick : null} > 
        {text}
        
      </button>
   
  );
};

export default Button;
