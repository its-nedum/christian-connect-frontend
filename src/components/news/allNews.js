import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import NewsRecommeded from './newsRecommeded'
import Header from '../layouts/header'

const AllNews = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <NewsRecommeded />
            <Footer />
        </div>
    )
}

export default AllNews
