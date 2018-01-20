const INITIAL_STATE = { description: '', list: [], hello_world: '' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}