import React from 'react'
import Navbar from '../layouts/navbar'
import SingleSong from './singleSong'
import Comments from './comments'
import AddComments from './addComment'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'

const SingleSongWithComments = () => {
    return (
        <div >
            <Header />
            <Navbar />
            <SearchBar />
        <div className="container">
            <SingleSong />
            <AddComments />
            <Comments />
        </div>
        <Footer />
        </div>
    )
}

export default SingleSongWithComments