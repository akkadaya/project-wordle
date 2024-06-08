import React from 'react';

function Banner({ status, answer, noOfGuesses }) {
  return (
    <div className={`${status} banner`}>
      {status === 'happy'
        ? (
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{noOfGuesses} guesses</strong>.
          </p>
        )
        : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
    </div>
  );
}

export default Banner;
