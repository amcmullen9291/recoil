import './index.css';
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { RecoilRoot } from "recoil"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
)

// nothing at all changes in this file. Put the RecoilRoot  component where the Store would be
