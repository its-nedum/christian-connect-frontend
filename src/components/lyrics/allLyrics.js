import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import LyricsRecommended from './lyricsRecommended'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'

const AllLyrics = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <LyricsRecommended />
            <Footer />
        </div>
    )
} 

export default AllLyrics
