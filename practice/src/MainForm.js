import React, { useState, useEffect } from "react";
import FormPersonalInfo from "./Form/FormPersonalInfo.js";
import FormOrders from "./Form/FormOrders.js";
import FormOverview from "./Form/FormOverview.js";
import Button from "./Button.js";

const MainForm = ({ data, updateFormData }) => {
  const [tab, setTab] = useState("FormPersonalInfo");
  const [personalInfo, setPersonalInfo] = useState(data.personal_info);
  const [orders, setOrders] = useState(data.orders);

  // when data changes update personalinfo and orders
  useEffect(() => {
    console.log("data changes", data);
    setPersonalInfo(data.personal_info);
    setOrders(data.orders);
  }, [data]);

  // when personalInfo changes pass it to App.js
  const handlePersonalInfoUpdate = (newPersonalInfo) => {
    console.log("update personalInfo:", newPersonalInfo);
    setPersonalInfo(newPersonalInfo);
    updateFormData({ personal_info: newPersonalInfo });
  };

  // when orders change , pass to App.js
  const handleOrdersUpdate = (newOrders) => {
    console.log("update orders:", newOrders);
    setOrders(newOrders);
    updateFormData({ orders: newOrders });
  };

  console.log("current tab:", tab);
  console.log("current personalInfo :", personalInfo);
  console.log("current orders :", orders);

  return (
    <div>
      <Button onClick={() => setTab("FormPersonalInfo")}>Personal Info</Button>
      <Button onClick={() => setTab("FormOrders")}>Order</Button>
      <Button onClick={() => setTab("FormOverview")}>Overview</Button>

      {tab === "FormPersonalInfo" && (
        <FormPersonalInfo
          personalinfo={personalInfo}
          setPersonalInfo={handlePersonalInfoUpdate}
        />
      )}

      {tab === "FormOrders" && (
        <FormOrders orders={orders} setOrders={handleOrdersUpdate} />
      )}

      {tab === "FormOverview" && (
        <FormOverview personalinfo={personalInfo} orders={orders} />
      )}
    </div>
  );
};

export default MainForm;
