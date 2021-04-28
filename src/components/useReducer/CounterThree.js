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

function CounterThree() {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div className="text-center mt-5">
      <h1>CounterOne: {countOne}</h1>
      <div className="btn-group">
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatchOne("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatchOne("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => dispatchOne("RESET")}
        >
          Reset
        </button>
      </div>

      <h1>CounterTwo: {countTwo}</h1>
      <div className="btn-group">
        <button
          className="btn btngroup-item btn-primary"
          onClick={() => dispatchTwo("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btngroup-item btn-primary"
          onClick={() => dispatchTwo("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btngroup-item btn-primary"
          onClick={() => dispatchTwo("RESET")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterThree;
