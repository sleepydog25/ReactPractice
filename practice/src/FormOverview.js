import React, { useState, useEffect } from "react";

const FormOverview = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [appleValue, setAppleValue] = useState(0);
  const [toppingValue, setToppingValue] = useState([]);

  // need to be refactor
  // read user name directly from localstorage
  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName"); // read directly from localstorage
    if (storedFirstName) {
      setFirstNameValue(storedFirstName);
    }
  }, []);
  useEffect(() => {
    const storedLastName = localStorage.getItem("lastName"); // read directly from localstorage
    if (storedLastName) {
      setLastNameValue(storedLastName);
    }
  }, []);

  useEffect(() => {
    const storedAppleValue = localStorage.getItem("appleValue"); // read directly from localstorage
    if (storedAppleValue) {
      setAppleValue(storedAppleValue);
    }
  }, []);

  useEffect(() => {
    const storedToppings = localStorage.getItem("selectedToppings");
    if (storedToppings) {
      setToppingValue(JSON.parse(storedToppings));
    }
  }, []);

  return (
    <div>
      <p>
        以下是 {firstNameValue} {lastNameValue} 的訂單
      </p>
      <ul>
        <li>{appleValue}顆蘋果</li>
        <li>
          香蕉配料
          <ul>
            {toppingValue.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FormOverview;
