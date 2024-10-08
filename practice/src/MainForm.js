import React, { useState, useEffect } from "react";
import FormPersonalInfo from "./Form/FormPersonalInfo.js";
import FormOrders from "./Form/FormOrders.js";
import FormOverview from "./Form/FormOverview.js";
import Button from "./Button.js";
import "./MainForm.css";

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

  // the tailwind zone
  const getTabClass = (currentTab) => {
    return tab === currentTab
      ? "text-black border-b-2 border-black"
      : "text-blue-500";
  };

  return (
    <div>
      <div>
        <Button
          onClick={() => setTab("FormPersonalInfo")}
          className={`tab-button ${getTabClass("FormPersonalInfo")}`}
        >
          Personal Info
        </Button>
        <Button
          onClick={() => setTab("FormOrders")}
          className={`tab-button ${getTabClass("FormOrders")}`}
        >
          Order
        </Button>
        <Button
          onClick={() => setTab("FormOverview")}
          className={`tab-button ${getTabClass("FormOverview")}`}
        >
          Overview
        </Button>

        {tab === "FormPersonalInfo" && (
          <FormPersonalInfo
            personalinfo={personalInfo}
            handlePersonalInfo={handlePersonalInfoUpdate} // 改名字，因為參數裡面傳入其他邏輯，下面的orders 也要改
          />
        )}

        {tab === "FormOrders" && (
          <FormOrders orders={orders} handleOrdersUpdate={handleOrdersUpdate} />
        )}

        {tab === "FormOverview" && (
          <FormOverview personalinfo={personalInfo} orders={orders} />
        )}
      </div>
    </div>
  );
};

export default MainForm;
