import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import VidRecommended from './vidRecommended'

const AllVideos = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <VidRecommended />
            <Footer />
        </div>
    )
}

export default AllVideos
