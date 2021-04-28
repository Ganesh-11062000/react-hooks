import React, { useReducer } from "react";
import ComponentA from "./components/useReducer/useContext/ComponentA";

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <counterContext.Provider
        value={{ count: counter, countDispatch: dispatch }}
      >
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;
