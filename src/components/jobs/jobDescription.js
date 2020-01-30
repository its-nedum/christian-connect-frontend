import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import ComSidebar from '../layouts/comSidebar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

class JobDescription extends React.Component {
    state = {
        job: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: `https://christian-connect-api.herokuapp.com/api/v1/category/job/${this.props.match.params.jobId}`,
            //url: `http://localhost:4242/api/v1/category/job/${this.props.match.params.jobId}`,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let {data} = response.data;
            this.setState({
                job: data,
                isLoaded: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
         let { job } = this.state
        
    return (
        <div>
        <ComHeader />
            <br/>
            <ComSidenav />
            <div className="">
                <div className="row">
                    <div className="col m2 hide-on-small-only">
                    <ComSidebar />
                    </div>
                    <div className="col s12 m9">
                      <div className="card">
                          {this.state.isLoaded ? 
                            <div className="card-content">
                              <span className="card-title ">{job.position}</span>
                            <p>{job.company}</p>
                            <p>Location: {job.location}</p>
                            <p>Type: {job.job_type}</p>
                            <p>Salary: {job.salary}</p>
                            <div className="divider" />
                            <h6>Job Summary</h6>
                            <p>{job.summary}</p>
                            <div className="divider" />
                            <h6>Job Description</h6>
                            <p>{job.description}</p>                          
                            <div className="divider" />
                            <h6>Requirements</h6>
                            <p>{job.requirement}</p>
                            <div className="divider" />
                            <h6>How To Apply</h6>
                            <p>{job.apply}</p>
                            <div className="divider" />
                            <h6>Application Deadline</h6>
                            <p>{job.deadline}</p>
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
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
}

export default JobDescription
