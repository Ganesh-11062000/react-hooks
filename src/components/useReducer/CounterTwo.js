import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...currentState,
        firstCount: currentState.firstCount + action.value,
      };
    case "DECREMENT":
      return {
        ...currentState,
        firstCount: currentState.firstCount - action.value,
      };
    case "RESET":
      return { ...currentState, firstCount: 0 };
    case "INCREMENT2":
      return {
        ...currentState,
        secondCount: currentState.secondCount + action.value,
      };
    case "DECREMENT2":
      return {
        ...currentState,
        secondCount: currentState.secondCount - action.value,
      };
    case "RESET2":
      return { ...currentState, secondCount: 0 };
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
          onClick={() => dispatch({ type: "INCREMENT", value: 1 })}
        >
          Increment
        </button>
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT", value: 1 })}
        >
          Decrement
        </button>
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "INCREMENT", value: 5 })}
        >
          Increment 5
        </button>
        <button
          className="btn btn-group-item btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT", value: 5 })}
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

      <h1>Counter: {count.secondCount}</h1>
      <div className="btn-group">
        <button
          className="btn btn-group-item btn-primary"
          onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}
        >
          Increment
        </button>
        <button
          className="btn btn-group-item btn-primary"
          onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}
        >
          Decrement
        </button>
        <button
          className="btn btn-group-item btn-primary"
          onClick={() => dispatch({ type: "INCREMENT2", value: 5 })}
        >
          Increment 5
        </button>
        <button
          className="btn btn-group-item btn-primary"
          onClick={() => dispatch({ type: "DECREMENT2", value: 5 })}
        >
          Decrement
        </button>
        <button
          className="btn btn-group-item btn-primary"
          onClick={() => dispatch({ type: "RESET2" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
