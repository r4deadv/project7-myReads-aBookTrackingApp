import "./App.css";
import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import Library from "./components/landing-page/Library";
import { getAll } from "./BooksAPI";
import Search from "./components/search-page/Search";

// console.log(search("reac"));
// let resault = search("Reac");
// resault.then((data) => console.log(data));

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await getAll();
    await setBooks(response);
  };

  useEffect(() => {
    getAllBooks();
    console.log("books", books);
  }, [books.length]);

  const handleOnClick = () => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search books={books} handleOnClick={handleOnClick} />
      ) : (
        <Library books={books} handleOnClick={handleOnClick} />
      )}
    </div>
  );
}

export default App;
