import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import FormPersonalInfo from "./FormPersonalInfo.js";
import FormOrders from "./FormOrders.js";
import FormOverview from "./FormOverview.js";
import NavBarForForm from "./NavBarForForm.js";
import Button from "./Button.js";


const MainForm = ({ data }) => {

  const [tab, setTab] = useState("FormPersonalInfo");
  return (
    <div>
      <Button onClick={() => setTab("FormPersonalInfo")}>Personal Info</Button>
      <Button onClick={() => setTab("Orders")}>Order</Button>
      <Button onClick={() => setTab("FormOverview")}>Overview</Button>
      {tab === "FormPersonalInfo" && (
        <FormPersonalInfo personalinfo={data.personal_info} />
      )}
      {tab === "FormOrders" && <FormOrders orders={data.orders} />}
      {tab === "FormOverview" && <FormOverview personalinfo={data.personal_info} orders={data.orders}/>}
    </div>
  );
};

export default MainForm;
