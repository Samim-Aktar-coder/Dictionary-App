import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./input.css";
import { InputContext } from "./InputProvider";
import axios from "axios";

export default function Input() {
  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const [word, setWord] = useState("smile");
  const { state, dispatch } = useContext(InputContext);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(`${BASE_URL}/${word}`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data[0], word: word });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
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
      <p className='err-msg'>{state.error ? state.error : ""}</p>
    </div>
  );
}
