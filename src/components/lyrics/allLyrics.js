import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import LyricsRecommended from './lyricsRecommended'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'

class AllLyrics extends React.Component {
    state = {
        lyric: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: 'https://christian-connect-api.herokuapp.com/api/v1/category/lyric',
            //url: 'http://localhost:4242/api/v1/category/lyric',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                lyric: data,
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
            <LyricsRecommended lyric={this.state.lyric} isLoaded={this.state.isLoaded} />
            <Footer />
        </div>
    )
} 
}
export default AllLyrics
