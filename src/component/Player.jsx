import React from 'react';

const Player = ({ setPlayerHand }) => {
  const setHand = (e) => {
    setPlayerHand(e.target.id);
  };
  return (
    <>
      <div onClick={setHand} id='rock' className='hand rock'>
        Rock
      </div>
      <div onClick={setHand} id='paper' className='hand paper'>
        Paper
      </div>
      <div onClick={setHand} id='scissors' className='hand scissors'>
        Scissors
      </div>
    </>
  );
};

export default Player;
