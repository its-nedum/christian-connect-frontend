import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import LyricsRecommended from './lyricsRecommended'
import Header from '../layouts/header'

const AllLyrics = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Banner />
            <LyricsRecommended />
            <Footer />
        </div>
    )
}

export default AllLyrics
