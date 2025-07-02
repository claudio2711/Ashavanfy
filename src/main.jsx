/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from "./context/PlayerContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
     </BrowserRouter>
   </StrictMode>,
)
