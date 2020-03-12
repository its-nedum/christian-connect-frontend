import React from 'react'
import AddComment from './addComment'
import CommentsList from './commentsList'
import {ClipLoader} from 'react-spinners'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {getToken} from '../../helpers/utility'
import jwt_decode from 'jwt-decode'

const PostAndComments = ({post, isLoaded, notFound, likeThisPost}) => {
    const decoded = jwt_decode(getToken())
    const {userId} = decoded;
    let actionBtn, showDeleteBtn;
    if(isLoaded === true){
        actionBtn = userId === post.post.owner_id;
        showDeleteBtn = actionBtn ?
        <div>
        <Link to='#!' className="btn-floating pulse red" >
                <i className="material-icons">edit</i>
            </Link>
            <Link to='#!' className="btn-floating pulse red" >
                <i className="material-icons">remove</i>
            </Link>
        </div>
        : null
    }
    

    return ( 
        <div>
            {isLoaded ? 
            <div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <div className="btn btn-floating">
                        {post.post.user.avatar ? <img src={post.post.user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                        </div>
                        <span> {post.post.user.firstname} {post.post.user.lastname}</span>
                    </span>
                    {post.post.image_url ? 
                        <div className="card-image">
                            <img src={post.post.image_url} style={{width:'300px', height:'200px'}} alt="feed-pic" className="responsive-img"/>
                        </div>
                            : null}
                    <div>
                        {post.post.post}
                    </div> 
                    <div className="card-action">
                        <span className="col s12 m4">{moment(post.post.createdAt).calendar()}</span>
                        <span className="col s6 m4"><i className="material-icons pink-text">comment</i> {post.numberOfComments} Comments</span> 
                        <span className="col s6 m4"><i className="material-icons pink-text">thumb_up</i> {post.post.likes[0] ? post.post.likes[0].like.length : 0 }<Link to="#" onClick={() => likeThisPost(post.post.id)} className="cardActionLink pink-text"> Like</Link></span>
                        {showDeleteBtn}
                    </div>
                </div>
            </div>
            <AddComment post_id={post.post.id}/>
            <CommentsList post_id={post.post.id}/>
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
