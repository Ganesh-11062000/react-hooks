import React, { useContext } from "react";
import {counterContext} from "../../../App";

function ComponentC() {
  const counter = useContext(counterContext);

  return (
    <div className="text-center mt-5">
      <h1>Counter: {counter.count}</h1>
      <div className="btn-group">
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => counter.countDispatch("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => counter.countDispatch("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btngroup-item btn-secondary"
          onClick={() => counter.countDispatch("RESET")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ComponentC;
