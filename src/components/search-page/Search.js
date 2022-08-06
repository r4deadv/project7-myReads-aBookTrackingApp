import React from "react";
import SearchBar from "./SearchBar";

function Search({ books, handleOnClick }) {
  return (
    <div className="search-books">
      <SearchBar handleOnClick={handleOnClick} books={books} />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}

export default Search;
