import { Provider } from "./components/ui/Provider.jsx"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
