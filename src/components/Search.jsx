import React, { Component } from "react";
import SearchBar from "./SearchBar";

const Search = () => {
  // Styles
  const container = {
    width: "100%",
    margin: "10% auto 0 auto",
  };
  const title = {
    color: "white",
    fontFamily: "Oswald, sans-serif",
    fontWeight: "300",
    fontSize: "12rem",
    letterSpacing: "2px",
    margin: "0",
    padding: "0",
    textAlign: "center",
  };

  return (
    <div style={container}>
      <p style={title}>∞</p>
      <SearchBar />
    </div>
  );
};

export default Search;
