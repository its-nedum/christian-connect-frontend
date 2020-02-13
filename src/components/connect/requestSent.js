import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {setAuthToken} from '../../helpers/utility'
import {ClipLoader} from 'react-spinners'
import RequestSentPagination from './requestSentPagination'

const RequestSent = () => {
      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(1);
      const [requestId, setRequestId] = useState([]) 

      useEffect(( ) => {
          const fetchPosts = async () => {
            const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/viewrequestsent', { headers:{ 'Authorization': setAuthToken()} });
            //const res = await axios.get('http://localhost:4242/api/v1/viewrequestsent', { headers:{ 'Authorization': setAuthToken()} });
              setPosts(res.data.data.user);
              setRequestId(res.data.data.requestIds)
              setLoading(true)
              
          }

          fetchPosts();
      }, []);
        

      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
      const currentRequestIds = requestId.slice(indexOfFirstPost, indexOfLastPost)

      //Change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber)

      //Cancel Friend Request
     const cancelFriendRequest = (requestId) => {
        axios({
            method: 'delete',
            url: `https://christian-connect-api.herokuapp.com/api/v1/cancelfriendrequest/${requestId}`,
            //url: `http://localhost:4242/api/v1/cancelfriendrequest/${requestId}`,
            headers: {
                'Authorization': setAuthToken()
            }
        }).then((response) => {
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return (
       <div>
       <ul className="collection">
            <li className="collection-item"><span>Sent Requests</span></li>
            {loading ? 
                <div>
                { currentPosts.length === 0 ? <li className="collection-item">You have not sent any connect request</li> : 
                currentPosts && currentPosts.map((user) => {
                return(
                    <li className="collection-item avatar" key={user.id}>
                    {user.avatar ? <img src={user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                        <span className="title">{user.firstname} {user.lastname}</span>
                        <p>Location: {user.state}</p>
                        <p>Gender: {user.gender}</p>
                        {/* Loops through requestId and assign the appropriate Id to the cancel button */}
                        {currentRequestIds.map((thisRequestId) => {
                            return(
                            <Link to="#" onClick={() => cancelFriendRequest(thisRequestId)} key={thisRequestId}><span style={{paddingRight:'50px'}}><i className="material-icons">cancel</i> Cancel</span></Link>
                        )})}
                        
                    </li>
                )
                }) }
                
                <li className="collection-item">
                    <RequestSentPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                </li>
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
            
            
        </ul>
        
        </div>
    ) 
}

export default RequestSent
