import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../image/cc-logo.jpg'

const Header = () => {
    return(
        <div className="top-header">
            <Link to='/' className="brand-logo left">Christian Connect</Link>
            <ul className="right">
                <li><Link to='/signin'>SignIn</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
            </ul>
        </div>
    )
}

export default Header;