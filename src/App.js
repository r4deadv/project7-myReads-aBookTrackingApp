import "./App.css";
import { useState, useEffect } from "react";
import Library from "./components/landing-page/Library";
import { getAll } from "./BooksAPI";
import Search from "./components/search-page/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  // get all book from BooksAPI
  const getAllBooks = async () => {
    const response = await getAll();
    setBooks(response);
  };

  useEffect(() => {
    getAllBooks();
    // console.log("books", books);
  }, [books.length]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Library books={books} getAllBooks={getAllBooks} />}
        />
        <Route
          path="/search"
          element={<Search books={books} getAllBooks={getAllBooks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
