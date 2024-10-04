import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PokemonPage from './pages/PokemonPage'
import FinalScore from './pages/FinalScore'
// import Menu from './pages/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/" element={<PokemonPage />} />
        <Route path="/score" element={<FinalScore />} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
