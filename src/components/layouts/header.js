import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'
import {isLoggedIn, welcomeNote} from '../../helpers/utility'

const Header = () => {
    
    return(
        <div className="navbar-fixed">
        <nav className="header-nav">
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
            {isLoggedIn() ?
                <Link to='/feed'> 
                <ul className="right hide-on-small-only">
                    <li><i className="material-icons">forum</i></li>
                    <li> {welcomeNote()}</li>
                </ul>
                </Link>
            : 
                <ul className="right hide-on-small-only">
                    <li><Link to='/signin'>Sign In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
            }
            
        </div>
        </nav>
        </div>
    ) 
} 


export default Header;