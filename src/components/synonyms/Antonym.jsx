import React, { useContext } from "react";
import { InputContext } from "../input/InputProvider";

export default function Antonym() {
  const { state } = useContext(InputContext);

  let meanings = state.data.meanings;

  if (meanings) {
    var antonyms = meanings.map((item) => item.antonyms);
    var antonymsData = antonyms[0];
  }


  return (
    meanings &&
    (antonymsData.length ? (
      <div className='word-details'>
        <h2>Antonyms</h2>
        <ul className='details synonym'>
          {antonymsData.map((antonym, index) => (
            <li key={antonym + index}>{antonym}</li>
          ))}
        </ul>
      </div>
    ) : (
      ""
    ))
  );
}
