import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const Header = () => {
    
    return(
        <nav className="header-nav">
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
            <ul className="right hide-on-small-only">
                <li><Link to='/signin'>Sign In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
        </div>
        </nav>
    ) 
}


export default Header;