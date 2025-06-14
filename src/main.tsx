import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { APIProvider } from './Components/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider>
    <Router>
      <App />
    </Router>
    </APIProvider>
  </StrictMode>,
)
