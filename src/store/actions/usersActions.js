import axios from 'axios'
import {saveToken} from '../../helpers/utility'
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