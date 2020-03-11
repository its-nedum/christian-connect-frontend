import axios from 'axios'
import {saveToken, setAuthToken} from '../../helpers/utility'
import {history} from '../../App'

export const createUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/signup',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(user)
          }).then( (response) => {
              let { message } = response.data
              let { token } = response.data.data
                dispatch({type: 'ACCOUNT_CREATED', message})
            if(message === 'Account created successfully'){
                saveToken(token)
                history.push('/feed')
                window.location.reload()
              }
            }).catch( (err) => {
                dispatch({ type: 'ACCOUNT_CREATE_ERROR', err })
            })
    }
}

export const loginUser = (credentials) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(credentials)
        }).then( (response) => {
            let { message } = response.data
            let { token } = response.data.data
            
            dispatch({type: 'LOGIN_SUCCESS', message})
            if(message === 'Login was successful'){
            saveToken(token)
            history.push('/feed')
            window.location.reload()
            }
        }).catch( (err) => {
            dispatch({type: 'LOGIN_ERROR', credentials})
        })
    }
}


export const updatePassword = (password) => {
    
    return (dispatch) => {
        axios({
            method: 'patch',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/change-password',
            //url: 'http://localhost:4242/api/v1/change-password',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: JSON.stringify(password)
        }).then( (response) => {
            let { message } = response.data
            dispatch({type: 'PASSWORD_CHANGE_SUCCESS', message})
            
        }).catch( (err) => {
            dispatch({type: 'PASSWORD_CHANGE_ERROR', password})
        })
    }
}

export const updateProfile = (profileInfo) => {
    
    return (dispatch) => {
        axios({
            method: 'patch',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/update-profile',
            //url: 'http://localhost:4242/api/v1/update-profile',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: JSON.stringify(profileInfo)
        }).then( (response) => {
            let { message } = response.data
            dispatch({type: 'PROFILE_UPDATE_SUCCESS', message})
            window.location.reload()
        }).catch( (err) => {
            dispatch({type: 'PROFILE_UPDATE_ERROR', profileInfo})
        })
    }
}


export const postComment = (newComment) => {
   
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/addcommenttopost',
            //url: 'http://localhost:4242/api/v1/addcommenttopost',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: JSON.stringify(newComment)
        }).then( (response) => {
            let { message } = response.data
            dispatch({type: 'POST_COMMENT_SUCCESS', message})
            window.location.reload()
        }).catch( (err) => {
            dispatch({type: 'POST_COMMENT_ERROR', newComment})
        })
    }
}


export const updatePicture = (picture) => {
    
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/avatar',
            //url: 'http://localhost:4242/api/v1/avatar',
            headers: {
                'Authorization': setAuthToken()
            },
            data: picture
        }).then((response) => {
            let { message } = response.data
            dispatch({type: 'PROFILE_PICTURE_CHANGE_SUCCESS', message})
            
        }).catch( (err) => {
            dispatch({type: 'PROFILE_PICTURE_CHANGE_ERROR', err})
        })
    }
}