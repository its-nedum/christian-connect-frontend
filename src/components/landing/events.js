import React from 'react'
import EventDetails from './eventDetails'
import '../../myStyles/main.css'

const Events = () => {
    return (
        <div className="container m-top">
            <h5 className="white-text center">UP COMING EVENTS</h5>
            <div className="row">
                <EventDetails />
                <EventDetails />
                <EventDetails />
                <EventDetails />
            </div>
        </div>
    )
}

export default Events