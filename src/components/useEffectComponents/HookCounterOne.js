import React, { useState,useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
     document.title = `Clicked ${count} times`; 
  });

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-5" onClick={() => setCount(count+1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;
