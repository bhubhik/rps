import React from 'react';

const Player = ({ setPlayerHand }) => {
  const setHand = (e) => {
    setPlayerHand(e.target.id);
  };
  return (
    <div className='container'>
      <div onClick={setHand} id='Rock' className='hand rock'>
        Rock
      </div>
      <div onClick={setHand} id='Paper' className='hand paper'>
        Paper
      </div>
      <div onClick={setHand} id='Scissors' className='hand scissors'>
        Scissors
      </div>
    </div>
  );
};

export default Player;
