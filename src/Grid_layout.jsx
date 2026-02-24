import React, { useRef, useState } from 'react'
const clicks = []

export default function grid_layout() {
  const [count, setcount] = useState(0)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("false")
  const board = []
  for (let i = 1; i <= 100; i++) {
    board.push(i)
  }
  const cellsecret = useRef((Math.floor(Math.random() * 100) + 1))  
  function onClick(e, num) {
    if (!clicks.includes(num)) {
      clicks.push(num)
      if (num !== cellsecret.current) {
        setcount(count + 1)
        e.target.className = "cell x"
        e.target.textContent = "X"
        setMessage("Keep Searching!")
      }
      else {
        e.target.className = "cell v"
        setMessage("Sucress")
        setStatus("true")
      }
    }
  }

  return (
    <div className='main'>
      <h1 className='titel'>Find the Secret Color!</h1>
      <div className='table'>
        {board.map((num) =>
          <div key={num} className='cell' onClick={(e) => {
            if (status === "true") return
            onClick(e, num)
          }}>
          </div>
        )}
      </div>
      <div className='click'>Clicks: {count}</div>
      <div className={message === "Sucress" ? "suc" : "keep"}>{message}</div>
      <button className={`${status}-button`} onClick={() => {
        location.reload()
      }}><span>now game</span> </button>
    </div>
  )
}
