import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SingleNews from './singleNews'
import AddNewsComment from './addNewsComment'
import NewsComment from './newsComment'

const SingleNewsWithComments = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <SingleNews />
                <AddNewsComment />
                <NewsComment />
            </div>
            <Footer />
        </div>
    )
}

export default SingleNewsWithComments
