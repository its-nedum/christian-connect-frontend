import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'

const ComSidebar = () => {
    return (
        <div className="card">
            <ul className="sidebar-ul">
                <li><i className="material-icons">dashboard</i><a href="/feed" > Dashboard</a></li>
                <li><i className="material-icons">supervisor_account</i><a href="/users" > Connect</a></li>
                <li><i className="material-icons">chat</i><a href="/chat-room"> Chat Rooms</a></li>
                <li><i className="material-icons">work</i><a href="/job-connect"> Job Alert</a></li>
                <li><i className="material-icons">event_note</i><a href="/events"> Events</a></li>
                <li><i className="material-icons">settings</i><a href="/profile"> Profile</a></li>
                <li><i className="material-icons">exit_to_app</i><a href="/signin"> Log Out</a></li>
            </ul>
            
        </div> 
    )
}

export default ComSidebar
