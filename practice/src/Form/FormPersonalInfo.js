import React, { useState, useEffect } from "react";
import Button from "../Button";

const FormPersonalInfo = ({ personalinfo, handlePersonalInfo, mainFormId }) => {
  const maxLength = 2000;

  const firstNameChange = (e) => {
    handlePersonalInfo({
      ...personalinfo,
      first_name: e.target.value,
    });
  };

  const lastNameChange = (e) => {
    handlePersonalInfo({
      ...personalinfo,
      last_name: e.target.value,
    });
  };

  const addressChange = (e) => {
    handlePersonalInfo({
      ...personalinfo,
      address: e.target.value,
    });
  };

  const checkboxChange = (e) => {
    handlePersonalInfo({
      ...personalinfo,
      is_homeless: e.target.check,
      address: e.target.checked ? "" : personalinfo.address,
    });
  };

  const textChange = (e) => {
    handlePersonalInfo({
      ...personalinfo,
      note: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Construct the request body based on the backend's expected format
    const requestBody = {
      firstName: personalinfo.first_name,
      lastName: personalinfo.last_name,
      gender: personalinfo.gender,
      address: personalinfo.address,
      isHomeless: personalinfo.is_homeless,
      job: personalinfo.job,
      note: personalinfo.note,
    };

    try {
      const response = await fetch(
        `http://localhost:8082/PPMService/practice/updatePersonalInfoPractice/${mainFormId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update personal info");
      }

      const result = await response.json();
      console.log("Update successful:", result);

      // Optionally, you can update the parent component or show a success message
      // For example, you might call a prop function to refresh data:
      // handlePersonalInfo(result.data);
    } catch (err) {
      console.error("Error updating personal info:", err);
      // Handle error, e.g., show error message to the user
    }
  };

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

  // this is the submit button zone
  const submitButtonStyle = {
    padding: "0.5em",
    color: "white",
    backgroundColor: "#007bff",
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
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
              // onChange={firstNameChange}
              onChange={(e) =>
                handlePersonalInfo({
                  ...personalinfo,
                  first_name: e.target.value,
                })
              }
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
              // onChange={lastNameChange}
              onChange={(e) =>
                handlePersonalInfo({
                  ...personalinfo,
                  last_name: e.target.value,
                })
              }
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
                {/* <input
                  type="radio"
                  id="Secret"
                  name="gender"
                  value="0"
                  checked={personalinfo.gender === 0}
                /> */}
                <input
                  type="radio"
                  id="Secret"
                  name="gender"
                  value="0"
                  checked={personalinfo.gender === 0}
                  onChange={(e) =>
                    handlePersonalInfo({
                      ...personalinfo,
                      gender: parseInt(e.target.value),
                    })
                  }
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
                  onChange={(e) =>
                    handlePersonalInfo({
                      ...personalinfo,
                      gender: parseInt(e.target.value),
                    })
                  }
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
                  onChange={(e) =>
                    handlePersonalInfo({
                      ...personalinfo,
                      gender: parseInt(e.target.value),
                    })
                  }
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
            // onChange={addressChange}
            onChange={(e) =>
              handlePersonalInfo({ ...personalinfo, address: e.target.value })
            }
            disabled={personalinfo.is_homeless}
            style={addressInputStyle}
          />
          <br />
          <input
            type="checkbox"
            id="noHouse"
            name="noHouse"
            checked={personalinfo.is_homeless || false}
            // onChange={checkboxChange}
            onChange={(e) =>
              handlePersonalInfo({
                ...personalinfo,
                is_homeless: e.target.checked,
                address: e.target.checked ? "" : personalinfo.address,
              })
            }
          />
          <label htmlFor="noHouse">此客戶居無定所</label>
        </section>

        {/* job section */}
        <section>
          <label htmlFor="job" style={jobLabelStyle}>
            Job
          </label>
          <select
            value={personalinfo?.job || "null"}
            style={JobInputSytle}
            onChange={(e) =>
              handlePersonalInfo({ ...personalinfo, job: e.target.value })
            }
          >
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
            {personalinfo.note?.length || 0} / {maxLength} characters
          </p>
          <textarea
            id="note"
            name="note"
            rows="10"
            cols="50"
            value={personalinfo.note || ""}
            // onChange={textChange}
            onChange={(e) =>
              handlePersonalInfo({ ...personalinfo, note: e.target.value })
            }
            maxLength={maxLength}
            style={noteInputStyle}
          />
        </section>

        <section>
          <button type="submit" style={submitButtonStyle}>
            Update
          </button>
        </section>
      </form>
    </div>
  );
};

export default FormPersonalInfo;
