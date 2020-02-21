import React, {useState, useEffect} from 'react'
import FeedPagination from './feedPagination'
// import {ClipLoader} from 'react-spinners'
import axios from 'axios'
import moment from 'moment'

const CommentsList = ({post_id}) => {

    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10); 

      useEffect(( ) => {
          const fetchPosts = async () => {
            //const res = await axios.get(`https://christian-connect-api.herokuapp.com/api/v1/getcomments/${post_id}`);
            const res = await axios.get(`http://localhost:4242/api/v1/getcomments/${post_id}`);
              setPosts(res.data.data);
              setLoading(true)
              //console.log(res)
          }

          fetchPosts();
      }, []);
      
      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      //Change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
        <h5 className="white-text left-align">Comments</h5>
        {currentPosts.length === 0 ? <div>Be the first to comment </div> :
        currentPosts && currentPosts.map((comment) => {
            return(
                <div className="card z-depth-0">
                    <div className="card-content">
                        <p>{comment.comment}</p>
                        <p> {/*Posted by: Regina on*/} {moment(comment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                </div>
            )
        })}
        <FeedPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default CommentsList
