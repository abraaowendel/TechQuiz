import { createContext, useState, useEffect} from "react";
import { api } from "../services/api";
import { QuizInitialState } from "../reducers/useQuiz";


export const Context = createContext("");

export const ContextProvider = ({children}) => {
    const [data, setData] = useState("")
    const [current, setCurrent] = useState(0)

    useEffect( () => {
        async function fetchData() {
            const response = await api();
            return setData(response)
        }
        fetchData();  
    }, [])
    
    const handleCompare = (e) => {
        let correctAnswer = data[current].correct_answer;
        setCurrent(current + 1)
        if(e.toLowerCase() == correctAnswer.slice(-1)){
            alert('SIM')
        }
        else{
            alert('NÃO')
        }
    }

    return(
        <Context.Provider value={{data, handleCompare, current}}>
            {children}
        </Context.Provider>
    )
}