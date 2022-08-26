
export const QuizInitialState = {
    current: 0,
    hits: 0,
    mistakes: 0
}

export const QuizReducer = (state, action) => {
    switch (action.type) {
        case "HIT":
            return {...state, hits: state.hits + 1}
        case "MISTAKE":
            return {...state, mistakes: state.mistakes + 1}
        case "INCREMENT":
            return {...state, current: state.current + 1}
        case "RESTART":
            return {...state, current: 0, hits: 0, mistakes: 0}
    }
    return state
}