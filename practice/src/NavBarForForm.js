import { Link } from "react-router-dom";
import React from "react";

const NavBarForForm = ({ link, text }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/FormPersonalInfo">Personal Info</Link>
        </li>
        <li>
          <Link to="/FormOrders">Orders</Link>
        </li>
        <li>
          <Link to="/FormOverview">Overview</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarForForm;
