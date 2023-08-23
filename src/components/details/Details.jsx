import React, { useContext } from "react";
import "./details.css";
import { InputContext } from "../input/InputProvider";

export default function Details() {
  const { state } = useContext(InputContext);

  if (state.data.sourceUrls) {
    var sourceURL = state.data.sourceUrls[0];
  }

  return (
    <a href={sourceURL} target='_blank' className='details-link'>
      More Details
    </a>
  );
}
