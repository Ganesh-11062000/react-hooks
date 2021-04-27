import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([{ id: 1, value: "12" }]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div className="m-auto w-50">
      <button className="btn btn-primary m-2" onClick={addItem}>
        Add item
      </button>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
