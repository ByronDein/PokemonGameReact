import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pokemon from './Pokemon'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokemon />
  </StrictMode>,
)
