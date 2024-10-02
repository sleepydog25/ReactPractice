import React ,{useState, useEffect}from 'react'

const FormOverview = () => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");

    useEffect(() => {
        const storedFirstName = localStorage.getItem("firstName");// read directly from localstorage
        if (storedFirstName){
            setFirstNameValue(storedFirstName);
        }
    });
    useEffect(() => {
        const storedLastName = localStorage.getItem("lastName");// read directly from localstorage
        if (storedLastName){
            setLastNameValue(storedLastName);
        }
    });


  return (
    <div>
        <p>以下是 {firstNameValue} {lastNameValue} 的訂單</p>
    </div>
  )
}

export default FormOverview