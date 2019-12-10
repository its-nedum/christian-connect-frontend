import React from 'react'
import {NavLink} from 'react-router-dom'

const VidRecommendedSummary = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m6 l3">
                <NavLink to="videos/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575031708/d0o9cplf41drf7ofp8up.webp' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">VIDEO DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>

                <div className="col s12 m6 l3">
                <NavLink to="videos/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575031708/d0o9cplf41drf7ofp8up.webp' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">VIDEO DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>

                <div className="col s12 m6 l3">
                <NavLink to="videos/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575031708/d0o9cplf41drf7ofp8up.webp' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">VIDEO DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>
                
                <div className="col s12 m6 l3">
                <NavLink to="videos/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575031708/d0o9cplf41drf7ofp8up.webp' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">VIDEO DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default VidRecommendedSummary
