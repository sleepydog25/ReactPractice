import React, { useState, useEffect } from "react";

const FormOverview = ({personalinfo, orders}) => {
  // the old version should be deleted soon
  // const [firstNameValue, setFirstNameValue] = useState("");
  // const [lastNameValue, setLastNameValue] = useState("");
  // const [appleValue, setAppleValue] = useState(0);
  // const [toppingValue, setToppingValue] = useState([]);
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

  // theold version shold be deleted soon
  // need to be refactor
  // read user name directly from localstorage
  // useEffect(() => {
  //   const storedFirstName = localStorage.getItem("firstName"); // read directly from localstorage
  //   if (storedFirstName) {
  //     setFirstNameValue(storedFirstName);
  //   }
  // }, []);
  // useEffect(() => {
  //   const storedLastName = localStorage.getItem("lastName"); // read directly from localstorage
  //   if (storedLastName) {
  //     setLastNameValue(storedLastName);
  //   }
  // }, []);

  // useEffect(() => {
  //   const storedAppleValue = localStorage.getItem("appleValue"); // read directly from localstorage
  //   if (storedAppleValue) {
  //     setAppleValue(storedAppleValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   const storedToppings = localStorage.getItem("selectedToppings");
  //   if (storedToppings) {
  //     setToppingValue(JSON.parse(storedToppings));
  //   }
  // }, []);

  return (
    <div>
      <p>
        以下是 {personalinfo.first_name || "unknown"} {personalinfo.last_name || "unknown"} 的訂單
      </p>
      <ul>
        <li>{orders.apple_count}顆蘋果</li>
        {orders.banana_condiments.length > 0 && (
          <li>
            香蕉配料
            <ul>
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
