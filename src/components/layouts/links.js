import React from 'react'
import {Link} from 'react-router-dom'


const Links = () => {
    return(
        <div>
        
            <ul className="center hide-on-med-and-down">
                <li><Link className="link-font-size" to='/'>HOME</Link></li>
                <li><Link className="link-font-size" to='/music'>MUSIC</Link></li>
                <li><Link className="link-font-size" to='/videos'>VIDEO</Link></li>
                <li><Link className="link-font-size" to='/lyrics'>LYRICS</Link></li>
                <li><Link className="link-font-size" to='/news'>NEWS</Link></li>
            </ul>
        
        <ul className="sidenav" id='mobile-sidenav-menu'>
                <li><Link to="#" className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><Link to='/'>HOME</Link></li><div className="divider" />
                <li><Link to='/music'>MUSIC</Link></li>
                <li><Link to='/videos'>VIDEO</Link></li>
                <li><Link to='/lyrics'>LYRICS</Link></li>
                <li><Link to='/news'>NEWS</Link></li><div className="divider" />
                <li><Link to='/signin'>Sign In</Link></li><div className="divider" />
                <li><Link to='/signup'>Sign Up</Link></li><div className="divider" />
         </ul>
        
         </div>  
    )
}

export default Links;