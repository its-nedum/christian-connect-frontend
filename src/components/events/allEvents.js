import React, {useState, useEffect} from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import SingleEvent from './singleEvent'
import EventPagination from './eventPagination'
import SearchBar from '../search/searchBar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

const AllEvents = () => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(6); 

      useEffect(( ) => {
          const fetchPosts = async () => {
              const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/category/event');
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
            <div className="container">
            <h5 className="white-text left-align">Up Coming / On Going Events</h5>
            {loading ? 
            <div>
            <SingleEvent 
                events={currentPosts} 
                />
            <EventPagination 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length}
                paginate={paginate}
                />
            </div>
            :
            <div className="sweet-loading">
                <HashLoader
                sizeUnit={"px"}
                size={200}
                color={"#fff"}
                />
            </div>
            }
            </div>
            <Footer />
        </div>
    )
}

export default AllEvents
