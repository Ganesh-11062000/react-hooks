import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-5" onClick={this.incrementCount}>
          clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassComponent;
