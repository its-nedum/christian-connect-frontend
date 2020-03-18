import React from 'react'
import '../../myStyles/main.css'
import {Link} from 'react-router-dom'
import {logout} from '../../helpers/utility'

const ComSidebar = () => {
    return (
        <div className="card">
            <ul className="sidebar-ul">
                <li><i className="material-icons">dashboard</i><Link to="/feed" > Dashboard</Link></li>
                <li><i className="material-icons">supervisor_account</i><Link to="/users" > Connect</Link></li>
                <li><i className="material-icons">supervisor_account</i><Link to="/connect-request" > Connect Request</Link></li>
                <li><i className="material-icons">chat</i><Link to="/chat-room"> Chat Rooms</Link></li>
                <li><i className="material-icons">work</i><Link to="/job-connect"> Job Alert</Link></li>
                <li><i className="material-icons">settings</i><Link to="/profile"> Profile</Link></li>
                <li><i className="material-icons">exit_to_app</i><Link to="#" onClick={() => logout()}> Log Out</Link></li>
            </ul>
            
        </div> 
    )
}

export default ComSidebar
