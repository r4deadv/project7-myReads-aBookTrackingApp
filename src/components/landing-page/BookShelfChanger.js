import React from "react";
import { update } from "../../BooksAPI";

function BookShelfChanger({ book, getAllBooks }) {
  // function to move book to selected shelf
  const selectShelf = (event) => {
    const value = event.target.value;
    update(book, value).then(getAllBooks);
    // console.log("updated");
  };

  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf} onChange={selectShelf}>
        <option value="move" disabled>
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
