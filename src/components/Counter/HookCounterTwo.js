import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="display-block">Counter: {count}</h3>
      <div className="btn-group">
        <button
          className="btn btn-secondary"
          onClick={() => setCount(initialCount)}
        >
          Reset
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Inrement
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setCount((prevCount) => prevCount + 5)}
        >
          Increment by five
        </button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
