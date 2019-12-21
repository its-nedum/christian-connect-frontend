import React, { Component } from 'react'
import Navbar from '../layouts/navbar'
import Events from './events'
import Recent from './recent'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import NewestUser from './newestUser'
import SearchBar from '../search/searchBar'


export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <SearchBar />
                <Events />
                <Recent />
                <NewestUser />
                <Footer />
            </div>
        )
    }
}

export default Home
