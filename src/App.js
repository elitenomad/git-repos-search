import React from "react"
import "./App.css"

import Home from "./components/Home"

const App = () => {
  return (
    <div className="App">
      <header className="App-header" role="banner">
        <h1>GitHub Repositories</h1>
      </header>
      <main className="container" role="main">
        <Home />
      </main>
    </div>
  )
}

export default App
