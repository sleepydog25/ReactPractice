import React, {useState} from "react";


const NavBarForMainForm = ({ mainFormName, activeForm, setActiveForm }) => {
  // find the index of the main Form
  //this should be update to code review version
  const currentIndex = mainFormName.indexOf(activeForm);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveForm(mainFormName[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < mainFormName.length - 1) {
      setActiveForm(mainFormName[currentIndex + 1]);
    }
  };

  return (
    <div className="navBar">
 {/* previous page */}
 <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>

      {/* button for every mainForm (which page) */}
      {mainFormName.map((name, index) => (
        <button
          key={name}
          className={name === activeForm ? "active" : ""}
          onClick={() => setActiveForm(name)}
          title={name} 
        >
          {index + 1}
        </button>
      ))}

      {/* next */}
      <button
        onClick={handleNext}
        disabled={currentIndex === mainFormName.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default NavBarForMainForm;
