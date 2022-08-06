import Shelf from "./Shelf";
import Header from "./Header";

function Library({ books, handleOnClick }) {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <Shelf title="Currently Reading" books={currentlyReading} />
        <Shelf title="Want to Read" books={wantToRead} />
        <Shelf title="Read" books={read} />
      </div>
      <div className="open-search">
        <a onClick={handleOnClick}>Add a book</a>
      </div>
    </div>
  );
}

export default Library;
