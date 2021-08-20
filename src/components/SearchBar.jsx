import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Looking for a Pókemon?"
        className="search"
      />
    </div>
  );
};

export default SearchBar;
