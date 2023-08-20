import InputContext from "./InputContext";
import { fetchFromAPI } from "../../fetFromAPI.js";
import { useEffect, useState } from "react";

export default function InputState(props) {
  const [wordData, setWordData] = useState(
    fetchFromAPI(props.word)
      .then((data) => {
        return {
          ...data,
        };
      })
      .catch((err) => console.log(err))
  );

  console.log(props.word);
  console.log(wordData);

  useEffect(() => {
    fetchFromAPI(props.word)
      .then((data) => setWordData(...data))
      .catch((err) => console.log(err));
  }, [props.word]);

  return (
    <InputContext.Provider value={wordData}>
      {props.children}
    </InputContext.Provider>
  );
}
