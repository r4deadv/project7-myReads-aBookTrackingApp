import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ setQuery }) {
  const handleInput = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div className="search-books-bar">
      {/* link to home page */}
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onInput={handleInput}
        />
      </div>
    </div>
  );
}

export default SearchBar;
