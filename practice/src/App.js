import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title.js";
import Button from "./Button.js";
import MainForm from "./MainForm.js";
import NavbarForMainForm from "./NavBarForMainForm.js";

//fake data
// const fake = [
//   {
//     id: "A0000001",
//     personal_info: {
//       first_name: "Fishman",
//       last_name: "ILike",
//       gender: 1,
//       address: "ABCDEFG",
//       is_homeless: false,
//       job: null,
//       note: null,
//     },
//     orders: {
//       apple_count: 1,
//       banana_condiments: ["chocolate", "chili", "garlic", "soy_sauce"],
//     },
//   },
//   {
//     id: "A0000002",
//     personal_info: {
//       first_name: null,
//       last_name: "Somebody",
//       gender: 2,
//       address: "QWERTY",
//       is_homeless: false,
//       job: "secret_agent",
//       note: "Hello, world",
//     },
//     orders: { apple_count: 15, banana_condiments: [] },
//   },
//   {
//     id: "A0000003",
//     personal_info: {
//       first_name: "Painter",
//       last_name: null,
//       gender: 0,
//       address: null,
//       is_homeless: true,
//       job: "agent_of_secret_agent",
//       note: "Strange",
//     },
//     orders: { apple_count: 1, banana_condiments: ["herbal_cream"] },
//   },
//   {
//     id: "A0000004",
//     personal_info: {
//       first_name: "President",
//       last_name: "Mr.",
//       gender: 1,
//       address: "America",
//       is_homeless: false,
//       job: "secret_agent",
//       note: "He is the president!",
//     },
//     orders: {
//       apple_count: 100,
//       banana_condiments: [
//         "chocolate",
//         "strawberry",
//         "flax",
//         "miso",
//         "chili",
//         "garlic",
//         "soy_sauce",
//         "thick_soy_sauce",
//       ],
//     },
//   },
//   {
//     id: "A0000005",
//     personal_info: {
//       first_name: "Pepper",
//       last_name: "Dr.",
//       gender: 0,
//       address: "Farm",
//       is_homeless: false,
//       job: "agent",
//       note: "胡椒博士現身",
//     },
//     orders: { apple_count: 5, banana_condiments: ["chili", "garlic"] },
//   },
// ];

// loading for 2 second
// const fakeGetForms = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(fake), 500);
//   });
// };

// this is the code review version
// const fakeMainForName = fake.reduce((acc, cur) => {
//   return acc.concat(cur.id), [];
// });

function App() {
  const [forms, setForms] = useState([]); //initialize with no form
  const [activeFormId, setActiveFormId] = useState(null); // no active form unitl data is fetched

  // the old version will be deprecated soon
  // useEffect(() => {
  //   fakeGetForms()
  //     .then((data) => {
  //       setForms(data); // Set fetched forms
  //       setActiveFormId(data[0]?.id); // Set the first form as activeForm
  //     })
  //     .catch((err) => {
  //       console.error("Error loading forms:", err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchAllPractice = async () => {
      try {
        const response = await fetch(
          "http://localhost:8082/PPMService/practice/getAllPractice"
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        // Check if data contains practiceList, then map over practiceList
        if (data.practiceList && Array.isArray(data.practiceList)) {
          const mappedData = data.practiceList.map((form) => ({
            id: form.mainFormId,
            personal_info: {
              first_name: form.firstName,
              last_name: form.lastName,
              gender: form.gender,
              address: form.address,
              is_homeless: form.isHomeless,
              job: form.job,
              note: form.note,
            },
            orders: {
              apple_count: form.appleCount,
              banana_condiments: form.bananaCondiments
                ? form.bananaCondiments.split(",")
                : [],
            },
          }));

          setForms(mappedData || []); // Set the forms with the mapped data
          setActiveFormId(mappedData[0]?.id); // Set the first form as activeForm
        } else {
          console.error("No practiceList found in the response data");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchAllPractice();
  }, []);

  if (forms.length === 0) {
    return (
      <div>
        <Title mainFormName={activeFormId} className="title" />
        <h1>Loading ... </h1>
      </div>
    );
  }

  const activeForm = forms.find((form) => form.id === activeFormId);

  //testing
  console.log("ActiveFormId", activeFormId);

  // function to generate a new mainID
  const generateNewMainId = () => {
    const maxId = Math.max(
      ...forms.map((form) => parseInt(form.id.substring(1)))
    );
    const newId = `A${String(maxId + 1).padStart(7, "0")}`;
    return newId;
  };

  //funciton to create a new form
  const createNewForm = () => {
    const newId = generateNewMainId();
    const newForm = {
      id: newId,
      personal_info: {
        first_name: "unknown",
        last_name: "unknown",
        gender: 0,
        address: "",
        is_homeless: false,
        job: "agent",
        note: "",
      },
      orders: {
        apple_count: 0,
        banana_condiments: [],
      },
    };
    setForms([...forms, newForm]);
    setActiveFormId(newId);
  };

  //the code review
  // const [data, setData] = useState(apiData[0]);
  // useEffect(() => {
  //   apiData = formAPI();
  // }, []);

  const logThisForm = () => {
    console.log(forms.find((form) => form.id === activeFormId));
  };

  const logAllForms = () => {
    console.log(forms);
  };

  //delete form
  const deleteThisForm = async () => {
    try {
      const response = await fetch(
        `http://localhost:8082/PPMService/practice/removePractice/${activeFormId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      // Update the frontend state if the deletion is successful
      const updatedForms = forms.filter((form) => form.id !== activeFormId);
      setForms(updatedForms); // Update forms after deletion
      setActiveFormId(updatedForms[0]?.id || null); // Handle the case when no forms are left

      console.log(`deleted successfully`);
    } catch (err) {
      console.error("Error deleting form:", err);
    }
  };

  return (
    <div className="theFirstDiv">
      <Title mainFormName={activeFormId} className="title" />
      <div className="jumpToPage">
        跳至
        <select
          value={activeFormId}
          onChange={(e) => setActiveFormId(e.target.value)}
          className="jumpToPageSelect"
        >
          {forms.map((form) => (
            <option key={form.id} value={form.id}>
              {form.id}
            </option>
          ))}
        </select>
        ，共 {forms.length} 張
      </div>

      <div className="button">
        <Button color="#007bff" onClick={logThisForm} className="logButton">
          Log this form
        </Button>
        <Button color="#17a2b8" onClick={logAllForms} className="logButton">
          Log all forms
        </Button>
        <Button color="#dc3545" onClick={deleteThisForm} className="logButton">
          Delete this form
        </Button>
        <Button color="#ffc107" onClick={createNewForm} className="logButton">
          Create New Form
        </Button>
      </div>

      <fieldset className="mainFormBorder">
        <div>
          {activeForm && (
            <MainForm data={forms.find((form) => form.id === activeFormId)} />
          )}
        </div>
      </fieldset>

      <NavbarForMainForm
        mainFormName={forms.map((form) => form.id)}
        activeForm={activeFormId}
        setActiveForm={setActiveFormId}
      />
    </div>
  );
}

export default App;
