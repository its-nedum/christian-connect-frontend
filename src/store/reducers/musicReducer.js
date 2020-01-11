const initState = {
    notification: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_MUSIC_SUCCESS':
            return {
                ...state,
                notification: 'Song added successfully'
            }
        case 'ADD_MUSIC_ERROR':
            return {
                ...state,
                notification: 'Something went wrong, please try again later'
            }
        case 'MUSIC_COMMENT_SUCCESS':
            return {
                ...state,
                notification: 'Comment added successfully'
            }
        case 'MUSIC_COMMENT_ERROR':
            return {
                ...state,
               notification: 'Something went wrong, please try again later'
            }

        default: 
            return state
    }
}

export default musicReducer