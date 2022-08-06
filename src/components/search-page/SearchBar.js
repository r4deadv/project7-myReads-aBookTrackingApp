import React from "react";

function SearchBar({ books, handleOnClick }) {
  return (
    <div className="search-books-bar">
      <a className="close-search" onClick={handleOnClick}>
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title, author, or ISBN" />
      </div>
    </div>
  );
}

export default SearchBar;
