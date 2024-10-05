import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonPage from './pages/PokemonPage'
import FinalScore from './pages/FinalScore'
// import Menu from './pages/Menu'
import './index.css'
import { ScoreProvider } from './contexts/ScoreContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Menu />} /> */}
          <Route path="/" element={<PokemonPage />} />
          <Route path="/score" element={<FinalScore />} />

        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  </StrictMode>,
)
