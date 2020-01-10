import axios from 'axios'


export const createComment = (newComment) => {
    let {comment, musicId} = newComment
    console.log({comment, musicId})
    return (dispatch) => {
        
        axios({
            method: 'post',
            // url: `https://christian-connect-api.herokuapp.com/api/v1/category/music/${musicId}/comment`,
            url: `http://localhost:4242/api/v1/category/music/${musicId}/comment`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(comment)
            }).then( (response) => {
                dispatch({type: 'MUSIC_COMMENT_SUCCESS', comment})
            }).catch( (err) => {
                dispatch({ type: 'MUSIC_COMMENT_ERROR', err })
            })
    }
}