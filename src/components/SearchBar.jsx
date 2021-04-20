import React, { Component } from "react";
import "./styles/Search.css";

const SearchBar = () => {
  // Styles
  const container = {
    margin: "0 0 0 30%",
    padding: "0 auto",
    width: "50%",
    border: "1px solid red",
  };

  return (
    <div id="search-container">
      <div id="searchbar-container">
        <input
          id="searchbar"
          type="text"
          placeholder="Search the Universe..."
        />
      </div>
      <button id="search-btn">SEARCH</button>
    </div>
  );
};

export default SearchBar;
