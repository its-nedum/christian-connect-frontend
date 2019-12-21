import React from 'react'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SingleNews from './singleNews'
import AddNewsComment from './addNewsComment'
import NewsComment from './newsComment'
import Header from '../layouts/header'
import Searchbar from '../search/searchBar'

const SingleNewsWithComments = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Searchbar />
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
