const axios = require('axios')

export const createUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://localhost:4242/api/v1/signup',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(user)
          }).then( (res) => { 
              res.json() 
              console.log(res.json())
            }).then( () => {
                dispatch({type: 'ACCOUNT_CREATED', user})
            }).catch( (err) => {
                dispatch({ type: 'ACCOUNT_CREATE_ERROR', err })
            })
    }
}