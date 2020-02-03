import React, {useState, useEffect} from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import LyricsRecommended from './lyricsRecommended'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'

const AllLyrics = () => {
    
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10); 

      useEffect(( ) => {
          const fetchPosts = async () => {
              const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/category/lyric');
              setPosts(res.data.data);
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
            <LyricsRecommended 
                lyric={currentPosts} 
                isLoaded={loading} 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length}
                paginate={paginate}
                 />
            <Footer />
        </div>
    )
} 

export default AllLyrics
