import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Title from "./Title.js";
import Button from "./Button.js";
import MainForm from "./MainForm.js";

function App() {
  //name of the forms
  const mainFormName = [
    "A0000001",
    "A0000002",
    "A0000003",
    "A0000004",
    "A0000005",
  ];

  const [activeForm, setActiveForm] = useState(mainFormName[0]);

  //count the numbers of mainForm
  const totalForm = mainFormName.length;

  const mainFormChange = (e) => {
    setActiveForm(e.target.value);
  };

  return (
    <div className="theFirstDiv">
      <Title mainFormName={activeForm} />
      <div>
        跳至
        <select
          value={activeForm}
          onChange={(e) => setActiveForm(e.target.value)}
        >
          {mainFormName.map((name) => (
            <option key={name} name={name}>
              {name}
            </option>
          ))}
        </select>
        共 {totalForm} 頁
      </div>
      <div className="button">
        <Button text="Log this form" color="Blue" />
        <Button text="Log all forms" color="Teal" />
        <Button text="Delete this form" color="Red" />
      </div>
      <div className="mainForm">
        <MainForm formName={activeForm}/>
      </div>
    </div>
  );
}

export default App;
