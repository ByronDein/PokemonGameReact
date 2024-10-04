import { useNavigate } from "react-router-dom"
const FinalScore = () => {
    const navigate = useNavigate();
    const newGame = () => {
        navigate('/');
    }
  return (
    <div className="flex flex-col justify-center items-center mt-20">
        <h2>¡Felicidades! Has completado el juego</h2>
        <h3>Tu puntuación final es: {1} de {2}</h3>
        <button className="p-2 bg-red-300 rounded-lg" onClick={newGame}>Jugar de nuevo</button>
        
    </div>
  )
}

export default FinalScore