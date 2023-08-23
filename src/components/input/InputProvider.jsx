import React, { createContext, useEffect, useReducer } from "react";
import { fetchFromAPI } from "../../fetFromAPI";

export const InputContext = createContext();

const initialState = {
  loading: true,
  word: "smile",
  data: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        word: action.word,
        data: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        word: action.word,
        error: "*Please enter correct word",
      };

    default:
      return state;
  }
};

function InputProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchFromAPI(state.word).then((data) => {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    });
  }, []);

  return (
    <InputContext.Provider value={{ state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
}

export default InputProvider;
