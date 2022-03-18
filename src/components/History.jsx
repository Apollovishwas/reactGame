import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((name, key) => {
          return (
            <li key={key}>
              <button
                className={`btn-move${key === currentMove ? 'active' : ''}`}
                type="button"
                onClick={() => {
                  moveTo(key);
                }}
              >
                {key === 0 ? 'go to game start' : `Go to move ${key}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
