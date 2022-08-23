import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../pages/App'
import { ContextProvider } from "../contexts/Context"
import GlobalStyle from "../../public/GlobalStyle"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <GlobalStyle/>
      <App />
    </React.StrictMode>
  </ContextProvider>
)
