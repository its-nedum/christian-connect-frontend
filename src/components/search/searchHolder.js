import React from 'react'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Footer from '../layouts/footer'
import SearchResult from './searchResult'
import SearchBar from './searchBar'
import axios from 'axios'

class SearchHolder extends React.Component{
    state= {
        results: [],
        isLoaded: false
    }

    async componentDidMount() {
        axios({
            method: 'get',
            //url: `https://christian-connect-api.herokuapp.com/api/v1/search/${this.props.match.params.searchItems}`,
            url: `http://localhost:4242/api/v1/search/${this.props.match.params.searchItems}`,
            
        }).then( (response) => {
            console.log(response)
            let { results } = response.data.data;
            this.setState({
                results: results,
                isLoaded: true
            })
           
        }).catch( (err) => {
            console.log(err)
        })
    
    }
    render(){
        console.log(this.state)
    return (
        <div>
            <Header />
            <Navbar />
            <SearchBar />
            <SearchResult />
            <Footer />
        </div>
    )
}
}
export default SearchHolder
