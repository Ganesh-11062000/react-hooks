import React, { Component } from "react";
import DataFetching from "./components/DataFetchingFromAPI/DataFetching";
import ComponentD from "./components/useContextHook/ComponentD";

export const userContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div>
        <userContext.Provider value={"Ganesh"}>
          <ComponentD />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
