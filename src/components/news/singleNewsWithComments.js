import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SingleNews from './singleNews'
import AddNewsComment from './addNewsComment'
import NewsComment from './newsComment'
import Header from '../layouts/header'

const SingleNewsWithComments = () => {
    return (
        <div>
            <Header />
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
