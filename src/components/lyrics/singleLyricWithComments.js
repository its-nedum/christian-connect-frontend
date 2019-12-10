import React from 'react'
import Navbar from '../layouts/navbar'
import SingleLyric from './singleLyric'
import AddLyricComment from './addLyricComment'
import LyricsComment from './lyricsComment'
import Footer from '../layouts/footer'

const SingleLyricWithComments = () => {
    return (
        <div>
            <Navbar />
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
