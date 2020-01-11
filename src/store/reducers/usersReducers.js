const initState = {
    notification: null
}

const usersReducer = (state = initState, action) => {
    switch (action.type){
        case 'ACCOUNT_CREATED':
            return {
                ...state,
                notification: action.message
            }
        case 'ACCOUNT_CREATE_ERROR':
            return {
                ...state,
                notification: 'Something went wrong, please try again later'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                notification: action.message
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                notification: 'Wrong email or password'
            }

        default: 
            return state
    }
}

export default usersReducer