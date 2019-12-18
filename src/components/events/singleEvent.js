import React from 'react'

const SingleEvent = () => {
    return (
        <div className="card">
            <div className="row">
                <div className="card-image col s12 m4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLYJvzD8q-GcIWJ7tglVSIPnGQs5P0cESS9d5SnkuDEcNwZKqo" 
                     alt="pic" className="responsive-img"
                     className="materialboxed" width="650"
                     style={{borderRadius: '5px', marginTop: '15px'}} />
                <h5 className="center">The Great Turn Around</h5>
                </div>
                <div className="card-content col s12 m6">
                <p><b>Organizer:</b> The Redeemed Christian Church of God</p>
                <p><b>Ministering:</b> Pst. E.A Adeboye</p>
                <p><b>Start Date:</b> 12 January, 2020</p>
                <p><b>End Date:</b> 17 January, 2020</p>
                <p><b>Venue:</b> Bread of Life Parish Region 28 Hqtrs Mararaba</p>
                <p><b>Time:</b> 5pm</p>
                <p><b>Outro:</b> Come and be blessed</p>
                <p><b>Enquiries:</b> 07082632448</p>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent
