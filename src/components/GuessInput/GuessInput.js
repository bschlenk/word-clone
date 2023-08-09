import React, { useState } from 'react'

function GuessInput({ onGuess, disabled }) {
  const [guess, setGuess] = useState('')

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        console.log({ guess })
        setGuess('')
        onGuess(guess)
      }}
    >
      <label>
        Enter guess:
        <input
          type="text"
          value={guess}
          pattern="\w{5}"
          title="A 5 letter guess"
          disabled={disabled}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase())
          }}
        />
      </label>
    </form>
  )
}

export default GuessInput
