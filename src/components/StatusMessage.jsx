import React from 'react';

const StatusMessage = (winner, current) => {
  //     const msg = winner
  //     ? `Winner is ${winner}`
  //     : `Next Player is ${Current.isXNext ? 'x' : 'o'}`;
  // console.log(winner);

  const noMovesLeft = winner.current.board.every(el => el !== null);
  return (
    <div>
      <div className="status-message">
        {winner.winner && (
          <>
            Winner is{' '}
            <span
              className={winner.winner === 'X' ? 'text-green' : 'text-orange'}
            >
              {winner.winner}
            </span>
          </>
        )}
        {!winner.winner && !noMovesLeft && (
          <>
            Next player is{' '}
            <span
              className={winner.current.isXNext ? 'text-green' : 'text-orange'}
            >
              {winner.current.isXNext ? 'x' : 'o'}
            </span>
          </>
        )}
        {!winner.winner && noMovesLeft && (
          <>
            <span className="text-green">X</span> and{' '}
            <span className="text-orange">0</span>are tied
          </>
        )}
      </div>
    </div>
  );
};

export default StatusMessage;
