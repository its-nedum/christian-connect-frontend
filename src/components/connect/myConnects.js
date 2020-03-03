import React, {useState, useEffect} from 'react'
import {setAuthToken, getUsername} from '../../helpers/utility' 
import axios from 'axios'
import {ClipLoader} from 'react-spinners'
import {Link} from 'react-router-dom'


const MyConnects = () => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      

      useEffect(( ) => {
          const fetchPosts = async () => {
            const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/allMyConnect-sample', { headers:{ 'Authorization': setAuthToken()} });
            //const res = await axios.get('http://localhost:4242/api/v1/allMyConnect-sample', { headers:{ 'Authorization': setAuthToken()} });
              setPosts(res.data.data);
              setLoading(true)
          }

          fetchPosts();
      }, []);


    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>My Connects</h5>
            <ul className="collection">
            {loading ? 
                <div>
                    {posts.length === 0 ? <li className="collection-item">You don't have a connect yet</li> :
                        posts && posts.map((user) => {
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
                        {posts.length !== 0 ?
                        <li className="white center avatar">
                            <Link to={`/users/${getUsername()}/my-connect`}>View All</Link>
                        </li>
                        : null}
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

export default MyConnects
