import React from 'react'
import {Link} from 'react-router-dom'


const Links = () => {
    return(
        <div className="container">
            <ul className="center hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='/videos'>Video</Link></li>
                <li><Link to='/lyrics'>Lyrics</Link></li>
                <li><Link to='/news'>News</Link></li>
            </ul>
            <ul className="sidenav" id='mobile-menu'>
                <li><Link to="#" className="sidenav-close right pink-text lighten-1">X</Link></li>
                <li><Link to='/'>Home</Link></li><div className="divider" />
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='/videos'>Video</Link></li>
                <li><Link to='/lyrics'>Lyrics</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/signin'>SignIn</Link></li><div className="divider" />
                <li><Link to='#'>SignUp</Link></li><div className="divider" />
            </ul>
        </div>
    )
}

export default Links;