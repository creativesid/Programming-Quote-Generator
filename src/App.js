import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [quotes, setQuotes] = useState("");
  const getQuote = () => {
    fetch("https://quotes.stormconsultancy.co.uk/quotes.json")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote">
        <p>" {quotes.quote} "</p>
        <p>Author: {quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
