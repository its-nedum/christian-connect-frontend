import React, {useState, useEffect} from 'react'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SearchResult from './searchResult'
import SearchBar from './searchBar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

//url: `https://christian-connect-api.herokuapp.com/api/v1/search/${props.match.params.searchItems}`,
//url: `http://localhost:4242/api/v1/search/${props.match.params.searchItems}`, 

const SearchHolder = (props) => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(10); 

      useEffect(() => {
          const fetchPosts = async () => {
              const res = await axios.get(`https://christian-connect-api.herokuapp.com/api/v1/search/${props.match.params.searchItems}`);
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
            <div className="container">
            <h5 className="white-text left-align">Search Result(s)</h5>
            </div>
            {loading ?
                <SearchResult 
                result={currentPosts}
                postsPerPage={postsPerPage} 
                totalPosts={posts.length}
                paginate={paginate}
                />
                :
                <div className="sweet-loading">
                    <HashLoader
                    sizeUnit={"px"}
                    size={200}
                    color={"#fff"}
                    />
                </div>
            }
            
            <Footer />
        </div>
    )
}

export default SearchHolder
