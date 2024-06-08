import React, { useState } from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import { Banner } from '../Banner';
import { GuessResults } from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);
  const gameIsFinished = guesses.length >= 6 || gameStatus;

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />

      {gameIsFinished && (
        <Banner
          status={gameStatus ? 'happy' : 'sad'}
          answer={answer}
          noOfGuesses={guesses.length}
        />
      )}

      <p>Guess the five letter word:</p>
      <form
        className='guess-input-wrapper'
        onSubmit={(event) => {
          event.preventDefault();
          setGuesses([...guesses, guess]);
          setGuess('');
          setGameStatus(guess === answer);
        }}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          disabled={gameIsFinished}
          type='text'
          value={guess}
          pattern={'[a-zA-Z]{5}'}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Game;
