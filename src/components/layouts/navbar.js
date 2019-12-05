import React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Links from './links'
//import SearchBar from './searchBar'
const Navbar = () => {
    return (
        <nav className="transparent">
            <div className="nav-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <Header />
                        </div>
                        <Link to="#" className="sidenav-trigger" data-target="mobile-menu">
                        <i className="material-icons">menu</i>
                        </Link>
                        <div className="col s12">
                            <Links />
                        </div>
                        {/* <div className="col s12">
                            <SearchBar />
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar