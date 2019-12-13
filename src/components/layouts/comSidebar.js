import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'

const ComSidebar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
            <ul>
                <li className="com-sidebar-nav"><Link to="#" >HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
                <li><Link to="#">HOME</Link></li>
            </ul>
        </div>
        </nav>
    )
}

export default ComSidebar
