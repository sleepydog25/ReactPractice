import React, { useState } from "react";
import FormPersonalInfo from "./Form/FormPersonalInfo.js";
import FormOrders from "./Form/FormOrders.js";
import FormOverview from "./Form/FormOverview.js";
import Button from "./Button.js";

const MainForm = ({ data }) => {
  const [tab, setTab] = useState("FormPersonalInfo");
  return (
    <div>
      <Button onClick={() => setTab("FormPersonalInfo")}>Personal Info </Button>
      <Button onClick={() => setTab("FormOrders")}>Order</Button>
      <Button onClick={() => setTab("FormOverview")}>Overview</Button>
      {tab === "FormPersonalInfo" && (
        <FormPersonalInfo personalinfo={data.personal_info} />
      )}
      {tab === "FormOrders" && <FormOrders orders={data.orders} />}
      {tab === "FormOverview" && (
        <FormOverview personalinfo={data.personal_info} orders={data.orders} />
      )}
    </div>
  );
};

export default MainForm;
