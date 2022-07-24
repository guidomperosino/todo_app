import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
  const onSerchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      value={searchValue}
      onChange={onSerchValueChange}
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
