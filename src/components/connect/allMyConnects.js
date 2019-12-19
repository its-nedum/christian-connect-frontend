import React from 'react'
import ConnectPagination from './connectPagination'
const AllMyConnects = () => {
    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>My Connects (4)</h5>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1576591640/IMG_20190704_091221_8_rrx5cv.jpg" alt="pic" className="circle responsive-img" />
                    <span className="title">Chinedu Emesue</span>
                    <p>Location: Abuja</p>
                    <p>Gender: Male</p>
                    <p>About Me: I am easy going and loves to watch movies when I'm bored</p>
                    <a href="/users/chinedu-emesue">View Profile</a>
                </li>
                <li className="collection-item avatar">
                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1576591640/IMG_20190704_091221_8_rrx5cv.jpg" alt="pic" className="circle responsive-img" />
                    <span className="title">Chinedu Emesue</span>
                    <p>Location: Abuja</p>
                    <p>Gender: Male</p>
                    <p>About Me: I am easy going and loves to watch movies when I'm bored</p>
                    <a href="/users/chinedu-emesue">View Profile</a>
                </li>
                <li className="collection-item avatar">
                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1576591640/IMG_20190704_091221_8_rrx5cv.jpg" alt="pic" className="circle responsive-img" />
                    <span className="title">Chinedu Emesue</span>
                    <p>Location: Abuja</p>
                    <p>Gender: Male</p>
                    <p>About Me: I am easy going and loves to watch movies when I'm bored</p>
                    <a href="/users/chinedu-emesue">View Profile</a>
                </li>
                <li className="collection-item avatar">
                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1576591640/IMG_20190704_091221_8_rrx5cv.jpg" alt="pic" className="circle responsive-img" />
                    <span className="title">Chinedu Emesue</span>
                    <p>Location: Abuja</p>
                    <p>Gender: Male</p>
                    <p>About Me: I am easy going and loves to watch movies when I'm bored</p>
                    <a href="/users/chinedu-emesue">View Profile</a>
                </li>
            </ul>
            <ConnectPagination />
        </div>
    )
}

export default AllMyConnects
