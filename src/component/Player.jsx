import React from 'react';

const Player = ({ setPlayersHand }) => {
  const setHand = (e) => {
    setPlayersHand(e.target.id);
  };
  return (
    <div className='container'>
      <button onClick={setHand} id='Rock' className='hand rock'>
        Rock
      </button>
      <button onClick={setHand} id='Paper' className='hand paper'>
        Paper
      </button>
      <button onClick={setHand} id='Scissors' className='hand scissors'>
        Scissors
      </button>
    </div>
  );
};

export default Player;
