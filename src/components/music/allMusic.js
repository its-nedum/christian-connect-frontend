import React from 'react'
import Footer from '../layouts/footer'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import Recommended from './recommended'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'

class AllMusic extends React.Component {
    state = {
        music: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            // url: 'https://christian-connect-api.herokuapp.com/api/v1/category/music',
            url: 'http://localhost:4242/api/v1/category/music',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                music: data,
                isLoaded: true
            })
        }).catch( (err) => {
            console.log(err)
        })
    }

    render (){
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <Banner />
            <Recommended music={this.state.music} isLoaded={this.state.isLoaded}/>
            <Footer />
        </div>
    )
}
}
export default AllMusic