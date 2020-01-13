const initState = {
    notification: null
}

const videoReducer = (state = initState, action) => {
    switch (action.type){
        
        case 'VIDEO_COMMENT_SUCCESS':
            return {
                ...state,
                notification: 'Comment added successfully'
            }
        case 'VIDEO_COMMENT_ERROR':
            return {
                ...state,
               notification: 'Something went wrong, please try again later'
            }

        default: 
            return state
    }
}

export default videoReducer