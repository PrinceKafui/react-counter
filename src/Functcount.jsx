import React, { useState } from "react";
import "./Functcount.css";

const Functcount = () => {
  const [count, setState] = useState(0);
  const handleIncrease = (event) => {
    setState(count + 1);
  };

  const handleDecrease = (event) => {
    setState(count - 1);
  };

  return (
    <div className="functcount">
      <h1>FUNCTIONAL COMPONENT</h1>

      <h2>{count}</h2>

      <button onClick={handleIncrease}>handleIncrease</button>
      <button onClick={handleDecrease}> handleDecrease</button>
    </div>
  );
};

export default Functcount;
