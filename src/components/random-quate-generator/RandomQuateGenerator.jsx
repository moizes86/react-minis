import React, { useState } from "react";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({
    content: "A day without a smile is a wasted day",
    author: "Haled Masha'al",
  });
  function handleClick() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((res) => setQuote({ content: res.content, author: res.author }))
      .catch((error) => console.log(error));
  }

  return (
    <div className="random-quote-generator text-center">
      <h3>Random Quote Generator</h3>
      <div className="mb-5">
        <blockquote>''{quote.content}''</blockquote>
        <i>{quote.author}</i>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Random Quote
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
