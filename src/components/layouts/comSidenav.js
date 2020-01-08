import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import {logout} from '../../helpers/utility'

const ComSidenav = () => {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
            <li><Link to="#" className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><a href="/feed" className="sidenav-close">Dashboard</a></li>
                <li><a href="/users" className="sidenav-close">Connect</a></li>
                <li><a href="/chat-room" className="sidenav-close">Chat Rooms</a></li>
                <li><a href="/job-connect" className="sidenav-close">Job Alert</a></li>
                <li><a href="/profile" className="sidenav-close">Profile</a></li>
                <li><Link to="#" onClick={() => logout()} className="sidenav-close">Log Out</Link></li>
            </ul>
            <Link to='#' data-target="slide-out" className="sidenav-trigger show-on-large">
                <i className="material-icons white">menu</i>
            </Link>
        </div> 
    )
}

export default ComSidenav
