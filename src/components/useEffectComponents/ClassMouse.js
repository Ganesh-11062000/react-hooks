import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log("mouse event");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount(){
      console.log("unmounting component");
      window.removeEventListener("mousemove",this.logMousePosition);
  }

  render() {
    return (
      <div>
        <h3 className="text-center">
          X: {this.state.x} and Y: {this.state.y}
        </h3>
      </div>
    );
  }
}

export default ClassMouse;
