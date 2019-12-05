import React from 'react'
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