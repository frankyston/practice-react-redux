import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import customerReducer from '../customer/customerReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    customer: customerReducer
})

export default rootReducer