import React, { useState } from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"

function App() {

  const [startGame,setStartGame] = useState(false)
  function beginGame(){
    setStartGame(prev => !prev)
  }
  return (
    <>
      {!startGame? <Home beginGame={beginGame}/> : <Quiz/>}
    </>
  )
}

export default App
