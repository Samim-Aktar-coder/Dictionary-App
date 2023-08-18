import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./input.css";

export default function Input() {
  const [word, setWord] = useState({
    name: "smile",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWord(() => {
      return {
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word.name)
    
  };

  return (
    <div className='input'>
      <h2>Write the word you want to know more about</h2>
      <form action='#' onSubmit={handleSubmit} className='input__control'>
        <input
          type='text'
          name='name'
          value={word.name}
          onChange={handleChange}
          required
        />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
