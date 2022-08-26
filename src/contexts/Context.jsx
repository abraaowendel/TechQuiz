import { createContext, useState, useEffect, useReducer} from "react";
import { api } from "../services/api";
import { QuizInitialState, QuizReducer } from "../reducers/useQuiz";

export const Context = createContext("");

export const ContextProvider = ({children}) => {
    const [data, setData] = useState()
    const [state, dispatch] = useReducer(QuizReducer, QuizInitialState);

    useEffect( () => {
        fetchData();
    }, [])

    async function fetchData() {
        const response = await api();
        setData(response)
    }

    //Compara a resposta do usuario com a reposta correta
    const rightOrWrong = (choice) => {
        let correctAnswer = data[state.current].correct_answer;
        choice === correctAnswer? dispatch({type: "HIT"}) : dispatch({type: "MISTAKE"})
        return dispatch({type: "INCREMENT"})
    }
    
    return(
        <Context.Provider value={{data, rightOrWrong, state, dispatch, setData, fetchData}}>
            {children}
        </Context.Provider>
    )
}