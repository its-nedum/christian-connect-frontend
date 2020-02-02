import axios from 'axios'

export const createSearch = (term) => {
    
    return (dispatch) => {
        axios({
            method: 'post',
            //url: `https://christian-connect-api.herokuapp.com/api/v1/search`,
            url: `http://localhost:4242/api/v1/search`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: term
        }).then( (response) => {
            console.log(response)
            dispatch({type:' SEARCH_SUCCESS', term})
            //window.location.reload()
        }).catch( (err) => {
            dispatch({type:'SEARCH_ERROR', term})
        })
    }
}