import React, { useState, useEffect } from "react";
import ClassMouse from "./ClassMouse";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <div className="text-center">
        <button
          className="btn btn-primary m-2"
          onClick={() => setDisplay(!display)}
        >
          Toggle
        </button>
      </div>
      {/* {display && <HookMouse />} */}
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
