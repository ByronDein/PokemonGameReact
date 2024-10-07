import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const FinalScore = () => {
    const { score, quantityOfQuestions } = useContext(ScoreContext);
    const navigate = useNavigate();

    const newGame = () => {
        navigate('/');
    }

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h2>¡Felicidades! Has completado el juego</h2>
            <h3>Tu puntuación final es: {score} de {quantityOfQuestions}</h3>
            <h4>Porcentaje de aciertos: {((score / quantityOfQuestions) * 100).toFixed(2)}%</h4>
            <button className="p-2 bg-red-300 rounded-lg" onClick={newGame}>Jugar de nuevo</button>
        </div>
    )
}

export default FinalScore;