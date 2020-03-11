import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'

export const createPost = (post) => {
    
    
    return (dispatch) => {
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/createpost`,
            //url: `http://localhost:4242/api/v1/createpost`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: post
        }).then( (response) => {
            dispatch({type:'POST_SUCCESS', post})
            window.location.reload()
        }).catch( (err) => {
            dispatch({type:'POST_ERROR', post})
        })
    }
}