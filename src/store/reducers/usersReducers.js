const initState = {

}

const usersReducer = (state = initState, action) => {
    switch (action.type){
        case 'ACCOUNT_CREATED':
            return {
                ...state,
                notification: 'Account created successfully'
            }
        case 'ACCOUNT_CREATE_ERROR':
            return {
                ...state,
                notification: 'An Error occured, please try again later'
            }

        default: 
            return state
    }
}

export default usersReducer