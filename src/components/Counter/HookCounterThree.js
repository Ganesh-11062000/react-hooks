import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>First Name: {name.firstName}</p>
        <p>Last Name: {name.lastName}</p>
      </form>
    </div>
  );
}

export default HookCounterThree;
