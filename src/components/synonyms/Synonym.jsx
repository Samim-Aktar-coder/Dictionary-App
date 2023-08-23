import React, { useContext } from "react";
import "./synonym.css";
import { InputContext } from "../input/InputProvider";

export default function Synonym() {
  const { state } = useContext(InputContext);

  let meanings = state.data.meanings;

  if (meanings) {
    var synonyms = meanings.map((item) => item.synonyms);
    var synonymsData = synonyms[0];
  }

  return (
    meanings &&
    (synonymsData.length ? (
      <div className='word-details'>
        <h2>Synonyms</h2>
        <ul className='details synonym'>
          {synonymsData.map((antonym, index) => (
            <li key={antonym + index}>{antonym}</li>
          ))}
        </ul>
      </div>
    ) : (
      ""
    ))
  );
}
