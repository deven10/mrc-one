import React, { useContext } from "react";
import { ContextBooks } from "../context/BooksContext";

import "../styling/Search.css";
export const Search = () => {
  const { changeCategory, search, setSearch, searchedBooks } =
    useContext(ContextBooks);

  const categoryOptions = [
    { label: "Currently Reading", value: "Currently Reading" },
    { label: "Want to Read", value: "Want to Read" },
    { label: "Read", value: "Read" },
    { label: "None", value: "None" },
  ];

  return (
    <div className="main-search">
      <input
        className="search-box"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="all-books-wrapper">
        {search === "" ? (
          <p className="no-data">Please search something, ¯\_(ツ)_/¯</p>
        ) : (
          searchedBooks.map(({ author, coverImg, title, id, category }) => {
            return (
              <div key={id} className="book">
                <img className="book-img" src={coverImg} alt="title" />
                <p className="book-title">{title}</p>
                <p className="book-author">{author}</p>
                <select
                  className="selet-tag"
                  defaultValue={category}
                  onChange={(e) => changeCategory(e, id)}
                >
                  {/* <option value={category}>{category}</option> */}
                  {/* .filter((option) => option.value !== category) */}
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
