import React from 'react'
import moment from 'moment'

const SingleEvent = (props) => {
    let {events} = props
    
    return (
        <div>
        {events && events.map((event) => {
            return(
            <div className="card" key={event.id}>
            <div className="row">
                <div className="card-image col s12 m4">
                <img src={event.image_url} 
                     alt="pic"
                     className="materialboxed" width="650"
                     style={{borderRadius: '5px', marginTop: '15px'}} />
                <h5 className="center">{event.theme}</h5>
                </div>
                <div className="card-content col s12 m6">
                <p><b>Organizer:</b> {event.organizer}</p>
                <p><b>Ministering:</b> {event.ministering}</p>
                <p><b>Start Date:</b> {event.start_date}</p>
                <p><b>End Date:</b> {event.end_date}</p>
                <p><b>Venue:</b> {event.venue}</p>
                <p><b>Time:</b> {event.time}</p>
                <p><b>Comment:</b> {event.comment}</p>
                <p><b>Enquiry:</b> {event.enquiry}</p>
                <p><b>Added:</b> {moment(event.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
        </div>
            )
        })}
        
        </div>
    )
}

export default SingleEvent
