import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import VidRecommended from './vidRecommended'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'

class AllVideos extends React.Component {
    state = {
        video: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/category/video',
            //url: 'http://localhost:4242/api/v1/category/video',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                video: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }
    render(){
        
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <VidRecommended video={this.state.video} isLoaded={this.state.isLoaded}/>
            <Footer />
        </div>
    )
}
}
export default AllVideos
