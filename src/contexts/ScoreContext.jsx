import {createContext, useState} from 'react'
import PropTypes from 'prop-types'


export const ScoreContext = createContext();

export const ScoreProvider = ({children}) => {
    const [score, setScore] = useState(0)
    const [quantityOfQuestions, setquantityOfQuestions] = useState(15)

    return (
        <ScoreContext.Provider value={{score, setScore, quantityOfQuestions, setquantityOfQuestions}}>
            {children}
        </ScoreContext.Provider>
    )

}

ScoreProvider.propTypes = {
    children: PropTypes.node.isRequired
}