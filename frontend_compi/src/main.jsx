import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SemiPrincipal from './SemiPrincipal.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SemiPrincipal />
    <App />
  </StrictMode>,
)
