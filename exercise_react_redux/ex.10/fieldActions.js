export function changeValue(e){
    return {
        type: 'VALUE_CHANGE',
        payload: e.target.value
    }
}