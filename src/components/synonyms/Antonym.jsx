import React, { useContext } from "react";
import UserContext from "../input/InputContext";

export default function Antonym() {
  // const word = useContext(UserContext);
  // console.log(word);

  return (
    <div className='word-details'>
      <h2>Antonyms</h2>
      <ul className='details synonym'>
        <li>complex</li>
        <li>complicated</li>
        <li>compound</li>
        <li>gentle</li>
      </ul>
    </div>
  );
}
