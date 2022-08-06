import React from "react";
import Book from "./Book";

function Shelf({ books, title }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.length > 0
            ? books.map((book) => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))
            : "No books found"}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
