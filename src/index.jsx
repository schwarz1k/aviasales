import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store.jsx'
import App from './components/App/App.jsx'

import './assets/styles/global.scss'
import './assets/styles/variables.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
