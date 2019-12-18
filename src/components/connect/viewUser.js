import React from 'react'
import {Link} from 'react-router-dom'

const ViewUser = () => {
    return (
        <div className="card">
            <div className="row">
                <div className="col s4"></div>
                <div className="card-image col s4">
                <img src="https://res.cloudinary.com/its-nedum/image/upload/v1576591640/IMG_20190704_091221_8_rrx5cv.jpg" 
                     alt="pic" className="materialboxed" width="650"
                     style={{borderRadius: '15px', marginTop: '15px'}} />
                <h5 className="center">Chinedu Emesue</h5>
                </div>
                <div className="col s4"></div>
            </div>
            <div className="row">
                <div className="card-content">
                <p className="center">
                    <Link to="#"><span style={{paddingRight:'50px'}}><i className="material-icons">group_add</i> Connect</span></Link>
                    <Link to="#"><span><i className="material-icons">message</i> Message</span></Link>
                </p>
                <p><i className="material-icons">work</i> Middleware ICT Solutions</p>
                <p><i className="material-icons">school</i> Anambra State University</p>
                <p><i className="material-icons">location_city</i> Abuja</p>
                <p><i className="material-icons">home</i> Mararaba</p>
                <p><i className="material-icons">favorite</i> Single</p>
                <p><i className="material-icons">account_circle</i> I am easy going and loves to watch movies when I'm bored</p>
                <p><i className="material-icons">access_time</i> Joined January 2020</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
