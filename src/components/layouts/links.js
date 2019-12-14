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
        
        <ul id='mobile-sidenav-menu' className="sidenav">
                <li><Link to="#" className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><a href='/' className="sidenav-close">HOME</a></li><div className="divider" />
                <li><a href='/music' className="sidenav-close">MUSIC</a></li>
                <li><a href='/videos' className="sidenav-close">VIDEO</a></li>
                <li><a href='/lyrics' className="sidenav-close">LYRICS</a></li>
                <li><a href='/news' className="sidenav-close">NEWS</a></li><div className="divider" />
                <li><a href='/signin' className="sidenav-close">Sign In</a></li><div className="divider" />
                <li><a href='/signup' className="sidenav-close">Sign Up</a></li><div className="divider" />
         </ul>
        
         </div>  
    )
}

export default Links;