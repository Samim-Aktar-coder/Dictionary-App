import React from 'react'
import './heading.css'
import line from '../../assests/underline.png'

export default function Heading() {
  return (
    <div className='heading'>
      <h1>Dictionexus</h1>
          <p>Words Explored, Worlds Revealed</p>
          <img src={line} alt="undeline-img" />
    </div>
  );
}
