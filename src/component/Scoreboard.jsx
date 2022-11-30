import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div className='score-container'>
      <h2>Score</h2>
      <div>{score}</div>
    </div>
  );
};

export default Scoreboard;
