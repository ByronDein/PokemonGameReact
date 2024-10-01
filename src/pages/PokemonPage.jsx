import { useEffect, useState } from "react";
import pokemonApi from "../api/pokemonApi"
import getPokemonOptions from "../helpers/getPokemonOptions";

const PokemonPage = () => {
    const [pokemonImg, setPokemonImg] = useState([]);

    const PokemonData = async () => {
        const pokemonsid = await getPokemonOptions();
        const randomPokemon = Math.floor(Math.random() * 4);
        console.log(randomPokemon)
        setPokemonImg(pokemonsid[0].data.sprites.front_default)
    }
    useEffect(() => {
        PokemonData()

    }, [])



    return (
        <div className='flex flex-col justify-center items-center '>
            <div>PokemonPage</div>
            <h1>
                ¿Quién es este Pokemon?
            </h1>
            <img src={pokemonImg} alt="" />
        </div>
    )
}

export default PokemonPage