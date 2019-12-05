import React from 'react'
import {Link} from 'react-router-dom'
import '../../myStyles/main.css'
// import logo from '../../image/cc-logo.jpg'

const Header = () => {
    
    return(
        <div>
            <Link to='/' className="brand-logo left logo">Christian Connect</Link>
            <ul className="right hide-on-small-only">
                <li><Link to='/'>SignIn</Link></li>
                <li><Link to='/'>SignUp</Link></li>
            </ul>
        </div>
    )
}


export default Header;