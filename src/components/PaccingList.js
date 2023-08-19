import React, { useState } from "react";
import Item from "./Item";

export default function PaccingList({ arr, removeFun, sellectItem  , setItems}) {
  const [sortby , setSortbay] = useState("input")
  let sorted;
  if(sortby == "input")  sorted = arr
  if(sortby == "description")  sorted = arr.slice().sort((a,b)=> a.des.localeCompare(b.des))
  if(sortby == "packed") sorted = arr.slice().sort((a , b) => Number(a.packed) - Number(b.packed))
  function clear(){
    setItems([])
  }
  return (
    <div className="list">
      <ul>
        {sorted.length !== 0
          ? sorted.map((item) => {
              return (
                <Item
                  key={item.id}
                  des={item.des}
                  quality={item.quality}
                  id={item.id}
                  packed={item.packed}
                  removeFun={removeFun}
                  sellectItem={sellectItem}
                />
              );
            })
          : "No item..."}
      </ul>
      <div className="actions">
        <select  name="" id="" onChange={(e)=> setSortbay(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={()=> clear()}>Clear</button>
      </div>
    </div>
  );
}
