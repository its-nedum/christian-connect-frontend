import React from 'react'

const EventDetails = (props) => {
    let {events} = props
    
    return (
        <div>
        {events && events.map((event) => {
            return(
                <div className="col s12 m6 l3" key={event.id}>
                    <div className="card z-depth-0">
                        <div className="card-image">
                            <img src={event.image_url} alt="event" className="responsive-img" />
                        </div>
                        <div className="card-content">
                            {event.theme}
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default EventDetails