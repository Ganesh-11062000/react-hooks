import React, { Component } from "react";
import ComponentD from "./components/useContextHook/ComponentD";

export const userContext = React.createContext();
export const channelContext = React.createContext();

export class App extends Component {
  render() {
    return (
      <div>
        <channelContext.Provider value={"Codevolution"}>
          <userContext.Provider value={"Ganesh"}>
            <ComponentD />
          </userContext.Provider>
        </channelContext.Provider>
      </div>
    );
  }
}

export default App;
