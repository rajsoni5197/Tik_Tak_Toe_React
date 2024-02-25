import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import TurnProvider from '../store/TurnState.jsx'
import BoardStateProvider from '../store/BoardState'
import WinStateProvider from '../store/WinState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TurnProvider>
      <BoardStateProvider>
        <WinStateProvider>
          <App />
        </WinStateProvider>
      </BoardStateProvider>
    </TurnProvider>


  </React.StrictMode>,
)
