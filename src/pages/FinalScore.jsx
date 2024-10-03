import { useNavigate } from "react-router-dom"
const FinalScore = () => {
    const navigate = useNavigate();
    const newGame = () => {
        navigate('/');
    }
  return (
    <div>
        <h2>¡Felicidades! Has completado el juego</h2>
        <h3>Tu puntuación final es: {1} de {2}</h3>
        <button onClick={newGame}>Jugar de nuevo</button>
        
    </div>
  )
}

export default FinalScore