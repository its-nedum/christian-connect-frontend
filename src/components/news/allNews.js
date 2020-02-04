import React, {useState, useEffect} from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import NewsRecommeded from './newsRecommeded'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'
import {newsKey} from '../../helpers/utility'

const AllNews = () => {

      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(5); 

      useEffect(( ) => {
          const fetchPosts = async () => {
              const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${newsKey()}`);
              setPosts(res.data.articles);
              setLoading(true)
          }

          fetchPosts();
      }, []);
      
      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      //Change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <NewsRecommeded 
                news={currentPosts} 
                isLoaded={loading} 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length}
                paginate={paginate}/>
            <Footer />
        </div>
    )
}

export default AllNews
