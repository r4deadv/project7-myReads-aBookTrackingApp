import Shelf from "./Shelf";
import Header from "./Header";
import AddButton from "./AddButton";
import { useState, useEffect } from "react";

function Library({ books, getAllBooks }) {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    console.log("shelf updateing");
    setCurrentlyReading([]);
    setWantToRead([]);
    setRead([]);

    books
      .filter((book) => book.shelf !== "none")
      .forEach((book) => {
        if (book.shelf === "currentlyReading") {
          setCurrentlyReading((currentlyReading) => [
            ...currentlyReading,
            book,
          ]);
        } else if (book.shelf === "wantToRead") {
          setWantToRead((wantToRead) => [...wantToRead, book]);
        } else if (book.shelf === "read") {
          setRead((read) => [...read, book]);
        } else if (book.shelf === "none") {
          return;
        }
      });
  }, [books]);

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <Shelf
          title="Currently Reading"
          books={currentlyReading}
          getAllBooks={getAllBooks}
        />
        <Shelf
          title="Want to Read"
          books={wantToRead}
          getAllBooks={getAllBooks}
        />
        <Shelf title="Read" books={read} getAllBooks={getAllBooks} />
      </div>
      <AddButton />
    </div>
  );
}

export default Library;
