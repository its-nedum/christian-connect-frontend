import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import LyricsRecommended from './lyricsRecommended'

const AllLyrics = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <LyricsRecommended />
            <Footer />
        </div>
    )
}

export default AllLyrics
