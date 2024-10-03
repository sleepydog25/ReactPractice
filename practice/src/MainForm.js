import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPersonalInfo from "./FormPersonalInfo.js";
import FormOrders from "./FormOrders.js";
import FormOverview from "./FormOverview.js";
import NavBarForForm from "./NavBarForForm.js";

const MainForm = ({formName}) => {
  return (
    <div>
      <NavBarForForm />
      <Router>
        <NavBarForForm />
        <Routes>
          <Route path="/FormPersonalInfo" element={<FormPersonalInfo />} />
          <Route path="/FormOrders" element={<FormOrders />} />
          <Route path="/FormOverview" element={<FormOverview />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainForm;
