import React from 'react'
import Banner2 from '../adverts/banner2'
import moment from 'moment'

const VidComment = (props) => {
    let {comments} = props
    return (
        <div className="row">
        <div className="col s12 m8">
             <h5 className="white-text left-align">Comments</h5>
             {comments && comments.map( (comment) => {
                 return (
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <p>{comment.comment_by} :</p>
                            <p>{comment.comment}</p>
                            <p>{moment(comment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                    </div>
                 )
             })}
            
        </div>
        {/* Advert banner goes here */}
        <div className="col s12 m4 ">
               <Banner2 /> 
        </div>
        </div>
    )
}

export default VidComment
