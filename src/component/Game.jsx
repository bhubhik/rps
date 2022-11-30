import React, { useEffect, useState } from 'react';

const Game = ({ score, playersHand, setScore }) => {
  const [result, setResult] = useState('');
  const [computerHand, setComputerHand] = useState('');

  const setHand = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const hand = Math.floor(Math.random() * 3);
    setComputerHand(options[hand]);
  };

  const draw = () => {
    if (computerHand && playersHand === computerHand) {
      setResult('Draw');
    } else if (playersHand === 'Rock') {
      if (computerHand === 'Scissors') {
        setResult('You Win');
        setScore(score + 1);
      } else if (computerHand === 'Paper') {
        setResult('You Lose');
        setScore(score - 1);
      }
    } else if (playersHand === 'Paper') {
      if (computerHand === 'Scissors') {
        setResult('You Lose');
        setScore(score - 1);
      } else if (computerHand === 'Rock') {
        setResult('You Win');
        setScore(score + 1);
      }
    } else if (playersHand === 'Scissors') {
      if (computerHand === 'Paper') {
        setResult('You Win');
        setScore(score + 1);
      } else if (computerHand === 'Rock') {
        setResult('You Lose');
        setScore(score - 1);
      }
    }
  };

  useEffect(() => {
    draw();
  }, [computerHand]);

  return (
    <div className='game'>
      <div className='result'>
        {result && (
          <>
            <h2 className='win'>{result === 'You Win' && result}</h2>
            <h2 className='lose'>{result === 'You Lose' && result}</h2>
            <h2 className='draw'>{result === 'Draw' && result}</h2>
          </>
        )}
      </div>
      <div className='hands'>
        <p className='player'>{playersHand}</p>
        <p className='computer'>{computerHand}</p>
      </div>
      <button className='play-again' onClick={setHand}>
        Play
      </button>
    </div>
  );
};

export default Game;
