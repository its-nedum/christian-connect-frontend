import React from 'react'
import Navbar from '../layouts/navbar'
import SingleVideo from './singleVideo'
import AddVidComment from './addVidComment'
import VidComments from './vidComments'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'

const SingleVideoWithComments = () => {
    return (
        
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <div className="container">
                <SingleVideo />
                <AddVidComment />
                <VidComments />
            </div>
            <Footer />
        </div>
    )
}

export default SingleVideoWithComments
