import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import {logout} from '../../helpers/utility'

class ComSidenav extends React.Component {

    loadSlider = () => {
        let slide = document.querySelector("#slide-out");
        slide.setAttribute("style","transform: translateX(-0%)");
        let overlay = document.querySelector(".overlay-content");
        overlay.style.display="block";
    }
 
    closeMe = () => {
     let slide = document.querySelector("#slide-out");
     slide.setAttribute("style","transform: translateX(-105%)");
     let overlay = document.querySelector(".overlay-content");
     overlay.style.display="none";
    }
    render(){
    return (
        <div>

            <div className="overlay-content" onClick={this.closeMe}></div>
            <nav className="link-nav z-depth-0">
                
                    <Link to='#' onClick={this.loadSlider} className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                
            </nav>

            <ul id="slide-out" className="sidenav">
            <li><Link to="#" onClick={this.closeMe} className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><Link to="/feed" className="sidenav-close">Dashboard</Link></li>
                <li><Link to="/users" className="sidenav-close">Connect</Link></li>
                <li><Link to="/connect-request" className="sidenav-close">Connect Request</Link></li>
                <li><Link to="#" className="sidenav-close">Chat Rooms</Link></li>
                <li><Link to="/job-connect" className="sidenav-close">Job Alert</Link></li>
                <li><Link to="/profile" className="sidenav-close">Profile</Link></li>
                <li><Link to="#" onClick={() => logout()} className="sidenav-close">Log Out</Link></li>
            </ul>
            
        </div> 
    )
}
}
export default ComSidenav
