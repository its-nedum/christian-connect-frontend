import React from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import SingleEvent from './singleEvent'
import EventPagination from './eventPagination'
import SearchBar from '../search/searchBar'

const AllEvents = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <div className="container">
            <h5 className="white-text left-align">Up Coming Events</h5>
            <SingleEvent />
            <SingleEvent />
            <SingleEvent />
            <EventPagination />
            </div>
            <Footer />
        </div>
    )
}

export default AllEvents
