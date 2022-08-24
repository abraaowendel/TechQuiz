import { createContext, useState, useEffect, useReducer} from "react";
import { api } from "../services/api";
import { QuizInitialState, QuizReducer } from "../reducers/useQuiz";

export const Context = createContext("");

export const ContextProvider = ({children}) => {
    const [data, setData] = useState("")
    const [state, dispatch] = useReducer(QuizReducer, QuizInitialState);

    useEffect( () => {
        async function fetchData() {
            const response = await api();
            setData(response)
        }
        fetchData();
    }, [])
    
    const rightOrWrong = (choice) => {
        let correctAnswer = data[state.current].correct_answer;
        choice === correctAnswer? dispatch({type: "HIT"}) : dispatch({type: "MISTAKE"})
        return dispatch({type: "INCREMENT"})
    }

    return(
        <Context.Provider value={{data, rightOrWrong, state}}>
            {children}
        </Context.Provider>
    )
}