import React, { useState, useEffect } from "react";

const FormPersonalInfo = ({ personalinfo, setPersonalInfo }) => {
  const maxLength = 2000;

  const firstNameChange = (e) => {
    setPersonalInfo({
      ...personalinfo,
      first_name: e.target.value,
    });
  };

  const lastNameChange = (e) => {
    setPersonalInfo({
      ...personalinfo,
      last_name: e.target.value,
    });
  };

  const addressChange = (e) => {
    setPersonalInfo({
      ...personalinfo,
      address: e.target.value,
    });
  };

  const checkboxChange = (e) => {
    setPersonalInfo({
      ...personalinfo,
      is_homeless: e.target.check,
      address: e.target.checked ? "" : personalinfo.address,
    });
  };

  const textChange = (e) => {
    setPersonalInfo({
      ...personalinfo,
      note: e.target.value,
    });
  };

  //the old verison should be deprecated soon

  //   const [firstNameValue, setFirstNameValue] = useState("");
  //   const [lastNameValue, setLastNameValue] = useState("");
  //   const [addressValue, setAddressValue] = useState(""); // follow address value
  //   const [noHouseChecked, setNoHouseChecked] = useState(false); // follow address checkbox
  //   const [textValue, setTextValue] = useState(""); // follow the textarea

  //   useEffect(() => {
  //     if (personalinfo) {
  //       setFirstNameValue(personalinfo.first_name || "unknown");
  //       setLastNameValue(personalinfo.last_name || "unknown");
  //       setAddressValue(personalinfo.address || "");
  //       setNoHouseChecked(personalinfo.is_homeless || false);
  //       setTextValue(personalinfo.note || "");
  //     }
  //   }, [personalinfo]);

  //   const firstNameChange = (e) => {
  //     setFirstNameValue(e.target.value);
  //     setPersonalInfo((prev) => ({ ...prev, first_name: e.target.value }));
  //   };
  //   const lastNameChange = (e) => {
  //     setLastNameValue(e.target.value);
  //     setPersonalInfo((prev) => ({ ...prev, last_name: e.target.value }));
  //   };
  // 要改成類似這樣，沒有 useState
  // const lastNameChange = (e) => {
  //   setLastNameValue(e.target.value);
  //   setPersonalInfo([ ...prev, last_name: e.target.value ]);
  // };

  // const addressChange = (e) => {
  //   setAddressValue(e.target.value);
  //   setPersonalInfo((prev) => ({ ...prev, address: e.target.value }));
  // };

  // const checkboxChange = (e) => {
  //   setNoHouseChecked(e.target.checked);
  //   setPersonalInfo((prev) => ({ ...prev, is_homeless: e.target.checked }));
  //   if (e.target.checked) {
  //     setAddressValue("");
  //     setPersonalInfo((prev) => ({ ...prev, address: "" }));
  //   }
  // };

  // const textChange = (e) => {
  //   setTextValue(e.target.value);
  //   setPersonalInfo((prev) => ({ ...prev, note: e.target.value }));
  // };

  // the css zone

  // this is the outermost name div that contains the whole section
  const nameStyleRow = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "0.5rem",
    padding: "0.5rem 0rem 1rem 0rem",
  };

  // this is the group div, keep intput and label together
  const nameInputGroup = {
    flex: "100%",
  };
  //this is the input
  const nameInputStyle = {
    border: "1px solid #000000",
    width: "100%",
    padding: "0.2rem",
    boxSizing: "border-box",
  };

  // this is the outermost gender div that contains the whole section
  const genderStyleRow = {
    display: "flex",
    flexDirection: "row",
    padding: "0.5rem 0rem 1rem 0rem",
  };

  const genderLabelStyle = {
    flexBasis: "20%ㄏ",
    textAlign: "left",
    paddingRight: "1rem",
  };

  const radioOptionSytle = {
    paddingBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
  };
  const radioColumnStyle = { flexBasis: "80%" };

  //the address css zone
  const addressLabelStyle = {
    display: "block",
  };
  const addressInputStyle = {
    width: "100%",
    border: "1px solid #000000",
    marginBottom: "0.5rem",
  };

  // the job css zone
  const jobLabelStyle = {
    display: "block",
  };

  const JobInputSytle = {
    border: "1px solid #000000",
    marginBottom: "0.5rem",
  };

  // the note css zone
  const noteInputStyle = {
    border: "1px solid #000000",
  };

  return (
    <div>
      <form action="#">
        {/* first name / last name section */}
        <section style={nameStyleRow}>
          <div style={nameInputGroup}>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={personalinfo.first_name || "unknown"}
              onChange={firstNameChange}
              required
              style={nameInputStyle}
            />
          </div>

          <div style={nameInputGroup}>
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={personalinfo.last_name || "unknown"}
              // value={personalinfo.lastName||"unknown"} 要改成這樣
              onChange={lastNameChange}
              style={nameInputStyle}
              required
            />
          </div>
        </section>

        {/* gender section */}
        <section className="gender">
          <div style={genderStyleRow}>
            <label htmlFor="gender" style={genderLabelStyle}>
              Gender
            </label>
            <div style={radioColumnStyle}>
              <div style={radioOptionSytle}>
                <input
                  type="radio"
                  id="Secret"
                  name="gender"
                  value="0"
                  checked={personalinfo.gender === 0}
                />
                <label htmlFor="Secret">Secret</label>
              </div>

              <div style={radioOptionSytle}>
                <br />
                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="1"
                  checked={personalinfo.gender === 1}
                />
                <label htmlFor="Female">Female</label>
              </div>
              <div style={radioOptionSytle}>
                <br />
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="2"
                  checked={personalinfo.gender === 2}
                />
                <label htmlFor="Male">Male</label>
              </div>
            </div>
          </div>
        </section>

        {/* address section */}
        <section>
          <label htmlFor="address" style={addressLabelStyle}>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalinfo.address || ""}
            onChange={addressChange}
            disabled={personalinfo.is_homeless}
            style={addressInputStyle}
          />
          <br />
          <input
            type="checkbox"
            id="noHouse"
            name="noHouse"
            checked={personalinfo.is_homeless || false}
            onChange={checkboxChange}
          />
          <label htmlFor="noHouse">此客戶居無定所</label>
        </section>

        {/* job section */}
        <section>
          <label htmlFor="job" style={jobLabelStyle}>
            Job
          </label>
          <select value={personalinfo?.job || "null"} style={JobInputSytle}>
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
            {personalinfo.note?.length || 0} / {maxLength} characters
          </p>
          <textarea
            id="note"
            name="note"
            rows="10"
            cols="50"
            value={personalinfo.note || ""}
            onChange={textChange}
            maxLength={maxLength}
            style={noteInputStyle}
          />
        </section>
      </form>
    </div>
  );
};

export default FormPersonalInfo;
