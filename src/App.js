import React, { Component } from "react";
import ClassCounter from "./components/Counter/ClassCounter";
import HookCounter from "./components/Counter/HookCounter";

export class App extends Component {

  render() {
    return (
      <div>
        {/* <ClassCounter /> */}
        <HookCounter />
      </div>
    );
  }
}

export default App;
