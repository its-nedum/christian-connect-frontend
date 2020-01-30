import React from 'react'
import {HashLoader} from 'react-spinners'


const Jobs = ({jobs, isLoaded}) => {
    
    return (
        <div>
        <h5 className="white-text left-align" style={{background:'#000033', padding:'10px', borderRadius:'5px'}}>Available Jobs</h5>
        {isLoaded ? 
            <div className="row">
            {jobs && jobs.map((job) => {
                return (
                    <div className="col s12 m6" key={job.id}>
                        <div className="card">
                            <div className="card-content">
                                <a href='/job-connect/web-developer'><span className="card-title">{job.position}</span></a>
                                <p>{job.company}</p>
                                <p>Location: {job.location}</p>
                                <p>Type: {job.job_type}</p>
                            </div>
                            <div className="card-action">
                                <a href={`/job-connect/${job.id}/${job.position}`}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                )
            })}
              
            </div>
        :
            <div className="sweet-loading">
                <HashLoader
                sizeUnit={"px"}
                size={200}
                color={"#fff"}
                />
            </div>
        }
        
        </div>
    )
}

export default Jobs
