import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import "bootstrap/dist/css/bootstrap.css"
import "./index.css"


/*
  Uncomment below snippet to test for 
  accessibility issues.
*/
// import axe from  'react-axe'

// if (process.env.NODE_ENV !== 'production') {
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
