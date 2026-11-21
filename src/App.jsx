import { useState } from "react"
import Play_100Main from "./play_100/play_100Main.jsx"
import KeyboardMain from "./keyboard/keyboardMain.jsx"
import "./keyboard/keyboard.css"

function App() {
  const [games, setGames] = useState(1)
  return (<div className="app-container">
    <div className="nav-tabs">
      <button className={`nav-tab-btn ${games === 1 ? "active" : ""}`} onClick={() => setGames(1)}>keyboard</button>
      <button className={`nav-tab-btn ${games === 2 ? "active" : ""}`} onClick={() => setGames(2)}>play_100</button>
    </div>
    {games === 1 && <KeyboardMain />}
    {games === 2 && <Play_100Main />}
  </div>
  )
}

export default App