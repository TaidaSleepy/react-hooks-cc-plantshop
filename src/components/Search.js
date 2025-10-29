import React from "react";

// Search is a simple presentational component that tells parent about input
function Search({ onSearch }) {
  // call this on every change to keep it simple and like the spec
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;