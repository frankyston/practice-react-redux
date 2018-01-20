const INITIAL_STATE = { name: '', address: '', phone: '', list: [], created: true }

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CUSTOMER_LIST':
            return { ...state, list: action.payload }
        case 'CUSTOMER_NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'CUSTOMER_ADDRESS_CHANGED':
            return { ...state, address: action.payload }
        case 'CUSTOMER_PHONE_CHANGED':
            return { ...state, phone: action.payload }
        case 'CUSTOMER_CLEAR':
            return { ...state, name: '', address: '', phone: '', created: true }
        case 'CUSTOMER_EDIT':
            return { 
                ...state, 
                _id: action.payload._id,
                name: action.payload.name, 
                address: action.payload.address, 
                phone: action.payload.phone,
                created: false 
            }
        default:
            return state
    }
}