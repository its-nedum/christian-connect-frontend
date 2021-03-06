import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'


export const createComment = (newComment) => {
    let {comment, lyricId} = newComment
    
    return (dispatch) => {
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/lyric/${lyricId}/comment`,
            //url: `http://localhost:4242/api/v1/category/lyric/${lyricId}/comment`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            },
            data: { comment: comment }
        }).then( (response) => {
            dispatch({type:'LYRIC_COMMENT_SUCCESS', comment})
            window.location.reload()
        }).catch( (err) => {
            dispatch({type:'LYRIC_COMMENT_ERROR', comment})
        })
    }
}