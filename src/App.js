import React, { Component } from "react";
import ClassComponent from "./components/useEffectComponents/ClassComponent";
import HookCounterOne from "./components/useEffectComponents/HookCounterOne";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <ClassComponent/> */}
        <HookCounterOne />
      </div>
    );
  }
}

export default App;
