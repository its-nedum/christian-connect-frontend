import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'

export const createComment = (newComment) => {
    let {comment, musicId} = newComment
    
    return (dispatch) => {
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/music/${musicId}/comment`,
            //url: `http://localhost:4242/api/v1/category/music/${musicId}/comment`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: { comment: comment }
        }).then( (response) => {
            dispatch({type:'MUSIC_COMMENT_SUCCESS', comment})
            window.location.reload()
        }).catch( (err) => {
            dispatch({type:'MUSIC_COMMENT_ERROR', comment})
        })
    }
}