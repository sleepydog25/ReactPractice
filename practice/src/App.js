import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title.js";
import Button from "./Button.js";
import MainForm from "./MainForm.js";
import NavbarForMainForm from "./NavBarForMainForm.js";

const fake = [
  {
    id: "A0000001",
    personal_info: {
      first_name: "Fishman",
      last_name: "ILike",
      gender: 1,
      address: "ABCDEFG",
      is_homeless: false,
      job: null,
      note: null,
    },
    orders: {
      apple_count: 1,
      banana_condiments: ["chocolate", "chili", "garlic", "soy_sauce"],
    },
  },
  {
    id: "A0000002",
    personal_info: {
      first_name: null,
      last_name: "Somebody",
      gender: 2,
      address: "QWERTY",
      is_homeless: false,
      job: "secret_agent",
      note: "Hello, world",
    },
    orders: { apple_count: 15, banana_condiments: [] },
  },
  {
    id: "A0000003",
    personal_info: {
      first_name: "Painter",
      last_name: null,
      gender: 0,
      address: null,
      is_homeless: true,
      job: "agent_of_secret_agent",
      note: "Strange",
    },
    orders: { apple_count: 1, banana_condiments: ["herbal_cream"] },
  },
  {
    id: "A0000004",
    personal_info: {
      first_name: "President",
      last_name: "Mr.",
      gender: 1,
      address: "America",
      is_homeless: false,
      job: "secret_agent",
      note: "He is the president!",
    },
    orders: {
      apple_count: 100,
      banana_condiments: [
        "chocolate",
        "strawberry",
        "flax",
        "miso",
        "chili",
        "garlic",
        "soy_sauce",
        "thick_soy_sauce",
      ],
    },
  },
  {
    id: "A0000005",
    personal_info: {
      first_name: "Pepper",
      last_name: "Dr.",
      gender: 0,
      address: "Farm",
      is_homeless: false,
      job: "agent",
      note: "胡椒博士現身",
    },
    orders: { apple_count: 5, banana_condiments: ["chili", "garlic"] },
  },
];

// this is the code review version
// const fakeMainForName = fake.reduce((acc, cur) => {
//   return acc.concat(cur.id), [];
// });

const fakeMainForName = fake.map((form) => form.id);

function App() {
  const [activeForm, setActiveForm] = useState(fakeMainForName[0]); // set the first APi fake data
  const [data, setData] = useState(null);
  const [forms, setForms] = useState(fake);

  const activeFormData = forms.find((form) => form.id === activeForm);
  // useEffect(() => {
  //   setData(fake.find((form) => form.id === activeForm));
  // }, [activeForm, forms]);

  const updateFormData = (updatedData) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === activeForm ? { ...form, ...updatedData } : form
      )
    );
  };

  //the code review
  // const [data, setData] = useState(apiData[0]);
  // useEffect(() => {
  //   apiData = formAPI();
  // }, []);

  //log this form
  const logThisForm = () => {
    console.log(data);
  };

  // // log all form
  // const logAllForms = () => {
  //   console.log(forms);
  // };

  // //Delete this form
  // const deleteThisForm = () => {
  //   const updatedForms = forms.filter((form) => form.id !== activeForm);
  //   setActiveForm(updatedForms);

  //   if (updatedForms.length > 0) {
  //     setActiveForm(updatedForms[0].id);
  //   } else {
  //     setData(null);
  //   }
  // };

  return (
    <div>
      <Title mainFormName={activeForm} />
      <div>
        跳至
        <select
          value={activeForm}
          onChange={(e) => setActiveForm(e.target.value)}
        >
          {fakeMainForName.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        ，共 {fakeMainForName.length} 張
      </div>
      <div className="button">
        <Button color="#007bff" onClick={() => console.log(activeFormData)}>
          Log this form
        </Button>
        <Button color="#17a2b8" onClick={() => console.log(forms)}>
          Log all forms
        </Button>
        <Button
          color="#dc3545"
          onClick={() => {
            const updatedForms = forms.filter((form) => form.id !== activeForm);
            setForms(updatedForms);
            if (updatedForms.length > 0) {
              setActiveForm(updatedForms[0].id);
            } else {
              setActiveForm(null);
            }
          }}
        >
          Delete this form
        </Button>
      </div>

      <fieldset>
        <div className="mainForm">
          {activeFormData && (
            <MainForm data={activeFormData} updateFormData={updateFormData} />
          )}
        </div>
      </fieldset>

      <NavbarForMainForm
        mainFormName={fakeMainForName}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />
    </div>
  );
}

export default App;
