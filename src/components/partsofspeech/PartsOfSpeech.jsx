import React, { useContext } from "react";
import "./common.css";
import { InputContext } from "../input/InputProvider";

export default function PartOfSpeech() {
  const { state } = useContext(InputContext);

  let meanings = state.data.meanings;

  return (
    meanings && (
      <div>
        {meanings.map((item, index) => (
          <div className='word-details' key={item.partOfSpeech + index}>
            <h2>{item.partOfSpeech}</h2>
            <ul className='details'>
              {item.definitions.map((definition, index) => (
                <div
                  key={definition.definition + index}
                  className='details-point'
                >
                  <li>{definition.definition}</li>
                  {definition.example && <p>Ex- {definition.example}</p>}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  );
}
