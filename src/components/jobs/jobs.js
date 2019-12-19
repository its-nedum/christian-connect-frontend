import React from 'react'
import {Link} from 'react-router-dom'

const Jobs = () => {
    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Available Jobs</h5>
        <div className="row">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Web Developer</span></Link>
                        <p>Middleware ICT Solutions</p>
                        <span>Location: Abuja</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Mathematics Teacher</span></Link>
                        <p>Manasseh Secondary School Karu</p>
                        <span>Location: Abuja</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Senior Engineer</span></Link>
                        <p>Tesla Inc</p>
                        <span>Location: Ibadan</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Cleaner</span></Link>
                        <p>God is Able Clinic Wuye</p>
                        <span>Location: Portharcourt</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Frontend Developer</span></Link>
                        <p>Middleware ICT Solutions</p>
                        <span>Location: Abuja</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <Link to='/job-connect/web-developer'><span className="card-title">Graphic Designer</span></Link>
                        <p>Zeabon Concepts</p>
                        <span>Location: Lagos</span> | 
                        <span>Type: Full Time</span>
                    </div>
                    <div className="card-action">
                        <Link to='/job-connect/web-developer'>READ MORE</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Jobs
