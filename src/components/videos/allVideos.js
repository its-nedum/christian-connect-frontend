import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import VidRecommended from './vidRecommended'
import Header from '../layouts/header'

const AllVideos = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <VidRecommended />
            <Footer />
        </div>
    )
}

export default AllVideos
