import { useEffect, useState } from "react";
import { CircleLoader } from 'react-spinners';
import getPokemonOptions from "../helpers/getPokemonOptions";

const PokemonPage = () => {
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonId, setPokemonId] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const options = await getPokemonOptions();
                setPokemonInfo(options);
                const randomPokemon = Math.floor(Math.random() * 4);
                setPokemonId(options[randomPokemon].data.id);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        };
        fetchPokemonData();
    }, []);

    useEffect(() => {
        if (pokemonId) {
            setPokemonImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`);
        }
    }, [pokemonId]);

    const checkAnswer = (id) => {
        console.log(id);
        console.log(pokemonId);
        
        if (parseInt(id) === pokemonId) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
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
                                <button className="p-4 bg-red-500 w-52 text-white" onClick={(e)=> checkAnswer(e.target.value)} value={pokemon.data.id} >{pokemon.data.name}</button>
                            </div>
                        ))
                    }
                    {pokemonId}
                </div>
            )}
        </>
    );
}

export default PokemonPage;