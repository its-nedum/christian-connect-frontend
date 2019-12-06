import React from 'react'
import Footer from '../layouts/footer'
import Navbar from '../layouts/navbar'
import Banner from './banner'
import Recommended from './recommended'

const AllMusic = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Recommended />
            <Footer />
        </div>
    )
}

export default AllMusic