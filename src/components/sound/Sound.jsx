import React, { useContext } from "react";
import { AiFillSound } from "react-icons/ai";
import "./sound.css";
import { InputContext } from "../input/InputProvider";

export default function Sound() {
  const { state } = useContext(InputContext);

  const playAudio = () => {
    let audio = document.querySelector(".audio-btn audio");
    let src = audio.firstChild.getAttribute("src");
    if (src) {
      audio.play();
    }
  };

  let phoneticsData = state.data.phonetics;

  return (
    phoneticsData && (
      <div className='sound'>
        <h2>pronunciation</h2>
        {phoneticsData.map((item, index) => (
          <div className='pronunciation-info' key={item.text + index}>
            <div className='audio-btn' onClick={playAudio}>
              <audio>
                <source src={item.audio} />
              </audio>
              <AiFillSound />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    )
  );
}
