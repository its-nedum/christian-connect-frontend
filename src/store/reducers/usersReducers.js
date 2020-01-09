const initState = {
    notification: null
}

const usersReducer = (state = initState, action) => {
    switch (action.type){
        case 'ACCOUNT_CREATED':
            // console.log('User created successfully')
            return {
                ...state,
                notification: 'Account created successfully'
            }
        case 'ACCOUNT_CREATE_ERROR':
            return {
                ...state,
                notification: 'Something went wrong, please try again later'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                notification: 'Login was successful'
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                notification: 'Wrong email or password, please try again'
            }

        default: 
            return state
    }
}

export default usersReducer