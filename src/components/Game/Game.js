import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [status, setStatus] = useState('playing')

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        disabled={status !== 'playing'}
        onGuess={(guess) => {
          if (status !== 'playing') return

          setGuesses((curr) => [...curr, guess])
          if (guess === answer) {
            setStatus('winner')
          } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
            setStatus('loser')
          }
        }}
      />

      {status === 'winner' && <WinBanner numGuesses={guesses.length} />}
      {status === 'loser' && <LoseBanner answer={answer} />}
    </>
  )
}

function WinBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  )
}

function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default Game
