import React from "react"
import "./App.css"

import Home from "./components/Home"

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>GitHub Repositories</h2>
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  )
}

export default App
