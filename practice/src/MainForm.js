import React, { useState, useEffect } from "react";
import FormPersonalInfo from "./Form/FormPersonalInfo.js";
import FormOrders from "./Form/FormOrders.js";
import FormOverview from "./Form/FormOverview.js";
import Button from "./Button.js";

const MainForm = ({ data, updateFormData, mainFormId }) => {
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
  // const handlePersonalInfoUpdate = (newPersonalInfo) => {
  //   console.log("update personalInfo:", newPersonalInfo);
  //   setPersonalInfo(newPersonalInfo);
  //   updateFormData({ personal_info: newPersonalInfo });
  // };

  const handlePersonalInfoUpdate = (newPersonalInfo) => {
    setPersonalInfo(newPersonalInfo);
    // Update the overall form data
    updateFormData({ personal_info: newPersonalInfo });
  };

  const handleOrdersUpdate = (newOrders) => {
    console.log("Orders updated:", newOrders);
    setOrders(newOrders);
    updateFormData({ orders: newOrders });
  };

  // when orders change , pass to App.js
  // const handleOrdersUpdate = (newOrders) => {
  //   console.log("update orders:", newOrders);
  //   setOrders(newOrders);
  //   updateFormData({ orders: newOrders });
  // };

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
          // className={`tab-button ${getTabClass("FormPersonalInfo")} mr-4`}
          className={`tab-button ${getTabClass("FormPersonalInfo")} ${
            tab === "FormPersonalInfo" ? "border border-gray-400  p-2" : "p-2"
          }`}
        >
          Personal Info
        </Button>
        <Button
          onClick={() => setTab("FormOrders")}
          // className={`tab-button ${getTabClass("FormOrders")} mr-4`}
          className={`tab-button ${getTabClass("FormOrders")} ${
            tab === "FormOrders" ? "border border-gray-400  p-2" : "p-2"
          }`}
        >
          Order
        </Button>
        <Button
          onClick={() => setTab("FormOverview")}
          // className={`tab-button ${getTabClass("FormOverview")} `}
          className={`tab-button ${getTabClass("FormOverview")} ${
            tab === "FormOverview" ? "border border-gray-400 p-2" : "p-2"
          }`}
        >
          Overview
        </Button>

        <div className="border border-gray-400  p-4 ">
          {/* {tab === "FormPersonalInfo" && (
            <FormPersonalInfo
              personalinfo={personalInfo}
              handlePersonalInfo={handlePersonalInfoUpdate}
            />
          )} */}

          {tab === "FormPersonalInfo" && (
            <FormPersonalInfo
              personalinfo={personalInfo}
              mainFormId={mainFormId} // Pass mainFormId here
              handlePersonalInfo={handlePersonalInfoUpdate}
            />
          )}
          {tab === "FormOrders" && (
            <FormOrders
              orders={orders}
              mainFormId={mainFormId}
              handleOrdersUpdate={handleOrdersUpdate}
            />
          )}
          {tab === "FormOverview" && (
            <FormOverview personalinfo={personalInfo} orders={orders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainForm;
