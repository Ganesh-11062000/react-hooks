import React, { Component } from "react";
import DataFetching from "./components/DataFetchingFromAPI/DataFetching";

export class App extends Component {
  render() {
    return (
      <div>
        <DataFetching />
      </div>
    );
  }
}

export default App;
