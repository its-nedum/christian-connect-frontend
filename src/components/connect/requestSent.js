import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'

const RequestSent = () => {
      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10); 

      useEffect(( ) => {
          const fetchPosts = async () => {
            //const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/viewrequestsent', { headers:{ 'Authorization': setAuthToken()} });
            const res = await axios.get('http://localhost:4242/api/v1/viewrequestsent', { headers:{ 'Authorization': setAuthToken()} });
              setPosts(res.data.data);
              setLoading(true)
              
          }

          fetchPosts();
      }, []);
        console.log(posts)

      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      //Change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
       <div>
       <ul className="collection">
            <li className="collection-item"><span>Sent Requests</span></li>
            {posts && posts.map((user) => {
                return(
                    <li className="collection-item avatar" key={user.id}>
                        <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />
                        <span className="title">{user.firstname} {user.lastname}</span>
                        <p>Location: {user.state}</p>
                        <p>Gender: {user.gender}</p>
                        
                        <Link to="#"><span style={{paddingRight:'50px'}}><i className="material-icons">cancel</i> Delete</span></Link>
                    </li>
                )
            })}
            
        </ul>
        
        </div>
    )
}

export default RequestSent
