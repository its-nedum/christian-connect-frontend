import React from 'react'
import {Link} from 'react-router-dom'


const Links = () => {
    return(
        <div className="container">
            <ul className="center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Music</Link></li>
                <li><Link to='/'>Video</Link></li>
                <li><Link to='/'>Lyrics</Link></li>
                <li><Link to='/'>News</Link></li>
                <li><Link to='/'>Jobs</Link></li>
            </ul>
        </div>
    )
}

export default Links;