import React, { useContext, useState } from "react";
import { Books } from "../db/books";
import "../styling/BookShelf.css";
import { ContextBooks } from "../context/BooksContext";

export const BookShelf = () => {
  const { allBooks, changeCategory } = useContext(ContextBooks);

  const categoryOptions = [
    { label: "Currently Reading", value: "Currently Reading" },
    { label: "Want to Read", value: "Want to Read" },
    { label: "Read", value: "Read" },
    { label: "None", value: "None" },
  ];

  return (
    <>
      <div className="book-shelf">
        <p className="title">Currently Reading</p>
        <hr />
        <div className="books-wrapper">
          {allBooks.filter((book) => book.category === "Currently Reading")
            .length <= 0 ? (
            <p className="no-data">
              Please add something that you're Currently Reading, ¯\_(ツ)_/¯
            </p>
          ) : (
            allBooks
              .filter((book) => book.category === "Currently Reading")
              .map(({ author, coverImg, title, id, category }) => {
                return (
                  <div key={id} className="book">
                    <img className="book-img" src={coverImg} alt="title" />
                    <p className="book-title">{title}</p>
                    <p className="book-author">{author}</p>
                    <select
                      className="selet-tag"
                      onChange={(e) => changeCategory(e, id)}
                    >
                      <option value={category}>{category}</option>
                      {categoryOptions
                        .filter((option) => option.value !== category)
                        .map((option, index) => (
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
      <div className="book-shelf">
        <p className="title">Want to Read</p>
        <hr />
        <div className="books-wrapper">
          {allBooks.filter((book) => book.category === "Want to Read").length <=
          0 ? (
            <p className="no-data">
              Please add something you Want to Read, ¯\_(ツ)_/¯
            </p>
          ) : (
            allBooks
              .filter((book) => book.category === "Want to Read")
              .map(({ author, coverImg, title, id, category }) => {
                return (
                  <div key={id} className="book">
                    <img className="book-img" src={coverImg} alt="title" />
                    <p className="book-title">{title}</p>
                    <p className="book-author">{author}</p>
                    <select
                      className="selet-tag"
                      onChange={(e) => changeCategory(e, id)}
                    >
                      <option value={category}>{category}</option>
                      {categoryOptions
                        .filter((option) => option.value !== category)
                        .map((option, index) => (
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
      <div className="book-shelf">
        <p className="title">Read</p>
        <hr />
        <div className="books-wrapper">
          {allBooks.filter((book) => book.category === "Read").length <= 0 ? (
            <p className="no-data">
              Please add something that you've already Read, ¯\_(ツ)_/¯
            </p>
          ) : (
            allBooks
              .filter((book) => book.category === "Read")
              .map(({ author, coverImg, title, id, category }) => {
                return (
                  <div key={id} className="book">
                    <img className="book-img" src={coverImg} alt="title" />
                    <p className="book-title">{title}</p>
                    <p className="book-author">{author}</p>
                    <select
                      className="selet-tag"
                      onChange={(e) => changeCategory(e, id)}
                    >
                      <option value={category}>{category}</option>
                      {categoryOptions
                        .filter((option) => option.value !== category)
                        .map((option, index) => (
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
    </>
  );
};
