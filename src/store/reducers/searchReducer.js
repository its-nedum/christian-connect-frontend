const initState = {
    notification: null
}

const searchReducer = (state = initState, action) => {
    switch (action.type){
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                notification: 'Search was successfully'
            }
        case 'SEARCH_ERROR':
            return {
                ...state,
               notification: 'Something went wrong, please try again later'
            }

        default: 
            return state
    }
}

export default searchReducer