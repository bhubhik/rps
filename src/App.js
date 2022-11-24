import React, { useState } from 'react';
import Game from './component/Game';
import Player from './component/Player';
import Scoreboard from './component/Scoreboard';

function App() {
  const [playersHand, setPlayerHand] = useState('');
  const [score, setScore] = useState(0);

  return (
    <>
      <Scoreboard score={score} />
      <Player setPlayerHand={setPlayerHand} />
      <Game score={score} playerHand={playersHand} setScore={setScore} />
    </>
  );
}

export default App;
