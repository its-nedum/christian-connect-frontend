const initState = {
    notification: null,
    profile_notification: null,
    profile_picture_notification: null
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
        case 'PASSWORD_CHANGE_SUCCESS':
            return {
                ...state,
                notification: action.message
            }
        case 'PASSWORD_CHANGE_ERROR':
            return {
                ...state,
                notification: 'Something went wrong, please try again later'
            }
        case 'PROFILE_UPDATE_SUCCESS':
            return {
                ...state,
                profile_notification: action.message
            }
        case 'PROFILE_UPDATE_ERROR':
            return {
                ...state,
                profile_notification: 'Something went wrong, please try again later'
            }
        case 'POST_COMMENT_SUCCESS':
            return {
                ...state,
                notification: action.message
            }
        case 'POST_COMMENT_ERROR':
            return {
                ...state,
                notification: 'Something went wrong, please try again later'
            }
        case 'PROFILE_PICTURE_CHANGE_SUCCESS':
            return {
                ...state,
                profile_picture_notification: action.message
            }
        case 'PROFILE_PICTURE_CHANGE_ERROR':
            return {
                ...state,
                profile_picture_notification: 'Something went wrong, please try again later'
            }
        default: 
            return state
    }
}

export default usersReducer