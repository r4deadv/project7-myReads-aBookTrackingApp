import React, { useEffect, useState } from "react";
import { search } from "../../BooksAPI";
import SearchBar from "./SearchBar";
import Book from "../landing-page/Book";

function Search({ books, getAllBooks }) {
  const [query, setQuery] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);

  useEffect(() => {
    if (query) {
      search(query)
        .then((searchedBooks) => {
          searchedBooks.map((book) => {
            // find searched book and set the shelf
            const currentBook = books.find((b) => b.id === book.id);
            if (currentBook) {
              book.shelf = currentBook.shelf;
            } else {
              book.shelf = "none";
            }
            return book;
          });
          setFoundBooks(searchedBooks);
        })
        .catch((error) => {
          setFoundBooks([]);
        });
    } else {
      setFoundBooks([]);
    }
  }, [query, foundBooks.length, books, setFoundBooks]);

  return (
    <div className="search-books">
      <SearchBar books={books} setQuery={setQuery} />
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.length === 0 && query !== "" ? (
            <p>"No books found"</p>
          ) : (
            <></>
          )}
          {foundBooks &&
            foundBooks.length > 0 &&
            foundBooks.map((book) => (
              <Book key={book.id} book={book} getAllBooks={getAllBooks} />
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
