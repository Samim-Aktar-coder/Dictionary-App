import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./input.css";
import InputState from "./InputState";

export default function Input() {
  const [word, setWord] = useState("simple");
  const [fullWord, setFullWord] = useState("simple");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullWord(word);
    // console.log(fullWord)
  };

  return (
    <div className='input'>
      <h2>Write the word you want to know more about</h2>
      <form action='#' onSubmit={handleSubmit} className='input__control'>
        <input
          type='search'
          name='name'
          value={word}
          onChange={handleChange}
          required
        />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
      <InputState word={fullWord} />
    </div>
  );
}
