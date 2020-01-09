import React from 'react'
import Navbar from '../layouts/navbar'
import SingleSong from './singleSong'
import Comments from './comments'
import AddComments from './addComment'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import SearchBar from '../search/searchBar'
import axios from 'axios'
class SingleSongWithComments extends React.Component {
    state = {
        music: [],
        isLoaded: false
    }
 
    async componentDidMount() {
        await axios({
            method: 'get',
            url: `http://localhost:4242/api/v1/category/music/${this.props.match.params.songId}`,
            headers: {
                'Content-Type': 'application/json'
            }
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
    render() {
        
    return (
        <div >
            <Header />
            <Navbar />
            <SearchBar />
        <div className="container">
            <SingleSong music={this.state.music}/>
            <AddComments />
            <Comments />
        </div>
        <Footer />
        </div>
    )
}
}
export default SingleSongWithComments