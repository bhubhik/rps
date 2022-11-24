import React, { useEffect, useState } from 'react';

const Game = ({ score, playerHand, setScore }) => {
  const [computerHand, setComputerHand] = useState('');
  const [result, setResult] = useState('');

  const setHand = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const hand = Math.floor(Math.random() * 3);
    setComputerHand(options[hand]);
  };

  useEffect(() => {
    setHand();
    draw();
  }, [computerHand]);

  const draw = () => {
    if (playerHand === computerHand) {
      setResult('Draw');
    } else if (playerHand === 'Rock') {
      if (computerHand === 'Scissors') {
        setResult('You Win');
        setScore(score + 1);
      } else if (computerHand === 'Paper') {
        setResult('You Lose');
        setScore(score - 1);
      }
    } else if (playerHand === 'Paper') {
      if (computerHand === 'Scissors') {
        setResult('You Lose');
        setScore(score - 1);
      } else if (computerHand === 'Rock') {
        setResult('You Win');
        setScore(score + 1);
      }
    } else if (playerHand === 'Scissors') {
      if (computerHand === 'Paper') {
        setResult('You Win');
        setScore(score + 1);
      } else if (computerHand === 'Rock') {
        setResult('You Lose');
        setScore(score - 1);
      }
    }
  };

  return (
    <div className='game'>
      Your choice:{playerHand} <br />
      Computer choice:{computerHand} <br />
      Result:
      <h2>{result === 'You Win' && result}</h2>
      <h2>{result === 'You Lose' && result}</h2>
      <h2>{result === 'Draw' && result}</h2>
      <button onClick={() => setComputerHand()}>Play Again</button>
    </div>
  );
};

export default Game;
