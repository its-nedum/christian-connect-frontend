import React from 'react'
import Footer from '../layouts/footer'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Recommended from './recommended'
import Header from '../layouts/header'

const AllMusic = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <Recommended />
            <Footer />
        </div>
    )
}

export default AllMusic