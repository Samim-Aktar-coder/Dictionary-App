import React, { useContext } from "react";
import { AiFillSound } from "react-icons/ai";
import "./sound.css";
import InputContext from "../input/InputContext";

export default function Sound() {
  const word = useContext(InputContext);

  console.log(word);

  const playAudio = () => {
    let audio = document.querySelector(".audio-btn audio");
    audio.play();
  };

  return (
    <div className='sound'>
      <h2>pronunciation</h2>
      <div className='pronunciation-info'>
        <div className='audio-btn' onClick={playAudio}>
          <audio>
            <source src='https://api.dictionaryapi.dev/media/pronunciations/en/simple-uk.mp3' />
          </audio>
          <AiFillSound />
        </div>
        <p>/ˈsɪmpəl/</p>
      </div>
    </div>
  );
}
