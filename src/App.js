import React, { useState } from 'react';
import Game from './component/Game';
import Player from './component/Player';
import Scoreboard from './component/Scoreboard';

function App() {
  const [playersHand, setPlayersHand] = useState('');
  const [score, setScore] = useState(0);

  return (
    <>
      <Scoreboard score={score} />
      <Game score={score} playersHand={playersHand} setScore={setScore} />
      <Player setPlayersHand={setPlayersHand} />
    </>
  );
}

export default App;
