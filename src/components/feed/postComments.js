import React from 'react'
import ComHeader from '../layouts/comHeader'
import Footer from '../layouts/footer'
import ComSidenav from '../layouts/comSidenav'
import Banner2 from '../adverts/banner2'
import ComSidebar from '../layouts/comSidebar'
import PostAndComments from './postAndComments'
import {Redirect} from 'react-router-dom'
import {isLoggedIn, setAuthToken} from '../../helpers/utility'
import axios from 'axios'
import {history} from '../../App'

class PostComments extends React.Component {
    state = {
        post: [],
        isLoaded: false,
        notFound: null
    }
   
    async componentDidMount(){
        await axios({
            method: 'get',
            url: `https://christian-connect-api.herokuapp.com/api/v1/viewsinglepost/${this.props.match.params.postId}`,
            //url: `http://localhost:4242/api/v1/viewsinglepost/${this.props.match.params.postId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            let {data} = response.data;
            this.setState({
                post: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
            this.setState({
                notFound: 'The link you followed may be broken, or the page may have been removed.'
            })
        })
    }

    //Like a post
    likeThisPost = (postId) => {   
        axios({
            method: 'post',
            url: `https://christian-connect-api.herokuapp.com/api/v1/like/${postId}`,
          //   url: `http://localhost:4242/api/v1/like/${postId}`,
            headers: {
              'Authorization': setAuthToken()
          }
        }).then((response) => {
          window.location.reload()
        }).catch((error) => {
            alert('Network error, try again shortly..')
            console.log(error)
        })
    }

    //Delete a post
    deleteThisPost = (postId) => {
        console.log(postId)
        axios({
            method: 'delete',
            url: `https://christian-connect-api.herokuapp.com/api/v1/deletepost/${postId}`,
            //url: `http://localhost:4242/api/v1/deletepost/${postId}`,
            headers: {
              'Authorization': setAuthToken()
          }
        }).then((response) => {
        let {message} = response.data
        if(message === 'Post deleted successfully'){
                history.push('/feed')
                window.location.reload()
            }
        }).catch((error) => {
            alert('Network error, try again shortly..')
            console.log(error)
        })
    }

    render(){
        
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
                        <PostAndComments post={this.state.post} isLoaded={this.state.isLoaded} 
                                        notFound={this.state.notFound} likeThisPost={this.likeThisPost}
                                        />
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
}

export default PostComments
