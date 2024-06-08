import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

/**
 * @param {Object} props
 * @param {string[]} props.guess
 */
function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : ''}
          status={result ? result[num].status : ''}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export default Guess;
