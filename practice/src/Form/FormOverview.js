import React, { useState, useEffect } from "react";

const FormOverview = ({ personalinfo, orders }) => {
  const toppingsMap = {
    chocolate: "巧克力醬",
    strawberry: "草莓醬",
    flax: "胡麻醬",
    miso: "味噌醬",
    chili: "辣椒醬",
    garlic: "大蒜",
    soy_sauce: "醬油",
    thick_soy_sauce: "醬油膏",
    herbal_cream: "百草膏",
  };

  // the css zone
  const ulStyle = {
    listStyleType: "disc" /* Restore default bullet points */,
    paddingLeft: "1rem" /* Restore default padding */,
    margin: 0 /* Optional: Reset margin if it was changed */,
  };
  const liStyle = {
    listStyleType: "circle",
    paddingLeft: "1rem",
  };
  return (
    <div>
      <p>
        以下是 {personalinfo.first_name || "unknown"}{" "}
        {personalinfo.last_name || "unknown"} 的訂單:
      </p>
      <ul style={ulStyle}>
        <li>{orders.apple_count}顆蘋果</li>
        {orders.banana_condiments.length > 0 && (
          <li>
            香蕉配料
            <ul style={liStyle}>
              {orders.banana_condiments.map((topping, index) => (
                <li key={index}>{toppingsMap[topping]}</li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FormOverview;
