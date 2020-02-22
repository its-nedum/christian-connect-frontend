import React from 'react'
import AddComment from './addComment'
import CommentsList from './commentsList'
import {ClipLoader} from 'react-spinners'
import moment from 'moment'

const PostAndComments = ({post, isLoaded, notFound}) => {

    return (
        <div>
            {isLoaded ? 
            <div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <div className="btn btn-floating">
                        {post.user.avatar ? <img src={post.user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                        </div>
                        <span> {post.user.firstname} {post.user.lastname}</span>
                    </span>
                    {post.image_url ? 
                        <div className="card-image">
                            <img src={post.image_url} style={{width:'300px', height:'200px'}} alt="feed-pic" className="responsive-img"/>
                        </div>
                            : null}
                    <div>
                        {post.post}
                    </div> 
                    <div className="card-action">
                        <span className="col s12 m4">{moment(post.createdAt).format('MMM Do YYYY, h:mm:ss a')}</span>
                        <span className="col s6 m4"><i className="material-icons">comment</i> 88 Comments </span> 
                        <span className="col s6 m4"><i className="material-icons">thumb_up</i> 17 like </span>
                    </div>
                </div>
            </div>
            <AddComment post_id={post.id}/>
            <CommentsList post_id={post.id}/>
            </div>
            :
            <div className="sweet-loading">
                <ClipLoader
                sizeUnit={"px"}
                size={50}
                color={"#fff"}
                />
            </div>
            }
            {notFound ? 
            <div className="red-text center">
            <p>{notFound}</p>
            </div> : null}
            
        </div>
    )
}

export default PostAndComments
