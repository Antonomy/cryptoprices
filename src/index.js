import './styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

// Wrap the App Component with the Router component to enable the router features
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
