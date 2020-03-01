import React from 'react'
import {Link} from 'react-router-dom'
import UrThoughts from './urThoughts'
import '../../myStyles/main.css'
import FeedPagination from './feedPagination'
import {ClipLoader} from 'react-spinners'
import moment from 'moment'


const Dashboard = ({posts, totalPosts, paginate, postsPerPage, likeThisPost, loading}) => {
    
    return (
        <div>
            <UrThoughts />
            
            {loading ? 
            <div> 
                {posts.length === 0 ? <p>No post found</p> : 
                    posts && posts.map((post) => { 
                        return(
                            <div className="card" key={post.id}> 
                                <div className="card-content">
                                    <span className="card-title">
                                        <div className="btn btn-floating ">
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
                                    <div className="card-action row">
                                        <span className="col s12 m4">{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                        <span className="col s6 m4">
                                            <i className="material-icons pink-text">comment</i>
                                            {/* 88  */}
                                            <a href={`feed/${post.id}/comments`} className="cardActionLink pink-text"> Comments</a>
                                            </span>
                                            
                                        <span className="col s6 m4"><i className="material-icons pink-text">thumb_up</i> {post.likes[0] ? post.likes[0].like.length : 0 } <Link to="#" onClick={() => likeThisPost(post.id)} className="cardActionLink pink-text">Like </Link></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                
                }
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

            <FeedPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
    )
}


export default Dashboard
