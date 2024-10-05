import { useNavigate, useLocation } from "react-router-dom"
const FinalScore = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get('score');
  const quantityOfQuestions = searchParams.get('quantityOfQuestions');
  const navigate = useNavigate();
  const newGame = () => {
    navigate('/');
  }
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h2>¡Felicidades! Has completado el juego</h2>
      <h3>Tu puntuación final es: {score} de {quantityOfQuestions}</h3>
      <button className="p-2 bg-red-300 rounded-lg" onClick={newGame}>Jugar de nuevo</button>

    </div>
  )
}

export default FinalScore