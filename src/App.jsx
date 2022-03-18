import React from 'react';
import { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

import { calculateWinner } from './helpers';
const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const Current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(Current.board);
  console.log(winner, winningSquares);

  //handleSquareClick
  const handleSquareClick = position => {
    //if board[pos] is null, just return. We don't wanna update it.
    if (Current.board[position] || winner) {
      return;
    }
    //prev refers to previous state of the objects
    setHistory(prev => {
      const last = prev[[prev.length - 1]];

      // console.log(prev);
      const newBoard = last.board.map((square, pos) => {
        // console.log(square, pos);
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  //history moveTo Function

  const moveTo = move => {
    setCurrentMove(move);
  };
  //resetting the game
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={Current} />
      <Board
        board={Current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start new Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};

export default App;
