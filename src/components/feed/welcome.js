import React, {useState, useEffect} from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Dashboard from './dashboard'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import {isLoggedIn, setAuthToken} from '../../helpers/utility'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const Welcome = () => {
    const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(5); 

      useEffect(( ) => {
          const fetchPosts = async () => {
            const res = await axios.get('https://christian-connect-api.herokuapp.com/api/v1/feed', { headers:{ 'Authorization': setAuthToken()} });
            //const res = await axios.get('http://localhost:4242/api/v1/feed', { headers:{ 'Authorization': setAuthToken()} });
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

      //Like a post
      const likeThisPost = (postId) => {
          console.log(postId)
          axios({
              method: 'post',
              url: `http://localhost:4242/api/v1/like/${postId}`,
              headers: {
                'Authorization': setAuthToken()
            }
          }).then((response) => {
            window.location.reload()
          }).catch((error) => {
              console.log(error)
          })
      }

    if(!isLoggedIn()) return <Redirect to='/signin' />
    return (
        <div>
            <ComHeader />
            <br/>
            <ComSidenav />
            <div className="">
                <div className="row">
                    <div className="col m2 hide-on-small-only">
                    <ComSidebar />
                    </div>
                    <div className="col s12 m7">
                        <Dashboard posts={currentPosts}  postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} likeThisPost={likeThisPost} loading={loading}/>
                    </div>
                    <div className="col s3 hide-on-small-only">
                        <Banner2 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Welcome
