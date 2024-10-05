import {createContext, useState} from 'react'
import PropTypes from 'prop-types'


export const ScoreContext = createContext();

export const ScoreProvider = ({children}) => {
    const [score, setscore] = useState(0)
    const [quantityOfQuestions, setquantityOfQuestions] = useState(0)

    return (
        <ScoreContext.Provider value={{score, setscore, quantityOfQuestions, setquantityOfQuestions}}>
            {children}
        </ScoreContext.Provider>
    )

}

ScoreProvider.propTypes = {
    children: PropTypes.node.isRequired
}