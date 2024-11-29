import React, { useState } from 'react';
import StartPlay from './startPlay';
import WhackaMoleGameScreen from './components/whackamole/gamescreen';

const WhackAMole = () => {
  const [play, setPlay] = useState(true);
  if (play) {
    return (
      <WhackaMoleGameScreen />
    )
  } else {
    return (
      <StartPlay name={'Whack-A-Mole'} img='/images/giphy.gif' setPlay={setPlay}/>
    )
  }
}

export default WhackAMole