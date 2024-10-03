import { Link } from "react-router-dom";
import React from "react";

const NavBarForForm = ({ link, text }) => {
  return (
    <nav>
      <Link to="/FormPersonalInfo">Personal Info</Link>
      <Link to="/FormOrders">Orders</Link>
      <Link to="/FormOverview">Overview</Link>
    </nav>
  );
};

export default NavBarForForm;
