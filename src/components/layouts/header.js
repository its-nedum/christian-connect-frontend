import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
import logo from '../../image/logo-logo.png'

const Header = () => {
    
    return(
        <div>
            <Link to='/' className="brand-logo left logo"><img src={logo} alt="logo" className="responsive-img"/></Link>
            <ul className="right hide-on-small-only">
                <li><Link to='/signin'>SignIn</Link></li>
                <li><Link to='#'>SignUp</Link></li>
            </ul>
        </div>
    )
}


export default Header;