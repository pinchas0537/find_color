import React from 'react'

export default function grid_layout() {
  const board = []
  for (let i = 1; i <= 100; i++) {
    board.push(i)
  }
  return (
    <div className='main'>
      <h1 className='titel'>Find the Secret Color!</h1>
      <div className='table'>
      {board.map(num => <div key={num} className='cell'></div>)}
      </div>
      <div className='click'>Clicks:</div>
    </div>
  )
}
