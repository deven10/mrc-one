import React, { createContext, useEffect, useState } from "react";
import { Books } from "../db/books";

export const ContextBooks = createContext();

export const BooksContext = ({ children }) => {
  const [allBooks, setAllBooks] = useState(Books);
  const [search, setSearch] = useState("");
  //   const [displayBooks, setDisplayBooks] = useState([]);

  const searchedBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  //   const displayBooks = allBooks.()

  const changeCategory = (e, selectedBookID) => {
    const newBooksList = allBooks.map((book) =>
      selectedBookID === book.id ? { ...book, category: e.target.value } : book
    );

    setAllBooks(newBooksList);
  };

  return (
    <ContextBooks.Provider
      value={{
        name: "deven",
        allBooks,
        setAllBooks,
        changeCategory,
        // displayBooks,
        search,
        setSearch,
        searchedBooks,
      }}
    >
      {children}
    </ContextBooks.Provider>
  );
};
