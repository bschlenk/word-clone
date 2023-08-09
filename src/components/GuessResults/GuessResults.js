import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function GuessResults({ answer, guesses }) {
  const results = [...guesses]
  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED - guesses.length; ++i) {
    results.push('')
  }

  return (
    <div className="guess-results">
      {results.map((guess, i) => (
        <Guess answer={answer} guess={guess} key={i} />
      ))}
    </div>
  )
}

const EMPTY = range(5).map(() => ({ letter: '' }))

function Guess({ answer, guess }) {
  const letters = guess ? checkGuess(guess, answer) : EMPTY

  return (
    <p className="guess">
      {letters.map(({ letter, status }, i) => (
        <span className={`cell ${status ?? ''}`} key={i}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default GuessResults
