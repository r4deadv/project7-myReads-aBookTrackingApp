import "./App.css";
import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import Library from "./components/landing-page/Library";
import { getAll } from "./BooksAPI";
import Search from "./components/search-page/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// console.log(search("reac"));
// let resault = search("Reac");
// resault.then((data) => console.log(data));

function App() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const response = await getAll();
    setBooks(response);
  };

  useEffect(() => {
    getAllBooks();
    console.log("books", books);
  }, [books.length]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Library books={books} getAllBooks={getAllBooks} />}
        />
        <Route path="/search" element={<Search books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
