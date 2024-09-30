import { useState } from "react";
import pokemonApi from "../api/pokemonApi"

const PokemonPage = () => {
    const [pokemonImg, setPokemonImg] = useState('')
    pokemonApi.get('/1').then(resp => {
        console.log(resp.data.sprites.front_default);
        setPokemonImg(resp.data.sprites.other.dream_world.front_default)
    })
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