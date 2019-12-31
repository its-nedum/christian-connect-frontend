import React from 'react'

const AddNewsComment = () => {
    return (
        <div className="row">
        <div className="col s12 m8">
        <h5 className="white-text left-align">Post a Comment</h5>
            <form className="white">
            
                <div className="input-field">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" id="comment" />
                </div>
                <div className="input-field center">
                    <button className="btn pink lighten-1 z-depth-0">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddNewsComment
