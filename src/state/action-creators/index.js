export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}
export const zero = () => {
    return (dispatch) => {
        dispatch({
            type: 'zero',
            payload: 0
        })
    }
}
export const addPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_POST',
            payload: post
        })
    }
}