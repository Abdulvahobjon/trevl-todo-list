import React from "react";

export default function Item({ quality, des, packed, removeFun, id ,sellectItem }) {
  return (
    <li>
      <label>
        <input type="checkbox" onChange={()=> sellectItem(id)} />
        {quality}
        <span style={packed ? { textDecoration: "line-through" } : null}>
          {des}{" "}
        </span>
        <button onClick={() => removeFun(id)}>❌</button>
      </label>
    </li>
  );
}
