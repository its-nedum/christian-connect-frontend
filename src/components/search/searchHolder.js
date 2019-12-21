import React from 'react'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SearchResult from './searchResult'
import SearchBar from './searchBar'

const SearchHolder = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <SearchResult />
            <Footer />
        </div>
    )
}

export default SearchHolder
