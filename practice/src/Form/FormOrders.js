import React, { useState, useEffect } from "react";
import Button from "../Button";

const FormOrders = ({ orders, setOrders }) => {
  // initialize apple count
  const [count, setCount] = useState(orders?.apple_count || 0);

  // initialize banana toppings
  const [selectedToppings, setSelectedToppings] = useState(
    orders?.banana_condiments || []
  );

  //count the apple
  const updateCount = (amount) => {
    const newCount = count + amount;
    setCount(newCount);
    setOrders((prev) => ({ ...prev, apple_count: newCount }));
  };

  // when checkbox change update selectedToppings
  const CheckboxChange = (e) => {
    const { id, checked } = e.target;
    const updatedToppings = checked
      ? [...selectedToppings, id]
      : selectedToppings.filter((topping) => topping !== id);

    setSelectedToppings(updatedToppings);
    setOrders((prev) => ({ ...prev, banana_condiments: updatedToppings }));
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

  return (
    <div>
      <section>
        <label htmlFor="apple">Apple</label>
        <Button color="white" onClick={() => updateCount(-5)}>
          -5
        </Button>
        <Button color="white" onClick={() => updateCount(-1)}>
          -1
        </Button>
        <input type="number" id="apple" name="apple" value={count} disabled />
        <Button color="white" onClick={() => updateCount(1)}>
          +1
        </Button>
        <Button color="white" onClick={() => updateCount(5)}>
          +5
        </Button>
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
