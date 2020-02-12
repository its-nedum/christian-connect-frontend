import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'

const RequestReceived = () => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(1); 

      useEffect(( ) => {
          const fetchPosts = async () => {
            //const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/viewrequestreceived', { headers:{ 'Authorization': setAuthToken()} });
            const res = await axios.get('http://localhost:4242/api/v1/viewrequestreceived', { headers:{ 'Authorization': setAuthToken()} });
              setPosts(res.data.data);
              setLoading(true)
              
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
           
        <ul className="collection">
            <li className="collection-item"><span>Received Requests</span></li>
            <li className="collection-item avatar" >
            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />
            <span className="title">Chinedu Emesue</span>
            <p>Location: Abuja</p>
            <p>Gender: Male</p>
            <Link to="#"><span style={{paddingRight:'50px'}}><i className="material-icons">check</i> Accept</span></Link>
            <Link to="#"><span style={{paddingRight:'50px'}}><i className="material-icons">cancel</i> Reject</span></Link>
           </li>
        </ul>
        </div>
    )
}

export default RequestReceived
