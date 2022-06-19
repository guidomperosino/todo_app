import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSerchValueChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      onChange={onSerchValueChange}
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
