import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonPage from './pages/PokemonPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonPage />
  </StrictMode>,
)
