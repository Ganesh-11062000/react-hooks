import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("");

  useEffect(() => {
    console.log("updating document title");
    document.title = `Clicked ${count} times`;
  },[count]);

   
//   useEffect(() => {someThing});
//   - someThing is executed for every render
//   useEffect(() => {someThing},[count]);
//   - someThing is executed only if count changes
//   useEffect(() => {someThing},[]);
//   - someThing is executed only once for first render

  return (
    <div className="d-flex flex-column w-25 m-auto">
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button
        className="btn btn-primary mt-2"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
