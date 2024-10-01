import pokemonApi from '../api/pokemonApi';

const createPokemonId = () => {
    const pokemonsId = Array.from(Array(650));

    return pokemonsId.map((_, index) => index + 1);
    
}

const getPokemonData = async ([a,b,c,d] = []) => {

    const promiseArr = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`),
    ]

    const [p1,p2,p3,p4] = await Promise.all(promiseArr)
    
    return [
        p1,p2,p3,p4
    ]
}
 
const getPokemonOptions = () => {
    const pokemonsid = createPokemonId().sort(() => Math.random() - 0.5);
    const fourOptions = getPokemonData( pokemonsid.splice(0,4));
    return fourOptions;
}


export default getPokemonOptions;




