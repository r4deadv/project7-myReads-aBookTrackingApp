import React from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

function Book({ book, getAllBooks }) {
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks ? (
          <BookCover imgLink={book.imageLinks.smallThumbnail} />
        ) : (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(https://www.adspeed.com/placeholder-128x193.gif)`,
            }}
          ></div>
        )}

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
