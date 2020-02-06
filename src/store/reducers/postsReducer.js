const initState = {
    notification: null
}

const postsReducer = (state = initState, action) => {
    switch (action.type){
        case 'POST_SUCCESS':
            return {
                ...state,
                notification: 'Post created successfully'
            }
        case 'POST_ERROR':
            return {
                ...state,
               notification: 'Something went wrong, please try again later'
            }

        default: 
            return state
    }
}

export default postsReducer