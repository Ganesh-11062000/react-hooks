import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount+1);
  };

  useEffect(() => {
    console.log('useEffect executed');
    const interval = setInterval(tick, 1000);
    return () => {
        console.log("cleared interval");
        clearInterval(interval);
    }
  },[count]);

  return (
    <div className="text-center mt-5">
      <h1>Count: {count}</h1>
    </div>
  );
}

export default IntervalHookCounter;
