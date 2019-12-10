import React from 'react'
import {NavLink} from 'react-router-dom'
import NewsPagination from './newsPagination'

const NewsSummary = () => {
    return (
        <div>
            <div className="col s9">
                <div className="row">
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col s6">
                        <NavLink to='news/67'>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://res.cloudinary.com/its-nedum/image/upload/v1575989378/connect_fbzwrp.jpg' alt="news" className="responsive-img"/>
                            </div>
                             <div className="card-content">
                                <p>News Headline Goes Here</p>
                             </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
                <NewsPagination />
            </div>
        </div>
    )
}

export default NewsSummary
