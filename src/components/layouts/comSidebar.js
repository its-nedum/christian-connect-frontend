import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'

const ComSidebar = () => {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
                <li><Link to="#" >HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
            </ul>
            <Link to='#' data-target="slide-out" className="sidenav-trigger show-on-large">
                <i className="material-icons white">menu</i>
            </Link>
        </div> 
    )
}

export default ComSidebar
