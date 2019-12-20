import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import NewsRecommeded from './newsRecommeded'
import Header from '../layouts/header'
import SearchBar from '../layouts/searchBar'

const AllNews = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <NewsRecommeded />
            <Footer />
        </div>
    )
}

export default AllNews
