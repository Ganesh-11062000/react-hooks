import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {

    // this will update document title only if count variable changes
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }

    // console.log("Updating document title");
    // document.title = `Clicked ${this.state.count} times`;
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="d-flex flex-column w-25 m-auto ">
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={this.incrementCount}>
          clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassComponent;
