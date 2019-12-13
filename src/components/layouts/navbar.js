import React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Links from './links'
import '../../myStyles/main.css'


const Navbar = () => {
    return (
        <nav className="link-nav">
            <div className="nav-wrapper">
                <div className="container">
                    <div className="row">
                        <Link to="#" className="sidenav-trigger" data-target="mobile-sidenav-menu" >
                            <i className="material-icons">menu</i>
                        </Link>
                        <div className="col s12">
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar