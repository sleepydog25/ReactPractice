import React from "react";

const title = ({ mainFormName, className }) => {
  return (
    <div>
      <h3 className={className}>Form {mainFormName}</h3>
    </div>
  );
};

export default title;
