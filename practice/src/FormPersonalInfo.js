import React, { useState, useEffect } from "react";

const FormPersonalInfo = () => {
  const [firstNameValue, setFirstNameValue] = useState(""); // follow first name field
  const [lastNameValue, setLastNameValue] = useState(""); // follow last name field
  const [addressValue, setAddressValue] = useState(""); // follow address value
  const [noHouseChecked, setNoHouseChecked] = useState(false); // follow address checkbox
  const [textValue, setTextValue] = useState(""); // follow the textarea
  const maxLength = 2000;

  //when first name change, update first name
  const firstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  //when last name change, update last name
  const lastNameChange = (e) => {
    setLastNameValue(e.target.value);
  };

  //when address checkbox triggers,clear the address input
  const checkboxChange = (e) => {
    setNoHouseChecked(e.target.checked);
    if (e.target.checked) {
      setAddressValue("");
    }
  };

  // update address input
  const addressChange = (e) => {
    setAddressValue(e.target.value);
  };

  //update textarea input
  const textChange = (e) => {
    setTextValue(e.target.value);
  };
  const remainingWords = maxLength - textValue.length;

  return (
    <div>
      <form action="#">
        {/* first name / last name section */}
        <section className="userName">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={firstNameChange}
            required
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={lastNameChange}
            required
          />
        </section>

        {/* gender section */}
        <section className="gender">
          <label htmlFor="gender">Gender</label>
          <br />
          <input type="radio" id="Secret" name="gender" value="0" checked />
          <label htmlFor="Secret">Secret</label>
          <br />
          <input type="radio" id="Female" name="gender" value="1" />
          <label htmlFor="Female">Female</label>
          <br />
          <input type="radio" id="Male" name="gender" value="2" />
          <label htmlFor="Male">Male</label>
          <br />
        </section>

        {/* address section */}
        <section className="address">
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            value={addressValue}
            onChange={addressChange}
            disabled={noHouseChecked}
          />
          <br />
          <input
            type="checkbox"
            id="noHouse"
            name="noHouse"
            checked={noHouseChecked}
            onChange={checkboxChange}
          />
          <label htmlFor="noHouse">此客戶居無定所</label>
        </section>

        {/* job section */}
        <section>
          <label htmlFor="job">Job</label>
          <br />
          <select>
            <option value="null">保密</option>
            <option value="agent">調查員</option>
            <option value="sercet_agent">秘密調查員</option>
            <option value="agent_of_secret_agent">秘密調查員的調查員</option>
          </select>
        </section>

        {/* Note section */}
        <section>
          <label htmlFor="note">Note</label>
          <br />
          <p>
            {" "}
            {textValue.length} / {maxLength} characters
          </p>
          <textarea
            id="note"
            name="note"
            rows="10"
            cols="50"
            value={textValue}
            onChange={textChange}
            maxLength={maxLength}
          />
        </section>
      </form>
    </div>
  );
};

export default FormPersonalInfo;
