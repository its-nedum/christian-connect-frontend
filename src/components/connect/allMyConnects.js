import React, {useState, useEffect} from 'react'
import ConnectPagination from './connectPagination'
import {setAuthToken, isLoggedIn} from '../../helpers/utility' 
import axios from 'axios'
import {ClipLoader} from 'react-spinners'
import {Redirect, Link} from 'react-router-dom'

 
const AllMyConnects = () => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10);
      

      useEffect(( ) => {
          const fetchPosts = async () => {
            const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/allMyConnect', { headers:{ 'Authorization': setAuthToken()} });
            //const res = await axios.get('http://localhost:4242/api/v1/allMyConnect', { headers:{ 'Authorization': setAuthToken()} });
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

      if(!isLoggedIn()) return <Redirect to='/signin' />

    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>My Connects ({posts.length})</h5>
            <ul className="collection">
            {loading ? 
                <div>
                    {currentPosts.length === 0 ? <li className="collection-item">You don't have a connect yet</li> :
                        currentPosts && currentPosts.map((user) => {
                            return(
                                <li className="collection-item avatar" key={user.id}>
                                {user.avatar ? <img src={user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                                    <span className="title">{user.firstname} {user.lastname}</span>
                                    <p>Location: {user.state}</p>
                                    <p>Gender: {user.gender}</p>
                                    {user.about_me ? <p>About Me: {user.about_me} </p> : null}
                                    <Link to={`/users/${user.username}`}>View Profile</Link>
                                </li>
                            )
                        })}
                        <li className="collection-item">
                            <ConnectPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
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

export default AllMyConnects
