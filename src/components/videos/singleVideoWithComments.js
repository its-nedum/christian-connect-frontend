import React from 'react'
import Navbar from '../layouts/navbar'
import SingleVideo from './singleVideo'
import AddVidComment from './addVidComment'
import VidComments from './vidComments'
import Footer from '../layouts/footer'

const SingleVideoWithComments = () => {
    return (
        <div>
            <Navbar />
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
