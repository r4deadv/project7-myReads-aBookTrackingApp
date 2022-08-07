import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

function Book({ book, getAllBooks }) {
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imgLink={book.imageLinks.smallThumbnail} />
        <BookShelfChanger book={book} getAllBooks={getAllBooks} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors
          ? book.authors.map((author, index) => {
              return <div key={index}>{author}</div>;
            })
          : "No authors found."}
      </div>
    </div>
  );
}

export default Book;
