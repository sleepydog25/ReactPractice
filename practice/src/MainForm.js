import React from "react";
import { Routes, Route } from "react-router-dom";
import FormPersonalInfo from "./FormPersonalInfo.js";
import FormOrders from "./FormOrders.js";
import FormOverview from "./FormOverview.js";
import NavBarForForm from "./NavBarForForm.js";

const MainForm = ({ formName }) => {
  return (
    <div>
      <NavBarForForm />
      <Routes>
        <Route path="/" element={<FormPersonalInfo />} />{/* for people didn't type the right url */}
        <Route path="/FormPersonalInfo" element={<FormPersonalInfo />} />
        <Route path="/FormOrders" element={<FormOrders />} />
        <Route path="/FormOverview" element={<FormOverview />} />
      </Routes>
    </div>
  );
};

export default MainForm;
