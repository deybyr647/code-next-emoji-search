import React, { useState, useEffect } from "react";
import * as EmojiAPI from "./data/EmojiAPI";

import Header from "./header";
import Input from "./input";
import Results from "./results";

import "./index.css";

let App = () => {
  const [emojis, setEmojis] = useState([]);
  const [query, setQuery] = useState("");

  const inputHandler = e => setQuery(e.target.value);

  useEffect(() => {
    const nextEmojis = EmojiAPI.search(query, 10);
    setEmojis(nextEmojis);
  }, [query]);

  return (
    <>
      <Header />
      <Input value={query} onChange={inputHandler} />
      <Results emojis={emojis} />
    </>
  );
};

export default App;
