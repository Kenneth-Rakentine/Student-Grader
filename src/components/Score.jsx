import React, { useContext } from 'react'

const Score = ( {student} ) => {
  return (
    <div className='scoreContainer'>
      <div className='date'>
        <h3>DATE</h3>
        {student.scores.map((score) => {
            return <p>{score.date}</p>
        })}
      </div>
      
      <div className='score'>
        <h3>SCORE</h3>
        {student.scores.map((score) => {
            return <p>{score.score}</p>
        })}
      </div>
    </div>
  )
}

export default Score
