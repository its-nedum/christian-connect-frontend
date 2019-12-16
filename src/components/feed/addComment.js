import React from 'react'
import '../../myStyles/main.css'

const AddComment = () => {
    return (
        <div className="white">
            <form id="commentForm">
                <div className="row">
                <div className="input-field col s9">
                    <input type="text" id="comment" className="commentText" placeholder="Say something..."/>
                </div>
                <div className="input-field col s2">
                    <input type="button" className="btn pink lighten-1 z-depth-0" value="Post" />
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddComment
