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
              let { token } = response.data
                saveToken(token)
                dispatch({type: 'ACCOUNT_CREATED', user})
                history.push('/feed')
                window.location.reload()
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
            let { token } = response.data
            saveToken(token)
            dispatch({type: 'LOGIN_SUCCESS', credentials})
            history.push('/feed')
            window.location.reload()
        }).catch( (err) => {
            dispatch({type: 'LOGIN_ERROR', credentials})
        })
    }
}