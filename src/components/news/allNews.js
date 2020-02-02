import React from 'react'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Footer from '../layouts/footer'
import NewsRecommeded from './newsRecommeded'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'

class AllNews extends React.Component {
    state = {
        news: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            url: `https://newsapi.org/v2/top-headlines?country=ng&apiKey=ae9dfb783fa9425996a8900b6d676428`,
        }).then( (response) => {
            let {articles} = response.data
            this.setState({
                news: articles,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }

    render(){
        //console.log(this.state.news)
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <NewsRecommeded news={this.state.news} isLoaded={this.state.isLoaded}/>
            <Footer />
        </div>
    )
}
}
export default AllNews
