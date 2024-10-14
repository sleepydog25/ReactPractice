import React, { useState, useEffect } from "react";
import Button from "../Button";

const FormOrders = ({ orders, handleOrdersUpdate }) => {
  const updateCount = (amount) => {
    const newCount = orders.apple_count + amount; // 直接從 props 中取值
    handleOrdersUpdate({
      ...orders,
      apple_count: newCount,
    });
  };

  const CheckboxChange = (e) => {
    const { id, checked } = e.target;
    const updatedToppings = checked
      ? [...orders.banana_condiments, id]
      : orders.banana_condiments.filter((topping) => topping !== id);

    handleOrdersUpdate({
      ...orders,
      banana_condiments: updatedToppings,
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

  // the apple css zone

  const applesectionStyle = {
    marginTop: "1rem",
  };
  const appleLableStyle = {
    fontWeight: "bolder",
    paddingRight: "0.5rem",
  };
  const appleButtonSytle = {
    border: "1px solid #000000",
    padding: "0 0.5rem 0 0.5rem",
    margin: "0 0.1rem 0 0.1rem",
  };

  const appleInputStyle = {
    border: "1px solid #000000",
    margin: "0 0.5rem 0 0.5rem",
  };

  // the banana css zone
  const bananaLabelStyle = {
    fontWeight: "bolder",
    paddingRight: "0.5rem",
  };

  const toppingsGroupStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1 rem",
  };

  const toppingItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div>
      <section style={applesectionStyle}>
        <label htmlFor="apple" style={appleLableStyle}>
          Apple
        </label>
        <Button
          color="#e7e7e7"
          onClick={() => updateCount(-5)}
          styles={appleButtonSytle}
        >
          -5
        </Button>
        <Button
          color="#e7e7e7"
          onClick={() => updateCount(-1)}
          styles={appleButtonSytle}
        >
          -1
        </Button>
        <input
          type="number"
          id="apple"
          name="apple"
          value={orders.apple_count}
          disabled
          style={appleInputStyle}
        />
        <Button
          color="#e7e7e7"
          onClick={() => updateCount(1)}
          styles={appleButtonSytle}
        >
          +1
        </Button>
        <Button
          color="#e7e7e7"
          onClick={() => updateCount(5)}
          styles={appleButtonSytle}
        >
          +5
        </Button>
      </section>

      <br />
      <section>
        <h3 style={bananaLabelStyle}>Banana</h3>
        <label htmlFor="toppings">配料</label>
        <br />
        <div style={toppingsGroupStyle}>
          {toppings.map((topping) => (
            <div key={topping.id} style={toppingItemStyle}>
              <input
                type="checkbox"
                id={topping.id}
                checked={orders.banana_condiments.includes(topping.id)}
                onChange={CheckboxChange}
              />
              <label htmlFor={topping.id}>{topping.label}</label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FormOrders;
