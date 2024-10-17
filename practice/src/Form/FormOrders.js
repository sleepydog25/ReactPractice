import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button";

const FormOrders = ({ orders, handleOrdersUpdate, mainFormId }) => {
  const updateCount = (amount) => {
    const newCount = orders.apple_count + amount; // 直接從 props 中取值
    handleOrdersUpdate({
      ...orders,
      apple_count: newCount,
    });
  };

  const CheckboxChange = useCallback(
    (e) => {
      const { id, checked } = e.target;

      console.log(`Checkbox ${id} changed to ${checked}`);

      handleOrdersUpdate((prevOrders) => {
        const toppingsSet = new Set(prevOrders.banana_condiments);

        if (checked) {
          toppingsSet.add(id);
        } else {
          toppingsSet.delete(id);
        }

        const updatedToppings = Array.from(toppingsSet);

        // check if it really needs to update
        if (
          JSON.stringify(prevOrders.banana_condiments) ===
          JSON.stringify(updatedToppings)
        ) {
          return prevOrders;
        }

        return {
          ...prevOrders,
          banana_condiments: updatedToppings,
        };
      });
    },
    [handleOrdersUpdate]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting orders:", orders);

    const requestBody = JSON.stringify({
      appleCount: orders.apple_count,
      bananaCondiments: orders.banana_condiments.join(","),
    });

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        `http://localhost:8082/PPMService/practice/updatePracticeOrders/${mainFormId}`,
        {
          method: "PUT",
          headers: headers,
          body: requestBody,
        }
      );

      console.log("headers:", headers);
      console.log("request body:", requestBody);

      if (!response.ok) {
        throw new Error("Failed to update orders");
      }

      const result = await response.json();
      console.log("Update successful:", result);
    } catch (err) {
      console.error("Error update orders", err);
    }
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

  // this is the button zone
  const submitButtonStyle = {
    padding: "0.5em",
    color: "white",
    backgroundColor: "#007bff",
    margin: "0.5em",
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
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
            onChange={(e) =>
              handleOrdersUpdate({
                ...orders,
                apple_count: e.target.value,
              })
            }
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
        <section>
          <button type="submit" style={submitButtonStyle}>
            update
          </button>
        </section>
      </form>
    </div>
  );
};

export default FormOrders;
