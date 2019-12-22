import React from 'react'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const ComHeader = () => {
    
    return(
        <nav className="header-nav">
        <div className="nav-wrapper">
            <a href='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></a>       
        </div>
        </nav>
    )
}


export default ComHeader;