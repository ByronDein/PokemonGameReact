import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const FinalScore = () => {
    const { score, quantityOfQuestions } = useContext(ScoreContext);
    const navigate = useNavigate();

    const newGame = () => {
        navigate('/');
    }

    const saveScore = () => {
        console.log('Guardando score');
        // const response = axios.post('http://localhost:3001/scores', {
        //     name: 'Nombre',
        //     score: score,
        //     totalQuestions: quantityOfQuestions
        // }
        // )
        // console.log(response);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <h2>¡Felicidades! Has completado el juego</h2>
            <h3>Tu puntuación final es: {score} de {quantityOfQuestions}</h3>
            <h4>Porcentaje de aciertos: {((score / quantityOfQuestions) * 100).toFixed(2)}%</h4>
            <label className="mt-5 ">
            Ingrese su nombre para el ranking:
            </label>
            <input type="text" className="p-2 w-52 my-2 border-2 border-gray-600 rounded-lg" />
            <button className="p-2 w-52 my-2 bg-green-300 rounded-lg" onClick={()=> saveScore()}>Enviar</button>
            <button className="p-2 w-52 bg-red-300 rounded-lg" onClick={newGame}>Jugar de nuevo</button>
        </div>
    )
}

export default FinalScore;