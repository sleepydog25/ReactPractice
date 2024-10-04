import React from "react";
import { Routes, Route } from "react-router-dom";
import FormPersonalInfo from "./FormPersonalInfo.js";
import FormOrders from "./FormOrders.js";
import FormOverview from "./FormOverview.js";
import NavBarForForm from "./NavBarForForm.js";
import React from 'react'

const MainForm = ({data}) => {
  return (
    <div>
      <Button onClick={() => setTab("FormPersonalInfo")}>Personal Info</Button>
      <Button onClick={() => setTab("Orders")}>Order</Button>
      <Button onClick={() => setTab("FormOverview")}>Overview</Button>
      {
        tab ==="FormPersonalInfo" && <FormPersonalInfo personalinfo={data.personal_info}/>
      }
      {tab==="FormOrders" && <FormOrders/>}
      {tab ==="FormOverview" && <FormOverview/>}
    </div>
  )
}

export default MainForm
