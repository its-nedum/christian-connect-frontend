import React from 'react'
import Footer from '../layouts/footer'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Recommended from './recommended'
import Header from '../layouts/header'
import SearchBar from '../layouts/searchBar'

const AllMusic = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <Recommended />
            <Footer />
        </div>
    )
}

export default AllMusic