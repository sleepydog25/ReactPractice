import React, { useState } from "react";
import Button from "./Button";

const FormOrders = () => {
  const [count, setCount] = useState(0);

  const decreaseFive = () => {
    setCount(count - 5);
  };

  const decreaseOne = () => {
    setCount(count - 1);
  };

  const increaseFive = () => {
    setCount(count + 5);
  };

  const increaseOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <section>
        <label htmlFor="apple">Apple</label>
        <Button text="-5" color="blue" onClick={decreaseFive} />
        <Button text="-1" color="white" onClick={decreaseOne} />
        <input type="number" id="apple" name="apple" value={count} disabled />
        <Button text="+1" color="white" onClick={increaseOne} />
        <Button text="+5" color="white" onClick={increaseFive} />
      </section>

      <br />
      <section>
        <h3>banana</h3>
        <label htmlFor="toppings">配料</label>
        <br />
        <input type="checkbox" id="chocolate" name="chocolate" />
        <label htmlFor="chocolate">巧克力醬</label>

        <input type="checkbox" id="strawberry" name="strawberry" />
        <label htmlFor="strawberry">草莓醬</label>

        <input type="checkbox" id="flax" name="flax" />
        <label htmlFor="flax">胡麻醬</label>

        <input type="checkbox" id="miso" name="miso" />
        <label htmlFor="miso">味噌醬</label>

        <input type="checkbox" id="chili" name="chili" />
        <label htmlFor="chili">辣椒</label>

        <input type="checkbox" id="garlic" name="garlic" />
        <label htmlFor="garlic">大蒜</label>

        <input type="checkbox" id="soy_sauce" name="soy_sauce" />
        <label htmlFor="soy_sauce">醬油</label>

        <input type="checkbox" id="thick_soy_sauce" name="thick_soy_sauce" />
        <label htmlFor="thick_soy_sauce">醬油膏</label>

        <input type="checkbox" id="herbal_cream" name="herbal_cream" />
        <label htmlFor="herbal_cream">百草膏</label>
      </section>
    </div>
  );
};

export default FormOrders;
