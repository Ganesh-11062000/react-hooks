import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
      console.log("mouse moved");
      window.addEventListener("mousemove",logMousePosition);
  },[]);

  const logMousePosition = e => {
      console.log("mouse event");
      setX(e.clientX);
      setY(e.clientY);
  }

  return (
    <div>
      <h3 className="text-center">
        X: {x} and Y: {y}
      </h3>
    </div>
  );
}

export default HookMouse;
