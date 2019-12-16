import React from 'react'
import Navbar from '../layouts/navbar'
import SingleSong from './singleSong'
import Comments from './comments'
import AddComments from './addComment'
import Footer from '../layouts/footer'
import Header from '../layouts/header'

const SingleSongWithComments = () => {
    return (
        <div >
            <Header />
            <Navbar />
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