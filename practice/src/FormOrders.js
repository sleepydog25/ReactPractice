import React, { useState, useEffect } from "react";
import Button from "./Button";

const FormOrders = ({orders}) => {

// initialize apple count
  const[count, setCount] = useState(orders?.apple_count||0);

  // initialize banana toppings
  const [selectedToppings, setSelectedToppings] = useState(orders?.banana_condiments||[]);

  //the old version should be deleted lateer
  // find appleValue in localstorage or return 0
  // const [count, setCount] = useState(() => {
  //   const storedAppleValue = localStorage.getItem("appleValue");
  //   return storedAppleValue ? Number(storedAppleValue) : 0;
  // });

  //find toppings in localstorage or return an empty array
  // const [selectedToppings, setSelectedToppings] = useState(() => {
  //   const storedToppings = localStorage.getItem("selectedToppings");
  //   return storedToppings ? JSON.parse(storedToppings) : [];
  // });

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

  // the old version should be deleted soon
  //store apple count into localStorage
  // useEffect(() => {
  //   localStorage.setItem("appleValue", count);
  // }, [count]);

  //store toppings in localStorage
  // useEffect(() => {
  //   localStorage.setItem("selectedToppings", JSON.stringify(selectedToppings));
  // }, [selectedToppings]);

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
        {toppings.map((topping) => (
          <div key={topping.id}>
            <input
              type="checkbox"
              id={topping.id}
              checked={selectedToppings.includes(topping.id)}
              onChange={CheckboxChange}
            />
            <label htmlFor={topping.id}>{topping.label}</label>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FormOrders;
