import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App.jsx'

import './assets/styles/global.scss'
import './assets/styles/variables.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
