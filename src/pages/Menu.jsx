import React, { useState } from 'react'
import PokemonPage from './PokemonPage'

const Menu = () => {
const [quantityOfQuestions, setquantityOfQuestions] = useState(0)
console.log(quantityOfQuestions)
  return (
    <div>
        <h1>
            Bienvenido a Pokemon Quiz
        </h1>
        <h2>
            ¿Estás listo para jugar?
        </h2>
        <input type="number" onChange={(e) => {setquantityOfQuestions(e.target.value)}} placeholder='Ingrese la cantidad de preguntas que desea para jugar' /> 
        <PokemonPage quantityOfQuestions={quantityOfQuestions}  />
    </div>
  )
}

export default Menu