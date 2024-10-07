import React, { useState, useEffect } from "react";

const FormPersonalInfo = ({ personalinfo, setPersonalInfo }) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [addressValue, setAddressValue] = useState(""); // follow address value
  const [noHouseChecked, setNoHouseChecked] = useState(false); // follow address checkbox
  const [textValue, setTextValue] = useState(""); // follow the textarea
  const maxLength = 2000;

  useEffect(() => {
    if (personalinfo) {
      setFirstNameValue(personalinfo.first_name || "unknown");
      setLastNameValue(personalinfo.last_name || "unknown");
      setAddressValue(personalinfo.address || "");
      setNoHouseChecked(personalinfo.is_homeless || false);
      setTextValue(personalinfo.note || "");
    }
  }, [personalinfo]);

  const firstNameChange = (e) => {
    setFirstNameValue(e.target.value);
    setPersonalInfo((prev) => ({ ...prev, first_name: e.target.value }));
  };
  const lastNameChange = (e) => {
    setLastNameValue(e.target.value);
    setPersonalInfo((prev) => ({ ...prev, last_name: e.target.value }));
  };

  const addressChange = (e) => {
    setAddressValue(e.target.value);
    setPersonalInfo((prev) => ({ ...prev, address: e.target.value }));
  };

  const checkboxChange = (e) => {
    setNoHouseChecked(e.target.checked);
    setPersonalInfo((prev) => ({ ...prev, is_homeless: e.target.checked }));
    if (e.target.checked) {
      setAddressValue("");
      setPersonalInfo((prev) => ({ ...prev, address: "" }));
    }
  };

  const textChange = (e) => {
    setTextValue(e.target.value);
    setPersonalInfo((prev) => ({ ...prev, note: e.target.value }));
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
            value={firstNameValue}
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
            value={lastNameValue}
            onChange={lastNameChange}
            required
          />
        </section>

        {/* gender section */}
        <section className="gender">
          <label htmlFor="gender">Gender</label>
          <br />
          <input
            type="radio"
            id="Secret"
            name="gender"
            value="0"
            checked={personalinfo.gender === 0}
          />
          <label htmlFor="Secret">Secret</label>
          <br />
          <input
            type="radio"
            id="Female"
            name="gender"
            value="1"
            checked={personalinfo.gender === 1}
          />
          <label htmlFor="Female">Female</label>
          <br />
          <input
            type="radio"
            id="Male"
            name="gender"
            value="2"
            checked={personalinfo.gender === 2}
          />
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
          <select value={personalinfo?.job || "null"}>
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
