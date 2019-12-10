import React from 'react'
import {NavLink} from 'react-router-dom'

const RecommededSummary = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m6 l3">
                <NavLink to="music/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1574430886/lofkg0pzowvvaljislf4.gif' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">SONG DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>

                <div className="col s12 m6 l3">
                <NavLink to="music/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1574430886/lofkg0pzowvvaljislf4.gif' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">SONG DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>

                <div className="col s12 m6 l3">
                <NavLink to="music/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1574430886/lofkg0pzowvvaljislf4.gif' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">SONG DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>
                
                <div className="col s12 m6 l3">
                <NavLink to="music/1">
                    <div className="card z-depth-0">
                    <div className="card-image">
                        <img src='https://res.cloudinary.com/its-nedum/image/upload/v1574430886/lofkg0pzowvvaljislf4.gif' alt="cover" className="responsive-img"/>
                    </div>
                    <div className="card-content">
                        <p className="grey-text">SONG DETAILS</p>
                    </div>
                    </div>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecommededSummary