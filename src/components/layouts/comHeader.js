import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const ComHeader = () => {
    
    return(
        <div className="navbar-fixed">
        <nav className="header-nav">
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>       
        </div>
        </nav>
        </div>
    )
}


export default ComHeader;