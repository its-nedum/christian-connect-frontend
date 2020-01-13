const initState = {
    notification: null
}

const lyricReducer = (state = initState, action) => {
    switch (action.type){
        case 'LYRIC_COMMENT_SUCCESS':
            return {
                ...state,
                notification: 'Comment added successfully'
            }
        case 'LYRIC_COMMENT_ERROR':
            return {
                ...state,
               notification: 'Something went wrong, please try again later'
            }

        default: 
            return state
    }
}

export default lyricReducer