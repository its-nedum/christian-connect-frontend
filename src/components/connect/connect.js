import React from 'react'
import ConnectPagination from './connectPagination'
import {ClipLoader} from 'react-spinners'


const Connect = ({users, postsPerPage, totalPosts, paginate, loading}) => {

    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Community Members</h5>
        {loading ?  
            <ul className="collection">
                {users && users.map((user) => {
                    return(
                        <li className="collection-item avatar" key={user.id}>
                            {user.avatar ? <img src={user.avatar} alt="pic" className="circle responsive-img" /> : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" alt="pic" className="circle responsive-img" />}
                            <span className="title">{user.firstname} {user.lastname}</span>
                            <p>Location: {user.state}</p>
                            <p>Gender: {user.gender}</p>
                            {user.about_me ? <p>About Me: {user.about_me}</p> : null}
                            <a href={`/users/${user.username}`}>View Profile</a>
                        </li>
                    )
                })} 
            </ul>
        : 
        <div className="sweet-loading">
            <ClipLoader
            sizeUnit={"px"}
            size={100}
            color={"#fff"}
            />
        </div>
        }
           <ConnectPagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
    )
}

export default Connect
