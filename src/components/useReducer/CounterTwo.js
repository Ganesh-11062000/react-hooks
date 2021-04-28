import React, { useReducer } from "react";

const initialState = { firstCount: 0 };
const reducer = (currentState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { firstCount: currentState.firstCount + 1 };
    case "DECREMENT":
      return { firstCount: currentState.firstCount - 1 };
    case "RESET":
      return { firstCount: 0 };
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center mt-5">
      <h1>Counter: {count.firstCount}</h1>
      <div className="btn-group">
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
