import axios from 'axios'


export const createComment = (newComment) => {
    let {comment, musicId} = newComment
    
    return (dispatch) => {
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/music/${musicId}/comment`,
            headers: {
                'Content-Type': 'application/json'
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