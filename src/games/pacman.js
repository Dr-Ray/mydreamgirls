import React, { useState } from 'react';
import PacmanGameScreen from './components/pacman/gamescreen';
import StartPlay from './startPlay';

const Pacman = () => {
  const [play, setPlay] = useState(true);
  if (play) {
    return (
      <PacmanGameScreen />
    )
  } else {
    return (
      <StartPlay name={'PAC - MAN'} img='/images/giphy.gif' setPlay={setPlay}/>
    )
  }
}

export default Pacman