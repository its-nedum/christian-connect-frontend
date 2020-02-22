import React, {useState, useEffect} from 'react'
import {HashLoader} from 'react-spinners'

const NewestUser = () => {

      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
          const fetchPosts = async () => {
            //const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/getnewestmember');
            const res = await axios.get('http://localhost:4242/api/v1/getnewestmember');
              setPosts(res.data.data);
              setLoading(true)
              console.log(res)
          }

          fetchPosts();
      }, []);

    return (
        <div className="container">
        <h5 className="white-text center">Meet Our Newest Members</h5>
        {loading ? 
           <div className="row">
               {posts.length == 0 ? <p>No user found</p> :
                posts && posts.map((user) => {
                    return(
                        <div className="col s12 m3" key={user.id}>
                            <ul className="collection">
                            <li className="collection-item avatar">
                            {user.avatar ? <img src={user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                                <span className="title">{user.firstname} {user.lastname}</span>
                                <p>Location: {user.state}</p>
                                <p>Gender: {user.gender}</p>
                            </li>
                            </ul>
                        </div> 
                    )
                })
               } 
            </div> 
            :
            <div className="sweet-loading">
                <HashLoader
                sizeUnit={"px"}
                size={100}
                color={"#fff"}
                />
            </div>
            }
        </div>
    )
}

export default NewestUser
