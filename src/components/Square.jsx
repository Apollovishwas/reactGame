import React from 'react';
import { Component } from 'react';
import './styles/Squares.scss';

const Square = ({ value, onClick, isWinningSquare }) => {
  console.log('Tje comp', isWinningSquare);
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`square ${isWinningSquare ? 'winning' : ''}${
          value === 'X' ? 'text-green' : 'text-orange'
        }`}
        style={{
          fontWeight: isWinningSquare ? 'bold' : 'normal',
        }}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
