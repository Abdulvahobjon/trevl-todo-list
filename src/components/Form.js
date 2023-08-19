import React, { useState } from "react";

export default function Form({ addfun }) {
  const [des, setDes] = useState("test");
  const [select, setSelect] = useState(1);

  function handleSubmid(e) {
    e.preventDefault();
    if (des == "") {
    } else {
      const newItem = { des, quality: select, packed: false, id: Date.now() };
      console.log(newItem);
      addfun(newItem);
      setDes("");
      setSelect(1);
    }
  }
  return (
    <form onSubmit={handleSubmid} className="add-form">
      <h3>What do you need for your?</h3>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={des}
        onChange={(e) => setDes(e.target.value)}
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}
