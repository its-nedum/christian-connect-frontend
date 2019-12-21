import React from 'react'
import Navbar from '../layouts/navbar'
import SingleLyric from './singleLyric'
import AddLyricComment from './addLyricComment'
import LyricsComment from './lyricsComment'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'

const SingleLyricWithComments = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <div className="container">
                <SingleLyric />
                <AddLyricComment />
                <LyricsComment />
            </div>
            <Footer />
        </div>
    )
}

export default SingleLyricWithComments
