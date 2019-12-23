import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import ComSidebar from '../layouts/comSidebar'


const JobDescription = () => {
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
                          <div className="card-content">
                              <span className="card-title">Mathematics Teacher</span>
                            <p>Smart Kids Academy Ajao</p>
                            <p>Location: Abuja</p>
                            <p>Type: Full Time</p>
                            <p>Salary: Very attractive</p>
                            <div className="divider" />
                            <h6>Job Summary</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad laboriosam optio fugiat laudantium repudiandae nobis nesciunt nemo, consequuntur, dicta, aperiam ducimus eum atque odio tempore voluptas consectetur quaerat enim!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, nulla autem velit iste non reprehenderit saepe possimus quae quisquam accusamus assumenda doloribus tempore ipsa dolorum? Aliquid sit totam eius nemo?</p>
                            <div className="divider" />
                            <h6>Job Description</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil provident quod commodi distinctio, praesentium libero exercitationem et perspiciatis natus ex totam nesciunt quibusdam sit deserunt, consectetur laudantium tempore. Quaerat?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil provident quod commodi distinctio, praesentium libero exercitationem et perspiciatis natus ex totam nesciunt quibusdam sit deserunt, consectetur laudantium tempore. Quaerat?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nihil provident quod commodi distinctio, praesentium libero exercitationem et perspiciatis natus ex totam nesciunt quibusdam sit deserunt, consectetur laudantium tempore. Quaerat?</p>                          
                            <div className="divider" />
                            <h6>Requirements</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad laboriosam optio fugiat laudantium repudiandae nobis nesciunt nemo, consequuntur, dicta, aperiam ducimus eum atque odio tempore voluptas consectetur quaerat enim!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, nulla autem velit iste non reprehenderit saepe possimus quae quisquam accusamus assumenda doloribus tempore ipsa dolorum? Aliquid sit totam eius nemo?</p>
                            <div className="divider" />
                            <h6>How To Apply</h6>
                            <p>Interested and qualify candidate should forward their CV to smartkidsacademy@gmail.com</p>
                            <div className="divider" />
                            <h6>Application Deadline</h6>
                            <p>December 20, 2020</p>
                          </div>
                        </div> 
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobDescription
