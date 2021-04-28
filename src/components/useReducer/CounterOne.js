import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "INCREMENT":
      return currentState + 1;
    case "DECREMENT":
      return currentState - 1;
    case "RESET":
      return initialState;
    default:
      return currentState;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center mt-5">
      <h1>Counter: {count}</h1>
      <div className="btn-group">
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatch("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatch("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatch("RESET")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterOne;
