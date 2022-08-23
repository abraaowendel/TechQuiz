import { useReducer } from "react"

export const QuizInitialState = {
    hits: 0,
    mistakes: 0
}

export const QuizReducer = (state, action) => {
    switch (action.type) {
        case "HIT":
            return {...state, hits: state.hits + 1}
        case "MISTAKE":
            return {...state, mistakes: state.mistakes + 1}
        default:
            break;
    }
}