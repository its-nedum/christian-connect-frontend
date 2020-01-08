import axios from 'axios'
import {saveToken} from '../../helpers/utility'
import {history} from '../../App'

export const createUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:4242/api/v1/signup',
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
        
    }
}