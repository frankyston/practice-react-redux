import axios from 'axios'

const URL = 'http://localhost:3003/api/customers'

export const getList = () => {
    return dispatch => {
        axios.get(`${URL}?sort=-createdAt`)
        .then(resp => dispatch({ type: 'CUSTOMER_LIST', payload: resp.data }))
    }
}

export const changeName = (e) => {
    return {
        type: 'CUSTOMER_NAME_CHANGED',
        payload: e.target.value
    }
}

export const changeAddress = (e) => {
    return {
        type: 'CUSTOMER_ADDRESS_CHANGED',
        payload: e.target.value
    }
}

export const changePhone = (e) => {
    return {
        type: 'CUSTOMER_PHONE_CHANGED',
        payload: e.target.value
    }
}

export const add = (name, address, phone) => {
    return dispatch => {
        axios.post(URL, { name, address, phone })
        .then(resp => dispatch(clear()))
    }
}

export const edit = (_id) => {
    return dispatch => {
        axios.get(`${URL}/${_id}`)
        .then(resp => dispatch({ type: 'CUSTOMER_EDIT', payload: resp.data }))
    }
}

export const update = (name, address, phone) => {
    return (dispatch, getState) => {
        axios.put(`${URL}/${getState().customer._id}`, { name, address, phone })
        .then(resp => dispatch(clear()))
    }
}

export const clear = () => {
    return [{type: 'CUSTOMER_CLEAR'}, getList()]
}

export const remove = (_id) => {
    return dispatch => {
        axios.delete(`${URL}/${_id}`)
        .then(resp => dispatch(getList()))
    }
}