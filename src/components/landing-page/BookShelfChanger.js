import React from "react";

function BookShelfChanger({ book }) {
  function changeBookShelf() {}

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={book.shelf}
        onChange={(event) => changeBookShelf(book, event.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
