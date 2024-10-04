import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonPage from './pages/PokemonPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import FinalScore from './pages/FinalScore'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/score" element={<FinalScore />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
