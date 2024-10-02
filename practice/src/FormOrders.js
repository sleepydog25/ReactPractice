import React, { useState, useEffect } from "react";
import Button from "./Button";

const FormOrders = () => {
  // find appleValue in localstorage or return 0
  const [count, setCount] = useState(() => {
    const storedAppleValue = localStorage.getItem("appleValue");
    return storedAppleValue ? Number(storedAppleValue) : 0;
  });

  //find toppings in localstorage or return an empty array
  const [selectedToppings, setSelectedToppings] = useState(() => {
    const storedToppings = localStorage.getItem("selectedToppings");
    return storedToppings ? JSON.parse(storedToppings) : [];
  });

  //count the apple
  const updateCount = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  // when checkbox change update selectedToppings
  const CheckboxChange = (e) => {
    const { id, checked } = e.target;

    setSelectedToppings((prevToppings) => {
      const updatedToppings = checked
        ? [...prevToppings, id]
        : prevToppings.filter((topping) => topping !== id);
      return updatedToppings;
    });
  };

  // toppings and ids
  const toppings = [
    { id: "chocolate", label: "巧克力醬" },
    { id: "strawberry", label: "草莓醬" },
    { id: "flax", label: "胡麻醬" },
    { id: "miso", label: "味噌醬" },
    { id: "chili", label: "辣椒醬" },
    { id: "garlic", label: "大蒜" },
    { id: "soy_sauce", label: "醬油" },
    { id: "thick_soy_sauce", label: "醬油膏" },
    { id: "herbal_cream", label: "百草膏" },
  ];

  //store apple count into localStorage
  useEffect(() => {
    localStorage.setItem("appleValue", count);
  }, [count]);

  //store toppings in localStorage
  useEffect(() => {
    localStorage.setItem("selectedToppings", JSON.stringify(selectedToppings));
  }, [selectedToppings]);

  return (
    <div>
      <section>
        <label htmlFor="apple">Apple</label>
        <Button text="-5" color="white" onClick={() => updateCount(-5)} />
        <Button text="-1" color="white" onClick={() => updateCount(-1)} />
        <input type="number" id="apple" name="apple" value={count} disabled />
        <Button text="+1" color="white" onClick={() => updateCount(1)} />
        <Button text="+5" color="white" onClick={() => updateCount(5)} />
      </section>

      <br />
      <section>
        <h3>banana</h3>
        <label htmlFor="toppings">配料</label>
        <br />
       <input type="checkbox"
       id={toppings.id}
       checked={selectedToppings.includes(toppings.id)}
       onChange={CheckboxChange} />

       <label htmlFor={toppings.id}>{toppings.label}</label>
      </section>
    </div>
  );
};

export default FormOrders;
