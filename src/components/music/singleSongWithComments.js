import React from 'react'
import Navbar from '../layouts/navbar'
import SingleSong from './singleSong'
import Comments from './comments'
import AddComments from './addComment'
import Footer from '../layouts/footer'

const SingleSongWithComments = () => {
    return (
        <div >
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