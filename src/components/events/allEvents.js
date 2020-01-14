import React from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import Banner from '../adverts/banner'
import SingleEvent from './singleEvent'
import EventPagination from './eventPagination'
import SearchBar from '../search/searchBar'
import axios from 'axios'
import {HashLoader} from 'react-spinners'

class AllEvents extends React.Component {
    state = {
        event: [],
        isLoaded: false
    }

    async componentDidMount(){
        await axios({
            method: 'get',
            // url: 'https://christian-connect-api.herokuapp.com/api/v1/category/event',
            url: 'http://localhost:4242/api/v1/category/event',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( (response) => {
            let {data} = response.data
            this.setState({
                event: data,
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
            <div className="container">
            <h5 className="white-text left-align">Up Coming / On Going Events</h5>
            {this.state.isLoaded ? 
            <div>
            <SingleEvent events={this.state.event}/>
            <EventPagination />
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
}
export default AllEvents
