import { useEffect, useState } from "react";
import { CircleLoader } from 'react-spinners';
import getPokemonOptions from "../helpers/getPokemonOptions";

const PokemonPage = () => {
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(0);
    const [loading, setLoading] = useState(true);
    const [score, setscore] = useState(0)
    const [message, setmessage] = useState('')
    const [quantityOfQuestions, setquantityOfQuestions] = useState(0)
    const [remainigQuestions, setremainigQuestions] = useState(15)

    useEffect(() => {
        setLoading(true);
        setmessage('');
        const fetchPokemonData = async () => {
            try {
                const options = await getPokemonOptions();
                setPokemonInfo(options);
                const randomPokemon = Math.floor(Math.random() * 4);
                setPokemonSelected(options[randomPokemon].data);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            } finally {
                setTimeout(() => {
                    
                }, );
            }
        };
        if(quantityOfQuestions < remainigQuestions){

            fetchPokemonData();
        }
        else {
            setmessage(`Tu puntuación final es: ${score}`);
        }
    }, [score, quantityOfQuestions, remainigQuestions]);

    useEffect(() => {
        if (pokemonSelected.id) {
            setPokemonImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonSelected.id}.svg`);
            setLoading(false);
        }
    }, [pokemonSelected]);

    const checkAnswer = (id) => {
        console.log(id);
        console.log(pokemonSelected.id);
        setquantityOfQuestions(quantityOfQuestions + 1)
        if (parseInt(id) === pokemonSelected.id) {
            setscore(score + 1);
            setmessage(`Respuesta correcta es: ${pokemonSelected.name}`);
        } else {
            setmessage(`Respuesta Incorrecta era: ${pokemonSelected.name}`);

        }
    }

    console.log(pokemonInfo);

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <CircleLoader
                        color="#5d0000"
                        cssOverride={{}}
                        loading
                        size={100}
                        speedMultiplier={1}
                    />
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center '>
                    <div>PokemonPage</div>
                    <h1>¿Quién es este Pokemon?</h1>
                    <img src={pokemonImg} alt="" width={100} />
                    {
                        pokemonInfo.map((pokemon) => (
                            <div className="mt-3" key={pokemon.data.id}>
                                <button className="p-4 bg-red-500 w-52  text-white" onClick={(e)=> checkAnswer(e.target.value)} value={pokemon.data.id} >{pokemon.data.name}</button>
                            </div>
                        ))
                    }
                    your score is: {score}
                    <h1>Questions: {quantityOfQuestions}</h1>
                    <h1>{message}</h1>
                </div>
            )}
        </>
    );
}

export default PokemonPage;