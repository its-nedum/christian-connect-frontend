import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {getToken} from '../../helpers/utility'
import jwt_decode from 'jwt-decode'

const ViewUser = ({user, status, theDeciderFunc}) => {
    const decoded = jwt_decode(getToken())
    const {userId} = decoded;
    
    return (
        <div className="card">
            <div className="row">
                <div className="col s4"></div>
                <div className="card-image col s4">
                {user.avatar ? <img src={user.avatar} alt="pic" className="materialboxed" width="650" style={{borderRadius: '15px', marginTop: '15px'}} /> 
                     : <img src="https://res.cloudinary.com/its-nedum/image/upload/v1581427860/Christian%20Connect/profilepics/user_vcs7aw.png" 
                    alt="pic" className="materialboxed" width="650"
                     style={{borderRadius: '15px', marginTop: '15px'}} />}
                <h5 className="center">{user.firstname} {user.lastname}</h5>
                </div>
                <div className="col s4"></div>
            </div>
            <div className="row">
                <div className="card-content">
                { userId !== user.id ?
                    <p className="center">
                    <Link to="#" onClick={() => theDeciderFunc(status, user.id)}><span style={{paddingRight:'50px'}}><i className="material-icons">group_add</i> {status}</span></Link>
                    <Link to={`/users/${user.username}/chat`}><span style={{paddingRight:'50px'}}><i className="material-icons">message</i> Message</span></Link>
                    {/* <Link to="#"><span><i className="material-icons">block</i> Block</span></Link> */}
                    </p>
                 : null}
                
                {user.work ? <p><i className="material-icons">work</i> {user.work}</p> : null}
                {user.school ? <p><i className="material-icons">school</i> {user.school}</p> : null}
                {user.state ? <p><i className="material-icons">location_city</i> {user.state}</p> : null}
                {user.city ? <p><i className="material-icons">home</i> {user.city}</p> : null}
                {user.relationship_status ? <p><i className="material-icons">favorite</i> {user.relationship_status}</p> : null}
                {user.about_me ? <p><i className="material-icons">account_circle</i>{user.about_me}</p> : null}
                <p><i className="material-icons">access_time</i> Joined {moment(user.createdAt).format('MMMM YYYY')}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
