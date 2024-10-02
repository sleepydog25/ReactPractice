import React, { useState, useEffect } from "react";

const FormOverview = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  const [appleValue, setAppleValue] = useState(0);

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
            <li>unordered item 2-1</li>
            <li>unordered item 2-2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FormOverview;
