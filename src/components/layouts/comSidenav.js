import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'

const ComSidenav = () => {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
            <li><Link to="#" className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><a href="/feed" className="sidenav-close">Dashboard</a></li>
                <li><a href="#" className="sidenav-close">Connect</a></li>
                <li><a href="#" className="sidenav-close">Job Alert</a></li>
                <li><a href="#" className="sidenav-close">Chat Room</a></li>
                <li><a href="#" className="sidenav-close">Events</a></li>
                <li><a href="/signin" className="sidenav-close">Log Out</a></li>
            </ul>
            <Link to='#' data-target="slide-out" className="sidenav-trigger show-on-large">
                <i className="material-icons white">menu</i>
            </Link>
        </div> 
    )
}

export default ComSidenav
